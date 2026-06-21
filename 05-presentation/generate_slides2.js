// Microsoft Build 2026 — GitHub Copilot Update Deep Dive
// Dark Microsoft Theme (inspired by BuildRecap2026.pptx)
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Microsoft Build 2026 — GitHub Copilot Update Deep Dive";

// ── Dark Microsoft Theme Colors ───────────────────────
const BG     = "091F2C";  // Main dark navy background
const CARD   = "0D2440";  // Card background
const CARD2  = "0A1A30";  // Slightly darker card
const BLUE   = "0078D4";  // Microsoft Blue
const LBLUE  = "4FC3F7";  // Light blue for body text
const PURPLE = "8661C5";  // Microsoft Purple
const TEAL   = "49C5B1";  // Accent teal
const LTEAL  = "A0E0D8";  // Light teal
const GREEN  = "8DE971";  // Accent green
const RED    = "F4364F";  // Accent red
const LRED   = "FF8A95";  // Light red
const ORANGE = "F26B43";  // Accent orange
const WHITE  = "FFFFFF";
const LTEXT  = "C8D8F4";  // Light text (body)
const MTEXT  = "6080A0";  // Mid text (secondary)
const BORDER = "2A446F";  // Border/divider

// Section accent colors (01-04)
const S = { "01": BLUE, "02": TEAL, "03": RED, "04": PURPLE };
// Lighter variants for badges/highlights
const SL = { "01": "D6E4F7", "02": "CCEEEA", "03": "FFDFDF", "04": "E8D8F8" };

const mkShadow = () => ({ type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.30 });

// ── Gradient accent bar (BLUE → PURPLE two-tone) ────
function gradBar(s, x, y, w) {
  const split = w * 0.35;
  s.addShape(pres.shapes.RECTANGLE, { x, y, w: split,     h: 0.04, fill: { color: BLUE   }, line: { color: BLUE,   width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: x + split, y, w: w - split, h: 0.04, fill: { color: PURPLE }, line: { color: PURPLE, width: 0 } });
}

// ── Section-colored accent bar ─────────────────────
function secBar(s, x, y, w, color) {
  const split = w * 0.4;
  s.addShape(pres.shapes.RECTANGLE, { x, y, w: split,     h: 0.04, fill: { color }, line: { color, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: x + split, y, w: w - split, h: 0.04, fill: { color: PURPLE }, line: { color: PURPLE, width: 0 } });
}

// ── Content slide helper ────────────────────────────
function cs(title, accent) {
  const s = pres.addSlide();
  s.background = { color: BG };
  s.addText(title, { x: 0.42, y: 0.1, w: 9.2, h: 0.56, fontSize: 21, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  secBar(s, 0.42, 0.7, 9.2, accent || BLUE);
  return s;
}

// ── Section divider ─────────────────────────────────
function sec(n, title, sub, color) {
  const s = pres.addSlide();
  s.background = { color: BG };
  s.addShape(pres.shapes.OVAL, { x: 7.5, y: -1.5, w: 5.0, h: 5.0, fill: { color, transparency: 88 }, line: { color, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 6.0, y: 3.2, w: 2.8, h: 2.8, fill: { color: PURPLE, transparency: 92 }, line: { color: PURPLE, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: 5.625, fill: { color }, line: { color, width: 0 } });
  s.addText(n,     { x: 0.25, y: 0.6, w: 2.0, h: 2.2, fontSize: 96, bold: true, color, fontFace: "Segoe UI", margin: 0, valign: "middle", align: "center" });
  s.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 1.15, w: 0.06, h: 1.8, fill: { color, transparency: 35 }, line: { color, width: 0 } });
  s.addText(title, { x: 2.75, y: 1.0, w: 7.0, h: 1.05, fontSize: 30, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  if (sub) s.addText(sub, { x: 2.75, y: 2.2, w: 6.8, h: 0.9, fontSize: 14, color: LTEXT, fontFace: "Segoe UI", margin: 0 });
  secBar(s, 2.75, 3.28, 6.5, color);
  return s;
}

// ── Dark card ───────────────────────────────────────
function card(s, x, y, w, h, accent) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: CARD }, line: { color: accent || BORDER, width: 0.7 }, shadow: mkShadow() });
  if (accent) s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h, fill: { color: accent }, line: { color: accent, width: 0 } });
}

// ── Badge chip ──────────────────────────────────────
function badge(s, x, y, label, color) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w: 1.4, h: 0.3, fill: { color }, line: { color, width: 0 } });
  s.addText(label, { x, y, w: 1.4, h: 0.3, fontSize: 10, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
}

// ── Bullet helper ────────────────────────────────────
function bul(items) {
  return items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < items.length - 1 } }));
}

// ── Footer ───────────────────────────────────────────
function ft(s) {
  s.addText("Microsoft Build 2026 — GitHub Copilot Update Deep Dive", { x: 0.3, y: 5.42, w: 9, h: 0.2, fontSize: 9, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
}

// ════════════════════════════════════════════════════
// SLIDE 1: Title
// ════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: BG };
  // Decorative circles
  s.addShape(pres.shapes.OVAL, { x: 7.5, y: -1.2, w: 5.5, h: 5.5, fill: { color: BLUE,   transparency: 88 }, line: { color: BLUE,   width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: -0.5, y: 3.5,  w: 3.5, h: 3.5, fill: { color: PURPLE, transparency: 90 }, line: { color: PURPLE, width: 0 } });
  // Left accent bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: 5.625, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });

  // Badge
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 0.5, w: 3.2, h: 0.42, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
  s.addText("Microsoft Build 2026", { x: 0.35, y: 0.5, w: 3.2, h: 0.42, fontSize: 14, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });

  s.addText("GitHub Copilot", { x: 0.35, y: 1.1, w: 9.2, h: 1.1, fontSize: 52, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });

  // Two-tone title underline
  const tw = 6.5;
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 2.22, w: tw * 0.38, h: 0.06, fill: { color: BLUE   }, line: { color: BLUE,   width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35 + tw * 0.38, y: 2.22, w: tw * 0.62, h: 0.06, fill: { color: PURPLE }, line: { color: PURPLE, width: 0 } });

  s.addText("アップデート Deep Dive", { x: 0.35, y: 2.38, w: 9.2, h: 0.72, fontSize: 28, color: LBLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText("エージェントネイティブ開発のコントロールセンターへ", { x: 0.35, y: 3.22, w: 8.5, h: 0.42, fontSize: 14, color: LTEXT, fontFace: "Segoe UI", margin: 0 });
  s.addText("2026年6月2日 発表  ／  一次情報（GitHub Blog・Microsoft AI）ベースのまとめ  ／  全35項目", { x: 0.35, y: 4.8, w: 9.2, h: 0.36, fontSize: 11, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
}

// ════════════════════════════════════════════════════
// SLIDE 2: Agenda
// ════════════════════════════════════════════════════
{
  const s = cs("アジェンダ — 4テーマ・35項目のアップデート", BLUE);
  const themes = [
    { n: "01", title: "Copilot App\nエージェント開発体験", cnt: "6項目", items: ["Copilot app (My Work)", "Copilot Max", "Agent Merge", "Canvas / AX", "Local Sandboxes", "Cloud Sandboxes"], c: BLUE,   lc: "D6E4F7" },
    { n: "02", title: "Copilot\nCode Review",            cnt: "5項目", items: ["拡張性強化 (Custom/MCP)", "Medium tier review", "/security-review", "/rubberduck  GA", "Azure Repos 対応"], c: TEAL,   lc: "CCEEEA" },
    { n: "03", title: "SDK / CLI\n実行基盤 / IDE",        cnt: "15項目", items: ["Copilot SDK GA (6言語)", "CLI TUI / Voice / Schedule", "JetBrains 7機能強化", "VS Code Multi-Agent", "Visual Studio Plan agent"], c: RED,    lc: "FFDFDF" },
    { n: "04", title: "Cloud Agent\nエコシステム",         cnt: "9項目",  items: ["Cloud Automations / Autopilot", "PAT 不要（GITHUB_TOKEN）", "Memory++ / /chronicle", "Partner Apps (9社)", "MAI モデルファミリー (7)"], c: PURPLE, lc: "E8D8F8" },
  ];
  const xs = [0.18, 2.6, 5.02, 7.45];
  themes.forEach((t, i) => {
    const x = xs[i]; const W = 2.32;
    // Card
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.82, w: W, h: 4.58, fill: { color: CARD }, line: { color: t.c, width: 0.8 }, shadow: mkShadow() });
    // Top accent bar
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.82, w: W, h: 0.42, fill: { color: t.c }, line: { color: t.c, width: 0 } });
    s.addText(t.n, { x, y: 0.82, w: W, h: 0.42, fontSize: 20, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(t.title, { x: x + 0.06, y: 1.3, w: W - 0.12, h: 0.9, fontSize: 13, bold: true, color: t.c, fontFace: "Segoe UI", margin: 4, align: "center", valign: "middle" });
    // Count badge
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.52, y: 2.25, w: W - 1.04, h: 0.3, fill: { color: t.c, transparency: 20 }, line: { color: t.c, width: 0 } });
    s.addText(t.cnt, { x: x + 0.52, y: 2.25, w: W - 1.04, h: 0.3, fontSize: 12, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(t.items.map((item, j) => ({ text: item, options: { bullet: true, breakLine: j < t.items.length - 1 } })),
      { x: x + 0.1, y: 2.65, w: W - 0.2, h: 2.65, fontSize: 10, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 3 });
  });
  ft(s);
}

// ════════════════════════════════════════════════════
// SECTION 01
// ════════════════════════════════════════════════════
sec("01", "Copilot App & エージェント開発体験", "エージェントネイティブなデスクトップ体験 ／ 並列エージェントのコントロールセンター", BLUE);

// SLIDE: 01-1 Copilot App
{
  const s = cs("01 — GitHub Copilot App：My Work ダッシュボード", BLUE);
  card(s, 0.2, 0.85, 5.05, 4.55, BLUE);
  s.addText("何が登場したか", { x: 0.44, y: 0.93, w: 4.6, h: 0.38, fontSize: 14, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText([
    { text: "スタンドアロンのデスクトップアプリ\n", options: { bold: true, color: WHITE } },
    { text: "（エディタのサイドバーではなく独立したアプリ）\n\n", options: { color: MTEXT } },
    { text: "My Work ビューで一元管理：\n", options: { bold: true, color: WHITE } },
    ...["アクティブなセッション", "Issue / Pull Request", "バックグラウンド自動化"].map((t, i, a) => ({ text: t, options: { bullet: true, color: LTEXT, breakLine: i < a.length - 1 } })),
    { text: "\n\n対象プラン（技術プレビュー）：\n", options: { bold: true, color: WHITE } },
    { text: "Pro / Pro+ / Business / Enterprise", options: { bullet: true, color: LTEXT } },
  ], { x: 0.44, y: 1.36, w: 4.6, h: 3.85, fontSize: 12, fontFace: "Segoe UI", margin: 0, valign: "top", paraSpaceAfter: 4 });

  s.addText("朝の時点で3つの作業が並列実行中", { x: 5.4, y: 0.9, w: 4.3, h: 0.38, fontSize: 13, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  const scenarios = [
    { tag: "Bug",  label: "本番バグ調査中",        desc: "エージェントが並列で調査",   color: RED    },
    { tag: "Feat", label: "バックログ実装中",       desc: "IssueをCopilotに割り当て",   color: TEAL   },
    { tag: "PR",   label: "PRフィードバック対応中", desc: "レビュー指摘を自動修正",     color: PURPLE },
  ];
  scenarios.forEach((sc, i) => {
    const y = 1.36 + i * 1.36;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.4, y, w: 4.3, h: 1.22, fill: { color: CARD }, line: { color: sc.color, width: 0.7 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.4, y, w: 0.07, h: 1.22, fill: { color: sc.color }, line: { color: sc.color, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.55, y: y + 0.1, w: 0.52, h: 0.36, fill: { color: sc.color }, line: { color: sc.color, width: 0 } });
    s.addText(sc.tag, { x: 5.55, y: y + 0.1, w: 0.52, h: 0.36, fontSize: 10, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(sc.label, { x: 6.18, y: y + 0.1, w: 3.4, h: 0.42, fontSize: 13, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
    s.addText(sc.desc,  { x: 6.18, y: y + 0.6, w: 3.4, h: 0.38, fontSize: 12, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  });
  ft(s);
}

// SLIDE: 01-2 Agent Merge + git worktree
{
  const s = cs("01 — Agent Merge & git worktree による並列セッション", BLUE);
  card(s, 0.2, 0.85, 4.8, 4.55, BLUE);
  s.addText("Agent Merge", { x: 0.44, y: 0.93, w: 4.3, h: 0.42, fontSize: 16, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText("PR をレビュー・チェック・マージまで自動化", { x: 0.44, y: 1.38, w: 4.3, h: 0.36, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 0 });
  const tbl = [
    [{ text: "選択肢", options: { bold: true, fill: { color: BLUE }, color: WHITE, fontSize: 11 } }, { text: "内容", options: { bold: true, fill: { color: BLUE }, color: WHITE, fontSize: 11 } }],
    [{ text: "CI をグリーンに戻す",    options: { fill: { color: CARD }, color: LTEXT, fontSize: 11 } }, { text: "失敗チェックを解消して再実行",    options: { fill: { color: CARD }, color: LTEXT, fontSize: 11 } }],
    [{ text: "フィードバック対応",      options: { fill: { color: CARD2 }, color: LTEXT, fontSize: 11 } }, { text: "レビュー指摘に自動対応",           options: { fill: { color: CARD2 }, color: LTEXT, fontSize: 11 } }],
    [{ text: "条件達成でマージ",        options: { fill: { color: CARD }, color: LTEXT, fontSize: 11 } }, { text: "全条件を満たしたら自動マージ",    options: { fill: { color: CARD }, color: LTEXT, fontSize: 11 } }],
  ];
  s.addTable(tbl, { x: 0.33, y: 1.82, w: 4.5, border: { pt: 0.5, color: BORDER }, rowH: 0.46, colW: [1.9, 2.6] });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.33, y: 3.72, w: 4.5, h: 0.82, fill: { color: CARD2 }, line: { color: BLUE, width: 0.5 } });
  s.addText('"You decide what automation is enabled and what ships."', { x: 0.44, y: 3.74, w: 4.28, h: 0.78, fontSize: 12, italic: true, color: LBLUE, fontFace: "Segoe UI", margin: 4, valign: "middle" });

  card(s, 5.2, 0.85, 4.55, 4.55, TEAL);
  s.addText("git worktree による並列セッション", { x: 5.44, y: 0.93, w: 4.0, h: 0.42, fontSize: 14, bold: true, color: TEAL, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["各セッションは独立した git worktree 上で動作", "複数エージェントが互いに干渉せず並行作業", "worktree の作成・後始末・ブランチ管理はアプリが自動処理", "手動セットアップ不要 → 並列実行が現実的な運用に"]),
    { x: 5.44, y: 1.4, w: 4.0, h: 2.4, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 8 });
  s.addText("並列 worktree イメージ", { x: 5.44, y: 3.9, w: 4.0, h: 0.3, fontSize: 11, bold: true, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  [["Session A\n(バグ修正)", RED, "FFDFDF"], ["Session B\n(機能実装)", TEAL, "CCEEEA"], ["Session C\n(レビュー)", PURPLE, "E8D8F8"]].forEach(([label, bc, fc], i) => {
    const x = 5.3 + i * 1.5;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 4.25, w: 1.35, h: 1.0, fill: { color: CARD }, line: { color: bc, width: 1.5 } });
    s.addText(label, { x, y: 4.25, w: 1.35, h: 1.0, fontSize: 10, color: bc, fontFace: "Segoe UI", margin: 4, align: "center", valign: "middle" });
  });
  ft(s);
}

// SLIDE: 01-3 Canvas & AX
{
  const s = cs("01 — Canvas & Agent Experience (AX)", BLUE);
  card(s, 0.2, 0.85, 5.1, 4.55, BLUE);
  s.addText("Canvas とは", { x: 0.44, y: 0.93, w: 4.6, h: 0.42, fontSize: 16, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText("人とエージェントの 双方向ワークサーフェス", { x: 0.44, y: 1.38, w: 4.6, h: 0.38, fontSize: 13, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  s.addText("表示できるもの：", { x: 0.44, y: 1.82, w: 4.5, h: 0.3, fontSize: 11, bold: true, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["プラン（計画） / Pull Request", "ブラウザセッション / ターミナル", "デプロイメント / ダッシュボード", "ワークフローの状態"]),
    { x: 0.44, y: 2.15, w: 4.5, h: 1.4, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.33, y: 3.66, w: 4.75, h: 0.88, fill: { color: CARD2 }, line: { color: BLUE, width: 0.5 } });
  s.addText('"Canvases are where that intent becomes visible work you can inspect, steer, and verify."',
    { x: 0.44, y: 3.68, w: 4.55, h: 0.84, fontSize: 11, italic: true, color: LBLUE, fontFace: "Segoe UI", margin: 4, valign: "middle" });

  s.addText("Chat vs Canvas — AX の進化", { x: 5.45, y: 0.9, w: 4.3, h: 0.42, fontSize: 14, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  const cmpData = [
    [{ text: "",       options: { bold: true, fill: { color: "132040" }, color: WHITE, fontSize: 11 } },
     { text: "Chat",   options: { bold: true, fill: { color: BORDER }, color: WHITE, fontSize: 11, align: "center" } },
     { text: "Canvas", options: { bold: true, fill: { color: BLUE },   color: WHITE, fontSize: 11, align: "center" } }],
    [{ text: "目的",     options: { fill: { color: CARD }, color: WHITE, bold: true, fontSize: 11 } }, { text: "指示・議論・推論",     options: { fill: { color: CARD }, color: LTEXT, fontSize: 11 } }, { text: "作業の可視化・操作",           options: { fill: { color: CARD }, color: LTEXT, fontSize: 11 } }],
    [{ text: "方向性",   options: { fill: { color: CARD2 }, color: WHITE, bold: true, fontSize: 11 } }, { text: "人 → エージェント",   options: { fill: { color: CARD2 }, color: LTEXT, fontSize: 11 } }, { text: "双方向（人 ⇄ エージェント）",   options: { fill: { color: CARD2 }, color: LTEXT, fontSize: 11 } }],
    [{ text: "表現形式", options: { fill: { color: CARD }, color: WHITE, bold: true, fontSize: 11 } }, { text: "テキストの流れ",        options: { fill: { color: CARD }, color: LTEXT, fontSize: 11 } }, { text: "プラン / PR / ターミナル 等",    options: { fill: { color: CARD }, color: LTEXT, fontSize: 11 } }],
    [{ text: "操作性",   options: { fill: { color: CARD2 }, color: WHITE, bold: true, fontSize: 11 } }, { text: "提案を読む",            options: { fill: { color: CARD2 }, color: LTEXT, fontSize: 11 } }, { text: "作業を一緒に操作する",           options: { fill: { color: CARD2 }, color: BLUE, fontSize: 11, bold: true } }],
  ];
  s.addTable(cmpData, { x: 5.4, y: 1.36, w: 4.3, border: { pt: 0.5, color: BORDER }, rowH: 0.5, colW: [1.1, 1.5, 1.7] });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.4, y: 4.0, w: 4.3, h: 1.0, fill: { color: CARD2 }, line: { color: BLUE, width: 0.7 } });
  s.addText([{ text: "Agent Experience (AX) ", options: { bold: true, color: BLUE } }, { text: "= 人とエージェントが\n共に操作するインターフェースの幕開け" }],
    { x: 5.52, y: 4.04, w: 4.1, h: 0.92, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  ft(s);
}

// SLIDE: 01-4 Sandboxes
{
  const s = cs("01 — サンドボックス：ローカル vs クラウド（Public Preview）", BLUE);
  s.addText("エージェントが安全に「実行・検査・テスト・反復」できる境界づけられた場所", { x: 0.3, y: 0.78, w: 9.4, h: 0.34, fontSize: 12, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  card(s, 0.2, 1.18, 4.65, 3.85, BLUE);
  s.addText("ローカルサンドボックス", { x: 0.44, y: 1.26, w: 4.2, h: 0.42, fontSize: 15, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["自分のマシン上の隔離環境で動作", "FS・ネットワーク・システム機能へのアクセスを制限", "ポリシーを集中管理・強制可能", "低レイテンシ・手元で完結"]),
    { x: 0.44, y: 1.74, w: 4.2, h: 2.4, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 7 });
  badge(s, 0.44, 4.6, "Public Preview", BLUE);
  card(s, 5.15, 1.18, 4.65, 3.85, TEAL);
  s.addText("クラウドサンドボックス", { x: 5.39, y: 1.26, w: 4.2, h: 0.42, fontSize: 15, bold: true, color: TEAL, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["GitHub ホストの完全隔離エフェメラル Linux 環境", "組織が独自のポリシーを定義可能", "どのデバイスからでもセッションをリモートで引き継ぎ可能", "デバイス非依存・リソース制約なし"]),
    { x: 5.39, y: 1.74, w: 4.2, h: 2.4, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 7 });
  badge(s, 5.39, 4.6, "Public Preview", TEAL);
  s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 5.1, w: 9.6, h: 0.34, fill: { color: CARD2 }, line: { color: ORANGE, width: 0.5 } });
  s.addText("MXC (Microsoft Execution Containers) — OS自体が封じ込めを強制するエンタープライズグレードのサンドボックス（プレビュー）",
    { x: 0.35, y: 5.1, w: 9.3, h: 0.34, fontSize: 11, color: ORANGE, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  ft(s);
}

// ════════════════════════════════════════════════════
// SECTION 02
// ════════════════════════════════════════════════════
sec("02", "Copilot Code Review", "エージェント出力にスケールする適応的・エージェント的レビューシステム", TEAL);

// SLIDE: 02-1
{
  const s = cs("02 — Copilot Code Review：5つの強化ポイント", TEAL);
  const features = [
    { title: "拡張性強化",          desc: "Custom Skills・MCP Server・Actions Workflow で\n社内基準・内部システムを反映したレビューを実現", c: TEAL,   badge: null },
    { title: "Medium Tier Review", desc: "高推論モデルへルーティング → 精度・再現率を向上\n管理者がリポジトリ単位で low / medium を設定", c: BLUE,   badge: null },
    { title: "/security-review",   desc: "セキュリティ観点に特化した評価専用スキル\n脆弱性検出に集中したレビューパスを提供",          c: RED,    badge: null },
    { title: "/rubberduck  GA",    desc: "複数モデルファミリーで実装を批評し新規の問題を発見\nGA 対応。設計・実装・テストのセカンドオピニオン", c: PURPLE, badge: "GA" },
    { title: "Azure Repos 対応",   desc: "Azure DevOps でもワンクリックレビュー・インラインコメント・\nコミット可能な修正提案が利用可能に",           c: ORANGE, badge: "Tech Preview" },
  ];
  const pos = [[0.2, 0.82], [5.1, 0.82], [0.2, 2.42], [5.1, 2.42], [0.2, 4.04]];
  features.forEach((f, i) => {
    const [x, y] = pos[i]; const W = i === 4 ? 9.6 : 4.72;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: W, h: 1.48, fill: { color: CARD }, line: { color: f.c, width: 0.7 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h: 1.48, fill: { color: f.c }, line: { color: f.c, width: 0 } });
    s.addText(f.title, { x: x + 0.18, y: y + 0.1, w: W - 0.26, h: 0.42, fontSize: 14, bold: true, color: f.c, fontFace: "Segoe UI", margin: 0 });
    s.addText(f.desc,  { x: x + 0.18, y: y + 0.56, w: W - 0.26, h: 0.84, fontSize: 11, color: LTEXT, fontFace: "Segoe UI", margin: 0, valign: "top" });
    if (f.badge) {
      s.addShape(pres.shapes.RECTANGLE, { x: x + W - 1.55, y: y + 0.07, w: 1.35, h: 0.3, fill: { color: f.c }, line: { color: f.c, width: 0 } });
      s.addText(f.badge, { x: x + W - 1.55, y: y + 0.07, w: 1.35, h: 0.3, fontSize: 10, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    }
  });
  ft(s);
}

// ════════════════════════════════════════════════════
// SECTION 03
// ════════════════════════════════════════════════════
sec("03", "SDK / CLI / 実行基盤 / IDE", "One runtime, many surfaces — 同じエージェントランタイムを多様なサーフェスで", RED);

// SLIDE: 03-1 SDK GA
{
  const s = cs("03 — GitHub Copilot SDK：GA（一般提供）6言語対応", RED);
  s.addText("対応言語（6言語）", { x: 0.3, y: 0.82, w: 4.0, h: 0.36, fontSize: 14, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  const langs = [
    { lang: "Node.js / TypeScript", c: TEAL },
    { lang: "Python",               c: BLUE },
    { lang: "Go",                   c: "00BCD4" },
    { lang: ".NET",                 c: PURPLE },
    { lang: "Rust",                 c: RED },
    { lang: "Java  ★ 新規追加",     c: ORANGE },
  ];
  langs.forEach((l, i) => {
    const x = 0.2 + (i % 2) * 2.28; const y = 1.24 + Math.floor(i / 2) * 0.72;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.1, h: 0.58, fill: { color: CARD }, line: { color: l.c, width: 1.5 }, shadow: mkShadow() });
    s.addText(l.lang, { x: x + 0.1, y, w: 1.9, h: 0.58, fontSize: 12, bold: true, color: l.c, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  });
  s.addText("SDK 主要機能", { x: 4.8, y: 0.82, w: 4.9, h: 0.36, fontSize: 14, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  [
    { title: "Custom Tools & MCP",      desc: "エージェントが自律呼び出し可能なツール登録・MCP接続",     c: RED    },
    { title: "OpenTelemetry Tracing",   desc: "W3C trace context を CLI〜ツール実行まで一貫して伝搬",    c: BLUE   },
    { title: "BYOK",                    desc: "OpenAI・Foundry・Anthropic の API キーを持ち込み可能",    c: TEAL   },
    { title: "Hook System",             desc: "pre/post ツール使用をインターセプトして動作を細かく制御",  c: PURPLE },
    { title: "Cloud & Remote Sessions", desc: "クラウドバックセッション作成・リモートURL オンデマンド発行", c: ORANGE },
  ].forEach((f, i) => {
    const y = 1.24 + i * 0.88;
    s.addShape(pres.shapes.RECTANGLE, { x: 4.8, y, w: 5.0, h: 0.74, fill: { color: CARD }, line: { color: BORDER, width: 0.5 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 4.8, y, w: 0.07, h: 0.74, fill: { color: f.c }, line: { color: f.c, width: 0 } });
    s.addText(f.title, { x: 4.97, y: y + 0.05, w: 4.7, h: 0.3,  fontSize: 12, bold: true, color: f.c,   fontFace: "Segoe UI", margin: 0 });
    s.addText(f.desc,  { x: 4.97, y: y + 0.39, w: 4.7, h: 0.28, fontSize: 11, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  });
  ft(s);
}

// SLIDE: 03-2 CLI
{
  const s = cs("03 — Copilot CLI：刷新された3つの新機能", RED);
  [
    { title: "新 Terminal UI（TUI）", badge: "/experimental", bc: ORANGE, desc: ["タブ型アクセスで PR・Issue・Gist をターミナルから操作", "カラーテーマ・アクセシビリティ改善を含む刷新 UI", "/experimental モードで提供中"], c: RED    },
    { title: "Voice Input（音声入力）", badge: "GA",            bc: GREEN,  desc: ["オンデバイスの音声テキスト変換（STT）を使用", "音声データは端末の外に出ない（プライバシー保護）", "ハンズフリーで CLI 操作が可能に"],       c: TEAL   },
    { title: "Prompt Scheduling",      badge: "新機能",         bc: PURPLE, desc: ["/every：繰り返しプロンプト・バックグラウンドタスクの定期実行", "/after：指定後に実行する遅延スケジュール", "Rubber Duck 連携：設計・実装・テストの批評を自動依頼"], c: PURPLE },
  ].forEach((f, i) => {
    const x = 0.2 + i * 3.27;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.82, w: 3.05, h: 4.68, fill: { color: CARD }, line: { color: f.c, width: 0.7 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.82, w: 3.05, h: 0.5, fill: { color: f.c }, line: { color: f.c, width: 0 } });
    s.addText(f.title, { x: x + 0.1, y: 0.84, w: 2.85, h: 0.46, fontSize: 13, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, valign: "middle" });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.1, y: 1.4, w: 1.4, h: 0.3, fill: { color: f.bc }, line: { color: f.bc, width: 0 } });
    s.addText(f.badge, { x: x + 0.1, y: 1.4, w: 1.4, h: 0.3, fontSize: 11, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(bul(f.desc), { x: x + 0.1, y: 1.82, w: 2.85, h: 3.5, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 8 });
  });
  ft(s);
}

// SLIDE: 03-3 JetBrains
{
  const s = cs("03 — JetBrains IDE：7つのエージェント機能強化", RED);
  card(s, 0.2, 0.82, 4.78, 4.68, RED);
  s.addText("Agent Picker — 4つのモード", { x: 0.44, y: 0.9, w: 4.3, h: 0.4, fontSize: 14, bold: true, color: RED, fontFace: "Segoe UI", margin: 0 });
  [
    { mode: "Agent mode",    desc: "自律タスク実行の完全エージェント体験（デフォルト）", c: RED    },
    { mode: "Ask mode",      desc: "クイック回答・アシスト",                            c: BLUE   },
    { mode: "Custom agents", desc: "自社ニーズに合わせたカスタムエージェント",            c: TEAL   },
    { mode: "Plan mode",     desc: "実装前に構造化プランを作成・レビュー",               c: PURPLE },
  ].forEach((m, i) => {
    const y = 1.38 + i * 0.83;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y, w: 0.12, h: 0.55, fill: { color: m.c }, line: { color: m.c, width: 0 } });
    s.addText(m.mode, { x: 0.57, y: y,        w: 4.2, h: 0.28, fontSize: 12, bold: true, color: m.c,   fontFace: "Segoe UI", margin: 0 });
    s.addText(m.desc, { x: 0.57, y: y + 0.28, w: 4.2, h: 0.28, fontSize: 11, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  });
  s.addText("新スラッシュコマンド & 機能", { x: 5.12, y: 0.88, w: 4.6, h: 0.4, fontSize: 14, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  [
    { cmd: "/remote",               desc: "github.com/モバイルから進行中セッションをリモート操作", c: BLUE   },
    { cmd: "/compact",              desc: "長時間セッションのコンテキストを手動圧縮",             c: TEAL   },
    { cmd: "/chronicle",            desc: "standup / tips / improve / search — セッション履歴分析", c: PURPLE },
    { cmd: "Agent Debug Panel",     desc: "エージェント動作の時系列イベントログ（Public Preview）", c: RED    },
    { cmd: "Thinking Effort",       desc: "推論モデルの思考量を low / medium / high で調整",       c: ORANGE },
    { cmd: "Customizations Editor", desc: "カスタムエージェント・skills・instructions を一元管理",  c: GREEN  },
  ].forEach((f, i) => {
    const y = 1.38 + i * 0.72;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.02, y, w: 0.07, h: 0.56, fill: { color: f.c }, line: { color: f.c, width: 0 } });
    s.addText(f.cmd,  { x: 5.2, y: y,        w: 4.5, h: 0.28, fontSize: 12, bold: true, color: f.c,   fontFace: "Segoe UI", margin: 0 });
    s.addText(f.desc, { x: 5.2, y: y + 0.28, w: 4.5, h: 0.28, fontSize: 11, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  });
  ft(s);
}

// SLIDE: 03-4 VS Code + Visual Studio
{
  const s = cs("03 — VS Code Multi-Agent & Visual Studio 2026 更新", RED);
  card(s, 0.2, 0.82, 4.72, 2.22, BLUE);
  s.addText("VS Code — Multi-Agent フレームワーク", { x: 0.44, y: 0.9, w: 4.2, h: 0.4, fontSize: 13, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["Orchestrator エージェントがタスクを分解し専門サブエージェントを並列実行", "linting / test-gen / docs / security review などを同時処理", "VS Code 内でリアルタイムに監視・介入（コンテキストスイッチ不要）"]),
    { x: 0.44, y: 1.35, w: 4.2, h: 1.6, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });
  card(s, 0.2, 3.18, 4.72, 2.22, TEAL);
  s.addText("VS Code — GA になった機能", { x: 0.44, y: 3.26, w: 4.2, h: 0.4, fontSize: 13, bold: true, color: TEAL, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["Agent skills・Agent hooks・Prompt files・Anthropic Thinking が GA", "BYOK が Editor Preview フラグなしで利用可能に", "Copilot CLI agent をデフォルトに移行中（段階展開）"]),
    { x: 0.44, y: 3.72, w: 4.2, h: 1.6, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });
  card(s, 5.1, 0.82, 4.7, 3.1, PURPLE);
  s.addText("Visual Studio 2026 — Plan Agent", { x: 5.34, y: 0.9, w: 4.25, h: 0.4, fontSize: 13, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  s.addText([
    { text: "1  コードベースをスキャンして詳細を把握\n",      options: { color: LTEXT } },
    { text: "2  不明点を質問しながらプランを起草\n",          options: { color: LTEXT } },
    { text: "3  開発者がチャット or Markdown を直接編集\n",   options: { color: LTEXT } },
    { text: "4  承認後、Agent mode でコード変更を実行\n",      options: { color: LTEXT } },
    { text: "5  ", options: { color: LTEXT } },
    { text: ".copilot/plans/", options: { bold: true, color: PURPLE } },
    { text: " にバージョン管理可能な形式で保存", options: { color: LTEXT } },
  ], { x: 5.34, y: 1.36, w: 4.25, h: 2.38, fontSize: 12, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });
  card(s, 5.1, 4.06, 4.7, 1.34, RED);
  s.addText("Visual Studio 2026 — Multi-file Change Summaries", { x: 5.34, y: 4.13, w: 4.25, h: 0.4, fontSize: 12, bold: true, color: RED, fontFace: "Segoe UI", margin: 0 });
  s.addText("複数ファイルにまたがる変更を統合ビューで一覧  ／  Accept / Undo をファイル単位・チャンク単位で選択可能",
    { x: 5.34, y: 4.58, w: 4.25, h: 0.72, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 0, valign: "top" });
  ft(s);
}

// ════════════════════════════════════════════════════
// SECTION 04
// ════════════════════════════════════════════════════
sec("04", "Cloud Agent / 継続コンテキスト / エコシステム", "コードを超えた自動化・デバイス横断の記憶・広がるパートナーエコシステム", PURPLE);

// SLIDE: 04-1 Cloud Automations + PAT不要
{
  const s = cs("04 — Cloud Agent：自動化の強化", PURPLE);
  card(s, 0.2, 0.82, 4.78, 4.68, PURPLE);
  s.addText("Cloud Automations / Autopilot", { x: 0.44, y: 0.9, w: 4.3, h: 0.42, fontSize: 14, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  [
    { label: "スケジュール実行",    c: PURPLE },
    { label: "GitHub イベント応答", c: BLUE   },
    { label: "Issue 起票",         c: TEAL   },
    { label: "コメント投稿",        c: RED    },
  ].forEach((t, i) => {
    const x = 0.35 + (i % 2) * 2.33; const y = 1.38 + Math.floor(i / 2) * 0.72;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.15, h: 0.58, fill: { color: CARD2 }, line: { color: t.c, width: 1.2 }, shadow: mkShadow() });
    s.addText(t.label, { x, y, w: 2.15, h: 0.58, fontSize: 12, bold: true, color: t.c, fontFace: "Segoe UI", margin: 4, align: "center", valign: "middle" });
  });
  s.addText("許可モデル", { x: 0.44, y: 2.92, w: 4.1, h: 0.34, fontSize: 13, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  s.addText([
    { text: "デフォルト：", options: { bold: true, color: WHITE } },
    { text: "各書き込みアクションの前に許可を要求\n", options: { color: LTEXT } },
    { text: "信頼確立後：", options: { bold: true, color: WHITE } },
    { text: "Autopilot モードに切り替え（完全自動化）", options: { color: LTEXT } },
  ], { x: 0.44, y: 3.3, w: 4.2, h: 1.6, fontSize: 12, fontFace: "Segoe UI", margin: 4, valign: "top" });

  card(s, 5.18, 0.82, 4.62, 2.22, TEAL);
  s.addText("Agentic Workflows — PAT が不要に", { x: 5.42, y: 0.9, w: 4.1, h: 0.42, fontSize: 13, bold: true, color: TEAL, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["GITHUB_TOKEN で動作（scope: copilot-requests: write）", "長命トークン（PAT）の作成・管理・ローテーションが不要に", "組織課金（organization-billed AI credits）に対応", "単一ワークフロースコープの短命トークンでセキュリティ向上"]),
    { x: 5.42, y: 1.38, w: 4.1, h: 1.55, fontSize: 11, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 4 });
  card(s, 5.18, 3.18, 4.62, 2.22, RED);
  s.addText("Cloud Agent の業務範囲拡張", { x: 5.42, y: 3.26, w: 4.1, h: 0.42, fontSize: 13, bold: true, color: RED, fontFace: "Segoe UI", margin: 0 });
  s.addText([{ text: '"Engineering doesn\'t end with writing code."', options: { italic: true, color: LBLUE } }],
    { x: 5.42, y: 3.72, w: 4.1, h: 0.42, fontSize: 11, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["Issue 起票", "ディスカッション開始", "レビュアーへの返信"]),
    { x: 5.42, y: 4.18, w: 4.1, h: 1.1, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });
  ft(s);
}

// SLIDE: 04-2 Memory++ + Partner + Gemini
{
  const s = cs("04 — Memory++ / Partner Apps / Gemini", PURPLE);
  card(s, 0.2, 0.82, 4.78, 2.3, PURPLE);
  s.addText("Memory++ & /chronicle", { x: 0.44, y: 0.9, w: 4.3, h: 0.42, fontSize: 14, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  s.addText("デバイスをまたぎ、時間を越えた継続性（continuity）：", { x: 0.44, y: 1.36, w: 4.3, h: 0.36, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 0 });
  ["Copilot App", "CLI", "VS Code", "GitHub.com"].forEach((surf, i) => {
    const x = 0.33 + i * 1.16;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.8, w: 1.08, h: 0.42, fill: { color: CARD2 }, line: { color: PURPLE, width: 1 } });
    s.addText(surf, { x, y: 1.8, w: 1.08, h: 0.42, fontSize: 11, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
  });
  s.addText("どのサーフェスのセッションコンテキストも横断的にクエリ可能", { x: 0.33, y: 2.3, w: 4.6, h: 0.6, fontSize: 10, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  card(s, 0.2, 3.28, 4.78, 2.12, BLUE);
  s.addText("Gemini モデル対応", { x: 0.44, y: 3.36, w: 4.3, h: 0.42, fontSize: 14, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  [{ s: "Copilot App", c: BLUE }, { s: "CLI", c: TEAL }, { s: "Cloud Agent", c: RED }].forEach((g, i) => {
    const x = 0.33 + i * 1.62;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.86, w: 1.46, h: 0.44, fill: { color: CARD2 }, line: { color: g.c, width: 1.5 } });
    s.addText(g.s, { x, y: 3.86, w: 1.46, h: 0.44, fontSize: 11, bold: true, color: g.c, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
  });
  s.addText("CLI でモデルファミリーを名前で指定：opus / sonnet / haiku / gpt / gemini など", { x: 0.33, y: 4.38, w: 4.6, h: 0.9, fontSize: 11, color: MTEXT, fontFace: "Segoe UI", margin: 0 });

  s.addText("Partner-built Agent Apps（9社）", { x: 5.2, y: 0.88, w: 4.5, h: 0.42, fontSize: 14, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  s.addText("GitHub を離れずにお気に入りのツールを利用 / Issue を新しいエージェントに割り当て",
    { x: 5.2, y: 1.34, w: 4.5, h: 0.36, fontSize: 11, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  [
    { name: "LaunchDarkly", area: "フィーチャーフラグ",          c: RED    },
    { name: "Amplitude",    area: "プロダクトアナリティクス",    c: BLUE   },
    { name: "Sonar",        area: "コード品質・静的解析",         c: TEAL   },
    { name: "Endor Labs",   area: "サプライチェーンセキュリティ", c: PURPLE },
    { name: "Octopus Deploy", area: "デプロイ自動化",            c: ORANGE },
    { name: "PagerDuty",    area: "インシデント管理",             c: RED    },
    { name: "Miro",         area: "コラボレーション",             c: TEAL   },
    { name: "Bright / Packfiles", area: "その他",                c: PURPLE },
  ].forEach((p, i) => {
    const x = 5.2 + (i % 2) * 2.3; const y = 1.78 + Math.floor(i / 2) * 0.78;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.15, h: 0.68, fill: { color: CARD }, line: { color: BORDER, width: 0.5 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h: 0.68, fill: { color: p.c }, line: { color: p.c, width: 0 } });
    s.addText(p.name, { x: x + 0.14, y: y + 0.04, w: 1.88, h: 0.3, fontSize: 11, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
    s.addText(p.area, { x: x + 0.14, y: y + 0.36, w: 1.88, h: 0.28, fontSize: 10, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  });
  ft(s);
}

// SLIDE: 04-3 MAI モデルファミリー
{
  const s = cs("04 — MAI モデルファミリー（Build 2026：7モデル）", PURPLE);
  s.addText("Microsoft が Build 2026 で発表した7つの自社製 AI モデル — すべてゼロから学習（他社モデルからの蒸留なし）",
    { x: 0.3, y: 0.78, w: 9.4, h: 0.34, fontSize: 12, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  const mdl = [
    [
      { text: "モデル",       options: { bold: true, fill: { color: BORDER }, color: WHITE, fontSize: 11, align: "center" } },
      { text: "カテゴリ",     options: { bold: true, fill: { color: BORDER }, color: WHITE, fontSize: 11, align: "center" } },
      { text: "主なスペック・特徴", options: { bold: true, fill: { color: BORDER }, color: WHITE, fontSize: 11, align: "center" } },
      { text: "状態",         options: { bold: true, fill: { color: BORDER }, color: WHITE, fontSize: 11, align: "center" } },
    ],
    [{ text: "MAI-Code-1-Flash  ★", options: { bold: true, color: RED,    fill: { color: CARD },  fontSize: 11 } }, { text: "コーディング",   options: { fill: { color: CARD },  color: LTEXT, fontSize: 11 } }, { text: "5B / GitHub Copilot 専用設計 / SWE-Bench Pro で Haiku 4.5 を +16pt 超 / トークン消費 60% 削減", options: { fill: { color: CARD },  color: LTEXT, fontSize: 10 } }, { text: "VS Code 展開中", options: { fill: { color: CARD },  color: RED,   fontSize: 10, bold: true } }],
    [{ text: "MAI-Thinking-1",      options: { bold: true, color: PURPLE, fill: { color: CARD2 }, fontSize: 11 } }, { text: "推論（旗艦）",   options: { fill: { color: CARD2 }, color: LTEXT, fontSize: 11 } }, { text: "35B active（MoE ~1T total）/ 256K ctx / SWE-Bench Pro 52.8% / AIME 97.0%",                     options: { fill: { color: CARD2 }, color: LTEXT, fontSize: 10 } }, { text: "Foundry Preview",options: { fill: { color: CARD2 }, color: MTEXT, fontSize: 10 } }],
    [{ text: "MAI-Image-2.5",        options: { bold: true, color: BLUE,   fill: { color: CARD },  fontSize: 11 } }, { text: "画像生成・編集", options: { fill: { color: CARD },  color: LTEXT, fontSize: 11 } }, { text: "text/image-to-image / Arena.ai 2位 / Flash版（低コスト・高速）も提供",                        options: { fill: { color: CARD },  color: LTEXT, fontSize: 10 } }, { text: "展開済み",       options: { fill: { color: CARD },  color: MTEXT, fontSize: 10 } }],
    [{ text: "MAI-Voice-2",          options: { bold: true, color: TEAL,   fill: { color: CARD2 }, fontSize: 11 } }, { text: "音声合成",       options: { fill: { color: CARD2 }, color: LTEXT, fontSize: 11 } }, { text: "15以上の言語 / 感情表現・プロソディ制御 / 短いサンプルから声紋クローニング / Flash版あり",      options: { fill: { color: CARD2 }, color: LTEXT, fontSize: 10 } }, { text: "—",              options: { fill: { color: CARD2 }, color: MTEXT, fontSize: 10 } }],
    [{ text: "MAI-Transcribe-1.5",   options: { bold: true, color: ORANGE, fill: { color: CARD },  fontSize: 11 } }, { text: "音声認識",       options: { fill: { color: CARD },  color: LTEXT, fontSize: 11 } }, { text: "43言語対応 / FLEURS ベンチマーク最高精度 / 競合比最大 5 倍高速 / コンテンツバイアス補正",        options: { fill: { color: CARD },  color: LTEXT, fontSize: 10 } }, { text: "—",              options: { fill: { color: CARD },  color: MTEXT, fontSize: 10 } }],
  ];
  s.addTable(mdl, { x: 0.2, y: 1.18, w: 9.6, border: { pt: 0.5, color: BORDER }, rowH: 0.67, colW: [2.25, 1.45, 4.5, 1.4] });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 5.12, w: 9.6, h: 0.3, fill: { color: CARD2 }, line: { color: PURPLE, width: 0.5 } });
  s.addText('"We train our reasoning models from scratch. We don\'t distill from other labs." — Microsoft',
    { x: 0.35, y: 5.12, w: 9.3, h: 0.3, fontSize: 11, italic: true, color: PURPLE, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  ft(s);
}

// SLIDE: 04-4 MAI-Code-1-Flash + Frontier Tuning
{
  const s = cs("04 — MAI-Code-1-Flash & Frontier Tuning", PURPLE);
  card(s, 0.2, 0.82, 4.78, 4.68, RED);
  s.addText("MAI-Code-1-Flash", { x: 0.44, y: 0.9, w: 4.3, h: 0.42, fontSize: 16, bold: true, color: RED, fontFace: "Segoe UI", margin: 0 });
  s.addText("GitHub Copilot 専用設計の最初の MAI モデル", { x: 0.44, y: 1.36, w: 4.3, h: 0.36, fontSize: 12, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  [
    { val: "5B",    label: "パラメータ数",           c: RED    },
    { val: "+16pt", label: "vs Haiku 4.5\nSWE-Bench Pro", c: TEAL   },
    { val: "-60%",  label: "トークン\n消費量削減",   c: BLUE   },
  ].forEach((st, i) => {
    const x = 0.33 + i * 1.58;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.8, w: 1.42, h: 1.08, fill: { color: CARD2 }, line: { color: st.c, width: 1.5 }, shadow: mkShadow() });
    s.addText(st.val,   { x, y: 1.84, w: 1.42, h: 0.52, fontSize: 26, bold: true, color: st.c, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(st.label, { x, y: 2.36, w: 1.42, h: 0.46, fontSize: 10, color: MTEXT, fontFace: "Segoe UI", margin: 0, align: "center", valign: "top" });
  });
  s.addText(bul(["VS Code から提供開始、モデルピッカーで選択可能", "提供プラン：Free / Student / Pro / Pro+ / Max（段階展開）", "「Microsoft 製コーディングモデルの新しい波の第一弾」"]),
    { x: 0.44, y: 3.0, w: 4.2, h: 2.1, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 8 });
  card(s, 5.18, 0.82, 4.62, 4.68, PURPLE);
  s.addText("Frontier Tuning", { x: 5.42, y: 0.9, w: 4.1, h: 0.42, fontSize: 16, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  s.addText("企業ワークフローでモデルをカスタム RL 学習", { x: 5.42, y: 1.36, w: 4.1, h: 0.36, fontSize: 12, color: MTEXT, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["強化学習（RL）を実際の業務環境で適用", "学習データは企業自身のもの：エージェントが完了したタスクのトレース", "チューニング後のモデルは企業環境内に留まり外部に出ない"]),
    { x: 5.42, y: 1.82, w: 4.1, h: 1.7, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 8 });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 3.7, w: 4.35, h: 1.6, fill: { color: CARD2 }, line: { color: PURPLE, width: 1 } });
  s.addText("実績例 — Excel 向けチューニング", { x: 5.44, y: 3.77, w: 4.08, h: 0.4, fontSize: 13, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  s.addText([
    { text: "GPT 5.4 と同等の精度 を\n", options: { bold: true, color: WHITE } },
    { text: "10倍の効率", options: { bold: true, fontSize: 22, color: RED } },
    { text: " で達成", options: { color: WHITE } },
  ], { x: 5.44, y: 4.22, w: 4.08, h: 0.9, fontSize: 14, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  ft(s);
}

// ════════════════════════════════════════════════════
// SUMMARY
// ════════════════════════════════════════════════════
{
  const s = cs("まとめ — 3つのメッセージ", BLUE);
  const msgs = [
    { n: "1", title: "コントロールセンター化", desc: "Copilot App + git worktree で複数エージェントを並列統制。\nAgent Merge でレビュー・チェック・マージまで自動化。", note: "Copilot app\nMy Work → worktree\n→ Agent Merge", c: BLUE   },
    { n: "2", title: "ひとつのシステム",      desc: "Canvas / Sandbox / Code Review / Cloud Automation / SDK / Partner Apps が連携。\nエージェントが作業を担い、人は品質・ポリシー・デリバリーを統制。", note: "35項目が\n1つのエコシステム\nとして統合", c: TEAL   },
    { n: "3", title: "基盤の強化",            desc: "MAI-Code-1-Flash が Copilot / VS Code に搭載。\nMAI 7モデルと Frontier Tuning でエコシステムが強化。", note: "MAI 7モデル\n+ Frontier Tuning\n+ IQ Layer", c: RED    },
  ];
  msgs.forEach((m, i) => {
    const y = 0.88 + i * 1.56;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y, w: 9.6, h: 1.4, fill: { color: CARD }, line: { color: m.c, width: 0.7 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y, w: 1.0, h: 1.4, fill: { color: m.c }, line: { color: m.c, width: 0 } });
    s.addText(m.n,     { x: 0.2, y,           w: 1.0, h: 1.4,  fontSize: 40, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(m.title, { x: 1.35, y: y + 0.1, w: 6.0, h: 0.42, fontSize: 16, bold: true, color: m.c,   fontFace: "Segoe UI", margin: 0 });
    s.addText(m.desc,  { x: 1.35, y: y + 0.56, w: 6.0, h: 0.76, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 0, valign: "top" });
    s.addShape(pres.shapes.RECTANGLE, { x: 7.6, y: y + 0.18, w: 2.05, h: 1.04, fill: { color: CARD2 }, line: { color: m.c, width: 0.6 } });
    s.addText(m.note, { x: 7.65, y: y + 0.18, w: 1.95, h: 1.04, fontSize: 9, color: m.c, fontFace: "Segoe UI", margin: 3, align: "center", valign: "middle" });
  });
  ft(s);
}

// SLIDE: Next Steps
{
  const s = cs("明日からの進め方（5ステップ）", BLUE);
  [
    { step: "Step 1", title: "試す",       action: "Copilot App（技術プレビュー）を既存の Pro / Business / Enterprise プランで有効化",                           c: BLUE   },
    { step: "Step 2", title: "並列体験",   action: "Issue を Copilot に割り当て、git worktree で複数エージェントセッションを並走させる",                         c: TEAL   },
    { step: "Step 3", title: "統制",       action: "Code Review の low / medium 設定・サンドボックスのポリシー定義・Agent Merge の自動化範囲を決定",               c: RED    },
    { step: "Step 4", title: "拡張",       action: "SDK / CLI で自社ツールにエージェントを組み込み、MCP サーバー・パートナーアプリを接続",                         c: PURPLE },
    { step: "Step 5", title: "モデル最適化", action: "MAI-Code-1-Flash をモデルピッカーで選択し、Frontier Tuning で自社ワークフローへのカスタム RL 学習を検討",   c: ORANGE },
  ].forEach((st, i) => {
    const y = 0.86 + i * 0.92;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y, w: 9.6, h: 0.8, fill: { color: CARD }, line: { color: st.c, width: 0.7 }, shadow: mkShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y, w: 1.48, h: 0.8, fill: { color: st.c }, line: { color: st.c, width: 0 } });
    s.addText(st.step,  { x: 0.2, y,           w: 1.48, h: 0.42, fontSize: 11, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(st.title, { x: 0.2, y: y + 0.42, w: 1.48, h: 0.38, fontSize: 14, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(st.action, { x: 1.82, y, w: 7.9, h: 0.8, fontSize: 12, color: LTEXT, fontFace: "Segoe UI", margin: 8, valign: "middle" });
  });
  ft(s);
}

// SLIDE: Thank you
{
  const s = pres.addSlide();
  s.background = { color: BG };
  s.addShape(pres.shapes.OVAL, { x: 7.2, y: -1.5, w: 5.5, h: 5.5, fill: { color: BLUE,   transparency: 88 }, line: { color: BLUE,   width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: -0.5, y: 3.5,  w: 3.5, h: 3.5, fill: { color: PURPLE, transparency: 90 }, line: { color: PURPLE, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: 5.625, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
  s.addText("Thank you!", { x: 0.35, y: 0.6,  w: 9, h: 1.2, fontSize: 52, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });

  const barW = 6.0;
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.85, w: barW * 0.38, h: 0.06, fill: { color: BLUE   }, line: { color: BLUE,   width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35 + barW * 0.38, y: 1.85, w: barW * 0.62, h: 0.06, fill: { color: PURPLE }, line: { color: PURPLE, width: 0 } });

  s.addText("Q&A", { x: 0.35, y: 2.0, w: 9, h: 0.72, fontSize: 30, color: LBLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText("一次情報ソース", { x: 0.35, y: 2.9, w: 9, h: 0.4, fontSize: 14, bold: true, color: LBLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText([
    { text: "GitHub Blog: ", options: { bold: true, color: BLUE } },
    { text: "GitHub Copilot app — The agent-native desktop experience\n", options: { color: LTEXT } },
    { text: "GitHub Changelog: ", options: { bold: true, color: BLUE } },
    { text: "MAI-Code-1-Flash / Copilot SDK GA / Copilot CLI / Sandboxes / JetBrains (2026-06-02)\n", options: { color: LTEXT } },
    { text: "GitHub Changelog: ", options: { bold: true, color: BLUE } },
    { text: "Agentic workflows no longer need a PAT (2026-06-11)\n", options: { color: LTEXT } },
    { text: "Microsoft AI: ", options: { bold: true, color: BLUE } },
    { text: "Building a hill-climbing machine — 7 new MAI models\n", options: { color: LTEXT } },
    { text: "GitHub Docs: ", options: { bold: true, color: BLUE } },
    { text: "docs.github.com/copilot  ／  microsoft/Build26-news", options: { color: LTEXT } },
  ], { x: 0.35, y: 3.42, w: 9, h: 1.9, fontSize: 12, fontFace: "Segoe UI", margin: 0, valign: "top", paraSpaceAfter: 4 });
}

// ════════════════════════════════════════════════════
// Output
// ════════════════════════════════════════════════════
pres.writeFile({ fileName: "build2026_copilot_deepdive1.pptx" })
  .then(() => console.log("Done: build2026_copilot_deepdive1.pptx"))
  .catch(err => { console.error("Error:", err); process.exit(1); });
