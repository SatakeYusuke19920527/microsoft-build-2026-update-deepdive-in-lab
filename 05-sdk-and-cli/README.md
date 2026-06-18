# 05. Copilot SDK と CLI — One runtime, many surfaces

> 同じエージェント機能を、**ターミナル・クラウド・自作ツール** という異なるサーフェスで、**同じ基盤の上** で動かせるようになりました。「One runtime, many surfaces（ひとつのランタイム、多様な面）」がキーコンセプトです。

---

## 1. GitHub Copilot SDK

**Copilot アプリを支えるのと同じエージェントランタイム** を公開する SDK です。これにより、自前のツールを構築できます。

### 対応言語（GA）

| 言語 |
|------|
| Node.js / TypeScript |
| Python |
| Go |
| .NET |
| Rust |
| Java |

### 何が嬉しいか

- 個別のスタックを継ぎ接ぎするのではなく、**同じ基盤の上で構築** できる
- 「One runtime, many surfaces」——同一ランタイムを多様な面で再利用

> "it exposes the same agentic runtime that powers the Copilot app. ... you build it on the same foundation instead of wiring together a bespoke stack."

### ユースケース例

- 社内の **コード解析ツール**
- カスタムな **リリースノート生成ツール**
- サポートワークフローに **埋め込むエージェント**

### Foundry との関係

Microsoft Foundry は、**Microsoft Agent Framework / LangGraph / GitHub Copilot SDK / Claude Agent SDK / 独自ハーネス** で作られたエージェントを取り込めるランタイムとして位置づけられています。「GitHub で構築 → Foundry で実行」という流れに SDK が組み込まれます。

---

## 2. Copilot CLI の刷新

ターミナルで作業したい開発者向けに、CLI が大幅刷新されました。

| 機能 | 内容 |
|------|------|
| **再設計 TUI** | `/experimental` モードで、**PR・Issue・gist** にタブ切り替えアクセス |
| **Voice mode（音声入力）** | **オンデバイス**の音声テキスト変換。**音声は端末の外に出ない** |
| **`/every`** | 繰り返しプロンプト・バックグラウンドタスクの **スケジュール** |

> "Copilot CLI now has a redesigned interface, voice input, and scheduled tasks to keep you there. ... Voice mode uses on-device speech-to-text, so audio never leaves your machine. `/every` schedules recurring prompts and background tasks."

→ 「ターミナルに留まったまま」エージェント開発を完結できる。

---

## 3. 全体像

```
                ┌──────────── 同一エージェントランタイム ────────────┐
                │                                                  │
  Copilot アプリ │   Copilot SDK        Copilot CLI      自作ツール  │
 （デスクトップ）┤  (Node/Py/Go/.NET/   (TUI/Voice/        /埋め込み  │
                │   Rust/Java)          /every)          エージェント│
                └──────────────────────────────────────────────────┘
```

---

## 4. 参考リンク

- [Copilot SDK getting started（GitHub Docs）](https://docs.github.com/en/copilot/how-tos/copilot-sdk/getting-started)
- [Copilot CLI（features）](https://github.com/features/copilot/cli)
- [Browse issues, PRs, gists in CLI（GitHub Docs）](https://docs.github.com/copilot/how-tos/copilot-cli/use-copilot-cli/browse-issues-prs-gists)
- [Voice input（GitHub Docs）](https://docs.github.com/copilot/how-tos/copilot-cli/use-copilot-cli/voice-input)
