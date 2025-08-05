# 🅱️ デバイスB作業指示書

## あなたの役割: 機能追加担当

**リポジトリ**: https://github.com/muumuu8181/2025-08-05-git-merge-test-template

## 📋 やること（15分程度）

### 1. 準備
```bash
git clone https://github.com/muumuu8181/2025-08-05-git-merge-test-template.git
cd 2025-08-05-git-merge-test-template
git checkout -b feature/pc-b-new-features
```

### 2. 作業内容

#### A. 独自ファイル作成（自動マージ成功テスト）
```bash
# 新規JavaScriptユーティリティ作成
cat > src/device-b-utils.js << 'EOF'
// Device B専用ユーティリティ関数
class DeviceBUtils {
    static formatDate(date) {
        return new Intl.DateTimeFormat('ja-JP', {
            year: 'numeric',
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }

    static generateId() {
        return 'device-b-' + Math.random().toString(36).substr(2, 9);
    }

    static validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

export default DeviceBUtils;
EOF

# サンプルファイル作成
cat > examples/device-b-demo.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Device B Demo</title>
</head>
<body>
    <h1>Device B機能デモ</h1>
    <p>日時フォーマット、ID生成、バリデーション機能</p>
</body>
</html>
EOF
```

#### B. 共通ファイル編集（コンフリクトテスト）
**元の## 概要セクション**を以下に置き換え:
```markdown
## 概要
- **作成日**: 2025-08-05
- **目的**: Device-B Feature Enhancement - 高機能ユーティリティシステム
- **使用技術**: JavaScript ES6+, Node.js, Lodash
- **Device-B改善**: 日付処理、ID生成、バリデーション機能
```

```bash
# package.jsonに以下を追加
npm install lodash moment --save
```

### 3. コミット・プッシュ
```bash
git add .
git commit -m "New features: Added utility functions and sample files"
git push origin feature/pc-b-new-features
```

### 4. プルリクエスト作成
```bash
gh pr create --base main --head feature/pc-b-new-features --title "Device-B: New Features" --body "新機能追加: ユーティリティ関数とサンプルファイル"
```

## ✅ 完了報告
作業完了したら「デバイスB完了」と報告してください。

## 🚨 注意
- `universal-system/core/` は触らない
- `firebase-config.js`, `copy-system.js` は触らない