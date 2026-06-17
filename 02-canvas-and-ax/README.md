# 02. Canvas と Agent Experience (AX)

チャットは「指示」と「曖昧さの整理」には強力ですが、エージェントが実作業を始めると、チャットスレッドは決定・ログ・修正の長いスクロールになりがちです。**作業そのものを可視化する場所** が必要——それが **Canvas** です。

## Canvas とは

Canvas は **人とエージェントの双方向ワークサーフェス**（bidirectional work surfaces）です。次のようなものを表示できます。

- プラン（計画）
- Pull Request
- ブラウザセッション
- ターミナル
- デプロイメント
- ダッシュボード
- ワークフローの状態

エージェントは作業しながら Canvas を更新し、**開発者は同じ画面上で編集・並べ替え・承認・軌道修正** ができます。

## Agent Experience (AX) の始まり

Canvas は、人とエージェントが共に操作するインターフェース、すなわち **Agent Experience (AX)** の幕開けです。

- **Chat** = 指示し、議論し、曖昧さを推論する場所
- **Canvas** = その意図を、検査・操作・検証できる「目に見える作業」に変える場所

> "Canvases are where that intent becomes visible work you can inspect, steer, and verify."

## ポイント

| 観点 | Chat | Canvas |
|------|------|--------|
| 目的 | 指示・対話・推論 | 作業の可視化・操作 |
| 方向性 | 主に人→エージェント | 双方向（人 ⇄ エージェント） |
| 表現 | テキストの流れ | プラン/PR/ターミナル等の作業面 |

## 参考リンク

- [Working with canvas extensions（GitHub Docs）](https://docs.github.com/copilot/how-tos/github-copilot-app/working-with-canvas-extensions)
- [GitHub Copilot app（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
