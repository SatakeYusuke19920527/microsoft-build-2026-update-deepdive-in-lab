# 07. パートナーエージェントアプリ

> **Partner-built agent apps** は GitHub Copilot と統合し、タスクの自動化・コード生成・コンテキスト分析・アクション実行を支援します。**GitHub を離れずに** お気に入りのツールを利用できます。

---

## 1. 概要

> "Partner-built agent apps integrate with GitHub Copilot to help automate tasks, generate code, analyze context, and execute actions. Use your favorite tools without leaving GitHub. Assign issues to new agents that fit your workflow."

ポイント：

- **GitHub を離れずに** サードパーティのツール／エージェントを利用
- Issue を、ワークフローに合った **新しいエージェントに割り当て** できる
- パートナー製エージェントアプリは **今すぐ利用開始** 可能
- 自社のエージェントアプリを GitHub に持ち込むための **ウェイトリスト** も提供

---

## 2. 発表時点のパートナー

| パートナー | 一般的な領域 |
|-----------|------------|
| **LaunchDarkly** | フィーチャーフラグ / リリース管理 |
| **Amplitude** | プロダクトアナリティクス |
| **Sonar** | コード品質 / 静的解析 |
| **Endor Labs** | ソフトウェアサプライチェーンセキュリティ |
| **Octopus Deploy** | デプロイ自動化 |
| **PagerDuty** | インシデント管理 / オンコール |
| **Miro** | コラボレーション / ホワイトボード |
| **Bright** | — |
| **Packfiles** | — |

<sub>※領域は一般的な製品カテゴリに基づく補足です。</sub>

---

## 3. 仕組みと意義

- Issue を「自社が選んだエージェント」に割り当てることで、**専門領域（フラグ管理・監視・品質・セキュリティ等）の作業を委譲** できる
- GitHub を **ハブ** として、複数ベンダーのエージェントを横断的に活用
- 「自社のエージェントを GitHub に載せたい」企業向けの **持ち込みパス（ウェイトリスト）** が用意されている

→ GitHub Copilot が、**人と多様なエージェント（自社製・サードパーティ製）の集約点** になる。

---

## 4. エコシステムの位置づけ

このパートナー連携は、Build 2026 全体の **「ひとつのシステム」** 構想の一部です。

- GitHub で構築 → Foundry で実行 → Agent 365 で統制、という流れの中で
- パートナーエージェントは **「使う側のツール選択肢」を広げる** 役割
- Agent 365 のカタログでは、Foundry で作ったものも他で作ったものも **単一カタログ** に現れ、IT が可視化・統制できる

---

## 5. 参考リンク

- [Agent apps for GitHub（ウェイトリスト）](https://github.com/features/preview/agent-apps-for-github)
- [GitHub Copilot app（GitHub Blog）](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
