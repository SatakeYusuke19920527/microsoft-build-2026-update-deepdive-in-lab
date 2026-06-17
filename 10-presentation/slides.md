---
marp: true
theme: default
paginate: true
size: 16:9
header: 'Microsoft Build 2026 — GitHub Copilot Update Deep Dive'
footer: 'Source: GitHub Blog / microsoft Build26-news'
style: |
  section {
    font-family: 'Segoe UI', 'Yu Gothic UI', sans-serif;
    font-size: 26px;
  }
  h1 { color: #1f2328; }
  h2 { color: #0969da; border-bottom: 2px solid #d0d7de; padding-bottom: 0.2em; }
  table { font-size: 22px; }
  section.lead { text-align: center; }
  section.lead h1 { font-size: 52px; }
  code { background: #f6f8fa; padding: 0.1em 0.3em; border-radius: 4px; }
  blockquote { border-left: 4px solid #0969da; color: #57606a; padding-left: 0.8em; }
---

<!-- _class: lead -->

# Microsoft Build 2026
## GitHub Copilot アップデート Deep Dive

エージェントネイティブ開発のコントロールセンターへ

<br>

2026年6月2日 発表 / 一次情報ベースのまとめ

---

## 本日のアジェンダ

| # | テーマ |
|---|--------|
| 1 | GitHub Copilot アプリ |
| 2 | Canvas と Agent Experience (AX) |
| 3 | サンドボックス（クラウド／ローカル） |
| 4 | コードレビュー |
| 5 | Copilot SDK と CLI |
| 6 | 自動化とクラウドエージェント |
| 7 | パートナーエージェントアプリ |
| 8 | AIモデル（MAI-Code-1 ほか） |
| 9 | Microsoft IQ コンテキスト層 |

---

<!-- _class: lead -->

# 全体像

**GitHub Copilot は「AIアシスタント」から、**
**人とエージェントが協働する開発の*コントロールセンター*へ**

- 複数エージェントを **並列** で動かし、レビュー・CI・マージまで1か所で統制
- Canvas / サンドボックス / レビュー / SDK / 自動化 が **ひとつのシステム** に
- **MAI-Code-1** が Copilot/VS Code に、**Microsoft IQ** が知識を接続

---

## 1. GitHub Copilot アプリ

**GitHub 上に構築された、独立したエージェントネイティブ・デスクトップ体験**（技術プレビュー）

- **My Work** ダッシュボード：セッション・Issue・PR・自動化を単一ビューで把握
- **並列セッション × git worktree**：各セッションが独立コピーで干渉せず並行作業
- **Agent Merge**：CI監視・必須レビュアー追跡・失敗対処をしてマージまで運ぶ
  - 自動化の範囲は開発者が選択（CIをグリーンに／フィードバック対応／条件達成でマージ）

> "orchestrate multiple agent sessions in parallel, and keep changes moving through review, CI and merge"

---

## 2. Canvas と Agent Experience (AX)

**人とエージェントの双方向ワークサーフェス**

- プラン / PR / ブラウザ / ターミナル / デプロイ / ダッシュボード を表示
- エージェントが更新し、人が **編集・並べ替え・承認・軌道修正** できる

| | Chat | Canvas |
|---|------|--------|
| 目的 | 指示・対話・推論 | 作業の可視化・操作 |
| 方向 | 主に 人→エージェント | 双方向（人 ⇄ エージェント） |

> "Canvases are where that intent becomes visible work you can inspect, steer, and verify."

---

## 3. サンドボックス

**エージェントが本番に触れず、コードを実行・検査・反復できる境界**

| 観点 | ローカル | クラウド |
|------|---------|---------|
| 実行場所 | 自分のマシンの隔離環境 | GitHubホストの隔離Linux |
| 寿命 | ローカル | エフェメラル（使い捨て） |
| ポリシー | 集中管理・強制 | 組織が独自定義 |
| 強み | 低レイテンシ | デバイス非依存・制約なし |

- 関連：**Microsoft Execution Containers (MXC)** — OSが封じ込めを強制（プレビュー）

---

## 4. コードレビュー

**エージェントが生むPR増にスケールする、適応的レビュー**

- **カスタマイズ**：カスタムエージェントスキル / MCP接続 / Actionsワークフロー
- **Medium tier review**：高推論モデルへルーティング（管理者がlow/medium設定）
- **`/security-review`**：セキュリティ特化の評価パス
- **`/rubberduck`**（GA）：複数モデルで実装を批評
- **Azure DevOps** ネイティブ対応（ワンクリックレビュー・インラインコメント）

---

## 5. Copilot SDK と CLI

**One runtime, many surfaces** — 同じランタイムを多様な面で

**Copilot SDK**（Copilotアプリと同一のエージェントランタイムを公開）
- GA言語：Node.js/TS, Python, Go, .NET, Rust, Java
- 社内コード解析・リリースノート生成・サポート埋め込みエージェント等

**Copilot CLI**
- 再設計TUI（`/experimental`：PR/Issue/gistにタブアクセス）
- Voice mode（オンデバイス音声・外部送信なし）
- `/every`（繰り返し・バックグラウンドのスケジュール）

---

## 6. 自動化とクラウドエージェント

**コードの外側（起票・議論・返信）までエージェントが担う**

- **クラウド自動化**：スケジュール実行 / イベント応答 / Issue起票 / コメント
- **許可モデル**：既定は書き込み前に許可 → 信頼後に **autopilot**
- **クラウドエージェント拡張**：Issue起票・ディスカッション開始・レビュアー返信
- **Memory++ / `/chronicle`**：デバイス・時間を越えたコンテキスト継続
  - アプリ・CLI・VS Code・GitHub のセッションを横断参照

---

## 7. パートナーエージェントアプリ

**GitHubを離れずに、お気に入りのツールを利用**

- Issueを、ワークフローに合った **新しいエージェントに割り当て**
- 自社エージェント持ち込み用の **ウェイトリスト** も提供

LaunchDarkly / Bright / Amplitude / Sonar / Endor Labs /
Octopus Deploy / Packfiles / PagerDuty / Miro

> "Partner-built agent apps integrate with GitHub Copilot to help automate tasks, generate code, analyze context, and execute actions."

---

## 8. AIモデル — MAI-Code-1 ほか

**MAI-Code-1**：推論効率に優れたコーディングモデル（GitHub向けチューニング）
→ **Copilot / VS Code で利用可能**

| モデル | 種別 | ハイライト |
|--------|------|-----------|
| MAI-Code-1 | コーディング | Copilot/VS Codeで利用可 |
| MAI-Thinking-1 | 推論 | 35Bアクティブ/256Kコンテキスト、SWE Bench ProでOpus 4.6級 |
| MAI-Image-2.5 | 画像 | text/image-to-image、Arena上位 |
| MAI-Transcribe 1.5 | 音声→文字 | 43言語・高精度 |

- 提供先拡大：Fireworks AI / Baseten / Open Router、Fireworks AIはFoundryでGA

---

## 9. Microsoft IQ コンテキスト層

**世界知識 × 業務知識** をエージェントに接続（GA：Copilot/Foundry/Studio）

| 層 | 役割 |
|----|------|
| **Work IQ** | M365横断の職場知識（API は 6/16 GA） |
| **Fabric IQ** | 構造化業務データの共有セマンティック基盤 |
| **Foundry IQ** | 企業知識×ライブWebの検索プランニング |
| **Web IQ** | AIファースト・MCPネイティブ、次点比 約2.5倍速 |

→ Copilotのエージェントが、リポジトリを超えてM365・業務データ・Webを参照

---

<!-- _class: lead -->

# まとめ

**エージェントが「より多くの作業」を担い、**
**開発者は品質・ポリシー・デリバリーの統制を保つ**

- 1つのシステムとして：アプリ / Canvas / サンドボックス / レビュー / 自動化 / SDK
- 専用モデル（MAI-Code-1）とコンテキスト層（Microsoft IQ）が下支え

<br>

📂 詳細は各テーマ `01`〜`09` の README を参照

---

<!-- _class: lead -->

# 一次情報ソース

GitHub Blog: *GitHub Copilot app: The agent-native desktop experience*

microsoft/Build26-news（OMB Developer Blog）

Microsoft Blog: https://aka.ms/AA10pe80

GitHub Docs: https://docs.github.com/copilot

<br>

**Thank you!**
