# 06. 自動化とクラウドエージェント

> エンジニアリングはコードを書いて終わりではありません。Issue を起票し、ディスカッションを開始し、レビュアーに返信する——こうした一連のステップまで **Copilot クラウドエージェント** が扱えるようになりました。

---

## 1. クラウド自動化（Cloud automations）

エージェントを次のように動かせます。

| 種類 | 内容 |
|------|------|
| スケジュール実行 | 定期的にエージェントを起動 |
| GitHub イベント応答 | イベントをトリガーに動作 |
| Issue の起票 | 課題を自動作成 |
| コメントの投稿 | PR/Issue にコメント |

### 許可モデル（重要）

- デフォルトでは、クラウドエージェントは **各書き込みアクションの前に許可を求める**
- 信頼を確立したら **autopilot（自動操縦）** に切り替えられる

> "By default, the cloud agent asks permission before each write action. Switch to autopilot once you have established trust."

→ **段階的に自律性を上げる**設計。最初は人が承認、信頼が積み上がったら自動化。

---

## 2. クラウドエージェントの守備範囲拡大

エンジニアリングの「コードの外側」までカバーします。

- Issue を **起票** する
- ディスカッションを **開始** する
- レビュアーに **返信** する

> "Engineering doesn't end with writing code. It includes filing the issue, kicking off the discussion, and replying to reviewers. Copilot cloud agent can now handle every one of those steps."

→ コーディングだけでなく、**開発の前後工程（起票・議論・対話）** をエージェントが担う。

---

## 3. Memory++ と /chronicle — 継続性

**デバイスをまたぎ、時間を越えた継続性（continuity）** を獲得しました。

- **Memory++** / **`/chronicle`**
- アプリ・CLI・VS Code・GitHub 上で開始したセッションの
  **コンテキストを横断的に参照（query）** できる

> "Memory++ and `/chronicle` give Copilot continuity across devices and over time. Query context from sessions started in the app, CLI, VS Code, or on GitHub."

→ 「どこで始めた作業でも、続きから扱える」。デバイス・ツールの境界を越えた記憶。

---

## 4. 継続的改善ループ（プラットフォーム視点）

Microsoft Agent Platform では、エージェントの **すべての行動がシグナル** になります。

> "Every agent action generates signal: trajectories, outcomes, feedback. The system captures it, refines it, and feeds it back. Observe. Evaluate. Improve. Roll out safely. Repeat."

- 改善の多くは、まず **エージェント自身**（プロンプト・コンテキスト・スキル・ツール）の eval 駆動改善から始まる
- パターンが見えてきたら、**モデルルーティング・ファインチューニング・強化学習** へ拡張

→ 自動化は「動かして終わり」ではなく、**観測 → 評価 → 改善 → 安全な展開** のループに乗る。

---

## 5. まとめ

| 機能 | 価値 |
|------|------|
| クラウド自動化 | スケジュール / イベント応答 / 起票 / コメント |
| 許可モデル | 既定は書き込み前に許可 → 信頼後 autopilot |
| クラウドエージェント拡張 | 起票・議論開始・レビュアー返信まで |
| Memory++ / `/chronicle` | デバイス・時間を越えたコンテキスト継続 |
| 改善ループ | 観測→評価→改善→安全な展開を反復 |

---

## 6. 参考リンク

- [About cloud agent（GitHub Docs）](https://docs.github.com/copilot/concepts/agents/cloud-agent/about-cloud-agent)
- [GitHub Copilot app（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
- Microsoft Agent Platform（HERO Blog）: https://aka.ms/AA1188jd
