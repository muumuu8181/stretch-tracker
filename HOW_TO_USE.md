# 🚀 テンプレート使用方法 - 新プロジェクト作成ガイド

## 📋 問題と解決策

### 現在の問題
1. **使い方が不明確** - テンプレートを読んでも具体的な手順が分からない
2. **Gitリポジトリの干渉** - 既存のGitリポジトリと新プロジェクトが干渉する

### 解決策
**テンプレートをコピー → .gitフォルダ削除 → 新規Git初期化**

---

## 🎯 新プロジェクト作成手順

### 1️⃣ プロジェクト名を決める
```bash
# 日付-プロジェクト名形式
# 例: 2025-08-07-todo-app
PROJECT_NAME="2025-08-07-todo-app"
```

### 2️⃣ テンプレートをコピー
```bash
# Windows (PowerShell)
cd C:\Users\user\Desktop\work\90_cc
cp -r 0000-00-00-project-template $PROJECT_NAME

# または
xcopy 0000-00-00-project-template $PROJECT_NAME /E /I
```

### 3️⃣ Git履歴をクリーンアップ
```bash
cd $PROJECT_NAME

# 既存のGit履歴を削除（重要！）
rm -rf .git
# Windowsの場合
rmdir /s /q .git

# 新規Gitリポジトリとして初期化
git init
```

### 4️⃣ GitHubリポジトリ作成＆プッシュ
```bash
# 初回コミット
git add .
git commit -m "Initial commit from template"

# GitHubリポジトリ作成（GitHub CLI使用）
gh repo create muumuu8181/$PROJECT_NAME --public --source=. --remote=origin

# プッシュ
git push -u origin main
```

---

## 📝 具体例：TODOアプリを作る場合

### Step 1: プロジェクト作成
```bash
# PowerShellで実行
cd C:\Users\user\Desktop\work\90_cc

# テンプレートをコピー
cp -r 0000-00-00-project-template 2025-08-07-todo-app

# 新プロジェクトに移動
cd 2025-08-07-todo-app

# Git履歴削除
rmdir /s /q .git

# 新規Git初期化
git init
```

### Step 2: アプリ開発
```bash
# index.htmlを編集してTODOアプリを実装
# src/main.jsにロジックを追加
# Firebase設定は自動で適用される
```

### Step 3: GitHubにプッシュ
```bash
# 変更をコミット
git add .
git commit -m "Add TODO app functionality"

# GitHubリポジトリ作成
gh repo create muumuu8181/2025-08-07-todo-app --public --source=. --remote=origin

# プッシュ
git push -u origin main
```

---

## 🔧 スクリプト化（推奨）

### create-project.ps1
```powershell
# PowerShellスクリプト
param(
    [Parameter(Mandatory=$true)]
    [string]$ProjectName
)

$Date = Get-Date -Format "yyyy-MM-dd"
$FullName = "$Date-$ProjectName"
$BasePath = "C:\Users\user\Desktop\work\90_cc"

# テンプレートコピー
Copy-Item -Path "$BasePath\0000-00-00-project-template" -Destination "$BasePath\$FullName" -Recurse

# 新プロジェクトに移動
Set-Location "$BasePath\$FullName"

# Git履歴削除
Remove-Item -Path ".git" -Recurse -Force -ErrorAction SilentlyContinue

# 新規Git初期化
git init
git add .
git commit -m "Initial commit from template"

# GitHub リポジトリ作成
gh repo create "muumuu8181/$FullName" --public --source=. --remote=origin

# プッシュ
git push -u origin main

Write-Host "✅ プロジェクト作成完了: $FullName"
Write-Host "📍 場所: $BasePath\$FullName"
Write-Host "🔗 GitHub: https://github.com/muumuu8181/$FullName"
```

### 使用方法
```powershell
# スクリプト実行
.\create-project.ps1 -ProjectName "todo-app"
```

---

## ⚠️ 重要な注意点

### ✅ やるべきこと
1. **必ず.gitフォルダを削除** - リポジトリ干渉を防ぐ
2. **日付を含めた命名** - 時系列管理のため
3. **初回コミット後すぐプッシュ** - バックアップ確保

### ❌ やってはいけないこと
1. **テンプレート自体を編集しない** - 常に原型を保持
2. **.gitフォルダを残したままコピー** - リポジトリ干渉の原因
3. **Firebase設定の変更** - 自動設定を活用

---

## 🎯 毎日の運用フロー

### 朝のルーティン
1. その日の作業フォルダを確認
2. 必要に応じて新プロジェクト作成

### プロジェクト作成時
1. create-project.ps1 実行
2. 開発開始
3. こまめにコミット＆プッシュ

### 夜のルーティン
1. すべての変更をプッシュ
2. 明日の準備

---

## 📊 フォルダ構造

```
C:\Users\user\Desktop\work\90_cc\
├── 0000-00-00-project-template/    # テンプレート（触らない）
├── 2025-08-07-todo-app/           # 今日作成
├── 2025-08-07-calculator/         # 今日作成
├── 2025-08-06-game/              # 昨日作成
└── create-project.ps1            # 作成スクリプト
```

---

## 🚀 これで準備完了！

1. **テンプレートコピー**
2. **.git削除**
3. **新規Git初期化**
4. **GitHub作成＆プッシュ**

この4ステップで、リポジトリ干渉なく新プロジェクトが作成できます。