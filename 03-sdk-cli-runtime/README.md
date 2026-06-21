# 3. SDK / CLI / 実行基盤

> 同じエージェントランタイムを、**自社ツール・ターミナル・各種 IDE**など多様なサーフェスで使えるようになりました。「One runtime, many surfaces」がキーコンセプトです。
> 出典：GitHub 公式ブログ [GitHub Copilot app](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Copilot CLI changelog](https://github.com/github/copilot-cli/blob/main/changelog.md)

---

## GitHub Copilot SDK の GA

**Node.js/TypeScript・Python・Go・.NET・Rust・Java** で、Copilot のエージェントランタイムを自社ツールに組み込めるように。

- **Copilot アプリを支えるのと同じエージェントランタイム** を公開（プランニング・ツール呼び出し・ファイル編集・ストリーミング・マルチターンセッション）
- GA 時に **Rust・Java SDK** を新規追加
- ユースケース：社内コード解析ツール、リリースノート生成ツール、サポートワークフローへの埋め込みエージェント

> "You can now build your own tools with the GitHub Copilot SDK. Now generally available in Node.js/TypeScript, Python, Go, .NET, Rust, and Java, it exposes the same agentic runtime that powers the Copilot app."

### SDK の主要機能

- **Custom tools & MCP**：エージェントが自律的に呼び出せるツールを登録 / MCP サーバー接続 / `grep`・`edit_file` などの組み込みツールを上書き可能
- **Fine-grained system prompt customization**：identity・tone・tool instructions・safety rules を個別セクションで編集（全体書き換え不要）
- **OpenTelemetry tracing**：W3C trace context を CLI 起動〜JSON-RPC 呼び出し〜ツール実行まで一貫して伝搬
- **Flexible authentication**：GitHub OAuth / GitHub Apps / 環境トークン / **BYOK**（OpenAI・Microsoft Foundry・Anthropic などの API キーを持ち込み）
- **Cloud & remote sessions**：リポジトリメタデータ付きクラウドバックセッションの作成 / リモートセッション URL をオンデマンド発行
- **Hook system**：pre/post ツール使用・セッション開始・MCP ツール呼び出し・権限リクエストをインターセプトしてエージェント動作を細かく制御
- **Multi-client workflows**：複数クライアントが同一セッションにツールと権限を提供

🔗 出典: [Copilot SDK GA（GitHub Changelog）](https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/) ／ [Copilot SDK getting started（GitHub Docs）](https://docs.github.com/en/copilot/how-tos/copilot-sdk/getting-started)

---

## Copilot CLI の新 Terminal UI

タブ型 UI で **Issue・PR・Gist を CLI 内で操作**。`/experimental` 提供。

- 既存の CLI 体験を刷新し、**タブ型アクセス**で PR・Issue・Gist をターミナルから扱える
- カラーテーマ・アクセシビリティ改善も含む
- `/experimental` モードで提供

> "Copilot CLI has a redesigned TUI in `/experimental` mode with tabbed access to pull requests, issues, and gists from the terminal."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Browse issues, PRs, gists in CLI（GitHub Docs）](https://docs.github.com/copilot/how-tos/copilot-cli/use-copilot-cli/browse-issues-prs-gists)

---

## Copilot CLI の Voice Input

端末で **音声入力**。音声は **ローカル処理**。

- **オンデバイスの音声テキスト変換**を使用するため、**音声は端末の外に出ない**

> "Voice mode uses on-device speech-to-text, so audio never leaves your machine."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Voice input（GitHub Docs）](https://docs.github.com/copilot/how-tos/copilot-cli/use-copilot-cli/voice-input)

---

## Copilot CLI の Prompt Scheduling

**`/every` と `/after`** により、プロンプトやスキルを **定期・遅延実行**。

- **`/every`**：繰り返しプロンプト・バックグラウンドタスクのスケジュール（定期実行）
- **`/after`**：指定後に実行する遅延スケジュール

> "`/every` schedules recurring prompts and background tasks."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Copilot CLI changelog](https://github.com/github/copilot-cli/blob/main/changelog.md)

---

## Copilot CLI の Rubber Duck 連携

CLI のメインエージェントが必要に応じて **Rubber Duck へ設計・実装・テストの批評を依頼**。

- ターミナル内のメインエージェントから、**セカンドオピニオン（`/rubberduck`）** を呼び出して批評を得る（→ コードレビューは [02章](../02-copilot-code-review/README.md)）
- 人手を介さず、品質チェックを CLI ワークフローに組み込める

🔗 出典: [Copilot CLI changelog](https://github.com/github/copilot-cli/blob/main/changelog.md)

---

## JetBrains IDE 向け Copilot 強化

Build 2026 で **Copilot CLI が JetBrains IDEs に正式搭載**。エージェント機能も大幅強化。

### Copilot CLI — Agent picker

4 つのモードをチャットパネルのピッカーで選択可能：

| モード | 説明 |
|--------|------|
| **Agent mode**（デフォルト） | 自律タスク実行の完全エージェント体験 |
| **Ask mode** | クイック回答・アシスト |
| **Custom agents** | 自社ニーズに合わせたカスタムエージェント |
| **Plan mode** | 実装前に構造化プランを作成・レビュー |

### Copilot CLI — 新スラッシュコマンド

- **`/remote`**：github.com または GitHub Mobile アプリから **進行中の CLI セッションをリモート操作**。マシンを離れても作業を継続できる
- **`/compact`**：長時間セッションのコンテキストを **手動で圧縮**し、セッションを管理しやすく保つ
- **`/chronicle`**：セッション履歴の分析・パーソナライズされた改善提案
  - `/chronicle standup`：直近のセッション要約レポートを生成
  - `/chronicle tips`：効果的な Copilot 活用のヒントを提供
  - `/chronicle improve`：バックアンドフォースが多いパターンを検出し、カスタム指示を自動生成
  - `/chronicle search`：過去のセッションを検索

### Agent Debug Panel（public preview）

- エージェントインタラクションの **時系列イベントログ**を表示
- カスタムエージェントやサブエージェントオーケストレーションのデバッグに特に有効
- 設定：Copilot Chat パネル → 設定アイコン → **Agent Debug Panel**

### その他の強化点

- **Cloud agent を unified sessions view に統合**：ローカル・CLI・クラウドのセッションを 1 か所で管理・フィルタ
- **Configurable thinking effort**：推論モデルの思考量を **low / medium / high** で調整（複雑なアーキテクチャ判断は high、単純なコード生成は low）
- **Agent customizations editor**：カスタムエージェント・reusable skills・instructions・prompts を一元管理する UI
- **Google・Apple サインイン**対応

### GA になった機能（Editor Preview フラグ不要に）

- Agent skills、Agent hooks、Prompt files、Anthropic Thinking が **GA**
- **BYOK** が Editor Preview フラグなしで利用可能に（Business/Enterprise は GitHub ポリシーで管理）
- Copilot CLI agent をデフォルトに移行中（段階展開）

🔗 出典: [JetBrains IDE 向け Copilot 強化（GitHub Changelog）](https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides/)

---

## VS Code — Multi-Agent フレームワーク

**Orchestrator エージェント**が複数の**サブエージェント**を並列起動し、開発タスクを分担して処理。

- Orchestrator がタスクを分解し、linting / test-gen / docs / security review などの専門サブエージェントを**並列で実行**
- 開発者は VS Code 内からリアルタイムで**監視・介入・操作**が可能（コンテキストスイッチ不要）
- CLI の `/fleet` コマンドと同じ思想を、VS Code の統合 UI で提供

🔗 出典: [GitHub Copilot app Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

---

## Visual Studio 2026 の Copilot 更新

### Plan agent

コードを書く前に**実装計画を対話的に作成・承認**するエージェント。

1. Copilot がコードベースをスキャンして詳細を把握
2. 不明点を質問しながら **ステップバイステップのプランを起草**
3. 開発者がチャットまたは直接 Markdown を編集してプランを精査
4. 承認後、Agent mode でコード変更を実行
5. プランは `.copilot/plans/plan-{title}.md` として**バージョン管理可能**な形式で保存

### Multi-file change summaries

- 複数ファイルにまたがる変更を**統合ビューで一覧**
- Accept / Undo をファイル単位・チャンク単位で選択可能

🔗 出典: [GitHub Copilot in Visual Studio — May update（GitHub Changelog）](https://github.blog/changelog/2026-06-04-github-copilot-in-visual-studio-may-update/)

---

## 補足：実行基盤との関係

- Copilot CLI は Windows の **MXC（Microsoft Execution Containers）の高速プロセス分離** を採用し、エージェント実行をユーザーのデスクトップ・UI・入力デバイスから分離（Trusted execution）
- `/fleet` により、クラウドの主エージェントがプランを立て、複雑さに応じてタスクを **ローカルモデルのサブエージェント**へ振り分け

🔗 出典: [microsoft/Build26-news](https://github.com/microsoft/Build26-news)（Windows at Build 2026）

---

## まとめ

| 項目 | 一言で | 状態 |
|------|--------|------|
| Copilot SDK の GA | 6言語 + MCP/Hook/BYOK/OpenTelemetry 対応 | GA |
| 新 Terminal UI | PR/Issue/Gist をタブ型で操作 | `/experimental` |
| Voice Input | 端末で音声入力（ローカル処理） | GA |
| Prompt Scheduling | `/every`・`/after` で定期・遅延実行 | — |
| Rubber Duck 連携 | CLI から設計・実装・テストの批評を依頼 | — |
| JetBrains — Agent picker | Agent/Ask/Plan/Custom の 4 モード選択 | — |
| JetBrains — /remote | github.com/モバイルからセッションをリモート制御 | — |
| JetBrains — /compact | 長時間セッションのコンテキストを手動圧縮 | — |
| JetBrains — /chronicle | セッション履歴分析・standup/tips/improve/search | — |
| JetBrains — Agent Debug Panel | エージェント動作の時系列ログ | public preview |
| JetBrains — thinking effort | 推論モデルの思考量を low/medium/high で調整 | — |
| JetBrains — Agent customizations editor | カスタムエージェント・skills・prompts 一元管理 | — |
| VS Code — Multi-Agent | Orchestrator + 並列サブエージェント | — |
| Visual Studio — Plan agent | 計画→承認→実装の段階的ワークフロー | — |
| Visual Studio — Multi-file summaries | 複数ファイル変更の統合ビュー | — |
