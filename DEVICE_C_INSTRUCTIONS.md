# 🅲 デバイスC作業指示書

## あなたの役割: ドキュメント更新担当

**リポジトリ**: https://github.com/muumuu8181/2025-08-05-git-merge-test-template

## 📋 やること（15分程度）

### 1. 準備
```bash
git clone https://github.com/muumuu8181/2025-08-05-git-merge-test-template.git
cd 2025-08-05-git-merge-test-template
git checkout -b feature/pc-c-docs-update
```

### 2. 作業内容
**ドキュメント更新**:
- README.md を更新（使用方法、新機能説明など）
- コードにコメント追加
- 新しい設定ガイドファイル作成
- LICENSE や package.json の説明更新

### 3. コミット・プッシュ
```bash
git add .
git commit -m "Documentation update: Enhanced README and added comments"
git push origin feature/pc-c-docs-update
```

### 4. プルリクエスト作成
```bash
gh pr create --base main --head feature/pc-c-docs-update --title "Device-C: Documentation Update" --body "ドキュメント更新: README改善とコメント追加"
```

## ✅ 完了報告
作業完了したら「デバイスC完了」と報告してください。

## 🚨 注意
- `universal-system/core/` は触らない
- `firebase-config.js`, `copy-system.js` は触らない