# 12. Windows for Developers — GitHub Copilot が動く環境

> Build 2026 では、**GitHub Copilot を含むエージェント開発を Windows 上で安全・快適に行う** ための更新が多数発表されました。Copilot CLI が採用する MXC や、Copilot をプリインストールする開発環境など、Copilot 利用者に直結する内容を中心にまとめます。

---

## 1. Windows Developer Configurations（GitHub Copilot を含む）

> "powered by WinGet, sets up a distraction-free dev environment with VS Code, GitHub Copilot, WSL, PowerShell 7 and developer-optimized settings with one command on any Windows 11 device, now generally available"

- **WinGet** ベースで、**VS Code・GitHub Copilot・WSL・PowerShell 7** などを **ワンコマンド** でセットアップ（**GA**）
- `dev-config.winget`（WinGet 構成ファイル）で、必要なツールを適切なバージョンで導入
- **Windows 365** にも同じ開発者構成がプリセット（パブリックプレビュー）

---

## 2. Intelligent Terminal（エージェント連携ターミナル）

> "brings context-aware intelligence to your favorite agents directly into a terminal based experience ... available in experimental preview"

- 既存の **Windows Terminal** をベースに、**agent pane** でエージェント CLI をネイティブ統合
- **ACP（Agent Communication Protocol）** 経由でお気に入りのエージェントにコンテキストを提供
- **コマンド失敗時に、文脈と修正案を自動提示**し、その場で実行できる
- タブ・プロファイル・テーマ・設定・シェルはそのまま利用可能

---

## 3. MXC — エージェント実行のOS強制サンドボックス

**Microsoft Execution Containers (MXC)** は、OS が封じ込めを強制するエージェント実行層です（→ [03章](../03-sandboxes/README.md)）。

- **MXC SDK**：エージェントがアクセスできる対象（ファイル・ネットワーク等）を宣言し、**ランタイムで境界を強制**
- **高速プロセス分離は GitHub Copilot CLI が採用済み** — エージェント実行をユーザーのデスクトップ・クリップボード・UI・入力デバイスから分離
- **セッション分離**：強いユーザーIDに束ね、UIスプーフィング・入力インジェクション・クロスセッション漏えいを緩和
- パートナー：**OpenClaw on Windows**、**NVIDIA OpenShell**、Hermes / Manus / OpenAI なども MXC を活用

> "Fast process isolation (adopted by GitHub Copilot CLI) and session isolation separates the agent's execution from the user's desktop, clipboard, UI and input devices"

---

## 4. WSL とコマンドライン環境

| 機能 | 内容 |
|------|------|
| **Coreutils for Windows**（GA） | Rust 製 uutils ベースの Linux 風 CLI ユーティリティが Windows ネイティブで動作 |
| **WSL containers**（パブリックプレビュー予定） | 使い慣れた CLI/API で Linux コンテナを作成・実行。ローカルAI・テスト・Linux処理に有用 |
| **Windows Development Skills**（GA） | WinUI3 skills・WinApp CLI で、**エージェントにネイティブWindowsアプリ構築の構造化知識** を付与 |

---

## 5. ローカルAIモデルと開発者向けハードウェア

- **Aion 1.0 Instruct**：オンデバイス向け次世代 SLM（要約・リライト・意図抽出・アクセシビリティ）。Edge 統合・open weights
- **Aion 1.0 Plan**：14B・32Kコンテキストの推論＆ツール呼び出しモデル。**完全ローカルなエージェント** を実現（数か月内）
- **Windows AI APIs 拡張**：音声認識・SLM・Video Super Resolution が NPU だけでなく **CPU/GPU** へ拡大
- **Surface RTX Spark Dev Box**：最大 **1 petaflop / 128GB統合メモリ**。**VS Code・GitHub Copilot などをプリインストール**。最大120B級LLM・最大100万トークンをローカル実行
- **DGX Station for Windows**：NVIDIA GB300 搭載のデスクサイドAIスーパーコンピュータ（最大1兆パラメータをローカル、Q4予定）

---

## 6. Copilot 利用者にとっての要点

| 更新 | Copilot との関係 |
|------|-----------------|
| Windows Developer Configurations | **Copilot を含む**開発環境をワンコマンド構築 |
| Intelligent Terminal | ターミナルでエージェント（Copilot 含む）と協働 |
| MXC | **Copilot CLI が採用**する実行分離 |
| Surface RTX Spark Dev Box | **Copilot プリインストール**・ローカル大規模モデル |

---

## 7. 参考リンク

- Windows at Build 2026: https://aka.ms/Windows-Build2026
- [microsoft/Build26-news](https://github.com/microsoft/Build26-news)
