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
**index.htmlのUI改善**:
- ページタイトルを変更
- CSS スタイルを追加/変更  
- ボタンデザインを改善
- レイアウトを調整

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