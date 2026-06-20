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
| **Prompt Scheduling** | **`/every`**（定期）・**`/after`**（遅延）でプロンプト・スキルをスケジュール実行 |
| **Rubber Duck 連携** | メインエージェントが必要に応じて **Rubber Duck** へ設計・実装・テストの批評を依頼（→ [04章](../04-code-review/README.md)） |

> "Copilot CLI now has a redesigned interface, voice input, and scheduled tasks to keep you there. ... Voice mode uses on-device speech-to-text, so audio never leaves your machine. `/every` schedules recurring prompts and background tasks."

→ 「ターミナルに留まったまま」エージェント開発を完結できる。`/every`・`/after` による定期/遅延実行、CLI 内からの **Rubber Duck** 批評依頼で、人手を介さず品質チェックまで回せます。

---

## 3. `/fleet` — ローカルへの選択的タスク委譲

Copilot CLI に、**クラウドとローカルモデルを使い分ける** 仕組みが加わります。

- **`/fleet`**：クラウドで動く主エージェントが **プランを立て**、各タスクの **複雑さを評価**し、適切なものを **ローカルモデルのサブエージェントへルーティング**
- モデルのサイズと能力に応じて、ローカルで処理すべきものを振り分ける

> "Using `/fleet`, the primary agent running in the cloud builds a plan, assesses the complexity of each task, and routes appropriate ones locally based on the models' size and capability"

→ クラウドの計画力 × ローカルの低レイテンシ・低コストを **ハイブリッド** に活用。

---

## 4. MXC によるプロセス分離（Copilot CLI が採用）

Copilot CLI は、Windows の **Microsoft Execution Containers (MXC)** の **高速プロセス分離（fast process isolation）** を採用しています。

- エージェントの実行を、ユーザーの **デスクトップ・クリップボード・UI・入力デバイス** から分離
- **セッション分離** はエージェントを強いユーザーIDに束ね、UIスプーフィング・入力インジェクション・クロスセッションのデータ漏えいを緩和

> "Fast process isolation (adopted by GitHub Copilot CLI) and session isolation separates the agent's execution from the user's desktop, clipboard, UI and input devices"

（→ 詳細は [03-sandboxes](../03-sandboxes/README.md)・[12-windows-for-developers](../12-windows-for-developers/README.md)）

---

## 5. 全体像

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
