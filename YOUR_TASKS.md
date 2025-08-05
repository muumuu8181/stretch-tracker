# 🎯 あなた（マージマスター）のタスク一覧

## Phase 1: 準備・各デバイスへの指示 ✅
- [x] GitHubリポジトリ作成完了
- [x] 指示書作成完了
- [ ] 各デバイスに指示書を送信

### 📤 送信すべき指示
**デバイスA担当者**:「`DEVICE_A_INSTRUCTIONS.md` 読んで。君はデバイスAだよ」
**デバイスB担当者**:「`DEVICE_B_INSTRUCTIONS.md` 読んで。君はデバイスBだよ」  
**デバイスC担当者**:「`DEVICE_C_INSTRUCTIONS.md` 読んで。君はデバイスCだよ」

---

## Phase 2: 各デバイスの作業完了を待機
### 完了報告を待つ
- [ ] デバイスA: 「デバイスA完了」の報告
- [ ] デバイスB: 「デバイスB完了」の報告
- [ ] デバイスC: 「デバイスC完了」の報告

### 進捗確認コマンド
```bash
# プルリクエスト確認
gh pr list

# ブランチ確認
git branch -r
```

---

## Phase 3: マージテスト実行
### 手順1: PRの順次マージ
```bash
# 1番目のPRをマージ（自動マージ成功予想）
gh pr merge [PR番号] --merge

# 2番目のPRをマージ（コンフリクト発生予想）
gh pr merge [PR番号] --merge

# 3番目のPRをマージ（コンフリクト発生予想）
gh pr merge [PR番号] --merge
```

### 手順2: コンフリクト解決（発生時）
```bash
# mainを最新に更新
git checkout main
git pull origin main

# コンフリクトしたブランチをローカルマージ
git merge feature/[ブランチ名]

# コンフリクトファイルを手動編集
# - README.md の ## 概要セクション
# - package.json の dependencies

# 解決後コミット
git add .
git commit -m "Resolve merge conflicts: README and package.json"
git push origin main

# PRをクローズ
gh pr close [PR番号]
```

---

## Phase 4: 結果記録・検証
### 記録すべき内容
```markdown
## マージテスト結果レポート

### ✅ 自動マージ成功
- device-a-styles.css: ✅
- src/device-b-utils.js: ✅
- examples/device-b-demo.html: ✅
- DEVICE_C_SETUP_GUIDE.md: ✅
- docs/device-c-api.md: ✅

### ⚠️ コンフリクト発生・解決済み
- README.md ## 概要: ⚠️ → 手動解決完了
- package.json dependencies: ⚠️ → 手動解決完了

### 📊 統計
- 自動マージ成功: 5/7 (71%)
- 手動解決必要: 2/7 (29%)
- 総解決時間: [X分]

### 💡 学んだこと
- [具体的な気づき]
```

### 最終動作確認
```bash
git checkout main
git pull origin main

# テンプレートが正常動作するか確認
npm test
npm start
```

---

## 🚨 トラブルシューティング

### コンフリクト解決できない場合
```bash
# マージを中止
git merge --abort

# 手動でファイル修正後に再挑戦
git merge feature/[ブランチ名]
```

### PRマージが失敗する場合
1. WebブラウザでGitHubを開く
2. PR画面で手動マージを試行
3. コンフリクト表示があれば解決

---

## 📞 完了報告フォーマット

全作業完了時に以下を報告:

```
🎯 マージテスト完了報告

✅ 成功: [成功した項目数]/[総項目数]
⚠️ コンフリクト: [解決したコンフリクト数]個
⏱️ 所要時間: [X分]
💡 主な学び: [1-2行で要約]

詳細: [結果レポートのリンクまたは内容]
```

---

**準備完了！各デバイスへの指示からスタートしてください。**