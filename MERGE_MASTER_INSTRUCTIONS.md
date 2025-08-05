# 🎯 マージマスター作業指示書

## あなたの役割: マージテスト実行・結果分析

**リポジトリ**: https://github.com/muumuu8181/2025-08-05-git-merge-test-template

## 📋 全体の流れ

### Phase 1: 各デバイスの作業完了を待つ
- デバイスA: UI改善 → 「デバイスA完了」の報告待ち
- デバイスB: 機能追加 → 「デバイスB完了」の報告待ち  
- デバイスC: ドキュメント更新 → 「デバイスC完了」の報告待ち

### Phase 2: マージテスト実行

#### 1. プルリクエスト確認
```bash
gh pr list  # 3つのPRが作成されていることを確認
```

#### 2. 順次マージ実行
```bash
# 1番目のPRをマージ
gh pr merge [PR番号1] --merge

# 2番目のPRをマージ（コンフリクト発生可能性あり）
gh pr merge [PR番号2] --merge

# 3番目のPRをマージ（コンフリクト発生可能性あり）
gh pr merge [PR番号3] --merge
```

#### 3. コンフリクト発生時
```bash
# mainブランチを更新
git checkout main
git pull origin main

# コンフリクトしたブランチをマージ
git merge feature/[ブランチ名]
# コンフリクト解決後
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

### Phase 3: 結果検証
```bash
git checkout main
git pull origin main
npm test  # テンプレートが正常動作するか確認
```

## 📊 記録すること

### ✅ 成功パターン
- [ ] 自動マージ成功箇所
- [ ] マージ所要時間
- [ ] 最終動作確認結果

### ⚠️ 課題パターン
- [ ] コンフリクト発生箇所
- [ ] 手動解決が必要だった内容
- [ ] 解決にかかった時間

## 🎯 最終レポート作成

全マージ完了後、以下を記録：

```
## マージテスト結果

### 成功したマージ
- デバイスA (UI改善): ✅ 自動マージ成功
- デバイスB (機能追加): ⚠️ package.jsonでコンフリクト
- デバイスC (ドキュメント): ✅ 自動マージ成功

### コンフリクト詳細
- ファイル: package.json
- 原因: 依存関係の重複追加
- 解決方法: 手動で依存関係をマージ
- 解決時間: 5分

### 改善提案
- package.json変更時のルール策定が必要
- READMEの同一箇所編集を避ける仕組みが必要
```

## ✅ 完了報告
全作業完了したら「マージテスト完了」と報告してください。