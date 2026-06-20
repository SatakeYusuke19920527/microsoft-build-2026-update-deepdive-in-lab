# Microsoft Build 2026 — GitHub Copilot アップデート Deep Dive

> Microsoft Build 2026（2026年6月2日開催）で発表された **GitHub Copilot** 関連アップデートを、
> Microsoft Build 公式サイトおよび GitHub 公式ブログ／ドキュメントを参照してテーマ別にまとめたものです。

GitHub Copilot は「AIアシスタント」から、**人とエージェントが協働する開発のコントロールセンター（agent-native platform）** へと進化しました。本リポジトリでは、その主要アップデートをテーマごとのディレクトリに分けて解説します。さらに Copilot を取り巻く **Microsoft Agent Platform・ガバナンス・Windows 開発環境・Build 2026 全体** までを補完しています。

---

## 📚 ディレクトリ構成（テーマ別）

### 📖 まず読む：全体サマリ

| # | テーマ | 概要 |
|---|--------|------|
| [00-overview](./00-overview/README.md) | Overview（4テーマ × 22項目） | 顧客説明用の4テーマ再編と、Copilot関連22項目の一覧・章対応マップ |

### コア：GitHub Copilot（01〜09）

| # | テーマ | 概要 |
|---|--------|------|
| [01-copilot-app](./01-copilot-app/README.md) | GitHub Copilot アプリ | エージェントネイティブなデスクトップ体験 / My Work / git worktree / Agent Merge |
| [02-canvas-and-ax](./02-canvas-and-ax/README.md) | Canvas と Agent Experience | 人とエージェントの双方向ワークサーフェス |
| [03-sandboxes](./03-sandboxes/README.md) | サンドボックス | クラウド／ローカルの隔離実行環境 |
| [04-code-review](./04-code-review/README.md) | コードレビュー | エージェント出力にスケールするレビュー / medium tier / Azure DevOps 対応 |
| [05-sdk-and-cli](./05-sdk-and-cli/README.md) | Copilot SDK と CLI | 1つのランタイムを多様なサーフェスで / `/fleet` / MXC分離 |
| [06-automation-and-cloud-agent](./06-automation-and-cloud-agent/README.md) | 自動化とクラウドエージェント | スケジュール実行 / Memory++ / chronicle |
| [07-partner-agent-apps](./07-partner-agent-apps/README.md) | パートナーエージェントアプリ | サードパーティ製エージェントの統合 |
| [08-ai-models](./08-ai-models/README.md) | AIモデル | MAI-Code-1 ほか MAI モデルファミリー |
| [09-microsoft-iq-context](./09-microsoft-iq-context/README.md) | Microsoft IQ コンテキスト層 | エージェントに知識を接続する基盤 |

### 拡張：Copilot を取り巻くシステム（10〜13）

| # | テーマ | 概要 |
|---|--------|------|
| [10-agent-platform](./10-agent-platform/README.md) | Microsoft Agent Platform | Build in GitHub → Run in Foundry → Govern with Agent 365 |
| [11-agent-governance-security](./11-agent-governance-security/README.md) | ガバナンスとセキュリティ | Agent 365 / ACS / ASSERT / Entra・Purview・Defender |
| [12-windows-for-developers](./12-windows-for-developers/README.md) | Windows for Developers | Copilotが動く環境 / Dev Configurations / Intelligent Terminal / MXC |
| [13-broader-build-2026](./13-broader-build-2026/README.md) | Build 2026 全体マップ | 量子・Discovery・Scout・Azureデータ・MAI Lab などの俯瞰 |

### 発表資料

| # | テーマ | 概要 |
|---|--------|------|
| [14-presentation](./14-presentation/README.md) | 発表資料（Marp） | 01〜13 を発表できるスライド（30分版） |

---

## 🔑 Build 2026 の要点（3行サマリ）

1. **GitHub Copilot アプリ** が技術プレビュー公開。複数エージェントを並列で動かし、レビュー・CI・マージまでを1か所で統制。
2. **Canvas／サンドボックス／コードレビュー／SDK／自動化** が「ひとつのシステム」として統合され、開発者が品質・ポリシー・デリバリーの統制を保ったままエージェントに作業を任せられる。
3. Microsoft の **MAI-Code-1 / MAI-Code-1-Flash** が Copilot / VS Code に搭載され、**Gemini** など複数モデルも Copilot surfaces で選択可能に。**Microsoft IQ** がエージェントに世界知識と業務知識を接続し、**Build in GitHub → Run in Foundry → Govern with Agent 365** という enterprise 像が示された。

> 💡 Copilot 関連リリースは粒度細かく分けると **約22件**。顧客説明用には **「Agent-native development」「Trusted execution」「AI code review」「Extensible agent platform」** の4テーマに再編すると伝わりやすい（→ [00-overview](./00-overview/README.md)）。

---

## 🔗 主要な一次情報ソース

- GitHub Blog: [GitHub Copilot app: The agent-native desktop experience](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
- Microsoft 公式: [Build26-news](https://github.com/microsoft/Build26-news)
- Microsoft Blog（OMB Developer Blog）: https://aka.ms/AA10pe80
- Enterprise Agent Platform（Jay Parikh）: https://aka.ms/AA1188jd
- Windows at Build 2026: https://aka.ms/Windows-Build2026
- GitHub Docs: https://docs.github.com/copilot

> 注: 各ページの引用文・機能名は上記一次情報の記載に基づきます。プレビュー機能は提供状況・名称が変更される場合があります。
