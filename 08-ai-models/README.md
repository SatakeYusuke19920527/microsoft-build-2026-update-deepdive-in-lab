# 08. AIモデル — MAI-Code-1 と MAI モデルファミリー

Build 2026 では、Microsoft AI (MAI) 製の新しいモデル群が発表され、その中で **GitHub Copilot / VS Code に直接関係するのが MAI-Code-1** です。

## MAI-Code-1（Copilot に搭載）

- **推論効率に優れたコーディングモデル**で、**GitHub 向けにチューニング**されています。
- **Copilot および VS Code で利用可能** になりました。

> "MAI-Code-1: our inference efficient coding model tuned for GitHub, is now available in Copilot and VS Code"

## MAI モデルファミリー（全体像）

| モデル | 種別 | ハイライト |
|--------|------|-----------|
| **MAI-Code-1** | コーディング | 推論効率重視・GitHub向けチューニング・Copilot/VS Codeで利用可 |
| **MAI-Thinking-1** | 推論 | ゼロ蒸留・35B アクティブパラメータ・256K コンテキスト。SWE Bench Pro のコーディングで Opus 4.6 に匹敵、ブラインドテストで Sonnet 4.6 より好まれる。Foundry でプライベートプレビュー |
| **MAI-Image-2.5** | 画像 | text-to-image / image-to-image。Arena AI リーダーボードで上位。PowerPoint で稼働、OneDrive へ展開中、Foundry に登場 |
| **MAI-Transcribe 1.5** | 音声→テキスト | 43言語で最先端の精度、ストリーミング対応予定 |
| **MAI-Voice-2** | 音声 | 15以上の追加言語と新しい音声オプション |

## 提供先の広がり

MAI モデルは **Fireworks AI / Baseten / Open Router** などのサードパーティプラットフォームでも提供されます。また Fireworks AI は **Foundry 上で一般提供（GA）** となり、エンタープライズガバナンスと Azure データレジデンシーを備えた単一プラットフォーム体験を実現します。

## 開発者にとっての意味

- Copilot のコード生成・補完が、**GitHub 向けに最適化された専用モデル**で底上げされる。
- Microsoft Agent Platform の方針として、**「GitHub でエージェントを構築 → Microsoft Foundry にデプロイ → 用途に最適なモデルで自動最適化」** という流れが描かれている。

## 参考リンク

- Microsoft Blog（OMB Developer Blog）: https://aka.ms/AA10pe80
- [microsoft/Build26-news](https://github.com/microsoft/Build26-news)
