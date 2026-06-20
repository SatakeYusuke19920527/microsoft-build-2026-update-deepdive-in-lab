# 11. エージェントのガバナンスとセキュリティ — Agent 365 ほか

> エージェント（GitHub Copilot のエージェントを含む）が組織で増えるほど、「誰が・何にアクセスでき・どう振る舞い・いくらかかるか」を統制する仕組みが不可欠です。Build 2026 では **Agent 365** を中心に、ガバナンス／セキュリティ群が発表されました。

---

## 1. Agent 365 — エージェントの単一カタログ

> "Every agent in your organization shows up in a single catalog, whether it was built in Foundry or elsewhere."

- Foundry で作ったものも、それ以外で作ったものも **単一カタログ** に現れる
- IT は次を把握・統制できる：
  - 誰がエージェントをデプロイしたか
  - どのデータ・ツールにアクセスできるか
  - どう振る舞っているか
  - いくらコストがかかっているか
- 必要に応じて **ポリシーを強制／アクションを実行**

> "IT sees who deployed an agent, what data and tools it can access, how it's behaving, and what it costs. They can enforce policy or take action when required."

---

## 2. ローカルエージェントの統制

- **Agent 365 for local agents**：**20種類以上のローカルエージェント** を含め、組織全体で観測・統制・セキュア化
- **Agent 365 ネイティブ統合（MXC）**：Windows 上で動くエージェントに **Defender / Entra / Intune / Purview** の保護を提供（**2026年7月にプレビュー**）
- **OS強制のエージェントID**：Windows がエージェントに **ローカルID または Entra ベースのクラウドID** を割り当て、コンテナからの全活動をそのIDに帰属 → **人とエージェントを明確に区別**

---

## 3. オープンな統制仕様・評価フレームワーク

| 名称 | 内容 |
|------|------|
| **Agent Control Specification (ACS)** | エージェントのランタイム統制層の **オープン仕様＋リファレンス実装**。ポータブルなマニフェストで、ライフサイクル全体の **どこ・いつ・どう** ポリシーを評価・強制するかを定義（フレームワーク／ランタイム非依存）。複数の **インターセプションポイント** を定義 |
| **ASSERT** | 自然言語の振る舞い仕様を **実行可能な評価** に変換するオープンソースフレームワーク。仕様を分類体系化→テスト生成→実行→ポリシーに対して採点 |
| **Agent Governance Toolkit (AGT)** | ACS を含む、開発者がエージェントを管理・統制するためのモジュール群 |

> ACS: "an open specification and reference implementation for the runtime governance layer of AI agents."

---

## 4. セキュリティ系の発表（関連）

- **Codename MDASH**：マルチモデル・エージェント型セキュリティシステム。**100以上のエージェント** を展開し、データフロー・ビジネスロジック・エクスプロイト連鎖を推論して、悪用可能なバグを発見。**Defender ポータル** に文脈付き修正を直接提供
- **Frontier Tuning**：コンプライアンス境界内で強化学習を適用し、自社データ・ワークフローで独自モデルを育成（IPは自社環境に保持、プライベートプレビュー）

---

## 5. なぜ Copilot 利用者に重要か

- GitHub Copilot のエージェント（クラウド／ローカル）も **このガバナンス基盤の対象**
- 「自動化レベル（許可 → autopilot）」（→ [06章](../06-automation-and-cloud-agent/README.md)）と組み合わせ、**人の監督下で安全に自律性を上げる** ことができる
- ガバナンスは **後付けでなくシステムにネイティブ**

---

## 6. 参考リンク

- Microsoft Agent Platform（HERO Blog）: https://aka.ms/AA1188jd
- Agent Control Specification: https://commandline.microsoft.com/agent-control-specification-runtime-governance/
- ASSERT: https://commandline.microsoft.com/assert-written-intent-executable-evals/
- [microsoft/Build26-news](https://github.com/microsoft/Build26-news)
