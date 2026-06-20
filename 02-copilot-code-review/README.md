# 2. Copilot Code Review

> エージェントが生成する Pull Request が増えるほど、コードレビューへの圧力は累積します。Build 2026 では **Copilot code review** が、ノイズをふるい分ける適応的・エージェント的なシステムへと強化されました。
> 出典：GitHub 公式ブログ [GitHub Copilot app: The agent-native desktop experience](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

> "As agents produce more pull requests, the pressure on code review compounds. Copilot code review brings an adaptable, agentic system to filter through the noise, allowing you to focus your energy where it matters most while Copilot conducts code reviews."

---

## レビューの拡張性強化

**Custom Agent Skills・MCP Server・Actions workflow** を使い、社内基準や内部システムに合わせてレビューを構成可能。

- すべてのレビューに **自社の基準・社内システム・エンジニアリングコンテキスト** を反映
- **カスタムエージェントスキル** / **MCP サーバー接続** / **設定可能な Actions ワークフロー** で拡張
- レビュー後は「Commit suggestion」「Add suggestion to batch」で提案を直接適用・バッチ化

> "You can now extend Copilot so every review reflects your own standards, internal systems, and engineering context via custom agent skills, MCP server connections, and configurable actions workflows."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Use Copilot code review（GitHub Docs）](https://docs.github.com/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)

---

## Medium tier review

**高度な推論モデルへルーティング**する、精度・再現率を高めたレビュー階層。

- PR を **より高い推論能力のモデル** にルーティング → **精度（precision）と再現率（recall）** を向上
- 管理者はリポジトリ単位でガイドラインを **"low" / "medium"** に設定
- 低リスクのコードは軽量・低コストモデル、影響度の高いリポジトリは堅牢なモデル、と使い分け

> "Copilot code review now offers medium tier review, which routes pull requests to a higher-reasoning model for better precision and recall. Admins can set guidelines for individual repositories to 'low' or 'medium'."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Code review concepts（GitHub Docs）](https://docs.github.com/copilot/concepts/agents/code-review)

---

## /security-review

**セキュリティ観点に特化**したコード評価スキル。

- Copilot に **セキュリティ重視の評価のための専用パス** を提供

> "The `/security-review` skill gives Copilot a dedicated path for security-focused evaluation."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

---

## /rubberduck の GA

実装・設計・テストを批評し、**見落としを探すセカンドオピニオン**機能。

- **一般提供（GA）** となり、**複数のモデルファミリー**を使って実装を批評し、新規の問題を発見

> "The `/rubberduck` skill is now generally available to use multiple model families to critique your implementation and find novel issues."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)

---

## Azure DevOps / Azure Repos 向け Copilot Code Review

**Azure Repos 上**でワンクリックレビュー・インラインコメント・修正提案のコミットを提供。**テクニカルプレビュー**。

- Azure DevOps（Azure Repos）でも **Copilot code review をネイティブに利用可能**
- **ワンクリックレビュー**・**インラインコメント**・**コミット可能な修正提案**
- 管理者は **任意のリポジトリ** でレビューを有効化できる

> "And if you're working on Azure DevOps, you can now use Copilot code review natively. Get the same one-click review, inline comments, and committable fix suggestions you expect, and admins can enable code review on whichever repos they want."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Code review concepts（GitHub Docs）](https://docs.github.com/copilot/concepts/agents/code-review)

---

## まとめ

| 項目 | 一言で | 状態 |
|------|--------|------|
| レビューの拡張性強化 | Custom Skills・MCP・Actions で社内基準を反映 | — |
| Medium tier review | 高推論モデルへルーティング（low/medium） | — |
| `/security-review` | セキュリティ特化の評価スキル | — |
| `/rubberduck` の GA | 複数モデルで実装を批評するセカンドオピニオン | GA |
| Azure Repos 向け | ADO でワンクリックレビュー・修正提案 | テクニカルプレビュー |
