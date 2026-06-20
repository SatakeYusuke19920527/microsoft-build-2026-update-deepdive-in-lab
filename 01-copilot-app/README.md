# 01. GitHub Copilot アプリ — エージェントネイティブなデスクトップ体験

> Build 2026 の中核発表。GitHub Copilot は **エディタのサイドバー機能** から、**GitHub 上に構築された独立したデスクトップ体験** へと進化しました。Copilot Pro / Pro+ / Business / Enterprise の **既存プラン** で **技術プレビュー（technical preview）** が利用できます。

---

## 1. 背景：なぜ「アプリ」が必要だったか

エージェント活用で開発は速くなりましたが、その副作用として次の課題が顕在化しました。

- **ワークフローの分断**とコンテキストスイッチの増加
- **エージェント生成コードのレビュー負荷**の増大
- 多くの開発ツールが **「複数エージェントを並列で指揮する」前提で設計されていない**
  - コンテキストがウィンドウ間に散乱し、「今何が動いているか」を見失う
  - PR に「エージェントが何を試し・何を検証したか」の **痕跡（trail）** が残らない

> "most developer tools were not designed for directing multiple agents in parallel. Context scatters across windows. You lose track of what's running."

GitHub 上では、エージェント活用により **リポジトリ作成・PR活動・API利用がいずれも加速**しています。コミットは前年比でほぼ倍増し **月間14億超**、GitHub Actions は **週20億分超**。この規模に応えるため、GitHub は基盤のスケールと、エージェント開発の「コントロールセンター」を提示しました。

---

## 2. My Work ダッシュボード

接続したリポジトリをまたいで、進行中の作業を **単一のビュー（single view）** で把握できます。

| 表示対象 | 内容 |
|---------|------|
| アクティブセッション | 現在エージェントが作業中のセッション |
| Issue | インボックスから着手できる課題 |
| Pull Request | レビュー・マージ待ちの変更 |
| バックグラウンド自動化 | スケジュール／イベント駆動で動く処理 |

**典型シナリオ（朝の3並列）**

- 🐛 本番バグを調査するエージェント
- ✨ バックログの Issue を実装するエージェント
- 🔁 PR のレビューフィードバックに対応するエージェント

それぞれが **独立した環境** で動き、開発者は変更を **検査・軌道修正・テスト・マージ** できます。プロンプトから始めても、インボックスの Issue から始めても、Copilot は接続済みの Issue・PR・リポジトリから **必要なコンテキストを取得** します。

---

## 3. git worktree による並列セッション

各セッションは **独立した git worktree**（＝ブランチの実体コピー）上で動作します。

- 複数のエージェントセッションが **互いに踏み合わずに** 並行作業できる
- worktree の作成・後始末・ブランチ管理は **アプリが全自動で処理**
- 手動セットアップ・クリーンアップ・ブランチのやりくりは不要

> "Every session runs in its own git worktree, a real, isolated copy of your branch. ... no manual setup, no cleanup, no branch juggling."

**ポイント**：これにより「並列でエージェントを走らせる」ことが、実験ではなく **日常運用** になります。

---

## 4. Agent Merge — PR をゴールまで運ぶ

作成された Pull Request を、**レビュー・チェック・マージ** まで運ぶ機能です。

- **CI を監視**する
- **必須レビュアー**を追跡する
- **失敗したチェックに対処**する
- すべての条件が満たされるのを **待つ**

**自動化の範囲は開発者が選択**できます。

| 選択肢 | 内容 |
|--------|------|
| Drive CI back to green | 失敗を解消し CI をグリーンに戻す |
| Address feedback | レビューフィードバックに対応する |
| Merge when conditions met | 条件を満たしたらマージする |

> "You choose how far Copilot should go ... You decide what automation is enabled and what ships."

---

## 5. Copilot Max — 高頻度利用者向けの上位枠

複数エージェントを並列で常用すると、利用量（リクエスト・モデル消費）が増えます。これに応える **上位の利用枠（プラン階層）** が **Copilot Max** です。

- エージェントを **高頻度で使うユーザー向け** の上位利用枠
- 並列エージェント運用・上位モデル選択・長時間の autopilot 的ワークフローを後押し
- 既存の Free / Pro / Pro+ / Business / Enterprise に加わる位置づけ
- 例：**MAI-Code-1-Flash** は Free / Student / Pro / Pro+ / **Max** に展開（→ [08章](../08-ai-models/README.md)）

> 高頻度のエージェント利用を、利用枠の面から支える階層。

---

## 6. アプリの位置づけ（GitHub のビジョン）

GitHub は本アプリを **「エージェント・フロンティアのためのシステム」** の中心と位置づけています。

- エージェントは **本番ソフトウェアと同じ作り方** で作るべき → GitHub Copilot でコードを書いて速く動く
- エージェントのライフサイクル（**source → test → deploy → observe → improve**）を GitHub が用意し、初日から必要なコントロールを提供
- 「これらすべてを **1か所** で、このシステム向けに作られた新しいアプリで行える」

> "GitHub is where that system lives, because it is already where the code, the reviews, the issues, and the teams are."

---

## 7. 導入を試すには

1. 既存の Copilot プラン（Pro / Pro+ / Business / Enterprise）で **アプリの技術プレビュー** を有効化
2. Issue を割り当て、**worktree で複数セッション** を並行起動
3. **Agent Merge** の自動化レベル（CIグリーン化 / フィードバック対応 / 条件達成マージ）を選択

---

## 8. 参考リンク

- [GitHub Copilot app: The agent-native desktop experience（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
- [GitHub Copilot app（features）](https://github.com/features/ai/github-app)
- [Microsoft Build 2026（Microsoft Blog）](https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/)
- [GitHub Changelog](https://github.blog/changelog/)
