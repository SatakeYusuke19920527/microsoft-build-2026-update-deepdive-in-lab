# 13. Build 2026 全体マップ — Copilot 周辺の発表

> このリポジトリの主題は GitHub Copilot ですが、Build 2026 では Copilot を取り巻く形で **数多くの発表** がありました。本章は「Copilot の外側で何が発表されたか」を俯瞰し、関連する章へ橋渡しする **コンテキストマップ** です。

> 出典：`microsoft/Build26-news`（複数の公式ブログから抽出、合計 130+ ステートメント）

---

## 1. 開発者プラットフォーム（本リポジトリの中心）

| 発表 | 章 |
|------|----|
| GitHub Copilot アプリ | [01](../01-copilot-app/README.md) |
| Canvas / AX | [02](../02-canvas-and-ax/README.md) |
| サンドボックス | [03](../03-sandboxes/README.md) |
| コードレビュー | [04](../04-code-review/README.md) |
| Copilot SDK / CLI（/fleet 含む） | [05](../05-sdk-and-cli/README.md) |
| 自動化・クラウドエージェント | [06](../06-automation-and-cloud-agent/README.md) |
| パートナーエージェントアプリ | [07](../07-partner-agent-apps/README.md) |
| MAI モデル（MAI-Code-1） | [08](../08-ai-models/README.md) |
| Microsoft IQ | [09](../09-microsoft-iq-context/README.md) |
| Agent Platform（Build→Run→Govern） | [10](../10-agent-platform/README.md) |
| ガバナンス・セキュリティ | [11](../11-agent-governance-security/README.md) |
| Windows for Developers | [12](../12-windows-for-developers/README.md) |

---

## 2. AI モデル・研究（Microsoft AI / MAI Lab）

- **7つの新 MAI モデル**（画像・音声・文字起こし・コーディング・推論）→ [08章](../08-ai-models/README.md)
- **ゼロ蒸留・クリーンで適切にライセンスされたデータ**で一から学習。**Maia 200** シリコンと協調設計で1.4倍効率
- **Frontier Tuning / 強化学習環境(RLE)**：自社環境内で独自モデルを育成（Excelで GPT-5.4 級を最大10倍効率、McKinsey標準で最高勝率を約10分の1コスト）
- 開発者は **モデルの重みを自分でチューニング** 可能に。Open Router / Fireworks / Baseten でも提供
- **目標：Humanist Superintelligence**（人を置き換えず、人の意図に従い・人の監督に従うツール）

---

## 3. エンタープライズエージェント（Microsoft 365 / Scout）

- **Microsoft Scout**：初の **Autopilot（常時稼働・自律・自己のEntra ID を持つ）** エージェント。OpenClaw + Work IQ ベース、Teams/Outlook に統合し、会議準備・スケジュール調整などを先回り実行
- **Agent 365 / Work IQ**：→ [09](../09-microsoft-iq-context/README.md)・[11](../11-agent-governance-security/README.md)

---

## 4. データ・Azure 基盤

| 発表 | 概要 |
|------|------|
| **Project Rayfin** | オープンソースSDK/CLI。記述から **DB・認証込みのエンタープライズ級バックエンド** を生成。Fabric にBaaSをもたらす |
| **Azure HorizonDB** | AI向け Postgres 互換DB（DiskANNベクトル検索、AI関数/パイプライン）。自己管理比3倍超のスループット |
| **Azure Cobalt 200** | Arm ベースVM、世代比最大50%向上、既定でメモリ暗号化 |
| **Fabric IQ（GA）/ GPU高速化 Data Warehouse** | 最大7倍高速、SIGMOD 2026 Best Industry Paper |
| **Foundry IQ / Web IQ** | エージェント向けグラウンディング（Web IQ は p95 < 165ms、次点比約2.5倍速）→ [09章](../09-microsoft-iq-context/README.md) |

---

## 5. 量子・科学研究

- **Majorana 2**：鉛ベースの新マテリアルスタックで **前世代比1,000倍の信頼性**、平均キュービット寿命20秒。**スケーラブルな量子計算機の目標を2029年に前倒し**（DARPA最終フェーズ）
- **Microsoft Discovery（GA）**：科学R&D向けエージェント型AIプラットフォーム。**Discovery アプリ（プレビュー）は GitHub Copilot アカウントだけでローカル利用可能**
- **Mayo Clinic × Microsoft**：医療向けフロンティアAIモデルを共同開発（モデルは Mayo Clinic が所有、Azure Foundry API で提供予定）

---

## 6. Windows / デバイス

→ 詳細は [12章](../12-windows-for-developers/README.md)。Coreutils・WSL containers・Intelligent Terminal・Windows Dev Skills・MXC・Surface RTX Spark Dev Box・DGX Station・Aion 1.0・ポスト量子暗号 など。

---

## 7. 参考リンク（一次情報）

- OMB Developer Blog: https://aka.ms/AA10pe80
- Enterprise Agent Platform（Jay Parikh）: https://aka.ms/AA1188jd
- Windows at Build 2026: https://aka.ms/Windows-Build2026
- Microsoft AI / MAI: http://aka.ms/MAI-Build
- Quantum（Majorana 2）: https://aka.ms/m2blog
- Microsoft Discovery: https://aka.ms/MicrosoftDiscoveryBlog
- [microsoft/Build26-news](https://github.com/microsoft/Build26-news)
