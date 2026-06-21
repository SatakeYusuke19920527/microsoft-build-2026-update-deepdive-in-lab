# Microsoft Build 2026 — GitHub Copilot Update Deep Dive

Microsoft Build 2026 で発表された **GitHub Copilot** 関連アップデートを、公式情報（GitHub Blog / GitHub Changelog / GitHub Docs / Microsoft 公式）をもとに **4 つのテーマ**に再編してまとめたリポジトリです。

> 「22 項目をそのまま並べる」のではなく、顧客説明用に **4 テーマ**へ整理しています。

---

## 📚 ディレクトリ構成（4テーマ）

| # | テーマ | 主な内容 |
|---|--------|----------|
| [01](./01-copilot-app-and-dev-experience/README.md) | **Copilot app / エージェント開発体験** | GitHub Copilot app・Copilot Max・Agent Merge・Canvas・Local/Cloud Sandboxes |
| [02](./02-copilot-code-review/README.md) | **Copilot Code Review** | レビュー拡張性強化・Medium tier review・`/security-review`・`/rubberduck` GA・Azure Repos 対応 |
| [03](./03-sdk-cli-runtime/README.md) | **SDK / CLI / 実行基盤 / IDE** | Copilot SDK GA（6言語・MCP/Hook/BYOK/OpenTelemetry）・CLI TUI・Voice Input・Prompt Scheduling・Rubber Duck 連携・**JetBrains 強化**（Agent picker・/remote・/compact・/chronicle・Agent Debug・thinking effort）・**VS Code Multi-Agent**・**Visual Studio Plan agent** |
| [04](./04-cloud-agent-context-ecosystem/README.md) | **Cloud Agent / 継続コンテキスト / エコシステム** | Cloud Automations/Autopilot・**Agentic Workflows（PAT 不要）**・業務範囲拡張・Memory++/`/chronicle`・Partner Apps・Gemini・MAI モデルファミリー（7モデル）・MAI-Code-1-Flash・Frontier Tuning |
| [05](./05-presentation/README.md) | **Presentation（発表用スライド）** | 01〜04 をまとめた Marp スライド（`slides.md` / `slides.pdf`） |

---

## 🎯 4 テーマの位置づけ

顧客説明用には、個別リリースを以下の 4 テーマに再編すると伝わりやすくなります。

1. **Agent-native development** — Copilot app / Canvas / Sandboxes（→ [01](./01-copilot-app-and-dev-experience/README.md)）
2. **AI code review** — 拡張可能で適応的なコードレビュー（→ [02](./02-copilot-code-review/README.md)）
3. **Extensible agent platform** — SDK / CLI / ランタイム（→ [03](./03-sdk-cli-runtime/README.md)）
4. **Trusted execution & ecosystem** — Cloud Agent / Memory / Partner Agent Apps（→ [04](./04-cloud-agent-context-ecosystem/README.md)）

---

## 🔗 主要な公式ソース

- GitHub Blog: [GitHub Copilot app: The agent-native desktop experience](https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/)
- GitHub Changelog (2026-06-02):
  - [MAI-Code-1-Flash is now available for GitHub Copilot](https://github.blog/changelog/2026-06-02-mai-code-1-flash-is-now-available-for-github-copilot/)
  - [Copilot SDK is now generally available](https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/)
  - [Copilot CLI: Improved UI, rubber duck, prompt scheduling, and voice input](https://github.blog/changelog/2026-06-02-copilot-cli-improved-ui-rubber-duck-prompt-scheduling-and-voice-input/)
  - [Expanded technical preview availability for the GitHub Copilot app](https://github.blog/changelog/2026-06-02-expanded-technical-preview-availability-for-the-github-copilot-app/)
  - [Gemini models in Copilot CLI, cloud agent, and the Copilot app](https://github.blog/changelog/2026-06-02-gemini-models-in-copilot-cli-cloud-agent-and-the-copilot-app/)
  - [Cloud and local sandboxes for GitHub Copilot now in public preview](https://github.blog/changelog/2026-06-02-cloud-and-local-sandboxes-for-github-copilot-now-in-public-preview/)
  - [JetBrains — Copilot CLI and agentic capabilities enhancements](https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides/)
- GitHub Changelog (2026-06-04): [GitHub Copilot in Visual Studio — May update](https://github.blog/changelog/2026-06-04-github-copilot-in-visual-studio-may-update/)
- GitHub Changelog (2026-06-11): [Agentic workflows no longer need a PAT](https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/)
- Copilot CLI changelog: <https://github.com/github/copilot-cli/blob/main/changelog.md>
- GitHub Docs: [About cloud and local sandboxes](https://docs.github.com/copilot/concepts/about-cloud-and-local-sandboxes) ／ [Code review](https://docs.github.com/copilot/concepts/agents/code-review) ／ [Copilot SDK](https://docs.github.com/en/copilot/how-tos/copilot-sdk/getting-started)
- Microsoft: [Building a hill-climbing machine — 7 new MAI models](https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/) ／ [microsoft/Build26-news](https://github.com/microsoft/Build26-news)

---

> 📅 Microsoft Build 2026（2026年6月2日）時点の公式発表に基づきます。内容は今後の更新で変わる可能性があります。
