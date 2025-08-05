# 複数PC間Gitマージテスト実行ガイド

## 🎯 テスト目的
複数PC（A,B,C）で同一テンプレートを並行アップグレードし、GitHubでの自動マージ機能を検証する。

---

## 📋 Phase 1: 初期セットアップ

### 👤 ユーザー作業 (必須)
1. **GitHubリポジトリ作成**
   ```bash
   cd /mnt/c/Users/user/Desktop/work/90_cc/20250805/2025-08-05-git-merge-test-template
   git init
   git add .
   git commit -m "Initial commit: Git merge test template"
   
   # GitHubでリポジトリ作成 (gh CLI使用)
   gh repo create 2025-08-05-git-merge-test-template --public --source=. --remote=origin
   git push -u origin main
   ```

2. **リポジトリURL確認**
   - GitHubでリポジトリが正常に作成されたことを確認
   - リポジトリURLをメモ: `https://github.com/[username]/2025-08-05-git-merge-test-template`

### 🤖 Claude作業
- 初期状態の確認とドキュメント準備完了

---

## 📋 Phase 2: 並行アップグレード実験

### 👤 ユーザー指示
**以下の3つの作業を順次実行してください（同一PC内で3つの異なるブランチをシミュレート）**

#### 🔹 PC-A役: UI改善作業
```bash
git checkout -b feature/pc-a-ui-improvements
```
**作業内容**: index.htmlのスタイル改善、レイアウト調整
**ユーザー作業**: "PC-A役のUI改善を開始してください"と指示

#### 🔹 PC-B役: 機能追加作業  
```bash
git checkout main
git checkout -b feature/pc-b-new-features
```
**作業内容**: 新しいJavaScript機能追加、ユーティリティ関数追加
**ユーザー作業**: "PC-B役の機能追加を開始してください"と指示

#### 🔹 PC-C役: ドキュメント更新作業
```bash
git checkout main  
git checkout -b feature/pc-c-docs-update
```
**作業内容**: README更新、設定ガイド追加、コメント追加
**ユーザー作業**: "PC-C役のドキュメント更新を開始してください"と指示

### 🤖 Claude作業
- 各ブランチで具体的な変更を実装
- コミット・プッシュを実行
- 変更内容をログとして記録

---

## 📋 Phase 3: マージテスト実行

### 👤 ユーザー作業
1. **プルリクエスト作成** (各ブランチごと)
   ```bash
   # PC-A役のPR作成
   gh pr create --base main --head feature/pc-a-ui-improvements --title "PC-A: UI Improvements" --body "UI改善とレイアウト調整"
   
   # PC-B役のPR作成  
   gh pr create --base main --head feature/pc-b-new-features --title "PC-B: New Features" --body "新機能とユーティリティ追加"
   
   # PC-C役のPR作成
   gh pr create --base main --head feature/pc-c-docs-update --title "PC-C: Documentation Update" --body "ドキュメント更新とコメント追加"
   ```

2. **マージ実行順序**
   - 最初のPRをマージ → 成功を確認
   - 2番目のPRをマージ → コンフリクト発生の有無を確認
   - 3番目のPRをマージ → コンフリクト解決を実行

### 🤖 Claude作業
- マージ結果の分析
- コンフリクト箇所の特定と記録
- 解決方法の提案

---

## 📋 Phase 4: 結果検証・改善

### 👤 ユーザー作業
1. **マージ後確認**
   ```bash
   git checkout main
   git pull origin main
   # テンプレートが正常に動作するか確認
   npm test  # テスト実行
   ```

2. **結果レポート**
   - マージ成功/失敗の記録
   - コンフリクト箇所の一覧
   - 解決にかかった時間

### 🤖 Claude作業
- 全体結果の分析レポート作成
- 改善提案の作成
- 次回テスト用の改良版テンプレート提案

---

## 🎯 期待される検証結果

### ✅ 成功パターン
- 異なるファイルへの変更 → 自動マージ成功
- 同一ファイルの異なる箇所 → 自動マージ成功
- 新ファイル追加 → 競合なしでマージ成功

### ⚠️ 課題パターン  
- README.mdの同一箇所編集 → 手動解決必要
- package.jsonの依存関係重複 → 手動解決必要
- 設定ファイルの同一項目変更 → 手動解決必要

---

## 📞 実行時の指示タイミング

### 開始時
**ユーザー**: "Phase 1を開始します。GitHubリポジトリを作成してください。"

### 各Phase完了時  
**ユーザー**: "Phase 1完了。Phase 2のPC-A役を開始してください。"
**ユーザー**: "PC-A役完了。PC-B役を開始してください。"
**ユーザー**: "PC-B役完了。PC-C役を開始してください。"
**ユーザー**: "全ブランチ完了。Phase 3のマージテストを開始してください。"

---

## 🚨 注意事項

1. **変更対象ファイル**
   - Core部分（universal-system/core/）は変更禁止
   - firebase-config.js, copy-system.js は変更禁止
   - 上記以外のファイルでテストを実行

2. **コンフリクト発生時**
   - 慌てずに状況を記録
   - Claudeと一緒に解決方法を検討
   - 解決過程も検証結果として記録

3. **テスト失敗時**
   - 失敗も重要な検証結果
   - 原因分析を行い改善案を作成
   - 次回テスト用の改良を実施

---

**準備完了です。Phase 1から開始しましょう！**