# 1. Copilot app / エージェント開発体験

> Microsoft Build 2026 で発表された、**GitHub Copilot のエージェント開発体験**に関するアップデートをまとめます。
> 出典：GitHub 公式ブログ [GitHub Copilot app: The agent-native desktop experience](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

---

## GitHub Copilot app

複数のエージェント作業・Issue・PR・セッション・自動化を **My Work** で一元管理するデスクトップアプリ。**テクニカルプレビュー**。

- GitHub 上に構築された **エージェントネイティブのデスクトップ体験**（エディタのサイドバーではなくスタンドアロン）
- 接続したリポジトリをまたいで、**My Work** ビューで進行中の作業（セッション・Issue・PR・バックグラウンド自動化）を一元把握
- アイデア・既存 Issue・PR から開始し、**複数エージェントを並列にオーケストレーション**
- 既存の **Copilot Pro / Pro+ / Business / Enterprise** プランで利用可能

> "The new GitHub Copilot app is the agent-native desktop experience built on GitHub. From a single **My Work** view, you can see work in motion across connected repositories: active sessions, issues, pull requests, and background automations. The Copilot app is now available in technical preview..."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [GitHub Copilot app（features）](https://github.com/features/ai/github-app)

---

## Copilot Max

エージェントを **高頻度で使うユーザー向けの上位利用枠**。

- 並列エージェント運用・上位モデル選択・長時間の autopilot 的ワークフローを後押しする上位プラン階層
- 既存の Free / Pro / Pro+ / Business / Enterprise に加わる位置づけ
- 例：**MAI-Code-1-Flash** は Free / Student / Pro / Pro+ / **Max** プランに展開（→ [04章](../04-cloud-agent-context-ecosystem/README.md)）

🔗 出典: [MAI-Code-1-Flash is now available for GitHub Copilot（GitHub Changelog）](https://github.blog/changelog/2026-06-02-mai-code-1-flash-is-now-available-for-github-copilot/)

---

## Agent Merge

PR のレビュー・CI 監視・失敗チェック対応・承認待機・**条件付きマージ**までを自動化。

- 作成された Pull Request を **レビュー・チェック・マージ** まで運ぶ
- **CI を監視**し、**必須レビュアー**を追跡し、**失敗チェックに対処**し、すべての条件が満たされるのを待つ
- **どこまで自動化するかは開発者が選択**（CIをグリーンに戻す／フィードバック対応／条件達成でマージ）

> "Then Agent Merge helps carry that pull request through review, checks, and merge. It monitors CI, tracks required reviewers, addresses failing checks, and waits for all conditions to be satisfied. You choose how far Copilot should go..."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

---

## Canvas

プラン・PR・ターミナル・ブラウザ・デプロイ・ダッシュボードなどを、**人間とエージェントが共同で操作・レビューする作業面**。

- チャットの「長いスクロール」を超えて、**作業そのものを可視化**する双方向ワークサーフェス
- エージェントが作業しながら Canvas を更新し、開発者は同じ面で **編集・並べ替え・承認・軌道修正**
- これは人とエージェントが共に操作する **Agent Experience (AX)** の始まり

> "Canvases are bidirectional work surfaces for humans and agents. A canvas might show a plan, pull request, browser session, terminal, deployment, dashboard, or workflow state. Agents update the canvas as they work, and developers can edit, reorder, approve, or redirect that work on the same surface."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Working with canvas extensions（GitHub Docs）](https://docs.github.com/copilot/how-tos/github-copilot-app/working-with-canvas-extensions)

---

## Local Sandboxes

ローカル PC 上で、**ファイル・ネットワーク・システム権限を制限**した隔離実行環境。

- Copilot が **自分のマシン上の隔離環境** で動作
- ファイルシステム・ネットワーク接続・システム機能へのアクセスを **制限**
- ローカルサンドボックスのポリシーは **集中管理・強制** が可能

> "With local sandboxing, Copilot runs in an isolated environment directly on your machine, with restricted access to filesystems, network connectivity, and system capabilities. Local sandbox policies can be centrally configured and enforced."

🔗 出典: [About cloud and local sandboxes（GitHub Docs）](https://docs.github.com/copilot/concepts/about-cloud-and-local-sandboxes) ／ [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

---

## Cloud Sandboxes

GitHub ホストの **一時的な隔離 Linux 環境**でエージェントを動かす機能。**どのデバイスからも引き継ぎ可能**。

- 各サンドボックスは GitHub がホストする **完全に隔離されたエフェメラルな Linux 環境** で動作
- 組織が **独自のポリシー** を定義可能
- クラウドから、**どのデバイスでも・どこでも** Copilot セッションをリモート制御で引き継げる

> "In the cloud, each sandbox runs in a fully isolated, ephemeral Linux environment hosted by GitHub. Organizations define their own policies. From the cloud, you can pick up Copilot sessions anywhere, on any device, with remote control."

🔗 出典: [About cloud and local sandboxes（GitHub Docs）](https://docs.github.com/copilot/concepts/about-cloud-and-local-sandboxes) ／ [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

---

## まとめ

| 項目 | 一言で | 状態 |
|------|--------|------|
| GitHub Copilot app | My Work で複数エージェントを一元管理 | テクニカルプレビュー |
| Copilot Max | 高頻度利用者向けの上位枠 | プラン階層 |
| Agent Merge | レビュー〜条件付きマージまで自動化 | — |
| Canvas | 人とエージェントの共同作業面 | — |
| Local Sandboxes | 権限制限のローカル隔離実行 | — |
| Cloud Sandboxes | GitHubホストの一時隔離Linux | — |
