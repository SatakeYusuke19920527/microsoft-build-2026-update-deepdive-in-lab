# 05. Copilot SDK と CLI — 1つのランタイムを多様なサーフェスで

同じエージェント機能を、**ターミナル・クラウド・自作ツール** という異なる面（サーフェス）で、同じ基盤の上で動かせるようになりました。「One runtime, many surfaces」というコンセプトです。

## GitHub Copilot SDK

**Copilot アプリを支えるのと同じエージェントランタイム** を公開する SDK。自前のツールを構築できます。

- 一般提供（GA）言語: **Node.js / TypeScript、Python、Go、.NET、Rust、Java**
- ユースケース例:
  - 社内のコード解析ツール
  - カスタムなリリースノート生成ツール
  - サポートワークフローに埋め込むエージェント
- 個別のスタックを継ぎ接ぎするのではなく、**同じ基盤の上で構築** できる。

> "it exposes the same agentic runtime that powers the Copilot app"

## Copilot CLI

ターミナルで作業したい開発者向けに、Copilot CLI が刷新されました。

- **再設計された TUI**: `/experimental` モードで、ターミナルから Pull Request・Issue・gist へタブ切り替えアクセス。
- **音声入力（Voice mode）**: **オンデバイスの音声テキスト変換**。音声はマシンの外に出ない。
- **スケジュールタスク（`/every`）**: 繰り返しプロンプトやバックグラウンドタスクをスケジュール実行。

## まとめ表

| 領域 | 内容 |
|------|------|
| SDK 対応言語 | Node.js/TS, Python, Go, .NET, Rust, Java（GA） |
| SDK の本質 | Copilot アプリと同一のエージェントランタイムを公開 |
| CLI TUI | `/experimental` で PR/Issue/gist にタブアクセス |
| CLI Voice mode | オンデバイス音声入力（外部送信なし） |
| CLI `/every` | 繰り返し・バックグラウンドタスクのスケジュール |

## 参考リンク

- [Copilot SDK getting started（GitHub Docs）](https://docs.github.com/en/copilot/how-tos/copilot-sdk/getting-started)
- [Copilot CLI（features）](https://github.com/features/copilot/cli)
