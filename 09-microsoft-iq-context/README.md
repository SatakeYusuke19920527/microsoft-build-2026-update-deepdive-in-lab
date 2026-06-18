# 09. Microsoft IQ — エージェントに知識を接続するコンテキスト層

> GitHub Copilot を含むエージェントを、賢く・状況に即した形で動かすには、**世界知識（world knowledge）と業務知識（enterprise knowledge）** の両方を接続するコンテキスト層が必要です。それが **Microsoft IQ** です。

---

## 1. Microsoft IQ とは

> "generally available this month across GitHub Copilot, Microsoft Foundry and Copilot Studio, is a new context layer that grounds agents in both world knowledge and enterprise knowledge"

- **今月 GA**：GitHub Copilot / Microsoft Foundry / Copilot Studio をまたいで一般提供
- エージェントを **世界知識と企業知識の両方にグラウンディング（grounding）** する新しいコンテキスト層

### IQ が担う役割

> "Microsoft IQ organizes, secures, and surfaces the right information in forms agents can actually use, so they can reach accurate insight without drowning in noise or hallucinating answers."

→ 情報を **整理し・保護し・エージェントが使える形で提示** する。これにより、ノイズに溺れたりハルシネーションを起こしたりせず、正確な洞察に到達できる。

---

## 2. IQ ファミリーの構成

| 層 | 役割 |
|----|------|
| **Work IQ** | 職場のインテリジェンス層。Microsoft 365・組織システム・外部ソースを横断し、人・メール・文書・会議とそのつながりを捕捉。**Work IQ API は 6/16 に GA** |
| **Fabric IQ** | 構造化された業務データ上の **共有セマンティック基盤** を提供 |
| **Foundry IQ** | 全体を結びつけ、**企業知識とライブ Web の両方** にまたがる検索プランニングを実現 |
| **Web IQ** | エージェントへの最速のリアルワールド・グラウンディング。AIファースト・モデル非依存・MCPネイティブな Web 検索スタックで、**次点比 約2.5倍** の速度で関連パッセージを返す |

---

## 3. 各層の詳細

### Work IQ
> "the workplace intelligence layer for agents, capturing how work actually happens across Microsoft 365, organizational systems and external sources: people, emails, documents, meetings and how they connect"

- **Work IQ API は 6月16日に GA**。エージェントに、組織で効果的に働くためのコンテキストをプログラム的に提供。

### Fabric IQ
- 構造化業務データ上の **共有セマンティック基盤**（顧客・売上などビジネスデータの意味づけ）。

### Foundry IQ
- 企業知識 × ライブ Web をまたぐ **検索プランニング（retrieval planning）** を担い、IQ 群を結びつける。

### Web IQ
> "the fastest real-world grounding you can give your agents. An AI-first web search stack that's model-agnostic and MCP-native, returning relevant passages at nearly 2.5x the speed of the next best alternative"

---

## 4. GitHub Copilot との関係（概念図）

```
        ┌──────────────── Microsoft IQ（コンテキスト層）────────────────┐
        │                                                              │
 GitHub │   Work IQ        Fabric IQ        Foundry IQ      Web IQ     │
Copilot ┤  （職場知識）   （業務データ）   （統合/検索計画）  （ライブWeb） │
 /VS    │   M365横断        セマンティック    企業×Web横断     高速・MCP    │
 Code   │   人/メール/文書    基盤             検索プランニング  ネイティブ    │
        └──────────────────────────────────────────────────────────────┘
```

→ Copilot のエージェントは、**リポジトリ内のコンテキストを超えて**、Microsoft 365 の職場知識・Fabric の業務データ・ライブ Web を接続できる。結果として、エージェント生成の出力がより賢く・状況認識的になる。

---

## 5. 関連：Frontier Tuning と継続的改善

- **Frontier Tuning**：コンプライアンス境界内で **強化学習** を適用し、エージェントが「実際の業務の進み方」を学習。自社データ・ドメイン知識・ワークフローを使い、**IP を自社環境に保ったまま** モデルを育てる（プライベートプレビュー）。
- **強化学習環境（RL environments）**：実際の成果を通じてモデルを強化する「トレーニングジム」。

---

## 6. 参考リンク

- Microsoft Blog（OMB Developer Blog）: https://aka.ms/AA10pe80
- Microsoft Agent Platform（HERO Blog）: https://aka.ms/AA1188jd
- [microsoft/Build26-news](https://github.com/microsoft/Build26-news)
