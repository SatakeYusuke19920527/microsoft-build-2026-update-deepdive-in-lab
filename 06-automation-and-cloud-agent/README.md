# 06. 自動化とクラウドエージェント

エンジニアリングはコードを書いて終わりではありません。Issue を起票し、ディスカッションを開始し、レビュアーに返信する——こうした一連のステップまで **Copilot クラウドエージェント** が扱えるようになりました。

## クラウド自動化（Cloud automations）

エージェントを次のように動かせます。

- **スケジュール実行**
- **GitHub イベントへの応答**
- **Issue の起票**
- **コメントの投稿**

デフォルトでは、クラウドエージェントは **各書き込みアクションの前に許可を求めます**。信頼を確立したら **autopilot（自動操縦）** に切り替えられます。

> "By default, the cloud agent asks permission before each write action. Switch to autopilot once you have established trust."

## Copilot クラウドエージェントの拡張

Issue の起票、ディスカッションの開始、レビュアーへの返信——これら **すべてのステップ** をクラウドエージェントが処理できるようになりました。エンジニアリングの「コードの外側」の作業もカバーします。

## Memory++ と `/chronicle`

**Memory++** と **`/chronicle`** により、Copilot は **デバイスをまたぎ、時間を越えた継続性（continuity）** を獲得しました。

- アプリ・CLI・VS Code・GitHub 上で開始したセッションの **コンテキストを横断的に参照** できる。

## まとめ表

| 機能 | 内容 |
|------|------|
| クラウド自動化 | スケジュール実行 / イベント応答 / Issue起票 / コメント |
| 許可モデル | 既定は書き込み前に許可を要求、信頼後に autopilot |
| クラウドエージェント拡張 | 起票・ディスカッション開始・レビュアー返信まで |
| Memory++ / `/chronicle` | デバイス・時間を越えたコンテキスト継続 |

## 参考リンク

- [About cloud agent（GitHub Docs）](https://docs.github.com/copilot/concepts/agents/cloud-agent/about-cloud-agent)
- [GitHub Copilot app（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
