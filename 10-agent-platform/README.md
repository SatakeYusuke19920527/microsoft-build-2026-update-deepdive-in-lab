# 10. Microsoft Agent Platform — Build in GitHub → Run in Foundry → Govern with Agent 365

> Build 2026 では、GitHub Copilot 単体ではなく、**Azure / GitHub / Microsoft IQ / Fabric / Foundry / Windows / Microsoft Security / Microsoft 365 を「ひとつのシステム」として動かす** Microsoft Agent Platform が示されました。GitHub Copilot はこの中で **「エージェントを作る場所」** に位置づけられます。

> "we're bringing together Azure, GitHub, Microsoft IQ, Fabric, Foundry, Windows, Microsoft Security, and Microsoft 365 to operate as a single system you can use to deploy agents at enterprise scale"

---

## 1. 全体の流れ（4ステップ）

| ステップ | 場所 | 内容 |
|---------|------|------|
| **Build（作る）** | GitHub | Copilot でコードを書き、source→test→deploy→observe→improve のライフサイクルを敷く |
| **Contextualize（文脈づける）** | Microsoft IQ | 業務データ・Web で grounding（→ [09章](../09-microsoft-iq-context/README.md)） |
| **Run（動かす）** | Microsoft Foundry | 最適モデルで実行、観測・評価・最適化 |
| **Govern（統制する）** | Agent 365 | 単一カタログで可視化・ポリシー強制（→ [11章](../11-agent-governance-security/README.md)） |

> "Agents should be built the same way production software is built. You write code with GitHub Copilot to move faster."

---

## 2. Build in GitHub

- エージェントは **本番ソフトウェアと同じ作り方** で作る
- ライフサイクル（**source → test → deploy → observe → improve**）を GitHub が用意し、初日から必要なコントロールを提供
- これらすべてを **1か所**（Copilot アプリ）で実行

> "Agents must follow a lifecycle: source, test, deploy, observe, and improve. GitHub sets up that lifecycle and provides the necessary controls from day one."

---

## 3. Run in Foundry

**Microsoft Foundry** は、エージェントを実行するためのランタイムです。

- **モデルコレクション + 最適化モデルルーター**：タスク・コスト profile に応じて、品質・速度・コストをバランス
- **フレームワーク対応**：**Microsoft Agent Framework / LangGraph / GitHub Copilot SDK / Claude Agent SDK / 独自ハーネス** で作ったエージェントを取り込める
- **Evals と traces**：エージェントの挙動を測定可能に（「測れなければ改善できない」）
- **継続的最適化**：モデル・ハーネス・IQ・ツール・アクションを運用しながらチューニング

関連発表（Foundry）：

| 項目 | 状態 |
|------|------|
| Hosted agents in Foundry Agent Service | GA 予定（2026年7月初旬） |
| Toolboxes in Foundry（全ツール種の単一エンドポイント） | パブリックプレビュー |
| **Foundry Toolkit for VS Code** | **GA** |
| Voice Live（音声会話機能を単一APIに統合） | GA |
| Fireworks AI on Foundry | GA |

---

## 4. 継続的改善ループ

> "Every agent action generates signal: trajectories, outcomes, feedback. The system captures it, refines it, and feeds it back. Observe. Evaluate. Improve. Roll out safely. Repeat."

- 改善の多くは、まず **エージェント自身**（プロンプト・コンテキスト・スキル・ツール）の eval 駆動改善から
- パターンが見えたら **モデルルーティング・ファインチューニング・強化学習** へ拡張

---

## 5. プラットフォームの原則

- **Secured and governed**：Entra / Purview / Defender / Agent 365 を拡張し、ガバナンスを後付けでなく **システムにネイティブ** に
- **Continuous improvement**：エージェントの挙動・成果・人のフィードバックがシステムに還流し、**人の監督下で安全に改善**

> "governance becomes native to the system rather than bolted on later"

---

## 6. 参考リンク

- Microsoft Agent Platform（HERO Blog, Jay Parikh）: https://aka.ms/AA1188jd
- Microsoft Foundry recap: https://aka.ms/FoundryBuildNews
- [microsoft/Build26-news](https://github.com/microsoft/Build26-news)
