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

#### A. 独自ファイル作成（自動マージ成功テスト）
```bash
# 設定ガイド作成
cat > DEVICE_C_SETUP_GUIDE.md << 'EOF'
# Device C設定ガイド

## ドキュメント管理システム

### 📋 概要
このガイドでは、プロジェクトのドキュメント管理について説明します。

### 🚀 使用方法
1. READMEの更新
2. コメントの追加
3. 設定ファイルの管理

### 📝 ベストプラクティス
- 明確で簡潔な説明
- 具体例の提供
- 定期的な更新
EOF

# API仕様書作成
cat > docs/device-c-api.md << 'EOF'
# Device C API仕様書

## エンドポイント一覧

### GET /api/documents
ドキュメント一覧を取得

### POST /api/documents
新しいドキュメントを作成

### PUT /api/documents/:id  
既存ドキュメントを更新
EOF

# docsディレクトリ作成
mkdir -p docs
```

#### B. 共通ファイル編集（コンフリクトテスト）
**元の## 概要セクション**を以下に置き換え:
```markdown
## 概要
- **作成日**: 2025-08-05
- **目的**: Device-C Documentation Enhancement - 包括的ドキュメント管理システム
- **使用技術**: Markdown, JSDoc, GitBook
- **Device-C改善**: API仕様書、設定ガイド、ベストプラクティス
```

```bash
# package.jsonに以下を追加
npm install jsdoc markdown-it --save-dev
```

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