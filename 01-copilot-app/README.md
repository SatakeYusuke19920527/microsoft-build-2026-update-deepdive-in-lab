# 01. GitHub Copilot アプリ — エージェントネイティブなデスクトップ体験

Build 2026 の目玉。GitHub Copilot アプリは、エディタのサイドバーではなく **GitHub 上に構築された独立したデスクトップ体験** として登場しました。Copilot Pro / Pro+ / Business / Enterprise の既存プランで **技術プレビュー** が利用できます。

## なぜ必要か

エージェント活用で開発は速くなった一方、ワークフローの分断・コンテキストスイッチの増加・エージェント生成コードのレビュー負荷という課題が生じました。多くの開発ツールは「複数エージェントを並列で指揮する」前提で作られていません。Copilot アプリはこの課題に応える **エージェント開発のコントロールセンター** です。

## 主な機能

### My Work ダッシュボード
接続したリポジトリをまたいで、進行中の作業（アクティブセッション・Issue・Pull Request・バックグラウンド自動化）を **単一のビュー** で把握できます。

### 並列エージェントセッション × git worktree
各セッションは **独立した git worktree**（ブランチの実体コピー）上で動作。複数エージェントが互いに干渉せず並行作業できます。worktree の作成・後始末・ブランチ管理はアプリが自動処理し、手動セットアップは不要です。

> "Each session uses git worktrees, so work stays separated"

### Agent Merge
Pull Request をレビュー・チェック・マージまで運ぶ機能。CI を監視し、必須レビュアーを追跡し、失敗チェックに対処し、すべての条件が満たされるのを待ちます。**どこまで自動化するか（CIをグリーンに戻す／フィードバック対応／条件を満たしたらマージ）は開発者が選択** できます。

## 利用シーン例

> 本番バグの調査をするエージェント、バックログのIssueを実装するエージェント、PRのレビューフィードバックに対応するエージェント——この3つを朝の時点で同時に走らせ、それぞれの変更を検査・軌道修正・テスト・マージする。

## 引用（一次情報）

- "now in preview, brings agentic development to a native desktop experience – and a much wider audience"
- "Start from an idea, an existing issue or PR, orchestrate multiple agent sessions in parallel, and keep changes moving through review, CI and merge."

## 参考リンク

- [GitHub Copilot app（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
- [GitHub Copilot app（features）](https://github.com/features/ai/github-app)
