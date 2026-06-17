# 09. Microsoft IQ — エージェントに知識を接続するコンテキスト層

GitHub Copilot を含むエージェントを賢く・状況に即した形で動かすには、**世界知識（world knowledge）と業務知識（enterprise knowledge）** の両方を接続するコンテキスト層が必要です。それが **Microsoft IQ** です。

## Microsoft IQ（GA）

> "generally available this month across GitHub Copilot, Microsoft Foundry and Copilot Studio, is a new context layer that grounds agents in both world knowledge and enterprise knowledge"

今月、**GitHub Copilot / Microsoft Foundry / Copilot Studio** にまたがって一般提供。エージェントを世界知識と企業知識の両方に **グラウンディング（grounding）** する新しいコンテキスト層です。

## 構成要素（IQ ファミリー）

| 層 | 役割 |
|----|------|
| **Work IQ** | 職場のインテリジェンス層。Microsoft 365・組織システム・外部ソースを横断し、人・メール・ドキュメント・会議とそのつながりを捕捉。**Work IQ API は 6/16 に GA** |
| **Fabric IQ** | 構造化された業務データ上の **共有セマンティック基盤** を提供 |
| **Foundry IQ** | 全体を結びつけ、**企業知識とライブWebの両方** にまたがる検索プランニングを実現 |
| **Web IQ** | エージェントへの最速のリアルワールド・グラウンディング。AIファースト・モデル非依存・MCPネイティブなWeb検索スタックで、次点比 **約2.5倍** の速度で関連パッセージを返す |

## GitHub Copilot との関係

Microsoft IQ により、Copilot のエージェントは単なるリポジトリ内コンテキストを超え、**Microsoft 365 の職場知識・Fabric の業務データ・ライブWeb** を接続できます。これによりエージェント生成の出力が、より賢く・状況認識的になります。

## まとめ図（概念）

```
            ┌──────────────── Microsoft IQ（コンテキスト層）────────────────┐
            │                                                              │
  GitHub    │   Work IQ        Fabric IQ        Foundry IQ      Web IQ     │
  Copilot ──┤  （職場知識）   （業務データ）   （統合/検索計画）  （ライブWeb） │
  /Foundry  │   M365横断        セマンティック    企業×Web横断     高速・MCP    │
  /Studio   │                   基盤             検索プランニング  ネイティブ    │
            └──────────────────────────────────────────────────────────────┘
```

## 参考リンク

- Microsoft Blog（OMB Developer Blog）: https://aka.ms/AA10pe80
- [microsoft/Build26-news](https://github.com/microsoft/Build26-news)
