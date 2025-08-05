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
**新機能追加**:
- `src/` フォルダに新しいJavaScriptファイル追加
- ユーティリティ関数を作成
- package.json に新しい依存関係追加
- examples/ に新しいサンプルファイル追加

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