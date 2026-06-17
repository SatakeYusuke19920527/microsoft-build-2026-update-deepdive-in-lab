# 04. コードレビュー — エージェント出力にスケールするレビュー

エージェントが生成する Pull Request が増えるほど、コードレビューへの圧力は累積します。**Copilot code review** は、ノイズをふるい分ける適応的・エージェント的なシステムを提供し、開発者が本当に重要なところに集中できるようにします。

## 主なアップデート

### カスタマイズ可能なレビュー
すべてのレビューに **自社の基準・社内システム・エンジニアリングコンテキスト** を反映できるよう、Copilot を拡張できます。

- **カスタムエージェントスキル**
- **MCP サーバー接続**
- **設定可能な Actions ワークフロー**

### Medium tier review（中位ティアレビュー）
Pull Request を **より高い推論能力のモデル** にルーティングし、精度（precision）と再現率（recall）を向上。

- 管理者はリポジトリ単位でガイドラインを **"low" または "medium"** に設定可能。
- 低リスクのコードには軽量・低コストのモデル、影響度の高いリポジトリには高性能モデル、という使い分けが可能。

### セキュリティ／レビュー用スキル
- **`/security-review`** スキル: セキュリティ重視の評価に特化した専用パス。
- **`/rubberduck`** スキル: 一般提供（GA）。複数のモデルファミリーを使って実装を批評し、新規の問題を発見。

### Azure DevOps ネイティブ対応
Azure DevOps 上でも **Copilot code review をネイティブに利用可能** に。ワンクリックレビュー・インラインコメント・コミット可能な修正提案が利用でき、管理者は任意のリポジトリでレビューを有効化できます。

## まとめ表

| 機能 | 内容 |
|------|------|
| カスタムスキル / MCP / Actions | レビューに自社標準を反映 |
| Medium tier review | 高推論モデルへルーティング（low/medium 設定） |
| `/security-review` | セキュリティ特化レビュー |
| `/rubberduck`（GA） | 複数モデルで実装を批評 |
| Azure DevOps 対応 | ネイティブのワンクリックレビュー |

## 参考リンク

- [Use Copilot code review（GitHub Docs）](https://docs.github.com/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
- [Code review concepts（GitHub Docs）](https://docs.github.com/copilot/concepts/agents/code-review)
