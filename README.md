# Microsoft Build 2026 — GitHub Copilot Update Deep Dive

Microsoft Build 2026 で発表された **GitHub Copilot** 関連アップデートを、公式情報（GitHub Blog / GitHub Changelog / GitHub Docs / Microsoft 公式）をもとに **4 つのテーマ・全 35 項目**に整理したリポジトリです。

> 顧客説明用に個別リリースを **4 テーマ**へ再編しています。このファイル単体で全体像が把握できるよう設計しています。

📅 **2026年6月2日 発表** ／ **全 35 項目**

---

## 📚 ディレクトリ構成

| # | テーマ | 項目数 | 詳細 |
|---|--------|:------:|------|
| [01](./01-copilot-app-and-dev-experience/README.md) | **Copilot app / エージェント開発体験** | 6 | GitHub Copilot app・Copilot Max・Agent Merge・Canvas・Local/Cloud Sandboxes |
| [02](./02-copilot-code-review/README.md) | **Copilot Code Review** | 5 | レビュー拡張性強化・Medium tier review・`/security-review`・`/rubberduck` GA・Azure Repos 対応 |
| [03](./03-sdk-cli-runtime/README.md) | **SDK / CLI / 実行基盤 / IDE** | 15 | Copilot SDK GA（6言語）・CLI TUI・Voice Input・Prompt Scheduling・JetBrains 強化・VS Code Multi-Agent・Visual Studio Plan agent |
| [04](./04-cloud-agent-context-ecosystem/README.md) | **Cloud Agent / 継続コンテキスト / エコシステム** | 9 | Cloud Automations/Autopilot・PAT 不要・Memory++・Partner Apps・Gemini・MAI モデル（7種）・Frontier Tuning |
| [05](./05-presentation/) | **発表資料** | — | HTML プレゼン（`index.html`）・PowerPoint スライド |

---

## 🎯 4 テーマの位置づけ

| # | キーコンセプト | 一言 |
|---|----------------|------|
| 01 | **Agent-native development** | Copilot app / Canvas / Sandboxes でエージェントをオーケストレート |
| 02 | **AI code review** | 拡張可能で適応的なコードレビューシステム |
| 03 | **Extensible agent platform** | One runtime, many surfaces（SDK / CLI / IDE） |
| 04 | **Trusted execution & ecosystem** | Cloud Agent / Memory / Partner Agent Apps / MAI モデル |

---

## 01 Copilot app / エージェント開発体験

> エージェントネイティブのデスクトップ体験。My Work で複数エージェント・Issue・PR・自動化を一元管理。

### GitHub Copilot app（テクニカルプレビュー）

- GitHub 上に構築された**エージェントネイティブのスタンドアロンデスクトップアプリ**
- **My Work** ビューで、接続リポジトリをまたいで進行中の作業（セッション・Issue・PR・バックグラウンド自動化）を一元把握
- アイデア・既存 Issue・PR から開始し、**複数エージェントを並列にオーケストレーション**
- 既存の Copilot Pro / Pro+ / Business / Enterprise プランで利用可能

### Copilot Max

- 並列エージェント運用・上位モデル選択・長時間の autopilot 的ワークフローを後押しする**上位プラン階層**
- Free / Pro / Pro+ / Business / Enterprise に加わる新しい位置づけ

### Agent Merge

- PR のレビュー・CI 監視・失敗チェック対応・承認待機・**条件付きマージ**までを自動化
- CI を監視し、必須レビュアーを追跡し、失敗チェックに対処し、すべての条件が満たされるのを待つ
- **どこまで自動化するかは開発者が選択**（CI をグリーンに戻す／フィードバック対応／条件達成でマージ）
- 起動コマンド：`/agent-merge`

### Canvas

- プラン・PR・ターミナル・ブラウザ・デプロイ・ダッシュボードなどを表示する**双方向作業面**
- エージェントが作業しながら Canvas を更新し、開発者は同じ面で**編集・並べ替え・承認・軌道修正**
- 人とエージェントが共に操作する **Agent Experience (AX)** の始まり
- 起動コマンド：`/create-canvas`

### Local Sandboxes（パブリックプレビュー）

- ローカル PC 上でファイル・ネットワーク・システム権限を制限した**隔離実行環境**
- ローカルサンドボックスのポリシーは集中管理・強制が可能

### Cloud Sandboxes（パブリックプレビュー）

- GitHub ホストの**一時的な隔離 Linux 環境**でエージェントを動かす
- 組織が独自のポリシーを定義可能
- クラウドから、**どのデバイスでも・どこでも** Copilot セッションをリモート制御で引き継げる

🔗 [詳細 →](./01-copilot-app-and-dev-experience/README.md)

---

## 02 Copilot Code Review

> エージェントが生成する PR が増えるほど、コードレビューへの圧力は累積します。Build 2026 ではノイズをふるい分ける適応的・エージェント的なシステムへと強化されました。

### レビューの拡張性強化

- **Custom Agent Skills・MCP Server・Actions workflow** を使い、社内基準や内部システムに合わせてレビューを構成可能
- 「Commit suggestion」「Add suggestion to batch」で提案を直接適用・バッチ化

### Medium tier review

- PR をより高い推論能力のモデルにルーティングし、**精度（precision）と再現率（recall）**を向上
- 管理者はリポジトリ単位で **"low" / "medium"** に設定可能

### /security-review

- セキュリティ観点に特化したコード評価スキル
- Copilot にセキュリティ重視の評価のための**専用パス**を提供

### /rubberduck（GA）

- **一般提供（GA）**。複数のモデルファミリーを使って実装を批評し、新規の問題を発見するセカンドオピニオン機能

### Azure DevOps / Azure Repos 対応（テクニカルプレビュー）

- Azure Repos 上で Copilot code review を**ネイティブに利用可能**
- ワンクリックレビュー・インラインコメント・コミット可能な修正提案
- 管理者は任意のリポジトリでレビューを有効化できる

🔗 [詳細 →](./02-copilot-code-review/README.md)

---

## 03 SDK / CLI / 実行基盤 / IDE

> 同じエージェントランタイムを、自社ツール・ターミナル・各種 IDE など多様なサーフェスで使えるようになりました。**One runtime, many surfaces** がキーコンセプト。

### GitHub Copilot SDK（GA）

- **Node.js/TypeScript・Python・Go・.NET・Rust・Java** で Copilot エージェントランタイムを自社ツールに組み込み可能
- GA 時に **Rust・Java SDK** を新規追加
- 主要機能：Custom tools & MCP / Fine-grained system prompt / OpenTelemetry tracing / BYOK / Hook system / Multi-client workflows / Cloud & remote sessions

### Copilot CLI — 新 Terminal UI（`/experimental`）

- タブ型 UI で **Issue・PR・Gist を CLI 内で操作**

### Copilot CLI — Voice Input（GA）

- オンデバイスの音声テキスト変換。**音声は端末の外に出ない**

### Copilot CLI — Prompt Scheduling

- **`/every`**：繰り返しプロンプト・バックグラウンドタスクのスケジュール（定期実行）
- **`/after`**：指定後に実行する遅延スケジュール

### Copilot CLI — Rubber Duck 連携

- CLI のメインエージェントが必要に応じて `/rubberduck` へ設計・実装・テストの批評を依頼

### JetBrains IDE 向け Copilot 強化

| 機能 | 説明 |
|------|------|
| **Agent picker** | Agent / Ask / Custom agents / Plan の 4 モードをチャットパネルで選択 |
| **`/remote`** | github.com または GitHub Mobile からセッションをリモート操作 |
| **`/compact`** | 長時間セッションのコンテキストを手動で圧縮 |
| **`/chronicle`** | セッション履歴分析（standup / tips / improve / search） |
| **Agent Debug Panel** | エージェントインタラクションの時系列イベントログ（パブリックプレビュー） |
| **thinking effort** | 推論モデルの思考量を low / medium / high で調整 |
| **Agent customizations editor** | カスタムエージェント・skills・prompts を一元管理する UI |

GA になった機能：Agent skills・Agent hooks・Prompt files・Anthropic Thinking・BYOK（Editor Preview フラグ不要）

### VS Code — Multi-Agent フレームワーク

- **Orchestrator エージェント**が linting / test-gen / docs / security review などの専門サブエージェントを並列起動
- 開発者は VS Code 内からリアルタイムで監視・介入・操作が可能

### Visual Studio — Plan agent

1. コードベースをスキャンして詳細を把握
2. 不明点を質問しながらステップバイステップのプランを起草
3. 開発者がチャットまたは Markdown を直接編集してプランを精査
4. 承認後、Agent mode でコード変更を実行
5. プランは `.copilot/plans/plan-{title}.md` としてバージョン管理可能な形式で保存

### Visual Studio — Multi-file change summaries

- 複数ファイルにまたがる変更を統合ビューで一覧
- Accept / Undo をファイル単位・チャンク単位で選択可能

🔗 [詳細 →](./03-sdk-cli-runtime/README.md)

---

## 04 Cloud Agent / 継続コンテキスト / エコシステム

> エンジニアリングはコードを書いて終わりではありません。Issue 起票から議論開始・レビュー返信まで Cloud Agent が担い、Memory++ が文脈をデバイス横断でつなぎ、パートナーエージェントや新モデルがエコシステムを広げます。

### Cloud Automations / Autopilot

- エージェントを**スケジュール実行・GitHub イベントへの応答・Issue 起票・コメント投稿**で動かせる
- デフォルトでは各書き込みアクションの前に許可を求める
- 信頼を確立したら **autopilot（自動操縦）** に切り替え

### Agentic Workflows — PAT 不要

- **`GITHUB_TOKEN`** で Agentic Workflows が動作（scope: `copilot-requests: write`）
- 長命トークン（PAT）の作成・管理・ローテーションが**不要**に
- **組織課金（organization-billed AI credits）** に対応
- 単一ワークフロー実行にスコープされた短命トークンで権限を最小化

### Cloud Agent の業務範囲拡張

- コーディングだけでなく、**Issue 登録・議論開始・レビューコメントへの返信**まで実行可能

### Memory++ と /chronicle

- **Copilot app・CLI・VS Code・GitHub.com をまたいで**セッション文脈を追跡・検索
- デバイスをまたぎ時間を越えた**継続性（continuity）**を提供

### Partner-built Agent Apps

- GitHub 上で外部パートナーのエージェントを利用・Issue アサイン可能
- 対応パートナー：LaunchDarkly・Sonar・PagerDuty・Miro・Bright・Amplitude・Endor Labs・Octopus Deploy・Packfiles
- 自社エージェントアプリを持ち込むための**ウェイトリスト**も提供

### Gemini モデルの Copilot surfaces 対応

- **Copilot CLI・Cloud Agent・Copilot app** で Gemini モデルを利用可能
- CLI ではモデルファミリーを名前で指定（`opus / sonnet / haiku / gpt / gemini`）

### MAI モデルファミリー（Build 2026）— 7 モデル

Microsoft が Build 2026 で発表した 7 つの自社製 AI モデル群。**すべてゼロから学習**（他社モデルから蒸留せず）。Maia 200 シリコンとの協調設計。

| モデル | カテゴリ | 主な特徴 |
|--------|----------|----------|
| **MAI-Thinking-1** | 推論（フラッグシップ） | 35B active パラメータ（MoE・~1T total）・256K コンテキスト・SWE-Bench Pro 52.8%・AIME 2025: 97.0% |
| **MAI-Code-1-Flash** | コーディング | 5B パラメータ・SWE-Bench Pro で Claude Haiku 4.5 を 16pt 上回り・トークン 60% 削減・GitHub Copilot 専用設計 |
| **MAI-Image-2.5** | 画像生成・編集 | text-to-image / image-to-image・Arena.ai 2 位・PowerPoint/OneDrive 展開済み |
| **MAI-Image-2.5 Flash** | 画像生成（高速） | MAI-Image-2.5 の高速・低コスト版 |
| **MAI-Voice-2** | 音声合成 | 15 以上の言語対応・感情表現・プロソディ制御・声紋クローニング |
| **MAI-Voice-2 Flash** | 音声合成（高速） | MAI-Voice-2 の高速・低コスト版 |
| **MAI-Transcribe-1.5** | 音声認識 | 43 言語対応・FLEURS ベンチマーク最高精度・競合モデル比で最大 5 倍高速 |

### MAI-Code-1-Flash の GitHub Copilot 対応

- VS Code から提供開始、モデルピッカーで選択可能
- 提供プラン：**Free / Student / Pro / Pro+ / Max**（段階展開）
- 「Microsoft 製コーディングモデルの新しい波の第一弾」

### Frontier Tuning（企業向けカスタマイズ）

- **強化学習（RL）を実際の業務環境で適用**し、組織固有のワークフローをモデルに学習させる仕組み
- 事例：MAI を Excel 向けにチューニング → **GPT 5.4 と同等の精度を 10 倍の効率**で達成
- チューニング後のモデルは企業の環境内に留まり、外部に出ない

🔗 [詳細 →](./04-cloud-agent-context-ecosystem/README.md)

---

## 📋 全 35 項目 一覧

| # | テーマ | 項目 | 状態 |
|---|--------|------|------|
| 1 | 01 | GitHub Copilot app | テクニカルプレビュー |
| 2 | 01 | Copilot Max | 新プラン |
| 3 | 01 | Agent Merge | 新機能 |
| 4 | 01 | Canvas | 新機能 |
| 5 | 01 | Local Sandboxes | パブリックプレビュー |
| 6 | 01 | Cloud Sandboxes | パブリックプレビュー |
| 7 | 02 | レビューの拡張性強化 | 新機能 |
| 8 | 02 | Medium tier review | 新機能 |
| 9 | 02 | /security-review | 新スキル |
| 10 | 02 | /rubberduck | **GA** |
| 11 | 02 | Azure Repos 対応 | テクニカルプレビュー |
| 12 | 03 | Copilot SDK | **GA**（6言語） |
| 13 | 03 | CLI 新 Terminal UI | /experimental |
| 14 | 03 | CLI Voice Input | **GA** |
| 15 | 03 | CLI Prompt Scheduling | 新機能 |
| 16 | 03 | CLI Rubber Duck 連携 | 新機能 |
| 17 | 03 | JetBrains — Agent picker | 新機能 |
| 18 | 03 | JetBrains — /remote | 新コマンド |
| 19 | 03 | JetBrains — /compact | 新コマンド |
| 20 | 03 | JetBrains — /chronicle | 新コマンド |
| 21 | 03 | JetBrains — Agent Debug Panel | パブリックプレビュー |
| 22 | 03 | JetBrains — thinking effort | 新機能 |
| 23 | 03 | JetBrains — Agent customizations editor | **GA** 機能含む |
| 24 | 03 | VS Code — Multi-Agent | 新機能 |
| 25 | 03 | Visual Studio — Plan agent | 新機能 |
| 26 | 03 | Visual Studio — Multi-file summaries | 新機能 |
| 27 | 04 | Cloud Automations / Autopilot | 新機能 |
| 28 | 04 | Agentic Workflows（PAT 不要） | セキュリティ強化 |
| 29 | 04 | Cloud Agent 業務範囲拡張 | 機能拡張 |
| 30 | 04 | Memory++ / /chronicle | 新機能 |
| 31 | 04 | Partner-built Agent Apps | エコシステム |
| 32 | 04 | Gemini モデル対応 | マルチモデル |
| 33 | 04 | MAI モデルファミリー（7モデル） | 新モデル群 |
| 34 | 04 | MAI-Code-1-Flash | 新モデル |
| 35 | 04 | Frontier Tuning | エンタープライズ |

---

## 🖥️ 発表資料

- **HTML プレゼン**（ブラウザで開くだけ）：[05-presentation/index.html](./05-presentation/index.html)
- **PowerPoint スライド**：[05-presentation/build2026_copilot_deepdive.pptx](./05-presentation/build2026_copilot_deepdive.pptx)

---

## 🔗 主要な公式ソース

- GitHub Blog: [GitHub Copilot app: The agent-native desktop experience](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
- GitHub Changelog (2026-06-02):
  - [MAI-Code-1-Flash is now available for GitHub Copilot](https://github.blog/changelog/2026-06-02-mai-code-1-flash-is-now-available-for-github-copilot/)
  - [Copilot SDK is now generally available](https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/)
  - [Copilot CLI: Improved UI, rubber duck, prompt scheduling, and voice input](https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/)
  - [Expanded technical preview availability for the GitHub Copilot app](https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/)
  - [Gemini models in Copilot CLI, cloud agent, and the Copilot app](https://github.blog/changelog/2026-06-02-gemini-models-in-copilot-cli-cloud-agent-and-the-copilot-app/)
  - [Cloud and local sandboxes for GitHub Copilot now in public preview](https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/)
  - [JetBrains — Copilot CLI and agentic capabilities enhancements](https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides/)
- GitHub Changelog (2026-06-04): [GitHub Copilot in Visual Studio — May update](https://github.blog/changelog/2026-06-04-github-copilot-in-visual-studio-may-update/)
- GitHub Changelog (2026-06-11): [Agentic workflows no longer need a PAT](https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/)
- Copilot CLI changelog: <https://github.com/github/copilot-cli/blob/main/changelog.md>
- GitHub Docs: [About cloud and local sandboxes](https://docs.github.com/copilot/concepts/about-cloud-and-local-sandboxes) / [Code review](https://docs.github.com/copilot/concepts/agents/code-review) / [Copilot SDK](https://docs.github.com/en/copilot/how-tos/copilot-sdk/getting-started)
- Microsoft: [Building a hill-climbing machine — 7 new MAI models](https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/) / [microsoft/Build26-news](https://github.com/microsoft/Build26-news)

---

> 📅 Microsoft Build 2026（2026年6月2日）時点の公式発表に基づきます。内容は今後の更新で変わる可能性があります。