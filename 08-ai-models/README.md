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

### MAI-Code-1-Flash（小型・GA ロールアウト中）

Build 当日の Changelog では、より小型の **MAI-Code-1-Flash** が GitHub Copilot に登場しました。

- **Microsoft の小型ティア・コーディングモデル**（約 **5B パラメータ**）。サイズの割に **ベストインクラスの品質**
- **GitHub Copilot 向けに専用設計・チューニング**された「新しい purpose-built コーディングモデルの第一弾」
- **VS Code から提供開始**、モデルピッカーで選択可能
- 提供プラン：**Free / Student / Pro / Pro+ / Max**（限定ユーザーから段階展開）
- 軽量なコーディングワークフローに最適。複雑タスクで競合（Claude Haiku 4.5 等）比 **最大60%少ないトークン**、SWE-Bench Pro で優位という評価

> "MAI-Code-1-Flash, Microsoft's latest small-tier coding model, is now rolling out in GitHub Copilot starting with VS Code. ... Designed and tuned specifically for GitHub Copilot, this marks the first in a new wave of purpose-built coding models from Microsoft."

---

## 2. MAI モデルファミリー全体像

| モデル | 種別 | ハイライト |
|--------|------|-----------|
| **MAI-Code-1** | コーディング | GitHub向けチューニング・Copilot/VS Codeで利用可 |
| **MAI-Code-1-Flash** | コーディング（小型） | 約5B・VS Codeから提供・Free/Student/Pro/Pro+/Max |
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

## 5. Copilot で使えるモデルの広がり（MAI 以外）

GitHub Copilot は **マルチモデル**前提で、Build 2026 では選択肢がさらに広がりました。

- **Gemini モデルの Copilot surfaces 対応**：**Copilot CLI・Cloud Agent・Copilot app** で Gemini モデルを選択可能に
  - CLI ではモデルファミリーを名前で指定（`opus` / `sonnet` / `haiku` / `gpt` / `gemini` など）
- **MAI-Code-1 / MAI-Code-1-Flash**（前述）
- 既存の Anthropic（Claude）系・OpenAI（GPT）系モデルと併存

> 用途・コスト・速度に応じて、エージェントごとに最適なモデルを選べる。

---

## 6. 提供先の広がり（MAI モデルの配布）
- **Fireworks AI は Foundry 上で GA**
  - エンタープライズガバナンス + Azure データレジデンシー
  - どのモデルを選んでも **単一プラットフォーム体験**

---

## 7. Microsoft Agent Platform の方針

> "build your agent in GitHub, deploy it to Microsoft Foundry and optimize it automatically with models best suited for the job"

→ **GitHub で構築 → Microsoft Foundry にデプロイ → 用途に最適なモデルで自動最適化**。
Foundry の **最適化モデルルーター** が、品質・速度・コストをエージェントごとにバランスします。さらに **Frontier Tuning**（コンプライアンス境界内での強化学習）で、自社データ・業務知識を反映した独自モデルを、IP を環境内に保ったまま育てられます。

---

## 8. 参考リンク

- MAI-Code-1-Flash（Changelog）: https://github.blog/changelog/2026-06-02-mai-code-1-flash-is-now-available-for-github-copilot/
- [Copilot 対応モデル一覧（GitHub Docs）](https://docs.github.com/copilot/reference/ai-models/supported-models)
- Microsoft Blog（OMB Developer Blog）: https://aka.ms/AA10pe80
- Microsoft Agent Platform（HERO Blog）: https://aka.ms/AA1188jd
- [microsoft/Build26-news](https://github.com/microsoft/Build26-news)
