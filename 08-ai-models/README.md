# 08. AIモデル — MAI モデルファミリー

> Build 2026 では、Microsoft AI (MAI) 製の **7つの新モデル**（画像・音声・文字起こし・コーディング・推論にまたがる）が発表されました。中でも **GitHub Copilot / VS Code に直接関係するのが MAI-Code-1** です。

> "seven new MAI models, spanning image, voice, transcription, coding, and reasoning"

---

## 1. MAI-Code-1（Copilot / VS Code に搭載）

- **推論効率に優れたコーディングモデル（inference efficient coding model）**
- **GitHub 向けにチューニング**
- **Copilot および VS Code で利用可能**

> "MAI-Code-1: our inference efficient coding model tuned for GitHub, is now available in Copilot and VS Code"

→ Copilot のコード生成・補完を、**GitHub 向けに最適化された専用モデル** で底上げ。推論効率重視のため、低コストで高スループットなコード支援が期待できます。

---

## 2. MAI モデルファミリー全体像

| モデル | 種別 | ハイライト |
|--------|------|-----------|
| **MAI-Code-1** | コーディング | GitHub向けチューニング・Copilot/VS Codeで利用可 |
| **MAI-Thinking-1** | 推論 | ゼロ蒸留・35Bアクティブ・256Kコンテキスト |
| **MAI-Image-2.5** | 画像 | text-to-image / image-to-image・Arena上位 |
| **MAI-Transcribe 1.5** | 音声→文字 | 43言語・最先端精度・ストリーミング近日 |
| **MAI-Voice-2** | 音声 | 15以上の追加言語・新音声オプション |

---

## 3. MAI-Thinking-1 の詳細

Microsoft AI の **初の推論モデル**。

- **ゼロ蒸留（zero distillation）**：エンタープライズグレードでクリーン・商用ライセンス済みのデータで一から学習
- **35B アクティブパラメータ / 256K コンテキスト** — 高効率・高性能、かつ **低トークンコスト**
- ブラインドテストで、独立した評価者が **Sonnet 4.6 より好む**
- SWE Bench Pro のコーディング能力で **Opus 4.6 に匹敵**
- 複雑なマルチステップ指示・長文脈推論・コード生成に強い
- **Foundry でプライベートプレビュー** 公開中

> "On a blind test, independent raters prefer it to Sonnet 4.6, and it matches Opus 4.6 on coding abilities on SWE Bench Pro"

---

## 4. その他のモダリティ

- **MAI-Image-2.5**：Microsoft 初の text-to-image（Arena AI リーダーボード #3）/ image-to-image（#2、Nano Banana 2 を上回る）両対応。**PowerPoint で稼働、OneDrive へ展開中、Foundry に登場**
- **MAI-Transcribe 1.5**：**43言語** で最先端の精度、ストリーミング対応予定
- **MAI-Voice-2**：**15以上の追加言語** と新しい音声オプション

---

## 5. 提供先の広がり

- MAI モデルは **Fireworks AI / Baseten / Open Router** などサードパーティでも提供
- **Fireworks AI は Foundry 上で GA**
  - エンタープライズガバナンス + Azure データレジデンシー
  - どのモデルを選んでも **単一プラットフォーム体験**

---

## 6. Microsoft Agent Platform の方針

> "build your agent in GitHub, deploy it to Microsoft Foundry and optimize it automatically with models best suited for the job"

→ **GitHub で構築 → Microsoft Foundry にデプロイ → 用途に最適なモデルで自動最適化**。
Foundry の **最適化モデルルーター** が、品質・速度・コストをエージェントごとにバランスします。さらに **Frontier Tuning**（コンプライアンス境界内での強化学習）で、自社データ・業務知識を反映した独自モデルを、IP を環境内に保ったまま育てられます。

---

## 7. 参考リンク

- Microsoft Blog（OMB Developer Blog）: https://aka.ms/AA10pe80
- Microsoft Agent Platform（HERO Blog）: https://aka.ms/AA1188jd
- [microsoft/Build26-news](https://github.com/microsoft/Build26-news)
