# 04. コードレビュー — エージェント出力にスケールするレビュー

> エージェントが生成する Pull Request が増えるほど、コードレビューへの圧力は累積します。**Copilot code review** は、ノイズをふるい分ける適応的・エージェント的なシステムで、開発者が本当に重要なところに集中できるようにします。

---

## 1. 背景：レビューがボトルネックになる

- エージェントが生む **PR が増える** ほど、レビューへの圧力が **累積（compound）** する
- 人手の確認がスケールしなければ、せっかくの高速化が **レビュー待ち** で相殺される

> "As agents produce more pull requests, the pressure on code review compounds."

Copilot code review は、この圧力に対して **適応的（adaptable）かつエージェント的（agentic）なシステム** でノイズをふるい分け、開発者がエネルギーを **重要な箇所に集中** できるようにします。

---

## 2. 自社基準でのカスタマイズ

すべてのレビューに、**自社の基準・社内システム・エンジニアリングコンテキスト** を反映できます。

| 拡張手段 | 用途 |
|---------|------|
| **カスタムエージェントスキル** | 自社固有のレビュー観点・チェックを定義 |
| **MCP サーバー接続** | 社内システム・データに接続して文脈を補う |
| **設定可能な Actions ワークフロー** | レビューを CI/CD パイプラインに組み込む |

> "extend Copilot so every review reflects your own standards, internal systems, and engineering context via custom agent skills, MCP server connections, and configurable actions workflows."

レビュー後には **「Commit suggestion」「Add suggestion to batch」** といった操作で、提案を直接適用・バッチ化できます。

---

## 3. Medium tier review（レビュー強度の制御）

PR を **より高い推論能力のモデル** にルーティングし、**精度（precision）と再現率（recall）** を高めます。

- 管理者はリポジトリ単位でガイドラインを **"low" または "medium"** に設定可能
- **低リスクのコード** → 軽量・低コストのモデル
- **影響度の高いリポジトリ** → より堅牢なモデル

> "routes pull requests to a higher-reasoning model for better precision and recall. ... assign lighter, cost-efficient models for low-risk code and save more robust model use for repos with higher impact."

→ **コストと品質のバランス** をリポジトリ単位で最適化できる。

---

## 4. セキュリティ／レビュー用スキル

| スキル | 状態 | 内容 |
|--------|------|------|
| **`/security-review`** | — | セキュリティ重視の評価に特化した専用パス |
| **`/rubberduck`** | **GA（一般提供）** | 複数のモデルファミリーを使い実装を批評し、新規の問題を発見 |

> "The `/security-review` skill gives Copilot a dedicated path for security-focused evaluation. The `/rubberduck` skill is now generally available to use multiple model families to critique your implementation and find novel issues."

---

## 5. Azure DevOps / Azure Repos ネイティブ対応

Azure DevOps（**Azure Repos**）上でも **Copilot code review をネイティブに利用可能**（テクニカルプレビュー）になりました。

- **ワンクリックレビュー**
- **インラインコメント**
- **コミット可能な修正提案（committable fix suggestions）**
- 管理者は **任意のリポジトリ** でレビューを有効化できる

> "if you're working on Azure DevOps, you can now use Copilot code review natively. Get the same one-click review, inline comments, and committable fix suggestions you expect."

---

## 6. まとめ

| 機能 | 価値 |
|------|------|
| カスタムスキル / MCP / Actions | 自社標準をレビューに反映 |
| Medium tier review（low/medium） | コストと品質をリポジトリ単位で最適化 |
| `/security-review` | セキュリティ特化レビュー |
| `/rubberduck`（GA） | 複数モデルで実装を批評・新規問題発見 |
| Azure DevOps ネイティブ対応 | GitHub と同等の体験を ADO でも |

---

## 7. 参考リンク

- [Use Copilot code review（GitHub Docs）](https://docs.github.com/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
- [Code review concepts（GitHub Docs）](https://docs.github.com/copilot/concepts/agents/code-review)
- [GitHub Copilot app（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
