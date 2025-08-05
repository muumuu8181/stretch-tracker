# 🅰️ デバイスA作業指示書

## あなたの役割: UI改善担当

**リポジトリ**: https://github.com/muumuu8181/2025-08-05-git-merge-test-template

## 📋 やること（15分程度）

### 1. 準備
```bash
git clone https://github.com/muumuu8181/2025-08-05-git-merge-test-template.git
cd 2025-08-05-git-merge-test-template
git checkout -b feature/pc-a-ui-improvements
```

### 2. 作業内容

#### A. 独自ファイル作成（自動マージ成功テスト）
```bash
# 新規CSSファイル作成
cat > device-a-styles.css << 'EOF'
/* Device A専用スタイル */
.device-a-button {
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
}

.device-a-header {
    background: #3742fa;
    color: white;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
}
EOF
```

#### B. 共通ファイル編集（コンフリクトテスト）
```bash
# README.mdの## 概要セクションを以下に変更
```
**元の## 概要セクション**を以下に置き換え:
```markdown
## 概要
- **作成日**: 2025-08-05
- **目的**: Device-A UI Enhancement - 美しいユーザーインターフェース構築
- **使用技術**: HTML, CSS3, Bootstrap, Animation
- **Device-A改善**: モダンなボタンデザインとヘッダーレイアウト
```

```bash
# package.jsonに以下を追加
npm install animate.css --save
```

### 3. コミット・プッシュ
```bash
git add .
git commit -m "UI improvements: Enhanced layout and button styles"
git push origin feature/pc-a-ui-improvements
```

### 4. プルリクエスト作成
```bash
gh pr create --base main --head feature/pc-a-ui-improvements --title "Device-A: UI Improvements" --body "UI改善: レイアウト調整とボタンスタイル向上"
```

## ✅ 完了報告
作業完了したら「デバイスA完了」と報告してください。

## 🚨 注意
- `universal-system/core/` は触らない
- `firebase-config.js`, `copy-system.js` は触らない