// Microsoft Build 2026 — GitHub Copilot Update Deep Dive
// PptxGenJS slide generator
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Microsoft Build 2026 — GitHub Copilot Update Deep Dive";

// ── Color Palette ────────────────────────────────────
const DARK    = "1F2328";
const BLUE    = "0969DA";
const LBLUE   = "CFE3FF";
const GREEN   = "2DA44E";
const LGREEN  = "DAFBE1";
const RED     = "CF222E";
const LRED    = "FFEBE9";
const PURPLE  = "8250DF";
const LPURPLE = "FBEFFF";
const ORANGE  = "BC4C00";
const YELLOW  = "BF8700";
const LYELLOW = "FFF8C5";
const WHITE   = "FFFFFF";
const OWHT    = "F6F8FA";
const GRAY    = "6E7781";
const LGRAY   = "D0D7DE";

// ── Helpers ──────────────────────────────────────────
const mkS = () => ({ type: "outer", color: "000000", blur: 5, offset: 2, angle: 135, opacity: 0.10 });

function cs(title, barColor) {
  const s = pres.addSlide();
  s.background = { color: OWHT };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.62, fill: { color: barColor || BLUE }, line: { color: barColor || BLUE, width: 0 } });
  s.addText(title, { x: 0.4, y: 0.08, w: 9.2, h: 0.5, fontSize: 19, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  return s;
}

function sec(n, title, sub, color) {
  const s = pres.addSlide();
  s.background = { color: color };
  s.addShape(pres.shapes.OVAL, { x: 7.0, y: -1.8, w: 6, h: 6, fill: { color: WHITE, transparency: 90 }, line: { color: WHITE, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: -1.0, y: 3.5, w: 3.5, h: 3.5, fill: { color: WHITE, transparency: 93 }, line: { color: WHITE, width: 0 } });
  s.addText(n, { x: 0.4, y: 0.8, w: 1.6, h: 2.0, fontSize: 80, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, valign: "middle", align: "center" });
  s.addShape(pres.shapes.RECTANGLE, { x: 2.2, y: 1.1, w: 0.07, h: 1.7, fill: { color: WHITE, transparency: 40 }, line: { color: WHITE, width: 0 } });
  s.addText(title, { x: 2.5, y: 0.95, w: 7.1, h: 1.1, fontSize: 32, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  if (sub) s.addText(sub, { x: 2.5, y: 2.2, w: 7.1, h: 0.9, fontSize: 14, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  return s;
}

function card(s, x, y, w, h, accent) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: WHITE }, line: { color: LGRAY, width: 0.5 }, shadow: mkS() });
  if (accent) s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h, fill: { color: accent }, line: { color: accent, width: 0 } });
}

function ft(s) {
  s.addText("Microsoft Build 2026 — GitHub Copilot Update Deep Dive", { x: 0.3, y: 5.42, w: 9, h: 0.2, fontSize: 9, color: GRAY, fontFace: "Segoe UI", margin: 0 });
}

function bul(items) {
  return items.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < items.length - 1 } }));
}

// ════════════════════════════════════════════════════
// SLIDE 1: Title
// ════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: DARK };
  s.addShape(pres.shapes.OVAL, { x: 7.0, y: -1.5, w: 5.5, h: 5.5, fill: { color: BLUE, transparency: 82 }, line: { color: BLUE, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: -0.5, y: 3.8, w: 3.5, h: 3.5, fill: { color: GREEN, transparency: 87 }, line: { color: GREEN, width: 0 } });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.55, w: 3.1, h: 0.44, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
  s.addText("Microsoft Build 2026", { x: 0.5, y: 0.55, w: 3.1, h: 0.44, fontSize: 14, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });

  s.addText("GitHub Copilot", { x: 0.5, y: 1.15, w: 9, h: 1.1, fontSize: 54, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  s.addText("アップデート Deep Dive", { x: 0.5, y: 2.28, w: 9, h: 0.78, fontSize: 30, color: LBLUE, fontFace: "Segoe UI", margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.18, w: 4.0, h: 0.04, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
  s.addText("エージェントネイティブ開発のコントロールセンターへ", { x: 0.5, y: 3.32, w: 9, h: 0.45, fontSize: 15, color: LGRAY, fontFace: "Segoe UI", margin: 0 });
  s.addText("2026年6月2日 発表  ／  一次情報（GitHub Blog・Microsoft AI）ベースのまとめ  ／  全35項目", { x: 0.5, y: 4.75, w: 9, h: 0.4, fontSize: 12, color: GRAY, fontFace: "Segoe UI", margin: 0 });
}

// ════════════════════════════════════════════════════
// SLIDE 2: Agenda — 4 theme cards
// ════════════════════════════════════════════════════
{
  const s = cs("アジェンダ — 4テーマ・35項目のアップデート", DARK);
  const themes = [
    { num: "01", title: "Copilot App\nエージェント開発体験", count: "6項目", items: ["Copilot app (My Work)", "Copilot Max", "Agent Merge", "Canvas / AX", "Local Sandboxes", "Cloud Sandboxes"], color: BLUE },
    { num: "02", title: "Copilot\nCode Review",            count: "5項目", items: ["拡張性強化 (Custom/MCP)", "Medium tier review", "/security-review", "/rubberduck  GA", "Azure Repos 対応"], color: GREEN },
    { num: "03", title: "SDK / CLI\n実行基盤 / IDE",        count: "15項目", items: ["Copilot SDK GA (6言語)", "CLI TUI / Voice / Schedule", "JetBrains 7機能強化", "VS Code Multi-Agent", "Visual Studio Plan agent"], color: RED },
    { num: "04", title: "Cloud Agent\nエコシステム",         count: "9項目",  items: ["Cloud Automations", "PAT 不要", "Memory++ / /chronicle", "Partner Apps (9社)", "MAI モデルファミリー (7)"], color: PURPLE },
  ];
  const xs = [0.15, 2.6, 5.05, 7.5];
  themes.forEach((t, i) => {
    const x = xs[i];
    const W = 2.35;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.72, w: W, h: 4.65, fill: { color: t.color }, line: { color: t.color, width: 0 }, shadow: mkS() });
    s.addText(t.num,   { x, y: 0.76, w: W, h: 0.9, fontSize: 42, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 6, align: "center", valign: "middle" });
    s.addText(t.title, { x: x + 0.07, y: 1.62, w: W - 0.14, h: 0.88, fontSize: 13, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 4, align: "center", valign: "middle" });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.52, y: 2.54, w: W - 1.04, h: 0.32, fill: { color: WHITE, transparency: 20 }, line: { color: WHITE, width: 0 } });
    s.addText(t.count, { x: x + 0.52, y: 2.54, w: W - 1.04, h: 0.32, fontSize: 12, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(t.items.map((item, j) => ({ text: item, options: { bullet: true, breakLine: j < t.items.length - 1 } })), { x: x + 0.1, y: 2.96, w: W - 0.2, h: 2.35, fontSize: 10, color: WHITE, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 3 });
  });
  ft(s);
}

// ════════════════════════════════════════════════════
// SECTION 01
// ════════════════════════════════════════════════════
sec("01", "Copilot App & エージェント開発体験", "エージェントネイティブなデスクトップ体験 ／ 並列エージェントのコントロールセンター", BLUE);

// SLIDE: 01-1 Copilot App My Work
{
  const s = cs("01 — GitHub Copilot App：My Work ダッシュボード", BLUE);

  card(s, 0.2, 0.7, 5.0, 4.7, BLUE);
  s.addText("何が登場したか", { x: 0.45, y: 0.76, w: 4.6, h: 0.4, fontSize: 14, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText([
    { text: "スタンドアロンのデスクトップアプリ\n", options: { bold: true } },
    { text: "（エディタのサイドバーではなく独立したアプリ）\n\n", options: {} },
    { text: "My Work ビューで一元管理：\n", options: { bold: true } },
    ...["アクティブなセッション", "Issue / Pull Request", "バックグラウンド自動化"].map((t, i, a) => ({ text: t, options: { bullet: true, breakLine: i < a.length - 1 } })),
    { text: "\n\n対象プラン（技術プレビュー）：\n", options: { bold: true } },
    { text: "Pro / Pro+ / Business / Enterprise", options: { bullet: true } },
  ], { x: 0.45, y: 1.22, w: 4.4, h: 4.1, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 0, valign: "top", paraSpaceAfter: 4 });

  const scenarios = [
    { icon: "Bug", label: "本番バグ調査中", desc: "エージェントが並列で調査", color: RED },
    { icon: "Feat", label: "バックログ実装中", desc: "IssueをCopilotに割り当て", color: GREEN },
    { icon: "PR", label: "PRフィードバック対応中", desc: "レビュー指摘を自動修正", color: PURPLE },
  ];
  s.addText("朝の時点で3つの作業が並列実行中", { x: 5.4, y: 0.76, w: 4.3, h: 0.38, fontSize: 13, bold: true, color: DARK, fontFace: "Segoe UI", margin: 0 });
  scenarios.forEach((sc, i) => {
    const y = 1.2 + i * 1.45;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.4, y, w: 4.3, h: 1.28, fill: { color: WHITE }, line: { color: LGRAY, width: 0.5 }, shadow: mkS() });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.4, y, w: 0.07, h: 1.28, fill: { color: sc.color }, line: { color: sc.color, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.55, y: y + 0.08, w: 0.55, h: 0.38, fill: { color: sc.color }, line: { color: sc.color, width: 0 } });
    s.addText(sc.icon, { x: 5.55, y: y + 0.08, w: 0.55, h: 0.38, fontSize: 10, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(sc.label, { x: 6.2, y: y + 0.08, w: 3.4, h: 0.42, fontSize: 13, bold: true, color: DARK, fontFace: "Segoe UI", margin: 0 });
    s.addText(sc.desc,  { x: 6.2, y: y + 0.6, w: 3.4, h: 0.42, fontSize: 12, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  });
  ft(s);
}

// SLIDE: 01-2 Agent Merge + git worktree
{
  const s = cs("01 — Agent Merge & git worktree による並列セッション", BLUE);

  card(s, 0.2, 0.7, 4.75, 4.7, BLUE);
  s.addText("Agent Merge", { x: 0.45, y: 0.78, w: 4.3, h: 0.42, fontSize: 16, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText("PR をレビュー・チェック・マージまで自動化", { x: 0.45, y: 1.24, w: 4.3, h: 0.38, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 0 });

  const tableData = [
    [{ text: "選択肢", options: { bold: true, fill: { color: BLUE }, color: WHITE, fontSize: 11 } },
     { text: "内容",   options: { bold: true, fill: { color: BLUE }, color: WHITE, fontSize: 11 } }],
    [{ text: "CI をグリーンに戻す", options: { fontSize: 11 } }, { text: "失敗チェックを解消して再実行", options: { fontSize: 11 } }],
    [{ text: "フィードバック対応",   options: { fontSize: 11 } }, { text: "レビュー指摘に自動対応",         options: { fontSize: 11 } }],
    [{ text: "条件達成でマージ",     options: { fontSize: 11 } }, { text: "全条件を満たしたら自動マージ",   options: { fontSize: 11 } }],
  ];
  s.addTable(tableData, { x: 0.35, y: 1.72, w: 4.4, border: { pt: 0.5, color: LGRAY }, rowH: 0.44, colW: [2.0, 2.4] });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 3.66, w: 4.45, h: 0.82, fill: { color: LBLUE }, line: { color: BLUE, width: 0 } });
  s.addText('"You decide what automation is enabled and what ships."', { x: 0.45, y: 3.68, w: 4.25, h: 0.78, fontSize: 12, italic: true, color: BLUE, fontFace: "Segoe UI", margin: 4, valign: "middle" });

  card(s, 5.15, 0.7, 4.6, 4.7, GREEN);
  s.addText("git worktree による並列セッション", { x: 5.4, y: 0.78, w: 4.1, h: 0.42, fontSize: 14, bold: true, color: GREEN, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["各セッションは独立した git worktree 上で動作", "複数エージェントが互いに干渉せず並行作業", "worktree の作成・後始末・ブランチ管理はアプリが自動処理", "手動セットアップ不要 → 並列実行が現実的な運用に"]),
    { x: 5.4, y: 1.3, w: 4.1, h: 2.5, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 8 });

  s.addText("並列 worktree イメージ", { x: 5.4, y: 3.9, w: 4.1, h: 0.3, fontSize: 11, bold: true, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  [["Session A\n(バグ修正)", LRED, RED], ["Session B\n(機能実装)", LGREEN, GREEN], ["Session C\n(レビュー対応)", LPURPLE, PURPLE]].forEach(([label, bg, border], i) => {
    const x = 5.25 + i * 1.52;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 4.28, w: 1.38, h: 1.0, fill: { color: bg }, line: { color: border, width: 1.5 } });
    s.addText(label, { x, y: 4.28, w: 1.38, h: 1.0, fontSize: 10, color: DARK, fontFace: "Segoe UI", margin: 4, align: "center", valign: "middle" });
  });
  ft(s);
}

// SLIDE: 01-3 Canvas & AX
{
  const s = cs("01 — Canvas & Agent Experience (AX)", BLUE);

  card(s, 0.2, 0.7, 5.1, 4.7, BLUE);
  s.addText("Canvas とは", { x: 0.45, y: 0.78, w: 4.6, h: 0.42, fontSize: 16, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText("人とエージェントの 双方向ワークサーフェス", { x: 0.45, y: 1.26, w: 4.6, h: 0.4, fontSize: 13, bold: true, color: DARK, fontFace: "Segoe UI", margin: 0 });
  s.addText("表示できるもの：", { x: 0.45, y: 1.72, w: 4.5, h: 0.3, fontSize: 12, bold: true, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["プラン（計画） / Pull Request", "ブラウザセッション / ターミナル", "デプロイメント / ダッシュボード", "ワークフローの状態"]),
    { x: 0.45, y: 2.05, w: 4.5, h: 1.5, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 3.66, w: 4.7, h: 0.82, fill: { color: LBLUE }, line: { color: BLUE, width: 0 } });
  s.addText('"Canvases are where that intent becomes visible work you can inspect, steer, and verify."',
    { x: 0.45, y: 3.68, w: 4.5, h: 0.78, fontSize: 11, italic: true, color: BLUE, fontFace: "Segoe UI", margin: 4, valign: "middle" });

  s.addText("Chat vs Canvas — AX の進化", { x: 5.4, y: 0.75, w: 4.3, h: 0.42, fontSize: 14, bold: true, color: DARK, fontFace: "Segoe UI", margin: 0 });
  const cmpData = [
    [{ text: "",      options: { bold: true, fill: { color: DARK }, color: WHITE, fontSize: 11 } },
     { text: "Chat",  options: { bold: true, fill: { color: DARK }, color: WHITE, fontSize: 11, align: "center" } },
     { text: "Canvas",options: { bold: true, fill: { color: BLUE }, color: WHITE, fontSize: 11, align: "center" } }],
    [{ text: "目的",    options: { bold: true, fontSize: 11 } }, { text: "指示・議論・推論",    options: { fontSize: 11 } }, { text: "作業の可視化・操作",              options: { fontSize: 11 } }],
    [{ text: "方向性",  options: { bold: true, fontSize: 11 } }, { text: "人 → エージェント",  options: { fontSize: 11 } }, { text: "双方向（人 ⇄ エージェント）",   options: { fontSize: 11 } }],
    [{ text: "表現形式",options: { bold: true, fontSize: 11 } }, { text: "テキストの流れ",      options: { fontSize: 11 } }, { text: "プラン / PR / ターミナル 等",    options: { fontSize: 11 } }],
    [{ text: "操作性",  options: { bold: true, fontSize: 11 } }, { text: "提案を読む",          options: { fontSize: 11 } }, { text: "作業を一緒に操作する",           options: { fontSize: 11, bold: true, color: BLUE } }],
  ];
  s.addTable(cmpData, { x: 5.35, y: 1.22, w: 4.3, border: { pt: 0.5, color: LGRAY }, rowH: 0.5, colW: [1.1, 1.5, 1.7] });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.35, y: 3.9, w: 4.3, h: 1.15, fill: { color: LBLUE }, line: { color: BLUE, width: 1 } });
  s.addText([{ text: "Agent Experience (AX) ", options: { bold: true } }, { text: "= 人とエージェントが\n共に操作するインターフェースの幕開け" }],
    { x: 5.5, y: 3.95, w: 4.05, h: 1.05, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  ft(s);
}

// SLIDE: 01-4 Sandboxes
{
  const s = cs("01 — サンドボックス：ローカル vs クラウド（Public Preview）", BLUE);
  s.addText("エージェントが安全に「実行・検査・テスト・反復」できる境界づけられた場所", { x: 0.3, y: 0.68, w: 9.4, h: 0.36, fontSize: 12, color: GRAY, fontFace: "Segoe UI", margin: 0 });

  card(s, 0.2, 1.12, 4.65, 3.9, BLUE);
  s.addText("ローカルサンドボックス", { x: 0.45, y: 1.2, w: 4.2, h: 0.42, fontSize: 15, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["自分のマシン上の隔離環境で動作", "FS・ネットワーク・システム機能へのアクセスを制限", "ポリシーを集中管理・強制可能", "低レイテンシ・手元で完結"]),
    { x: 0.45, y: 1.72, w: 4.2, h: 2.5, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 7 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.45, y: 4.58, w: 1.8, h: 0.3, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
  s.addText("Public Preview", { x: 0.45, y: 4.58, w: 1.8, h: 0.3, fontSize: 11, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });

  card(s, 5.15, 1.12, 4.65, 3.9, GREEN);
  s.addText("クラウドサンドボックス", { x: 5.4, y: 1.2, w: 4.2, h: 0.42, fontSize: 15, bold: true, color: GREEN, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["GitHub ホストの完全隔離エフェメラル Linux 環境", "組織が独自のポリシーを定義可能", "どのデバイスからでもセッションをリモートで引き継ぎ可能", "デバイス非依存・リソース制約なし"]),
    { x: 5.4, y: 1.72, w: 4.2, h: 2.5, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 7 });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.4, y: 4.58, w: 1.8, h: 0.3, fill: { color: GREEN }, line: { color: GREEN, width: 0 } });
  s.addText("Public Preview", { x: 5.4, y: 4.58, w: 1.8, h: 0.3, fontSize: 11, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 5.08, w: 9.6, h: 0.34, fill: { color: LYELLOW }, line: { color: YELLOW, width: 0.5 } });
  s.addText("MXC (Microsoft Execution Containers) — OS自体が封じ込めを強制するエンタープライズグレードのサンドボックス（プレビュー）",
    { x: 0.35, y: 5.08, w: 9.3, h: 0.34, fontSize: 11, color: DARK, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  ft(s);
}

// ════════════════════════════════════════════════════
// SECTION 02
// ════════════════════════════════════════════════════
sec("02", "Copilot Code Review", "エージェント出力にスケールする適応的・エージェント的レビューシステム", GREEN);

// SLIDE: 02-1 Code Review 5 features
{
  const s = cs("02 — Copilot Code Review：5つの強化ポイント", GREEN);

  const features = [
    { title: "拡張性強化", desc: "Custom Skills・MCP Server・Actions Workflow で\n社内基準・内部システムを反映したレビューを実現", color: GREEN, badge: null },
    { title: "Medium Tier Review", desc: "高推論モデルへルーティング → 精度・再現率を向上\n管理者がリポジトリ単位で low / medium を設定", color: BLUE, badge: null },
    { title: "/security-review", desc: "セキュリティ観点に特化した評価専用スキル\n脆弱性検出に集中したレビューパスを提供", color: RED, badge: null },
    { title: "/rubberduck  GA", desc: "複数モデルファミリーで実装を批評し新規の問題を発見\n一般提供（GA）、設計・実装・テストのセカンドオピニオン", color: PURPLE, badge: "GA" },
    { title: "Azure Repos 対応", desc: "Azure DevOps でもワンクリックレビュー・インラインコメント・\nコミット可能な修正提案が利用可能に", color: ORANGE, badge: "Tech Preview" },
  ];
  const positions = [[0.2, 0.72], [5.1, 0.72], [0.2, 2.32], [5.1, 2.32], [0.2, 3.93]];
  features.forEach((f, i) => {
    const [x, y] = positions[i];
    const W = i === 4 ? 9.6 : 4.7;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: W, h: 1.48, fill: { color: WHITE }, line: { color: LGRAY, width: 0.5 }, shadow: mkS() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h: 1.48, fill: { color: f.color }, line: { color: f.color, width: 0 } });
    s.addText(f.title, { x: x + 0.18, y: y + 0.1, w: W - 0.26, h: 0.42, fontSize: 14, bold: true, color: f.color, fontFace: "Segoe UI", margin: 0 });
    s.addText(f.desc,  { x: x + 0.18, y: y + 0.56, w: W - 0.26, h: 0.84, fontSize: 11, color: DARK, fontFace: "Segoe UI", margin: 0, valign: "top" });
    if (f.badge) {
      s.addShape(pres.shapes.RECTANGLE, { x: x + W - 1.5, y: y + 0.06, w: 1.3, h: 0.3, fill: { color: f.color }, line: { color: f.color, width: 0 } });
      s.addText(f.badge, { x: x + W - 1.5, y: y + 0.06, w: 1.3, h: 0.3, fontSize: 10, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    }
  });
  ft(s);
}

// ════════════════════════════════════════════════════
// SECTION 03
// ════════════════════════════════════════════════════
sec("03", "SDK / CLI / 実行基盤 / IDE", "One runtime, many surfaces — 同じエージェントランタイムを多様なサーフェスで", RED);

// SLIDE: 03-1 Copilot SDK GA
{
  const s = cs("03 — GitHub Copilot SDK：GA（一般提供）6言語対応", RED);

  s.addText("対応言語（6言語）", { x: 0.3, y: 0.72, w: 4.0, h: 0.38, fontSize: 14, bold: true, color: DARK, fontFace: "Segoe UI", margin: 0 });
  const langs = [
    { lang: "Node.js / TypeScript", color: GREEN  },
    { lang: "Python",               color: BLUE   },
    { lang: "Go",                   color: "00ACD7" },
    { lang: ".NET",                 color: PURPLE },
    { lang: "Rust",                 color: RED    },
    { lang: "Java  ★ 新規追加",     color: ORANGE },
  ];
  langs.forEach((l, i) => {
    const x = 0.2 + (i % 2) * 2.25;
    const y = 1.15 + Math.floor(i / 2) * 0.72;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.05, h: 0.58, fill: { color: WHITE }, line: { color: l.color, width: 1.8 }, shadow: mkS() });
    s.addText(l.lang, { x: x + 0.1, y, w: 1.9, h: 0.58, fontSize: 12, bold: true, color: l.color, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  });

  s.addText("SDK 主要機能", { x: 4.75, y: 0.72, w: 4.9, h: 0.38, fontSize: 14, bold: true, color: DARK, fontFace: "Segoe UI", margin: 0 });
  const sdkFeatures = [
    { title: "Custom Tools & MCP",      desc: "エージェントが自律呼び出し可能なツール登録・MCP接続",    color: RED    },
    { title: "OpenTelemetry Tracing",   desc: "W3C trace context を CLI〜ツール実行まで一貫して伝搬",   color: BLUE   },
    { title: "BYOK",                    desc: "OpenAI・Foundry・Anthropic の API キーを持ち込み可能",   color: GREEN  },
    { title: "Hook System",             desc: "pre/post ツール使用をインターセプトして動作を細かく制御", color: PURPLE },
    { title: "Cloud & Remote Sessions", desc: "クラウドバックセッション作成・リモート URL をオンデマンド発行", color: ORANGE },
  ];
  sdkFeatures.forEach((f, i) => {
    const y = 1.15 + i * 0.87;
    s.addShape(pres.shapes.RECTANGLE, { x: 4.75, y, w: 5.0, h: 0.74, fill: { color: WHITE }, line: { color: LGRAY, width: 0.5 }, shadow: mkS() });
    s.addShape(pres.shapes.RECTANGLE, { x: 4.75, y, w: 0.07, h: 0.74, fill: { color: f.color }, line: { color: f.color, width: 0 } });
    s.addText(f.title, { x: 4.92, y: y + 0.05, w: 4.7, h: 0.3,  fontSize: 12, bold: true, color: f.color, fontFace: "Segoe UI", margin: 0 });
    s.addText(f.desc,  { x: 4.92, y: y + 0.39, w: 4.7, h: 0.28, fontSize: 11, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  });
  ft(s);
}

// SLIDE: 03-2 CLI 3 features
{
  const s = cs("03 — Copilot CLI：刷新された3つの新機能", RED);
  const cliFeatures = [
    { title: "新 Terminal UI（TUI）", badge: "/experimental", badgeColor: ORANGE, points: ["タブ型アクセスで PR・Issue・Gist をターミナルから操作", "カラーテーマ・アクセシビリティ改善を含む刷新 UI", "/experimental モードで提供中"], color: RED },
    { title: "Voice Input（音声入力）", badge: "GA", badgeColor: GREEN, points: ["オンデバイスの音声テキスト変換（STT）を使用", "音声データは端末の外に出ない（プライバシー保護）", "ハンズフリーで CLI 操作が可能に"], color: BLUE },
    { title: "Prompt Scheduling", badge: "新機能", badgeColor: PURPLE, points: ["/every：繰り返しプロンプト・バックグラウンドタスクの定期実行", "/after：指定後に実行する遅延スケジュール", "Rubber Duck 連携：設計・実装・テストの批評を自動依頼"], color: PURPLE },
  ];
  cliFeatures.forEach((f, i) => {
    const x = 0.2 + i * 3.27;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.7, w: 3.05, h: 4.72, fill: { color: WHITE }, line: { color: LGRAY, width: 0.5 }, shadow: mkS() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 0.7, w: 3.05, h: 0.52, fill: { color: f.color }, line: { color: f.color, width: 0 } });
    s.addText(f.title, { x: x + 0.1, y: 0.72, w: 2.85, h: 0.48, fontSize: 13, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, valign: "middle" });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 0.1, y: 1.3, w: 1.3, h: 0.34, fill: { color: f.badgeColor }, line: { color: f.badgeColor, width: 0 } });
    s.addText(f.badge, { x: x + 0.1, y: 1.3, w: 1.3, h: 0.34, fontSize: 12, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(bul(f.points), { x: x + 0.1, y: 1.75, w: 2.85, h: 3.5, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 8 });
  });
  ft(s);
}

// SLIDE: 03-3 JetBrains
{
  const s = cs("03 — JetBrains IDE：7つのエージェント機能強化", RED);

  card(s, 0.2, 0.7, 4.75, 4.7, RED);
  s.addText("Agent Picker — 4つのモード", { x: 0.45, y: 0.78, w: 4.3, h: 0.4, fontSize: 14, bold: true, color: RED, fontFace: "Segoe UI", margin: 0 });
  [
    { mode: "Agent mode", desc: "自律タスク実行の完全エージェント体験（デフォルト）", color: RED },
    { mode: "Ask mode",    desc: "クイック回答・アシスト",                            color: BLUE },
    { mode: "Custom agents", desc: "自社ニーズに合わせたカスタムエージェント",          color: GREEN },
    { mode: "Plan mode",   desc: "実装前に構造化プランを作成・レビュー",               color: PURPLE },
  ].forEach((m, i) => {
    const y = 1.3 + i * 0.82;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y, w: 0.12, h: 0.55, fill: { color: m.color }, line: { color: m.color, width: 0 } });
    s.addText(m.mode, { x: 0.58, y: y,        w: 4.1, h: 0.28, fontSize: 12, bold: true, color: m.color, fontFace: "Segoe UI", margin: 0 });
    s.addText(m.desc, { x: 0.58, y: y + 0.28, w: 4.1, h: 0.28, fontSize: 11, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  });

  s.addText("新スラッシュコマンド & 機能", { x: 5.1, y: 0.75, w: 4.6, h: 0.4, fontSize: 14, bold: true, color: RED, fontFace: "Segoe UI", margin: 0 });
  [
    { cmd: "/remote",                desc: "github.com/モバイルから進行中セッションをリモート操作", color: BLUE   },
    { cmd: "/compact",               desc: "長時間セッションのコンテキストを手動圧縮",             color: GREEN  },
    { cmd: "/chronicle",             desc: "standup / tips / improve / search — セッション履歴分析", color: PURPLE },
    { cmd: "Agent Debug Panel",      desc: "エージェント動作の時系列イベントログ（Public Preview）", color: RED    },
    { cmd: "Thinking Effort",        desc: "推論モデルの思考量を low / medium / high で調整",       color: ORANGE },
    { cmd: "Customizations Editor",  desc: "カスタムエージェント・skills・instructions を一元管理",  color: YELLOW },
  ].forEach((f, i) => {
    const y = 1.22 + i * 0.72;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.0, y, w: 0.07, h: 0.56, fill: { color: f.color }, line: { color: f.color, width: 0 } });
    s.addText(f.cmd,  { x: 5.18, y: y,        w: 4.5, h: 0.28, fontSize: 12, bold: true, color: f.color, fontFace: "Segoe UI", margin: 0 });
    s.addText(f.desc, { x: 5.18, y: y + 0.28, w: 4.5, h: 0.28, fontSize: 11, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  });
  ft(s);
}

// SLIDE: 03-4 VS Code + Visual Studio
{
  const s = cs("03 — VS Code Multi-Agent & Visual Studio 2026 更新", RED);

  card(s, 0.2, 0.7, 4.72, 2.22, BLUE);
  s.addText("VS Code — Multi-Agent フレームワーク", { x: 0.45, y: 0.78, w: 4.2, h: 0.4, fontSize: 13, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["Orchestrator エージェントがタスクを分解し専門サブエージェントを並列実行", "linting / test-gen / docs / security review などを同時処理", "VS Code 内でリアルタイムに監視・介入（コンテキストスイッチ不要）"]),
    { x: 0.45, y: 1.25, w: 4.2, h: 1.58, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });

  card(s, 0.2, 3.06, 4.72, 2.25, GREEN);
  s.addText("VS Code — GA になった機能", { x: 0.45, y: 3.13, w: 4.2, h: 0.4, fontSize: 13, bold: true, color: GREEN, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["Agent skills・Agent hooks・Prompt files・Anthropic Thinking が GA", "BYOK が Editor Preview フラグなしで利用可能に", "Copilot CLI agent をデフォルトに移行中（段階展開）"]),
    { x: 0.45, y: 3.6, w: 4.2, h: 1.6, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });

  card(s, 5.1, 0.7, 4.7, 3.08, PURPLE);
  s.addText("Visual Studio 2026 — Plan Agent", { x: 5.35, y: 0.78, w: 4.25, h: 0.4, fontSize: 13, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  s.addText([
    { text: "1  コードベースをスキャンして詳細を把握\n",              options: {} },
    { text: "2  不明点を質問しながらプランを起草\n",                  options: {} },
    { text: "3  開発者がチャット or Markdown を直接編集\n",           options: {} },
    { text: "4  承認後、Agent mode でコード変更を実行\n",              options: {} },
    { text: "5  プランは ", options: {} },
    { text: ".copilot/plans/", options: { bold: true, color: PURPLE } },
    { text: " にバージョン管理可能な形式で保存", options: {} },
  ], { x: 5.35, y: 1.26, w: 4.25, h: 2.3, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });

  card(s, 5.1, 3.93, 4.7, 1.38, RED);
  s.addText("Visual Studio 2026 — Multi-file Change Summaries", { x: 5.35, y: 4.0, w: 4.25, h: 0.4, fontSize: 13, bold: true, color: RED, fontFace: "Segoe UI", margin: 0 });
  s.addText("複数ファイルにまたがる変更を統合ビューで一覧  ／  Accept / Undo をファイル単位・チャンク単位で選択可能",
    { x: 5.35, y: 4.46, w: 4.25, h: 0.75, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 0, valign: "top" });
  ft(s);
}

// ════════════════════════════════════════════════════
// SECTION 04
// ════════════════════════════════════════════════════
sec("04", "Cloud Agent / 継続コンテキスト / エコシステム", "コードを超えた自動化・デバイス横断の記憶・広がるパートナーエコシステム", PURPLE);

// SLIDE: 04-1 Cloud Automations + PAT不要
{
  const s = cs("04 — Cloud Agent：自動化の強化", PURPLE);

  card(s, 0.2, 0.7, 4.75, 4.7, PURPLE);
  s.addText("Cloud Automations / Autopilot", { x: 0.45, y: 0.78, w: 4.3, h: 0.42, fontSize: 14, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  const triggers = [
    { label: "スケジュール実行",    color: PURPLE },
    { label: "GitHub イベント応答", color: BLUE   },
    { label: "Issue 起票",         color: GREEN  },
    { label: "コメント投稿",        color: RED    },
  ];
  triggers.forEach((t, i) => {
    const x = 0.35 + (i % 2) * 2.32;
    const y = 1.32 + Math.floor(i / 2) * 0.72;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.15, h: 0.6, fill: { color: WHITE }, line: { color: t.color, width: 1.2 }, shadow: mkS() });
    s.addText(t.label, { x, y, w: 2.15, h: 0.6, fontSize: 12, bold: true, color: t.color, fontFace: "Segoe UI", margin: 4, align: "center", valign: "middle" });
  });
  s.addText("許可モデル", { x: 0.45, y: 2.9, w: 4.1, h: 0.35, fontSize: 13, bold: true, color: DARK, fontFace: "Segoe UI", margin: 0 });
  s.addText([
    { text: "デフォルト：", options: { bold: true } },
    { text: "各書き込みアクションの前に許可を要求\n" },
    { text: "信頼確立後：", options: { bold: true } },
    { text: "Autopilot モードに切り替え（完全自動化）" },
  ], { x: 0.45, y: 3.3, w: 4.2, h: 1.55, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top" });

  card(s, 5.15, 0.7, 4.6, 2.22, GREEN);
  s.addText("Agentic Workflows — PAT が不要に", { x: 5.4, y: 0.78, w: 4.1, h: 0.42, fontSize: 13, bold: true, color: GREEN, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["GITHUB_TOKEN で動作（scope: copilot-requests: write）", "長命トークン（PAT）の作成・管理・ローテーションが不要に", "組織課金（organization-billed AI credits）に対応", "単一ワークフロースコープの短命トークンでセキュリティ向上"]),
    { x: 5.4, y: 1.28, w: 4.1, h: 1.55, fontSize: 11, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 4 });

  card(s, 5.15, 3.06, 4.6, 2.24, RED);
  s.addText("Cloud Agent の業務範囲拡張", { x: 5.4, y: 3.13, w: 4.1, h: 0.42, fontSize: 13, bold: true, color: RED, fontFace: "Segoe UI", margin: 0 });
  s.addText('"Engineering doesn\'t end with writing code."', { x: 5.4, y: 3.58, w: 4.1, h: 0.42, fontSize: 11, italic: true, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["Issue 起票", "ディスカッション開始", "レビュアーへの返信"]),
    { x: 5.4, y: 4.07, w: 4.1, h: 1.0, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 5 });
  ft(s);
}

// SLIDE: 04-2 Memory++ + Partner Apps + Gemini
{
  const s = cs("04 — Memory++ / Partner Apps / Gemini", PURPLE);

  card(s, 0.2, 0.7, 4.75, 2.28, PURPLE);
  s.addText("Memory++ & /chronicle", { x: 0.45, y: 0.78, w: 4.3, h: 0.42, fontSize: 14, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  s.addText("デバイスをまたぎ、時間を越えた継続性（continuity）：", { x: 0.45, y: 1.26, w: 4.3, h: 0.36, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 0 });
  ["Copilot App", "CLI", "VS Code", "GitHub.com"].forEach((surf, i) => {
    const x = 0.35 + i * 1.15;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.7, w: 1.05, h: 0.42, fill: { color: LPURPLE }, line: { color: PURPLE, width: 1 } });
    s.addText(surf, { x, y: 1.7, w: 1.05, h: 0.42, fontSize: 11, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
  });
  s.addText("どのサーフェスで開始したセッションのコンテキストも横断的にクエリ可能",
    { x: 0.35, y: 2.2, w: 4.5, h: 0.5, fontSize: 10, color: GRAY, fontFace: "Segoe UI", margin: 0 });

  card(s, 0.2, 3.12, 4.75, 2.22, BLUE);
  s.addText("Gemini モデル対応", { x: 0.45, y: 3.2, w: 4.3, h: 0.42, fontSize: 14, bold: true, color: BLUE, fontFace: "Segoe UI", margin: 0 });
  [{ s: "Copilot App", c: BLUE }, { s: "CLI", c: GREEN }, { s: "Cloud Agent", c: RED }].forEach((g, i) => {
    const x = 0.35 + i * 1.6;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.72, w: 1.42, h: 0.44, fill: { color: WHITE }, line: { color: g.c, width: 1.5 } });
    s.addText(g.s, { x, y: 3.72, w: 1.42, h: 0.44, fontSize: 11, bold: true, color: g.c, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
  });
  s.addText("CLI でモデルファミリーを名前で指定：opus / sonnet / haiku / gpt / gemini など",
    { x: 0.35, y: 4.22, w: 4.5, h: 0.9, fontSize: 11, color: GRAY, fontFace: "Segoe UI", margin: 0 });

  s.addText("Partner-built Agent Apps（9社）", { x: 5.2, y: 0.75, w: 4.5, h: 0.42, fontSize: 14, bold: true, color: DARK, fontFace: "Segoe UI", margin: 0 });
  s.addText("GitHub を離れずにお気に入りのツールを利用 / Issue を新しいエージェントに割り当て",
    { x: 5.2, y: 1.22, w: 4.5, h: 0.38, fontSize: 11, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  const partners = [
    { name: "LaunchDarkly", area: "フィーチャーフラグ", color: RED },
    { name: "Amplitude",    area: "プロダクトアナリティクス", color: BLUE },
    { name: "Sonar",        area: "コード品質・静的解析", color: GREEN },
    { name: "Endor Labs",   area: "サプライチェーンセキュリティ", color: PURPLE },
    { name: "Octopus Deploy", area: "デプロイ自動化", color: ORANGE },
    { name: "PagerDuty",    area: "インシデント管理", color: RED },
    { name: "Miro",         area: "コラボレーション", color: YELLOW },
    { name: "Bright / Packfiles", area: "その他", color: GRAY },
  ];
  partners.forEach((p, i) => {
    const x = 5.2 + (i % 2) * 2.3;
    const y = 1.68 + Math.floor(i / 2) * 0.78;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.15, h: 0.68, fill: { color: WHITE }, line: { color: LGRAY, width: 0.5 }, shadow: mkS() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h: 0.68, fill: { color: p.color }, line: { color: p.color, width: 0 } });
    s.addText(p.name, { x: x + 0.14, y: y + 0.03, w: 1.88, h: 0.3, fontSize: 11, bold: true, color: DARK, fontFace: "Segoe UI", margin: 0 });
    s.addText(p.area, { x: x + 0.14, y: y + 0.35, w: 1.88, h: 0.28, fontSize: 10, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  });
  ft(s);
}

// SLIDE: 04-3 MAI モデルファミリー
{
  const s = cs("04 — MAI モデルファミリー（Build 2026：7モデル）", PURPLE);
  s.addText("Microsoft が Build 2026 で発表した7つの自社製 AI モデル — すべてゼロから学習（他社モデルからの蒸留なし）",
    { x: 0.3, y: 0.68, w: 9.4, h: 0.36, fontSize: 12, color: GRAY, fontFace: "Segoe UI", margin: 0 });

  const modelData = [
    [
      { text: "モデル",       options: { bold: true, fill: { color: DARK }, color: WHITE, fontSize: 11, align: "center" } },
      { text: "カテゴリ",     options: { bold: true, fill: { color: DARK }, color: WHITE, fontSize: 11, align: "center" } },
      { text: "主なスペック・特徴", options: { bold: true, fill: { color: DARK }, color: WHITE, fontSize: 11, align: "center" } },
      { text: "状態",         options: { bold: true, fill: { color: DARK }, color: WHITE, fontSize: 11, align: "center" } },
    ],
    [
      { text: "MAI-Code-1-Flash  ★", options: { bold: true, color: RED, fontSize: 11 } },
      { text: "コーディング", options: { fontSize: 11 } },
      { text: "5B / GitHub Copilot 専用設計 / SWE-Bench Pro で Haiku 4.5 を +16pt 超 / トークン消費 60% 削減", options: { fontSize: 10 } },
      { text: "VS Code 展開中", options: { fontSize: 10, bold: true, color: RED } },
    ],
    [
      { text: "MAI-Thinking-1", options: { bold: true, color: PURPLE, fontSize: 11 } },
      { text: "推論（旗艦）", options: { fontSize: 11 } },
      { text: "35B active（MoE ~1T total）/ 256K ctx / SWE-Bench Pro 52.8% / AIME 97.0%", options: { fontSize: 10 } },
      { text: "Foundry Preview", options: { fontSize: 10 } },
    ],
    [
      { text: "MAI-Image-2.5", options: { bold: true, color: BLUE, fontSize: 11 } },
      { text: "画像生成・編集", options: { fontSize: 11 } },
      { text: "text/image-to-image / Arena.ai 2位 / Flash版（低コスト・高速）も提供", options: { fontSize: 10 } },
      { text: "展開済み", options: { fontSize: 10 } },
    ],
    [
      { text: "MAI-Voice-2", options: { bold: true, color: GREEN, fontSize: 11 } },
      { text: "音声合成", options: { fontSize: 11 } },
      { text: "15以上の言語 / 感情表現・プロソディ制御 / 短いサンプルから声紋クローニング / Flash版あり", options: { fontSize: 10 } },
      { text: "—", options: { fontSize: 10 } },
    ],
    [
      { text: "MAI-Transcribe-1.5", options: { bold: true, color: ORANGE, fontSize: 11 } },
      { text: "音声認識", options: { fontSize: 11 } },
      { text: "43言語対応 / FLEURS ベンチマーク最高精度 / 競合比最大 5 倍高速 / コンテンツバイアス補正", options: { fontSize: 10 } },
      { text: "—", options: { fontSize: 10 } },
    ],
  ];
  s.addTable(modelData, { x: 0.2, y: 1.1, w: 9.6, border: { pt: 0.5, color: LGRAY }, rowH: 0.66, colW: [2.25, 1.45, 4.5, 1.4] });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y: 5.1, w: 9.6, h: 0.32, fill: { color: LPURPLE }, line: { color: PURPLE, width: 0.5 } });
  s.addText('"We train our reasoning models from scratch. We don\'t distill from other labs." — Microsoft',
    { x: 0.35, y: 5.1, w: 9.3, h: 0.32, fontSize: 11, italic: true, color: PURPLE, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  ft(s);
}

// SLIDE: 04-4 MAI-Code-1-Flash + Frontier Tuning
{
  const s = cs("04 — MAI-Code-1-Flash & Frontier Tuning", PURPLE);

  card(s, 0.2, 0.7, 4.75, 4.7, RED);
  s.addText("MAI-Code-1-Flash", { x: 0.45, y: 0.78, w: 4.3, h: 0.42, fontSize: 16, bold: true, color: RED, fontFace: "Segoe UI", margin: 0 });
  s.addText("GitHub Copilot 専用設計の最初の MAI モデル", { x: 0.45, y: 1.24, w: 4.3, h: 0.36, fontSize: 12, color: GRAY, fontFace: "Segoe UI", margin: 0 });

  [
    { val: "5B", label: "パラメータ数", color: RED },
    { val: "+16pt", label: "vs Haiku 4.5\nSWE-Bench Pro", color: GREEN },
    { val: "-60%", label: "トークン\n消費量削減", color: BLUE },
  ].forEach((st, i) => {
    const x = 0.35 + i * 1.55;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.68, w: 1.4, h: 1.1, fill: { color: WHITE }, line: { color: st.color, width: 1.5 }, shadow: mkS() });
    s.addText(st.val,   { x, y: 1.72, w: 1.4, h: 0.52, fontSize: 26, bold: true, color: st.color, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(st.label, { x, y: 2.28, w: 1.4, h: 0.44, fontSize: 10, color: GRAY, fontFace: "Segoe UI", margin: 0, align: "center", valign: "top" });
  });
  s.addText(bul(["VS Code から提供開始、モデルピッカーで選択可能", "提供プラン：Free / Student / Pro / Pro+ / Max（段階展開）", "「Microsoft 製コーディングモデルの新しい波の第一弾」"]),
    { x: 0.45, y: 2.9, w: 4.2, h: 2.1, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 8 });

  card(s, 5.15, 0.7, 4.6, 4.7, PURPLE);
  s.addText("Frontier Tuning", { x: 5.4, y: 0.78, w: 4.1, h: 0.42, fontSize: 16, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  s.addText("企業ワークフローでモデルをカスタム RL 学習", { x: 5.4, y: 1.24, w: 4.1, h: 0.36, fontSize: 12, color: GRAY, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul(["強化学習（RL）を実際の業務環境で適用", "学習データは企業自身のもの：エージェントが完了したタスクのトレース", "チューニング後のモデルは企業環境内に留まり外部に出ない"]),
    { x: 5.4, y: 1.72, w: 4.1, h: 1.8, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 4, valign: "top", paraSpaceAfter: 8 });

  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 3.65, w: 4.3, h: 1.55, fill: { color: LPURPLE }, line: { color: PURPLE, width: 1 } });
  s.addText("実績例 — Excel 向けチューニング", { x: 5.45, y: 3.72, w: 4.0, h: 0.4, fontSize: 13, bold: true, color: PURPLE, fontFace: "Segoe UI", margin: 0 });
  s.addText([
    { text: "GPT 5.4 と同等の精度 を\n", options: { bold: true } },
    { text: "10倍の効率", options: { bold: true, fontSize: 22, color: RED } },
    { text: " で達成" },
  ], { x: 5.45, y: 4.18, w: 4.0, h: 0.9, fontSize: 14, color: DARK, fontFace: "Segoe UI", margin: 0, valign: "middle" });
  ft(s);
}

// ════════════════════════════════════════════════════
// SUMMARY
// ════════════════════════════════════════════════════
{
  const s = cs("まとめ — 3つのメッセージ", DARK);
  const msgs = [
    { num: "1", title: "コントロールセンター化", desc: "Copilot App + git worktree で複数エージェントを並列統制。\nAgent Merge でレビュー・チェック・マージまで自動化。", detail: "Copilot app\nMy Work → worktree → Agent Merge", color: BLUE },
    { num: "2", title: "ひとつのシステム", desc: "Canvas / Sandbox / Code Review / Cloud Automation / SDK / Partner Apps が連携。\nエージェントが作業を担い、人は品質・ポリシー・デリバリーを統制。", detail: "35項目のアップデートが\n1つのエコシステムとして統合", color: GREEN },
    { num: "3", title: "基盤の強化", desc: "MAI-Code-1-Flash が Copilot / VS Code に搭載。\nMAI 7モデルと Frontier Tuning でエコシステムが強化。", detail: "MAI 7モデル\n+ Frontier Tuning\n+ IQ Layer", color: RED },
  ];
  msgs.forEach((m, i) => {
    const y = 0.75 + i * 1.56;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y, w: 9.6, h: 1.4, fill: { color: WHITE }, line: { color: LGRAY, width: 0.5 }, shadow: mkS() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y, w: 1.0, h: 1.4, fill: { color: m.color }, line: { color: m.color, width: 0 } });
    s.addText(m.num,   { x: 0.2, y, w: 1.0, h: 1.4, fontSize: 40, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(m.title, { x: 1.35, y: y + 0.1, w: 6.0, h: 0.42, fontSize: 16, bold: true, color: m.color, fontFace: "Segoe UI", margin: 0 });
    s.addText(m.desc,  { x: 1.35, y: y + 0.57, w: 6.0, h: 0.76, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 0, valign: "top" });
    s.addShape(pres.shapes.RECTANGLE, { x: 7.55, y: y + 0.18, w: 2.1, h: 1.02, fill: { color: m.color, transparency: 85 }, line: { color: m.color, width: 0.5 } });
    s.addText(m.detail, { x: 7.6, y: y + 0.18, w: 2.0, h: 1.02, fontSize: 9, color: m.color, fontFace: "Segoe UI", margin: 3, align: "center", valign: "middle" });
  });
  ft(s);
}

// SLIDE: Next Steps
{
  const s = cs("明日からの進め方（5ステップ）", DARK);
  const steps = [
    { step: "Step 1", title: "試す",      action: "Copilot App（技術プレビュー）を既存の Pro / Business / Enterprise プランで有効化", color: BLUE   },
    { step: "Step 2", title: "並列体験",  action: "Issue を Copilot に割り当て、git worktree で複数エージェントセッションを並走させる", color: GREEN  },
    { step: "Step 3", title: "統制",      action: "Code Review の low / medium 設定・サンドボックスのポリシー定義・Agent Merge の自動化範囲を決定", color: RED    },
    { step: "Step 4", title: "拡張",      action: "SDK / CLI で自社ツールにエージェントを組み込み、MCP サーバー・パートナーアプリを接続", color: PURPLE },
    { step: "Step 5", title: "モデル最適化", action: "MAI-Code-1-Flash をモデルピッカーで選択し、Frontier Tuning で自社ワークフローへのカスタム RL 学習を検討", color: ORANGE },
  ];
  steps.forEach((st, i) => {
    const y = 0.75 + i * 0.93;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y, w: 9.6, h: 0.82, fill: { color: WHITE }, line: { color: LGRAY, width: 0.5 }, shadow: mkS() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.2, y, w: 1.45, h: 0.82, fill: { color: st.color }, line: { color: st.color, width: 0 } });
    s.addText(st.step,  { x: 0.2,  y: y,        w: 1.45, h: 0.42, fontSize: 11, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(st.title, { x: 0.2,  y: y + 0.42, w: 1.45, h: 0.4,  fontSize: 14, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0, align: "center", valign: "middle" });
    s.addText(st.action, { x: 1.78, y,           w: 7.9,  h: 0.82, fontSize: 12, color: DARK, fontFace: "Segoe UI", margin: 8, valign: "middle" });
  });
  ft(s);
}

// SLIDE: Thank you
{
  const s = pres.addSlide();
  s.background = { color: DARK };
  s.addShape(pres.shapes.OVAL, { x: 7.2, y: -1.5, w: 5.5, h: 5.5, fill: { color: BLUE, transparency: 82 }, line: { color: BLUE, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: -0.5, y: 3.5, w: 3.5, h: 3.5, fill: { color: GREEN, transparency: 87 }, line: { color: GREEN, width: 0 } });

  s.addText("Thank you!", { x: 0.5, y: 0.65, w: 9, h: 1.2, fontSize: 52, bold: true, color: WHITE, fontFace: "Segoe UI", margin: 0 });
  s.addText("Q&A", { x: 0.5, y: 1.88, w: 9, h: 0.72, fontSize: 32, color: LBLUE, fontFace: "Segoe UI", margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.75, w: 4.0, h: 0.04, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
  s.addText("一次情報ソース", { x: 0.5, y: 2.9, w: 9, h: 0.4, fontSize: 14, bold: true, color: LBLUE, fontFace: "Segoe UI", margin: 0 });
  s.addText(bul([
    "GitHub Blog: GitHub Copilot app — The agent-native desktop experience",
    "GitHub Changelog: MAI-Code-1-Flash / Copilot SDK GA / Copilot CLI / Sandboxes / JetBrains (2026-06-02)",
    "GitHub Changelog: Agentic workflows no longer need a PAT (2026-06-11)",
    "Microsoft AI: Building a hill-climbing machine — 7 new MAI models",
    "GitHub Docs: docs.github.com/copilot  ／  microsoft/Build26-news",
  ]), { x: 0.5, y: 3.42, w: 9, h: 1.95, fontSize: 12, color: LGRAY, fontFace: "Segoe UI", margin: 0, valign: "top", paraSpaceAfter: 6 });
}

// ════════════════════════════════════════════════════
// Write output
// ════════════════════════════════════════════════════
pres.writeFile({ fileName: "build2026_copilot_deepdive.pptx" })
  .then(() => console.log("Done: build2026_copilot_deepdive.pptx"))
  .catch(err => { console.error("Error:", err); process.exit(1); });
