# 4. Cloud Agent / 継続コンテキスト / エコシステム

> エンジニアリングはコードを書いて終わりではありません。Issue 起票・議論開始・レビュー返信までを **Cloud Agent** が担い、**Memory++** が文脈をデバイス横断でつなぎ、**パートナーエージェント**や**新モデル**がエコシステムを広げます。
> 出典：GitHub 公式ブログ [GitHub Copilot app](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [GitHub Changelog](https://github.blog/changelog/)

---

## Cloud Automations / Autopilot

スケジュール実行・GitHub イベント応答・Issue 作成・コメント投稿などを **Cloud Agent で自動化**。

- エージェントを **スケジュール実行**・**GitHub イベントへの応答**・**Issue 起票**・**コメント投稿**で動かせる
- デフォルトでは **各書き込みアクションの前に許可を求める**
- 信頼を確立したら **autopilot（自動操縦）** に切り替え

> "Cloud automations let agents run on a schedule, respond to GitHub events, open issues, and leave comments. By default, the cloud agent asks permission before each write action. Switch to autopilot once you have established trust."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [About cloud agent（GitHub Docs）](https://docs.github.com/copilot/concepts/agents/cloud-agent/about-cloud-agent)

---

## GitHub Agentic Workflows の改善（PAT 不要）

**Personal Access Token（PAT）が不要**になり、よりセキュアで管理しやすい構成に。

- **`GITHUB_TOKEN`** を使って Agentic Workflows が動作（スコープ: `copilot-requests: write`）
- 長命トークン（PAT）の作成・管理・ローテーションが**不要**に
- **組織課金（organization-billed AI credits）** に対応：個人ユーザーではなく組織に AI クレジットを請求
- セキュリティ向上：単一ワークフロー実行にスコープされた短命トークンで権限を最小化

🔗 出典: [Agentic workflows no longer need a PAT（GitHub Changelog）](https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/)

---

## Cloud Agent の業務範囲拡張

コーディングだけでなく、**Issue 登録・議論開始・レビューコメントへの返信**まで実行可能に。

- エンジニアリングの「コードの外側」（起票・ディスカッション開始・レビュアー返信）の **すべてのステップ** を処理

> "Engineering doesn't end with writing code. It includes filing the issue, kicking off the discussion, and replying to reviewers. Copilot cloud agent can now handle every one of those steps."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

---

## Memory++ と /chronicle

**Copilot app・CLI・VS Code・GitHub.com をまたいで**セッション文脈を追跡・検索。

- **Memory++** / **`/chronicle`** が、デバイスをまたぎ時間を越えた **継続性（continuity）** を提供
- どこで始めたセッションのコンテキストでも横断的に **クエリ** できる

> "Memory++ and `/chronicle` give Copilot continuity across devices and over time. Query context from sessions started in the app, CLI, VS Code, or on GitHub."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

---

## Partner-built Agent Apps

GitHub 上で **外部パートナーのエージェントを利用・Issue アサイン**可能に。

- タスクの自動化・コード生成・コンテキスト分析・アクション実行を、**GitHub を離れずに** 実行
- Issue を、ワークフローに合った **新しいエージェントに割り当て** できる
- 例示パートナー：**LaunchDarkly・Sonar・PagerDuty・Miro**（ほか Bright・Amplitude・Endor Labs・Octopus Deploy・Packfiles）
- 自社のエージェントアプリを持ち込むための **ウェイトリスト** も提供

> "Partner-built agent apps integrate with GitHub Copilot to help automate tasks, generate code, analyze context, and execute actions. Use your favorite tools without leaving GitHub. Assign issues to new agents that fit your workflow. Partners include LaunchDarkly, Bright, Amplitude, Sonar, Endor Labs, Octopus Deploy, Packfiles, PagerDuty, and Miro."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Agent apps for GitHub（ウェイトリスト）](https://github.com/features/preview/agent-apps-for-github)

---

## Gemini モデルの Copilot surfaces 対応

**Copilot CLI・Cloud Agent・Copilot app** で Gemini モデルを利用可能に。

- Copilot のマルチモデル対応が拡大し、**Gemini モデルファミリー** をこれらのサーフェスで選択可能
- CLI ではモデルファミリーを名前で指定（`opus` / `sonnet` / `haiku` / `gpt` / `gemini` など）

🔗 出典: [Copilot CLI changelog](https://github.com/github/copilot-cli/blob/main/changelog.md)

---

## MAI モデルファミリー（Build 2026）

Microsoft が Build 2026 で発表した **7 つの自社製 AI モデル群**。OpenAI や他社モデルから蒸留せず、**すべてゼロから学習**したことが最大の特徴。Maia 200 シリコンとの協調設計により、クリーンなデータ系譜と完全なスタック制御を実現。

> "We train our reasoning models from scratch. We don't distill from other labs and we don't rely on unlicensed or opaque data."

### モデル一覧

| モデル | カテゴリ | 主なスペック・特徴 |
|--------|----------|-------------------|
| **MAI-Thinking-1** | 推論（フラッグシップ） | 35B active パラメータ（MoE・~1T total）・256K コンテキスト。SWE-Bench Pro 52.8%（Claude Opus 4.6 と同等）。AIME 2025: 97.0%。 |
| **MAI-Code-1-Flash** | コーディング | 5B パラメータ。SWE-Bench Pro で Claude Haiku 4.5 を 16pt 上回り、複雑なコーディングタスクで使用トークン 60% 削減。GitHub Copilot 専用設計。 |
| **MAI-Image-2.5** | 画像生成・編集 | text-to-image / image-to-image。Arena.ai で 2 位。PowerPoint・OneDrive 展開済み。Flash 版（低コスト・高速）も提供。 |
| **MAI-Image-2.5 Flash** | 画像生成（高速・低コスト版） | MAI-Image-2.5 の高速・低コスト版。高スケール設定向け。 |
| **MAI-Voice-2** | 音声合成 | 15 以上の言語に対応。感情表現・プロソディ制御・短いサンプルからの声紋クローニング。Flash 版も提供。 |
| **MAI-Voice-2 Flash** | 音声合成（高速・低コスト版） | MAI-Voice-2 の高速・低コスト版。 |
| **MAI-Transcribe-1.5** | 音声認識 | 43 言語対応。FLEURS ベンチマークで最高精度。競合モデル比で最大 5 倍高速。コンテンツバイアス補正対応。 |

### Frontier Tuning（企業向けカスタマイズ）

- **強化学習（RL）を実際の業務環境で適用**し、組織固有のワークフローをモデルに学習させる仕組み
- 学習データは企業自身のもの：実際のエージェントが完了したタスクのトレースが学習データになる
- 事例：MAI を Excel 向けにチューニングした結果、**GPT 5.4 と同等の精度を 10 倍の効率**で達成
- チューニング後のモデルは企業の環境内に留まり、**外部に出ない**

🔗 出典: [Building a hill-climbing machine（microsoft.ai）](https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/) ／ [Microsoft Frontier Tuning](https://microsoft.ai/models/microsoft-frontier-tuning/)

---

## MAI-Code-1-Flash の GitHub Copilot 対応

MAI ファミリーの中で **GitHub Copilot に特化した最初のモデル**。

- **Microsoft の小型ティア・コーディングモデル**で、**GitHub Copilot 向けに専用設計・チューニング**
- **VS Code から提供開始**、モデルピッカーで選択可能
- 提供プラン：**Free / Student / Pro / Pro+ / Max**（限定ユーザーから段階展開）
- 5B パラメータながら **Claude Haiku 4.5 を SWE-Bench Pro で 16pt 超過**、かつトークン消費 60% 削減
- 「Microsoft 製コーディングモデルの新しい波の第一弾」と位置づけ

> "MAI-Code-1-Flash, Microsoft's latest small-tier coding model, is now rolling out in GitHub Copilot starting with VS Code. ... Designed and tuned specifically for GitHub Copilot, this marks the first in a new wave of purpose-built coding models from Microsoft."

🔗 出典: [MAI-Code-1-Flash is now available for GitHub Copilot（GitHub Changelog）](https://github.blog/changelog/2026-06-02-mai-code-1-flash-is-now-available-for-github-copilot/) ／ [MAI-Code-1-Flash（microsoft.ai）](https://microsoft.ai/models/mai-code-1-flash/)

---

## まとめ

| 項目 | 一言で | 出典 |
|------|--------|------|
| Cloud Automations / Autopilot | スケジュール・イベント応答・起票・コメントを自動化 | GitHub Blog |
| GitHub Agentic Workflows（PAT 不要） | GITHUB_TOKEN 対応・組織課金・セキュリティ向上 | GitHub Changelog |
| Cloud Agent の業務範囲拡張 | 起票・議論開始・レビュー返信まで実行 | GitHub Blog |
| Memory++ / `/chronicle` | app/CLI/VS Code/GitHub.com 横断の文脈追跡 | GitHub Blog |
| Partner-built Agent Apps | 外部エージェントの利用・Issueアサイン | GitHub Blog |
| Gemini 対応 | CLI/Cloud Agent/app で Gemini 選択可 | CLI changelog |
| MAI モデルファミリー | 7 モデル（Thinking/Code/Image/Voice/Transcribe）をゼロから自社開発 | microsoft.ai |
| MAI-Code-1-Flash 対応 | 5B・Copilot 専用チューニング・SWE-Bench Pro でHaiku超 | GitHub Changelog |
| Frontier Tuning | 企業ワークフローでモデルをカスタム RL 学習 | microsoft.ai |
