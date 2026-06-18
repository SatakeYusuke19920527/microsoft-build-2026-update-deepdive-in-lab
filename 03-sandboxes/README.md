# 03. サンドボックス — クラウド／ローカルの隔離実行環境

> コードを「提案」するだけのエージェントでは、人の作業負担が大きいままです。有効に働くには、エージェントが **コードを実行し、結果を検査し、テストし、反復** できる必要があります——ただし **本番に触れずに**。それを支えるのが GitHub Copilot のサンドボックスです。

---

## 1. 背景：なぜサンドボックスが必要か

> "Agents that can only suggest code leave you do a lot of the work. To be more effective, agents need to run code, inspect results, test changes, and iterate, without touching production."

エージェントに「実行能力」を与えると有用性が一気に上がる一方、無制限の実行は **セキュリティとポリシー** の観点でリスクになります。サンドボックスは、エージェントが安全に行動できる **境界づけられた場所（bounded place）** を提供することで、この緊張関係を解消します。

---

## 2. ローカルサンドボックス

Copilot が **自分のマシン上の隔離環境** で動作します。

- ファイルシステム・ネットワーク接続・システム機能へのアクセスを **制限**
- ローカルサンドボックスのポリシーは **集中管理・強制（centrally configured and enforced）** が可能
- ローカルのリソース制約を受けにくい運用を実現

> "Copilot runs in an isolated environment directly on your machine, with restricted access to filesystems, network connectivity, and system capabilities."

---

## 3. クラウドサンドボックス

各サンドボックスは GitHub がホストする **完全に隔離されたエフェメラルな Linux 環境** で動作します。

- 組織が **独自のポリシー** を定義可能
- クラウドから、**どのデバイスでも・どこでも** Copilot セッションを **リモート制御** で引き継げる
- ローカルのリソース制約を回避できる

> "each sandbox runs in a fully isolated, ephemeral Linux environment hosted by GitHub. ... you can pick up Copilot sessions anywhere, on any device, with remote control."

---

## 4. ローカル vs クラウド 比較

| 観点 | ローカルサンドボックス | クラウドサンドボックス |
|------|----------------------|----------------------|
| 実行場所 | 自分のマシン上の隔離環境 | GitHubホストの隔離Linux環境 |
| 寿命 | ローカル環境 | エフェメラル（使い捨て） |
| アクセス制限 | FS・ネットワーク・システム機能を制限 | 完全隔離 |
| ポリシー | 集中管理・強制が可能 | 組織が独自に定義 |
| 強み | 低レイテンシ・手元で完結 | デバイス非依存・リソース制約なし・どこでも再開 |

→ 「どこで Copilot を動かすか」を選びつつ、セキュリティとエンタープライズポリシーの強制を優先できます。

---

## 5. 関連：Microsoft Execution Containers (MXC)

Windows 側では、OS レベルで封じ込めを行うサンドボックス基盤が発表されました。

- **MXC（Microsoft Execution Containers）**（プレビュー）
  - **OS 自体が封じ込めを強制** する、エンタープライズグレードのエージェント用サンドボックス
  - 開発者・IT 管理者が、よりシンプルに安全な環境を作成できる
  > "containment enforced by the operating system itself"
- **OpenClaw on Windows**：OS 強制の境界内でマルチステップ・ワークフローを実行
- **NVIDIA OpenShell**：MXC を使い、ポリシー管理・推論ルーティング・PII 難読化を追加した、自律エージェント向けセキュアランタイム

また Windows では、常時稼働（always-on）エージェントを安全に動かすための **ベストインクラスのサンドボックス** と、クラウド／ローカル両対応のモデル実行が示されています。

---

## 6. 導入の考え方

| シナリオ | 推奨 |
|---------|------|
| 手元で素早く反復・低レイテンシ重視 | ローカルサンドボックス（ポリシーは集中管理） |
| デバイス非依存・大規模・厳格な隔離 | クラウドサンドボックス（組織ポリシー定義） |
| Windows でOS強制の封じ込めが必要 | MXC / OpenClaw on Windows |

---

## 7. 参考リンク

- [About cloud and local sandboxes（GitHub Docs）](https://docs.github.com/copilot/concepts/about-cloud-and-local-sandboxes)
- [GitHub Copilot app（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
- Microsoft Blog（OMB Developer Blog）: https://aka.ms/AA10pe80
