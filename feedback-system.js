// 🚀 テンプレート自動改善フィードバックシステム v1.0
// 段階的に実装可能な設計

class TemplateFeedbackSystem {
    constructor(config = {}) {
        this.version = config.version || 'v0.1';
        this.sessionId = this.generateSessionId();
        this.startTime = Date.now();
        this.firebaseRef = config.firebaseRef || 'template_feedback';
        
        // Phase 1: 基本機能（今すぐ実装）
        this.initCoreTracking();
        
        // Phase 2: 詳細追跡（必要に応じて追加）
        if (config.enableAdvanced) {
            this.initAdvancedTracking();
        }
    }
    
    // ========== Phase 1: コア機能（必須） ==========
    
    initCoreTracking() {
        // 1. エラー追跡（周辺コード付き）
        window.addEventListener('error', (event) => {
            this.trackError({
                message: event.message,
                line: event.lineno,
                file: event.filename,
                context: this.getCodeContext(event.lineno), // 3行分のコンテキスト
                timestamp: Date.now()
            });
        });
        
        // 2. 主要な変更パターンの記録
        this.trackMainModifications();
        
        // 3. ページ離脱時の確実な送信
        window.addEventListener('beforeunload', () => {
            this.sendBeaconData();
        });
    }
    
    // エラー周辺のコード取得（デバッグに重要）
    getCodeContext(lineNumber) {
        try {
            const scripts = document.querySelectorAll('script');
            for (let script of scripts) {
                if (script.innerHTML.includes('// Line marker')) {
                    const lines = script.innerHTML.split('\n');
                    return {
                        before: lines[lineNumber - 2] || '',
                        error: lines[lineNumber - 1] || '',
                        after: lines[lineNumber] || ''
                    };
                }
            }
        } catch (e) {
            return null;
        }
    }
    
    // 主要な変更を追跡
    trackMainModifications() {
        // タイトル変更の検出
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const originalTitle = titleElement.textContent;
            const observer = new MutationObserver(() => {
                if (titleElement.textContent !== originalTitle) {
                    this.logModification('title_change', {
                        from: originalTitle,
                        to: titleElement.textContent
                    });
                }
            });
            observer.observe(titleElement, { childList: true });
        }
    }
    
    // ========== Phase 2: 高度な追跡（オプション） ==========
    
    initAdvancedTracking() {
        // パフォーマンス測定
        this.trackPerformance();
        
        // ユーザーの詰まりポイント検出
        this.trackStuckPoints();
        
        // DOM変更の詳細追跡
        this.trackDOMChanges();
    }
    
    // パフォーマンス追跡
    trackPerformance() {
        setInterval(() => {
            if (performance.memory) {
                this.logPerformance({
                    memory: Math.round(performance.memory.usedJSHeapSize / 1048576),
                    fps: this.calculateFPS()
                });
            }
        }, 5000);
    }
    
    // FPS計算
    calculateFPS() {
        let fps = 0;
        let lastTime = performance.now();
        
        function frame() {
            const currentTime = performance.now();
            fps = Math.round(1000 / (currentTime - lastTime));
            lastTime = currentTime;
        }
        
        requestAnimationFrame(frame);
        return fps;
    }
    
    // 詰まりポイント検出（5秒以上同じ要素にフォーカス）
    trackStuckPoints() {
        let focusStartTime = null;
        let focusElement = null;
        
        document.addEventListener('focusin', (e) => {
            focusElement = e.target;
            focusStartTime = Date.now();
        });
        
        document.addEventListener('focusout', (e) => {
            if (focusStartTime && (Date.now() - focusStartTime > 5000)) {
                this.logStuckPoint({
                    element: this.getElementSelector(focusElement),
                    duration: Date.now() - focusStartTime
                });
            }
        });
    }
    
    // ========== データ送信 ==========
    
    // Firebaseへの送信
    async sendToFirebase(category, data) {
        try {
            const ref = firebase.database()
                .ref(`${this.firebaseRef}/${this.version}/${category}`)
                .push();
            
            await ref.set({
                ...data,
                sessionId: this.sessionId,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
        } catch (error) {
            console.error('Firebase送信エラー:', error);
            // フォールバック: LocalStorageに保存
            this.saveToLocalStorage(category, data);
        }
    }
    
    // ページ離脱時の確実な送信
    sendBeaconData() {
        const summary = {
            sessionId: this.sessionId,
            duration: Date.now() - this.startTime,
            completionRate: this.calculateCompletionRate(),
            errors: this.errorCount || 0
        };
        
        // sendBeaconで確実に送信
        const blob = new Blob([JSON.stringify(summary)], { type: 'application/json' });
        navigator.sendBeacon('/api/feedback', blob);
    }
    
    // ========== ユーティリティ ==========
    
    generateSessionId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    
    getElementSelector(element) {
        if (!element) return null;
        
        if (element.id) return `#${element.id}`;
        if (element.className) return `.${element.className.split(' ')[0]}`;
        return element.tagName.toLowerCase();
    }
    
    calculateCompletionRate() {
        // 実装タスクの完了率を計算
        const tasks = ['login', 'modify_title', 'add_function', 'test'];
        const completed = tasks.filter(task => 
            localStorage.getItem(`task_${task}_completed`)
        ).length;
        return (completed / tasks.length) * 100;
    }
    
    // ========== 公開API ==========
    
    // エラー記録
    trackError(errorData) {
        this.errorCount = (this.errorCount || 0) + 1;
        this.sendToFirebase('errors', errorData);
    }
    
    // 変更記録
    logModification(type, data) {
        this.sendToFirebase('modifications', {
            type,
            ...data,
            timeFromStart: Date.now() - this.startTime
        });
    }
    
    // パフォーマンス記録
    logPerformance(data) {
        this.sendToFirebase('performance', data);
    }
    
    // 詰まりポイント記録
    logStuckPoint(data) {
        this.sendToFirebase('stuck_points', data);
    }
    
    // LocalStorageフォールバック
    saveToLocalStorage(category, data) {
        const key = `feedback_${category}_${Date.now()}`;
        localStorage.setItem(key, JSON.stringify(data));
    }
}

// ========== 自動初期化 ==========
// テンプレートに組み込むだけで動作開始
if (typeof firebase !== 'undefined') {
    window.feedbackSystem = new TemplateFeedbackSystem({
        version: 'v0.2',
        enableAdvanced: false  // まずは基本機能のみ
    });
    
    console.log('📊 フィードバックシステム起動');
}

// ========== AI分析用のデータ構造 ==========
/*
Firebase構造:
{
  "template_feedback": {
    "v0.2": {
      "errors": {
        "-NxXxXxX": {
          "message": "Unexpected token",
          "line": 511,
          "context": {
            "before": "const data = {",
            "error": "timing: selectedTimingValue || '','",
            "after": "memo: memo || ''"
          },
          "sessionId": "xxx",
          "timestamp": 1234567890
        }
      },
      "modifications": {
        "-NyYyYyY": {
          "type": "title_change",
          "from": "体重管理",
          "to": "ストレッチ管理",
          "timeFromStart": 180000,
          "sessionId": "xxx"
        }
      },
      "stuck_points": {
        "-NzZzZzZ": {
          "element": "#loginButton",
          "duration": 8500,
          "sessionId": "xxx"
        }
      }
    }
  }
}
*/