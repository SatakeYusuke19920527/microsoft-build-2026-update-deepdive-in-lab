# 10. Presentation（発表資料）

`01`〜`09` のテーマ別資料を **発表できる形式（スライド）** にまとめたものです。
形式は **[Marp](https://marp.app/)**（Markdown でスライドを書く）を採用しています。

## 📄 ファイル

| ファイル | 内容 |
|---------|------|
| `slides.md` | Marp 形式のスライド本体（13枚） |
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

## 🎨 スライド構成（全13枚）

1. タイトル
2. アジェンダ
3. 全体像
4. GitHub Copilot アプリ
5. Canvas と Agent Experience
6. サンドボックス
7. コードレビュー
8. Copilot SDK と CLI
9. 自動化とクラウドエージェント
10. パートナーエージェントアプリ
11. AIモデル（MAI-Code-1 ほか）
12. Microsoft IQ コンテキスト層
13. まとめ / 一次情報ソース

## 📝 編集のヒント

- スライドの区切りは `---`（前後に空行）。
- 先頭の **front-matter**（`marp: true` 等）でテーマ・ページ番号・ヘッダー/フッターを設定。
- `<!-- _class: lead -->` を付けるとそのスライドだけ中央寄せの「表紙」スタイルに。
- 配色やフォントは front-matter の `style:` セクションで調整できます。
