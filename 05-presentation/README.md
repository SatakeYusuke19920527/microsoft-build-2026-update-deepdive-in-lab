# 05. Presentation（発表資料）

`01`〜`04` の 4 テーマ別資料を **発表できる形式（スライド）** にまとめたものです。
形式は **[Marp](https://marp.app/)**（Markdown でスライドを書く）を採用しています。

> スライド本体（`slides.md`）は 30 分発表向けに 48 枚で構成しています。トップの 4 テーマ（Copilot app / Code Review / SDK・CLI / Cloud Agent）に沿って読み替えてご利用ください。

## 📄 ファイル

| ファイル | 内容 |
|---------|------|
| `slides.md` | Marp 形式のスライド本体（48枚・30分発表向け） |
| `slides.pdf` | 書き出し済み PDF（あれば） |

## 🖥️ プレビュー方法

### VS Code（おすすめ）
1. 拡張機能 **「Marp for VS Code」** をインストール
2. `slides.md` を開く
3. エディタ右上のプレビューアイコンでスライド表示

### Marp CLI（PDF / PPTX / HTML へ書き出し）

```bash
# PDF に書き出し
npx @marp-team/marp-cli slides.md --pdf

# PowerPoint (.pptx) に書き出し
npx @marp-team/marp-cli slides.md --pptx

# HTML に書き出し（ブラウザ発表用）
npx @marp-team/marp-cli slides.md --html

# プレビューサーバー（ライブリロード）
npx @marp-team/marp-cli -s .
```

## 🎨 発表の流れ（4テーマ）

1. **Copilot app / エージェント開発体験** — app・Copilot Max・Agent Merge・Canvas・Sandboxes（→ [01](../01-copilot-app-and-dev-experience/README.md)）
2. **Copilot Code Review** — 拡張性・medium tier・`/security-review`・`/rubberduck`・Azure Repos（→ [02](../02-copilot-code-review/README.md)）
3. **SDK / CLI / 実行基盤** — SDK GA・新 TUI・Voice・Scheduling・Rubber Duck 連携（→ [03](../03-sdk-cli-runtime/README.md)）
4. **Cloud Agent / 継続コンテキスト / エコシステム** — Automations/Autopilot・Memory++・Partner Apps・Gemini・MAI-Code-1-Flash（→ [04](../04-cloud-agent-context-ecosystem/README.md)）

## 📝 編集のヒント

- スライドの区切りは `---`（前後に空行）。
- 先頭の **front-matter**（`marp: true` 等）でテーマ・ページ番号・ヘッダー/フッターを設定。
- `<!-- _class: lead -->` を付けるとそのスライドだけ中央寄せの「表紙」スタイルに。
- 配色やフォントは front-matter の `style:` セクションで調整できます。
