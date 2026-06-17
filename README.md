# Microsoft Build 2026 — GitHub Copilot アップデート Deep Dive

> Microsoft Build 2026（2026年6月2日開催）で発表された **GitHub Copilot** 関連アップデートを、
> Microsoft Build 公式サイトおよび GitHub 公式ブログ／ドキュメントを参照してテーマ別にまとめたものです。

GitHub Copilot は「AIアシスタント」から、**人とエージェントが協働する開発のコントロールセンター（agent-native platform）** へと進化しました。本リポジトリでは、その主要アップデートをテーマごとのディレクトリに分けて解説します。

---

## 📚 ディレクトリ構成（テーマ別）

| # | テーマ | 概要 |
|---|--------|------|
| [01-copilot-app](./01-copilot-app/README.md) | GitHub Copilot アプリ | エージェントネイティブなデスクトップ体験 / My Work / git worktree / Agent Merge |
| [02-canvas-and-ax](./02-canvas-and-ax/README.md) | Canvas と Agent Experience | 人とエージェントの双方向ワークサーフェス |
| [03-sandboxes](./03-sandboxes/README.md) | サンドボックス | クラウド／ローカルの隔離実行環境 |
| [04-code-review](./04-code-review/README.md) | コードレビュー | エージェント出力にスケールするレビュー / medium tier / Azure DevOps 対応 |
| [05-sdk-and-cli](./05-sdk-and-cli/README.md) | Copilot SDK と CLI | 1つのランタイムを多様なサーフェスで |
| [06-automation-and-cloud-agent](./06-automation-and-cloud-agent/README.md) | 自動化とクラウドエージェント | スケジュール実行 / Memory++ / chronicle |
| [07-partner-agent-apps](./07-partner-agent-apps/README.md) | パートナーエージェントアプリ | サードパーティ製エージェントの統合 |
| [08-ai-models](./08-ai-models/README.md) | AIモデル | MAI-Code-1 ほか MAI モデルファミリー |
| [09-microsoft-iq-context](./09-microsoft-iq-context/README.md) | Microsoft IQ コンテキスト層 | エージェントに知識を接続する基盤 |

---

## 🔑 Build 2026 の要点（3行サマリ）

1. **GitHub Copilot アプリ** が技術プレビュー公開。複数エージェントを並列で動かし、レビュー・CI・マージまでを1か所で統制。
2. **Canvas／サンドボックス／コードレビュー／SDK／自動化** が「ひとつのシステム」として統合され、開発者が品質・ポリシー・デリバリーの統制を保ったままエージェントに作業を任せられる。
3. Microsoft の **MAI-Code-1** が Copilot / VS Code に搭載され、**Microsoft IQ** がエージェントに世界知識と業務知識を接続。

---

## 🔗 主要な一次情報ソース

- GitHub Blog: [GitHub Copilot app: The agent-native desktop experience](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
- Microsoft 公式: [Build26-news](https://github.com/microsoft/Build26-news)
- Microsoft Blog（OMB Developer Blog）: https://aka.ms/AA10pe80
- GitHub Docs: https://docs.github.com/copilot

> 注: 各ページの引用文・機能名は上記一次情報の記載に基づきます。プレビュー機能は提供状況・名称が変更される場合があります。
