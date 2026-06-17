# 10. Presentation（発表資料）

`01`〜`09` のテーマ別資料を **発表できる形式（スライド）** にまとめたものです。
形式は **[Marp](https://marp.app/)**（Markdown でスライドを書く）を採用しています。

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

## 🎨 スライド構成（全48枚・30分発表向け）

各テーマをセクション区切り＋複数枚に分割し、原文引用と要点表で詳述しています。

0. 背景（なぜ今エージェントか／規模・課題・答え）
1. GitHub Copilot アプリ（登場・My Work・worktree・Agent Merge）
2. Canvas と Agent Experience（チャットの限界・Canvas・AX）
3. サンドボックス（必要性・ローカル/クラウド・MXC）
4. コードレビュー（課題・カスタマイズ・medium tier・Azure DevOps）
5. Copilot SDK と CLI
6. 自動化とクラウドエージェント（自動化・守備範囲・Memory++）
7. パートナーエージェントアプリ
8. AIモデル（MAI-Code-1・ファミリー・Thinking-1・提供先）
9. Microsoft IQ（概要・IQファミリー・概念図）
10. まとめ・導入の進め方・一次情報ソース

## 📝 編集のヒント

- スライドの区切りは `---`（前後に空行）。
- 先頭の **front-matter**（`marp: true` 等）でテーマ・ページ番号・ヘッダー/フッターを設定。
- `<!-- _class: lead -->` を付けるとそのスライドだけ中央寄せの「表紙」スタイルに。
- 配色やフォントは front-matter の `style:` セクションで調整できます。
