# 02. Canvas と Agent Experience (AX)

> エージェントが実作業を始めると、チャットスレッドは「決定・ログ・修正」の長いスクロールになりがちです。**作業そのものを可視化し、人とエージェントが同じ面で操作する** ——それが **Canvas** であり、**Agent Experience (AX)** の始まりです。

---

## 1. 背景：チャットの限界

- チャットは **指示（instruction）** と **曖昧さの整理（ambiguity）** には強力
- しかしエージェントが実作業を始めると、スレッドは
  **決定・ログ・修正の長いスクロール** になる
- 「指示の履歴」は追えても、「**今の作業状態**」は追いにくい

> "once an agent starts doing real work, a chat thread becomes a long scroll of decisions, logs, and corrections. You need a place where the work itself is visible."

---

## 2. Canvas とは

Canvas は **人とエージェントの双方向ワークサーフェス（bidirectional work surfaces）** です。

**表示できるもの**

| 種類 | 例 |
|------|----|
| プラン | エージェントの作業計画・タスク順序 |
| Pull Request | 変更内容・差分（diff） |
| ブラウザセッション | プレビュー・動作確認 |
| ターミナル | コマンド実行と結果 |
| デプロイメント | デプロイ状態 |
| ダッシュボード / ワークフロー状態 | 進捗・パイプライン |

**動き方**

- エージェントは **作業しながら Canvas を更新**する
- 開発者は同じ面で **編集・並べ替え・承認・軌道修正（edit, reorder, approve, redirect）** ができる
- 例：エージェントのプランを直接調整する、タスクを並べ替える、作業をライブでリダイレクトする

> "Agents update the canvas as they work, and developers can edit, reorder, approve, or redirect that work on the same surface."

---

## 3. Agent Experience (AX) という考え方

Canvas は、人とエージェントが共に操作するインターフェース＝ **AX（agent experience）** の幕開けです。

| | **Chat** | **Canvas** |
|---|---------|-----------|
| 目的 | 指示・議論・推論 | 作業の可視化・操作 |
| 方向性 | 主に 人 → エージェント | **双方向**（人 ⇄ エージェント） |
| 表現 | テキストの流れ | プラン/PR/ターミナル等の作業面 |
| 役割 | 「何をしてほしいか」を伝える | 「その意図」を検査・操作・検証する |

> "Chat is where you instruct, discuss, and reason through ambiguity. Canvases are where that intent becomes visible work you can inspect, steer, and verify."

---

## 4. Canvas 拡張（Canvas extensions）

Copilot アプリの Canvas は **拡張可能** です。GitHub Docs の「Working with canvas extensions」で、独自の作業面を構築・接続する方法が解説されています。これにより、自社のツールやワークフロー状態を Canvas として Copilot アプリに統合できます。

---

## 5. 意義：｢提案を読む｣から｢作業を操作する｣へ

- コードを「提案」するだけのエージェントは、人の作業負担が大きいまま
- Canvas は、エージェントの作業を **目に見える・操作できる対象** にする
- チャット（指示）と Canvas（作業面）の **役割分担** により、レビューと軌道修正のコストを下げる

---

## 6. 参考リンク

- [Working with canvas extensions（GitHub Docs）](https://docs.github.com/copilot/how-tos/github-copilot-app/working-with-canvas-extensions)
- [GitHub Copilot app（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
