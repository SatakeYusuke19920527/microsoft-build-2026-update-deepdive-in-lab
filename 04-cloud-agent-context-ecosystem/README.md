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

## MAI-Code-1-Flash の GitHub Copilot 対応

Microsoft のコーディングモデルを Copilot で利用可能に。

- **Microsoft の小型ティア・コーディングモデル**で、**GitHub Copilot 向けに専用設計・チューニング**
- **VS Code から提供開始**、モデルピッカーで選択可能
- 提供プラン：**Free / Student / Pro / Pro+ / Max**（限定ユーザーから段階展開）
- サイズの割に **ベストインクラスの品質**で、軽量なコーディングワークフローに最適

> "MAI-Code-1-Flash, Microsoft's latest small-tier coding model, is now rolling out in GitHub Copilot starting with VS Code. ... Designed and tuned specifically for GitHub Copilot, this marks the first in a new wave of purpose-built coding models from Microsoft."

🔗 出典: [MAI-Code-1-Flash is now available for GitHub Copilot（GitHub Changelog）](https://github.blog/changelog/2026-06-02-mai-code-1-flash-is-now-available-for-github-copilot/) ／ [MAI-Code-1-Flash（microsoft.ai）](https://microsoft.ai/models/mai-code-1-flash/)

---

## まとめ

| 項目 | 一言で | 出典 |
|------|--------|------|
| Cloud Automations / Autopilot | スケジュール・イベント応答・起票・コメントを自動化 | GitHub Blog |
| Cloud Agent の業務範囲拡張 | 起票・議論開始・レビュー返信まで実行 | GitHub Blog |
| Memory++ / `/chronicle` | app/CLI/VS Code/GitHub.com 横断の文脈追跡 | GitHub Blog |
| Partner-built Agent Apps | 外部エージェントの利用・Issueアサイン | GitHub Blog |
| Gemini 対応 | CLI/Cloud Agent/app で Gemini 選択可 | CLI changelog |
| MAI-Code-1-Flash 対応 | MS コーディングモデルを Copilot で利用 | GitHub Changelog |
