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

# GitHub Copilot Appとは

GitHub Copilot Appは、**複数のAIエージェントに開発タスクを並列で任せ、Issue・実装・PR・CI確認までを1つの画面で管理するデスクトップアプリ**です。

GitHub Copilot CLIをベースにしており、GitHubのリポジトリ、Issue、ブランチ、Pull Request、CIとネイティブに連携します。

単にコードを書くAIではなく、**AIエージェントによる開発作業を管理・指揮するためのコントロールプレーン**という位置づけです。

> GitHub公式では、並列ワークストリーム、GitHub統合、PRライフサイクル管理を一か所に集約するエージェント駆動型開発アプリと説明されています。  
> https://docs.github.com/ja/copilot/concepts/agents/github-copilot-app

---

## 何が良いのか

### 1. 複数タスクを並列で進められる

複数のエージェントセッションを同時に起動できます。

例えば、以下を並行して進められます。

- Issue #123のバグ修正
- テストコード追加
- API仕様のリファクタリング
- README更新
- CI失敗の原因調査

各セッションは、専用のGit worktreeとブランチで分離されます。

```text
Agent A: バグ修正
Agent B: テスト追加
Agent C: 技術的負債の解消
```

人間は、1件ずつ実装するのではなく、複数のAIエージェントに仕事を振り、成果物をレビューする形になります。

---

### 2. IssueからPR・CIまでを一つの画面で扱える

通常の開発では、以下を行き来します。

```text
GitHub Issue
  ↓
VS Code
  ↓
Terminal
  ↓
Pull Request
  ↓
GitHub Actions / CI
```

Copilot Appでは、以下をアプリ内でまとめて実施できます。

- Issueの検索・参照
- Issueからエージェントセッション開始
- コード変更の確認
- Pull Request作成
- PRレビュー
- CIチェック結果の確認
- PRマージ

つまり、価値はコード生成そのものよりも、**開発フロー全体のコンテキストスイッチを減らすこと**です。

---

### 3. AIの自律度をタスクごとに使い分けられる

Copilot Appでは、エージェントの実行モードを選べます。

| モード          | 使いどころ                                       |
| --------------- | ------------------------------------------------ |
| **Interactive** | 人間と会話しながら実装・修正する                 |
| **Plan**        | 先に実装計画を出させて、人間が承認してから進める |
| **Autopilot**   | 小さく明確な作業を完全自律で任せる               |

例えば、以下のように使い分けます。

```text
認証・課金・本番DB変更
→ Planモード

Lint修正・テスト追加・ドキュメント更新
→ Autopilotモード
```

---

### 4. GitHubの管理資産をそのまま活用できる

GitHubとネイティブに接続されるため、以下を活用できます。

- Repository
- Branch
- Issue
- Pull Request
- CI pipeline
- GitHub Actions

つまり、外部AIにコードを書かせてからGitHubへ持ち込むのではなく、**GitHubの開発プロセスそのものにAIを組み込む**設計です。

---

### 5. MCP・Instructions・Skillsで会社仕様にできる

Copilot Appでは、以下を構成できます。

- Global Instructions
- MCP Server
- Agent Skills

これにより、企業の開発標準をAIに持たせられます。

```text
例：
- 社内コーディング規約
- Azureデプロイ標準
- セキュリティレビュー基準
- PRテンプレート
- Terraformルール
- Jira / ServiceNow / Datadog連携
```

その結果、汎用AIではなく、**その会社の開発プロセスに沿って動くAIエージェント**に近づきます。

---

## 典型的な使い方

```text
1. GitHub Issueを選ぶ
2. Copilot Appでエージェントセッションを開始する
3. エージェントがブランチを作成する
4. コード変更・テスト実行を行う
5. 人間が差分をレビューする
6. Pull Requestを作成する
7. CI結果を確認する
8. マージする
```

この流れを、複数Issueで並列に回せます。

---

## VS Code Agent Mode / Copilot CLIとの違い

| 製品・機能             | 主な役割                                                      |
| ---------------------- | ------------------------------------------------------------- |
| **VS Code Agent Mode** | 目の前のコードを対話的に実装・修正する                        |
| **Copilot CLI**        | ターミナル中心で開発、調査、自動化を進める                    |
| **GitHub Copilot App** | 複数のAIエージェントを並列運用し、Issue〜PR〜CIを一元管理する |

```text
個人開発者として1タスクを深く実装する
→ VS Code Agent Mode / Copilot CLI

複数のIssue・PRをAIに同時に進めさせる
→ GitHub Copilot App
```

---

## どんな顧客に刺さるか

特に相性が良いのは、以下のような組織です。

- エンジニア採用が難しく、開発生産性を上げたいスタートアップ
- BacklogやIssueが積み上がっているプロダクトチーム
- QA、テスト追加、リファクタリングを後回しにしがちな組織
- 複数リポジトリ・複数PRを管理するEM・Tech Lead
- GitHub Actions、MCP、Agent Skillsまで活用したい企業

### スタートアップ向けの言い方

> **開発者を置き換えるものではなく、1人の開発者が複数のAIエージェントを指揮し、より多くのIssueとPRを処理できるようにする仕組みです。**

---

## 注意点

- 現在は**Technical Preview**
- 利用には有料Copilotプランが必要
- Copilot Business / Enterpriseでは、組織側でPreview機能とCopilot CLIの有効化が必要
- 公開コードと一致・類似するコードが生成される可能性があるため、レビューとガバナンスは必要

---

## 一言で説明するなら

> **GitHub Copilot Appは、複数のAIエージェントに開発作業を並列で任せ、IssueからPR・CIまでをまとめて管理するための、AI時代の開発マネジメント画面です。**

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [GitHub Copilot app（features）](https://github.com/features/ai/github-app)

---

## Copilot Max

エージェントを **高頻度で使うユーザー向けの上位利用枠**。

- 並列エージェント運用・上位モデル選択・長時間の autopilot 的ワークフローを後押しする上位プラン階層
- 既存の Free / Pro / Pro+ / Business / Enterprise に加わる位置づけ
- 例：**MAI-Code-1-Flash** は Free / Student / Pro / Pro+ / **Max** プランに展開（→ [04章](../04-cloud-agent-context-ecosystem/README.md)）

## Pro+からCopilot Maxへ変える境界線

結論として、**Pro+の月間7,000 AI Creditsを継続的に使い切る、またはAI Agentを「補助」ではなく「複数人の開発メンバー」のように運用する段階**が、Maxへ上げる境界線です。

| プラン       | 月額 | 月間AI Credits | 向いている人                                          |
| ------------ | ---: | -------------: | ----------------------------------------------------- |
| Copilot Pro+ |  $39 |          7,000 | 個人開発・日常的なAgent利用・上位モデル利用           |
| Copilot Max  | $100 |         20,000 | 長時間・高頻度・複数Agentを継続運用するパワーユーザー |

月額差は **$61** ですが、AI Creditsは **約2.9倍** になります。  
Pro+の7,000 Creditsを超えて追加課金する頻度が高いなら、Maxの方が合理的です。

---

### Maxへ上げるべきケース

以下のうち、**2つ以上が当てはまるならMaxを検討する境界線**です。

- 月末前にPro+の7,000 AI Creditsを使い切る
- 追加課金を毎月30ドル以上している
- Copilot Appで3〜5個以上のAgentを並列実行している
- Cloud AgentにIssue対応を継続的に任せている
- Copilot CLIを毎日使い、長い調査・実装・テストループを回している
- 高性能モデルを日常的に使い、大規模コードベースの解析や複雑な設計支援を依頼している
- テスト追加、リファクタリング、CI修正、ドキュメント更新をAIに常時任せている
- 新モデル・新Agent機能を早く試すこと自体に価値がある

---

### Pro+のままでよいケース

以下ならPro+で十分です。

- Copilotは主にVS Codeの補完・Chat用途
- Agent利用は週に数回程度
- Cloud Agentは必要なときだけ使う
- 1回に1つのIssueやPRを処理することが多い
- AI Creditsが月7,000以内に収まっている
- AIに任せるのは小規模修正、テスト追加、調査、コードレビューが中心
- 新モデルへの最優先アクセスが必須ではない

---

### 実務的な判断基準

最も分かりやすい判断式は以下です。

```text
Pro+利用料 $39
+
毎月の追加AI Credits課金
≧
Max $100

つまり、Pro+に加えて毎月61ドル以上の追加利用をしているなら、金額面ではMaxへ移行した方が安くなります。

ただし、実際には金額だけでなく、以下も重要です。

Agentが途中で止まる
↓
月末にCredits不足で作業を抑える
↓
高性能モデルの利用を控える
↓
開発スピードが落ちる

この状態になっているなら、追加料金の損得よりも、Maxへ上げる価値があります。

ユースケース別の目安
利用パターン	推奨
コード補完、Chat、軽いレビュー中心	Pro
上位モデル、週数回のAgent利用	Pro+
毎日CLIやCloud Agentを使う	Pro+から検討
複数Issueを並列Agentで処理する	Max候補
AIにテスト・修正・PR作成を常時任せる	Max
AI Agentを開発チームの稼働力として扱う	Max
一言で言うなら

Pro+は「高度なCopilotを使う個人開発者向け」、Maxは「複数のAIエージェントを継続稼働させるAIネイティブ開発者向け」です。

月7,000 Creditsを超えることが常態化し、AI Agentの利用量が自分の開発生産性に直結しているなら、Maxへ上げるタイミングです。

🔗 公式情報:

https://docs.github.com/ja/copilot/concepts/billing/usage-based-billing-for-individuals
https://docs.github.com/en/copilot/get-started/plans

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

| 項目               | 一言で                               | 状態                 |
| ------------------ | ------------------------------------ | -------------------- |
| GitHub Copilot app | My Work で複数エージェントを一元管理 | テクニカルプレビュー |
| Copilot Max        | 高頻度利用者向けの上位枠             | プラン階層           |
| Agent Merge        | レビュー〜条件付きマージまで自動化   | —                    |
| Canvas             | 人とエージェントの共同作業面         | —                    |
| Local Sandboxes    | 権限制限のローカル隔離実行           | —                    |
| Cloud Sandboxes    | GitHubホストの一時隔離Linux          | —                    |
```
