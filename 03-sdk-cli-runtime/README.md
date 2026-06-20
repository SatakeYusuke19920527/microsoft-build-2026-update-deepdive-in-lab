# 3. SDK / CLI / 実行基盤

> 同じエージェントランタイムを、**自社ツール・ターミナル**など多様なサーフェスで使えるようになりました。「One runtime, many surfaces」がキーコンセプトです。
> 出典：GitHub 公式ブログ [GitHub Copilot app](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Copilot CLI changelog](https://github.com/github/copilot-cli/blob/main/changelog.md)

---

## GitHub Copilot SDK の GA

**Node.js/TypeScript・Python・Go・.NET・Rust・Java** で、Copilot のエージェントランタイムを自社ツールに組み込めるように。

- **Copilot アプリを支えるのと同じエージェントランタイム** を公開
- 個別のスタックを継ぎ接ぎせず、**同じ基盤の上で構築**
- ユースケース：社内コード解析ツール、リリースノート生成ツール、サポートワークフローへの埋め込みエージェント

> "You can now build your own tools with the GitHub Copilot SDK. Now generally available in Node.js/TypeScript, Python, Go, .NET, Rust, and Java, it exposes the same agentic runtime that powers the Copilot app."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Copilot SDK getting started（GitHub Docs）](https://docs.github.com/en/copilot/how-tos/copilot-sdk/getting-started)

---

## Copilot CLI の新 Terminal UI

タブ型 UI で **Issue・PR・Gist を CLI 内で操作**。`/experimental` 提供。

- 既存の CLI 体験を刷新し、**タブ型アクセス**で PR・Issue・Gist をターミナルから扱える
- `/experimental` モードで提供

> "Copilot CLI has a redesigned TUI in `/experimental` mode with tabbed access to pull requests, issues, and gists from the terminal."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Browse issues, PRs, gists in CLI（GitHub Docs）](https://docs.github.com/copilot/how-tos/copilot-cli/use-copilot-cli/browse-issues-prs-gists)

---

## Copilot CLI の Voice Input

端末で **音声入力**。音声は **ローカル処理**。

- **オンデバイスの音声テキスト変換**を使用するため、**音声は端末の外に出ない**

> "Voice mode uses on-device speech-to-text, so audio never leaves your machine."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Voice input（GitHub Docs）](https://docs.github.com/copilot/how-tos/copilot-cli/use-copilot-cli/voice-input)

---

## Copilot CLI の Prompt Scheduling

**`/every` と `/after`** により、プロンプトやスキルを **定期・遅延実行**。

- **`/every`**：繰り返しプロンプト・バックグラウンドタスクのスケジュール（定期実行）
- **`/after`**：指定後に実行する遅延スケジュール

> "`/every` schedules recurring prompts and background tasks."

🔗 出典: [GitHub Blog](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/) ／ [Copilot CLI changelog](https://github.com/github/copilot-cli/blob/main/changelog.md)

---

## Copilot CLI の Rubber Duck 連携

CLI のメインエージェントが必要に応じて **Rubber Duck へ設計・実装・テストの批評を依頼**。

- ターミナル内のメインエージェントから、**セカンドオピニオン（`/rubberduck`）** を呼び出して批評を得る（→ コードレビューは [02章](../02-copilot-code-review/README.md)）
- 人手を介さず、品質チェックを CLI ワークフローに組み込める

🔗 出典: [Copilot CLI changelog](https://github.com/github/copilot-cli/blob/main/changelog.md)

---

## 補足：実行基盤との関係

- Copilot CLI は Windows の **MXC（Microsoft Execution Containers）の高速プロセス分離** を採用し、エージェント実行をユーザーのデスクトップ・UI・入力デバイスから分離（Trusted execution）
- `/fleet` により、クラウドの主エージェントがプランを立て、複雑さに応じてタスクを **ローカルモデルのサブエージェント**へ振り分け

🔗 出典: [microsoft/Build26-news](https://github.com/microsoft/Build26-news)（Windows at Build 2026）

---

## まとめ

| 項目 | 一言で | 状態 |
|------|--------|------|
| Copilot SDK の GA | 6言語でエージェントランタイムを自社組込み | GA |
| 新 Terminal UI | PR/Issue/Gist をタブ型で操作 | `/experimental` |
| Voice Input | 端末で音声入力（ローカル処理） | — |
| Prompt Scheduling | `/every`・`/after` で定期・遅延実行 | — |
| Rubber Duck 連携 | CLI から設計・実装・テストの批評を依頼 | — |
