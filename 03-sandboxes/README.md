# 03. サンドボックス — クラウド／ローカルの隔離実行環境

コードを「提案」するだけのエージェントでは、開発者の作業負担が大きいままです。より有効に働くには、エージェントが **コードを実行し、結果を検査し、変更をテストし、反復** できる必要があります。ただし **本番に触れずに**。それを実現するのが GitHub Copilot のサンドボックスです。

## Cloud and local sandboxes for GitHub Copilot

エージェントが安全に行動できる **境界づけられた場所（bounded place）** を提供します。Copilot を **ローカルマシン上で動かすか、クラウドで動かすか** を選択でき、セキュリティとエンタープライズポリシーの強制を優先しつつ、エージェント駆動のワークフローを解放します。

### ローカルサンドボックス
- Copilot が **自分のマシン上の隔離環境** で動作。
- ファイルシステム・ネットワーク接続・システム機能へのアクセスを **制限**。
- ローカルサンドボックスのポリシーは **集中管理・強制** が可能。
- ローカルのリソース制約を受けにくい運用を実現。

### クラウドサンドボックス
- 各サンドボックスは GitHub がホストする **完全に隔離されたエフェメラルな Linux 環境** で動作。
- 組織が独自のポリシーを定義可能。
- クラウドから、**どのデバイスでも・どこでも** Copilot セッションをリモート制御で引き継げる。

## ポイント整理

| 観点 | ローカルサンドボックス | クラウドサンドボックス |
|------|----------------------|----------------------|
| 実行場所 | 自分のマシン上の隔離環境 | GitHub ホストの隔離 Linux 環境 |
| 寿命 | ローカル環境 | エフェメラル（使い捨て） |
| ポリシー | 集中管理・強制可能 | 組織が独自定義 |
| 強み | 低レイテンシ・手元で完結 | デバイス非依存・リソース制約なし |

## 関連: Microsoft Execution Containers (MXC)

Windows 側では **Microsoft Execution Containers (MXC)** がプレビュー提供。OS自体が封じ込めを強制する、エンタープライズグレードのエージェント用サンドボックス環境を、よりシンプルに作成できます。

## 参考リンク

- [About cloud and local sandboxes（GitHub Docs）](https://docs.github.com/copilot/concepts/about-cloud-and-local-sandboxes)
- [GitHub Copilot app（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
