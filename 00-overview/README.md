# 00. Overview — GitHub Copilot @ Build 2026 を「4テーマ × 22項目」で読む

> GitHub 公式 Changelog に載った **Copilot 関連の主要リリース／改善は粒度細かく分けると約22件**。
> これをそのまま並べるより、顧客説明用には **4つのテーマに再編** した方が伝わります。本章はその「読み解きマップ」です。

---

## 🎯 顧客説明用の4テーマ（推奨フレーミング）

| テーマ | 一言で | 含まれる主な機能 |
|--------|--------|-----------------|
| **1. Agent-native development** | エージェント前提の開発体験 | Copilot app / Canvas / Copilot Max / Agent Merge |
| **2. Trusted execution** | 安全に実行・反復できる基盤 | Local / Cloud Sandboxes / MXC 分離 |
| **3. AI code review** | エージェント出力にスケールするレビュー | Custom skills・MCP / Medium tier / `/security-review` / `/rubberduck` / Azure Repos |
| **4. Extensible agent platform** | 拡張可能なエージェント基盤 | Copilot SDK / CLI / Cloud Agent / Memory++ / Partner Apps / Models（MAI / Gemini） |

> GitHub 公式 Blog の製品群まとめ（4大分類）：
> **Copilot app / Canvas / Sandboxes**・**Copilot Code Review**・**Copilot SDK / CLI**・**Cloud Agent / Memory / Partner Agent Apps**

---

## 📋 22項目 一覧（テーマ・章への対応）

### テーマ1：Agent-native development

| # | 項目 | 概要 | 章 |
|---|------|------|----|
| 1 | **GitHub Copilot app** | 複数のエージェント作業・Issue・PR・セッション・自動化を **My Work** で一元管理するデスクトップアプリ（テクニカルプレビュー） | [01](../01-copilot-app/README.md) |
| 2 | **Copilot Max** | エージェントを高頻度で使うユーザー向けの **上位利用枠**（プラン階層） | [01](../01-copilot-app/README.md) |
| 3 | **Agent Merge** | PRレビュー・CI監視・失敗チェック対応・承認待機・条件付きマージまでを自動化 | [01](../01-copilot-app/README.md) |
| 4 | **Canvas** | プラン・PR・ターミナル・ブラウザ・デプロイ・ダッシュボードを人とエージェントが共同操作する作業面 | [02](../02-canvas-and-ax/README.md) |

### テーマ2：Trusted execution

| # | 項目 | 概要 | 章 |
|---|------|------|----|
| 5 | **Local Sandboxes** | ローカルPC上で、ファイル・ネットワーク・システム権限を制限した隔離実行環境 | [03](../03-sandboxes/README.md) |
| 6 | **Cloud Sandboxes** | GitHubホストの一時的な隔離Linux環境。どのデバイスからも引き継ぎ可能 | [03](../03-sandboxes/README.md) |

### テーマ3：AI code review

| # | 項目 | 概要 | 章 |
|---|------|------|----|
| 7 | **レビューの拡張性強化** | Custom Agent Skills・MCP Server・Actions workflow で社内基準に合わせて構成 | [04](../04-code-review/README.md) |
| 8 | **Medium tier review** | 高度な推論モデルへルーティングし精度・再現率を高めたレビュー階層 | [04](../04-code-review/README.md) |
| 9 | **`/security-review`** | セキュリティ観点に特化したコード評価スキル | [04](../04-code-review/README.md) |
| 10 | **`/rubberduck` の GA** | 実装・設計・テストを批評し見落としを探すセカンドオピニオン | [04](../04-code-review/README.md) |
| 11 | **Azure Repos 向け Copilot Code Review** | Azure Repos上でワンクリックレビュー・インラインコメント・修正提案コミット（テクニカルプレビュー） | [04](../04-code-review/README.md) |

### テーマ4：Extensible agent platform

| # | 項目 | 概要 | 章 |
|---|------|------|----|
| 12 | **GitHub Copilot SDK の GA** | Node.js/TS・Python・Go・.NET・Rust・Java でエージェントランタイムを自社ツールに組込み | [05](../05-sdk-and-cli/README.md) |
| 13 | **Copilot CLI の新 Terminal UI** | タブ型UIで Issue・PR・Gist をCLI内で操作（`/experimental`） | [05](../05-sdk-and-cli/README.md) |
| 14 | **Copilot CLI の Voice Input** | 端末で音声入力、音声はローカル処理 | [05](../05-sdk-and-cli/README.md) |
| 15 | **Copilot CLI の Prompt Scheduling** | `/every` と `/after` でプロンプト・スキルを定期／遅延実行 | [05](../05-sdk-and-cli/README.md) |
| 16 | **Copilot CLI の Rubber Duck 連携** | メインエージェントが必要に応じて Rubber Duck へ設計・実装・テスト批評を依頼 | [05](../05-sdk-and-cli/README.md) |
| 17 | **Cloud Automations / Autopilot** | スケジュール実行・GitHubイベント応答・Issue作成・コメント投稿を自動化 | [06](../06-automation-and-cloud-agent/README.md) |
| 18 | **Cloud Agent の業務範囲拡張** | コーディングに加え Issue登録・議論開始・レビュー返信まで実行 | [06](../06-automation-and-cloud-agent/README.md) |
| 19 | **Memory++ と `/chronicle`** | app・CLI・VS Code・GitHub.com をまたいでセッション文脈を追跡・検索 | [06](../06-automation-and-cloud-agent/README.md) |
| 20 | **Partner-built Agent Apps** | 外部パートナーのエージェントを利用・Issueアサイン（LaunchDarkly・Sonar・PagerDuty・Miro 等） | [07](../07-partner-agent-apps/README.md) |
| 21 | **Gemini モデルの Copilot surfaces 対応** | Copilot CLI・Cloud Agent・Copilot app で Gemini モデルを選択可能に | [08](../08-ai-models/README.md) |
| 22 | **MAI-Code-1-Flash の GitHub Copilot 対応** | Microsoft のコーディングモデル（5B小型）を Copilot で利用可能に（VS Code から提供） | [08](../08-ai-models/README.md) |

---

## 🧭 4テーマ × 章 対応図

```
 ┌─ テーマ1 Agent-native development ── 01 Copilot app / 02 Canvas
 │
 ├─ テーマ2 Trusted execution ───────── 03 Sandboxes（+ 12 Windows/MXC）
 │
 ├─ テーマ3 AI code review ──────────── 04 Code Review
 │
 └─ テーマ4 Extensible agent platform ─ 05 SDK/CLI / 06 Cloud Agent
                                        07 Partner Apps / 08 Models
                                        （+ 09 IQ / 10 Platform / 11 Governance）
```

---

## 💡 使い分けの指針

- **エンジニア向け詳細** → 各章（01〜13）の Deep Dive を参照
- **顧客・経営層向け説明** → 本章の **4テーマ** で再編して提示
- **抜け漏れチェック** → 上の **22項目一覧**

---

## 🔗 一次情報

- GitHub Changelog: https://github.blog/changelog/
- MAI-Code-1-Flash（Changelog）: https://github.blog/changelog/2026-06-02-mai-code-1-flash-is-now-available-for-github-copilot/
- GitHub Copilot app（Blog）: https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/
- Copilot CLI changelog: https://github.com/github/copilot-cli/blob/main/changelog.md
