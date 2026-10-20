const STORAGE_TERRARIUM = "terrarium.state.v1";

const LAYERS = [
  { id: "drainage", label: "Drainage", desc: "Pebbles & LECA — lets excess water escape", category: "layer", bg: "repeating-linear-gradient(45deg, #8b9a92 0 6px, #6b7a73 6px 12px)", meta: ["Depth: 2–3 cm", "Inert", "pH neutral"] },
  { id: "charcoal", label: "Charcoal", desc: "Activated carbon — filters impurities & odor", category: "layer", bg: "repeating-linear-gradient(90deg, #2d2d2d 0 4px, #1a1a1a 4px 8px)", meta: ["Depth: 0.5–1 cm", "Porous", "Antimicrobial"] },
  { id: "soil", label: "Soil Mix", desc: "Tropical blend — coco coir, orchid bark, worm castings", category: "layer", bg: "linear-gradient(135deg, #5d4432 0%, #4a3324 50%, #3d2a1e 100%)", meta: ["Depth: 5–8 cm", "Moisture-retentive", "Bioactive"] }
];

const PLANTS = [
  { id: "moss-sheet", label: "Sheet Moss", desc: "Hypnum — velvety carpet, loves humidity", category: "plant", bg: "radial-gradient(circle at 30% 30%, #5db85d 0%, #3a6b3a 60%, #244a24 100%)", meta: ["Height: 1–2 cm", "Spread: 15+ cm", "Shade"] },
  { id: "moss-cushion", label: "Cushion Moss", desc: "Leucobryum — bright green mounds", category: "plant", bg: "radial-gradient(circle at 50% 50%, #7aff7a 0%, #3a6b3a 70%, #1a3d1a 100%)", meta: ["Height: 3–5 cm", "Spread: 8 cm", "Part shade"] },
  { id: "fern-button", label: "Button Fern", desc: "Pellaea rotundifolia — round leaflets, arching", category: "plant", bg: "linear-gradient(135deg, #4a9c5a 0%, #2e5d3e 50%, #1a3a1f 100%)", meta: ["Height: 10–15 cm", "Spread: 12 cm", "Indirect light"] },
  { id: "fern-maidenhair", label: "Maidenhair", desc: "Adiantum — delicate fan fronds, black stems", category: "plant", bg: "linear-gradient(135deg, #5db85d 0%, #3a6b3a 50%, #1f4a22 100%)", meta: ["Height: 12–20 cm", "Spread: 15 cm", "High humidity"] },
  { id: "fittonia", label: "Nerve Plant", desc: "Fittonia albivenis — striking vein patterns", category: "plant", bg: "radial-gradient(ellipse at 50% 40%, #e86c8a 0%, #5db85d 40%, #2e5d3e 100%)", meta: ["Height: 5–10 cm", "Spread: 10 cm", "Bright indirect"] },
  { id: "peperomia", label: "Peperomia", desc: "Peperomia caperata — rippled heart leaves", category: "plant", bg: "radial-gradient(ellipse at 50% 40%, #6b8573 0%, #3a6b3a 50%, #1f4a22 100%)", meta: ["Height: 8–12 cm", "Spread: 10 cm", "Moderate light"] },
  { id: "pilea", label: "Friendship Plant", desc: "Pilea involucrata — textured bronze-green leaves", category: "plant", bg: "radial-gradient(ellipse at 50% 40%, #7a5c42 0%, #3a6b3a 50%, #2e5d3e 100%)", meta: ["Height: 10–15 cm", "Spread: 12 cm", "Bright indirect"] },
  { id: "selaginella", label: "Spikemoss", desc: "Selaginella — ancient, scale-like foliage", category: "plant", bg: "radial-gradient(ellipse at 50% 40%, #4a9c5a 0%, #2e5d3e 60%, #1a3d1a 100%)", meta: ["Height: 3–8 cm", "Spread: 15+ cm", "Constant moisture"] }
];

const HARDSCAPE = [
  { id: "rock-large", label: "Seiryu Stone", desc: "Jagged limestone — dramatic strata", category: "hardscape", bg: "linear-gradient(135deg, #6b7a73 0%, #4a5650 50%, #2d3430 100%)", meta: ["Size: Large", "Alkaline", "Centerpiece"] },
  { id: "rock-small", label: "Dragon Stone", desc: "Ohko — pitted clay, earthy tones", category: "hardscape", bg: "linear-gradient(135deg, #8b7355 0%, #6b5335 50%, #4a3a22 100%)", meta: ["Size: Small", "Inert", "Accent"] },
  { id: "driftwood", label: "Spider Wood", desc: "Twisted roots — natural climbing structure", category: "hardscape", bg: "linear-gradient(135deg, #4a3728 0%, #35281c 50%, #221810 100%)", meta: ["Size: Medium", "Tannins", "Branching"] },
  { id: "bark", label: "Cork Bark", desc: "Flat cork — background & epiphyte mount", category: "hardscape", bg: "linear-gradient(135deg, #7a5c42 0%, #5d4432 50%, #3d2a1e 100%)", meta: ["Size: Flat", "Rot-resistant", "Mount"] },
  { id: "crystal", label: "Quartz Cluster", desc: "Clear points — catches condensation", category: "hardscape", bg: "linear-gradient(135deg, #f0f8ff 0%, #d0e8f8 50%, #a8c8e8 100%)", meta: ["Size: Small", "Inert", "Sparkle"] },
  { id: "figurine", label: "Tiny Figure", desc: "Ceramic deer — sense of scale", category: "hardscape", bg: "linear-gradient(135deg, #8b7a6b 0%, #6b5a4a 50%, #4a3a2a 100%)", meta: ["Size: Tiny", "Glazed", "Whimsy"] }
];

const byId = (id) => document.getElementById(id);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const vesselSvg = byId("vesselSvg");
const condensation = byId("condensation");
const vesselGlass = byId("vesselGlass");
const vesselWrap = byId("vesselWrap");
const vesselHint = byId("vesselHint");
const layerGrid = byId("layerGrid");
const plantGrid = byId("plantGrid");
const hardscapeGrid = byId("hardscapeGrid");
const toolMode = byId("toolMode");
const mistBtn = byId("mistBtn");
const cycleBtn = byId("cycleBtn");
const clearPlantsBtn = byId("clearPlantsBtn");
const resetBtn = byId("resetBtn");
const exportBtn = byId("exportBtn");
const specimenCard = byId("specimenCard");
const specimenBadge = byId("specimenBadge");
const specimenName = byId("specimenName");
const specimenDesc = byId("specimenDesc");
const specimenMeta = byId("specimenMeta");
const live = byId("live");

let state = {
  layers: { drainage: false, charcoal: false, soil: false },
  plants: [],
  hardscape: [],
  condensation: 0,
  mistLevel: 0
};
let activeTool = null;
let condensInterval = null;
let mistTimeout = null;

function readStored(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw === null ? fallback : JSON.parse(raw); }
  catch { return fallback; }
}

function writeStored(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch { return false; }
}

function loadState() {
  const stored = readStored(STORAGE_TERRARIUM, null);
  if (stored && typeof stored === "object") {
    state = {
      layers: { drainage: !!stored.layers?.drainage, charcoal: !!stored.layers?.charcoal, soil: !!stored.layers?.soil },
      plants: Array.isArray(stored.plants) ? stored.plants.filter(p => PLANTS.some(pp => pp.id === p.id)) : [],
      hardscape: Array.isArray(stored.hardscape) ? stored.hardscape.filter(h => HARDSCAPE.some(hh => hh.id === h.id)) : [],
      condensation: stored.condensation || 0,
      mistLevel: stored.mistLevel || 0
    };
  }
}

function persistState() {
  writeStored(STORAGE_TERRARIUM, state);
}

function announce(msg) {
  live.textContent = "";
  setTimeout(() => { live.textContent = msg; }, 30);
}

function buildToolGrid(grid, items, category) {
  grid.innerHTML = "";
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tool-btn-item";
    btn.dataset.id = item.id;
    btn.dataset.category = category;
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", "false");
    btn.innerHTML = `<span class="item-preview" style="background:${item.bg}"></span>${item.label}`;
    const isActive = (category === "layer" && state.layers[item.id]) ||
                     (category === "plant" && state.plants.some(p => p.id === item.id)) ||
                     (category === "hardscape" && state.hardscape.some(h => h.id === item.id));
    if (isActive) btn.setAttribute("aria-pressed", "true");
    btn.addEventListener("click", () => selectTool(item, category, btn));
    grid.appendChild(btn);
  });
}

function selectTool(item, category, btn) {
  if (activeTool && activeTool.id === item.id && activeTool.category === category) {
    activeTool = null;
    toolMode.textContent = "Select a layer";
    btn.setAttribute("aria-pressed", "false");
    vesselHint.textContent = "Select a tool, then tap inside the glass";
    specimenCard.hidden = true;
    return;
  }
  activeTool = { ...item, category };
  qsa(".tool-btn-item").forEach(b => b.setAttribute("aria-pressed", "false"));
  btn.setAttribute("aria-pressed", "true");
  toolMode.textContent = `${category === "layer" ? "Layer" : category === "plant" ? "Plant" : "Hardscape"}: ${item.label}`;
  vesselHint.textContent = `Tap inside to place ${item.label.toLowerCase()}`;
  showSpecimen(item, category);
}

function showSpecimen(item, category) {
  specimenCard.hidden = false;
  specimenBadge.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  specimenName.textContent = item.label;
  specimenDesc.textContent = item.desc;
  specimenMeta.innerHTML = item.meta.map(m => `<span>${m}</span>`).join("");
}

function buildVessel() {
  const ns = "http://www.w3.org/2000/svg";
  vesselSvg.innerHTML = "";

  const defs = document.createElementNS(ns, "defs");
  vesselSvg.appendChild(defs);

  const glassGrad = document.createElementNS(ns, "linearGradient");
  glassGrad.id = "glassGrad";
  glassGrad.setAttribute("x1", "0%"); glassGrad.setAttribute("y1", "0%");
  glassGrad.setAttribute("x2", "100%"); glassGrad.setAttribute("y2", "100%");
  ["0% #ffffff1a", "50% #ffffff08", "100% #ffffff1a"].forEach(stop => {
    const s = document.createElementNS(ns, "stop");
    const [offset, color] = stop.split(" ");
    s.setAttribute("offset", offset);
    s.setAttribute("stop-color", color);
    glassGrad.appendChild(s);
  });
  defs.appendChild(glassGrad);

  const soilGrad = document.createElementNS(ns, "linearGradient");
  soilGrad.id = "soilGrad";
  soilGrad.setAttribute("x1", "0%"); soilGrad.setAttribute("y1", "0%");
  soilGrad.setAttribute("x2", "0%"); soilGrad.setAttribute("y2", "100%");
  ["0% #5d4432", "50% #4a3324", "100% #3d2a1e"].forEach(stop => {
    const s = document.createElementNS(ns, "stop");
    const [offset, color] = stop.split(" ");
    s.setAttribute("offset", offset);
    s.setAttribute("stop-color", color);
    soilGrad.appendChild(s);
  });
  defs.appendChild(soilGrad);

  const charcoalGrad = document.createElementNS(ns, "linearGradient");
  charcoalGrad.id = "charcoalGrad";
  charcoalGrad.setAttribute("x1", "0%"); charcoalGrad.setAttribute("y1", "0%");
  charcoalGrad.setAttribute("x2", "0%"); charcoalGrad.setAttribute("y2", "100%");
  ["0% #2d2d2d", "100% #1a1a1a"].forEach(stop => {
    const s = document.createElementNS(ns, "stop");
    const [offset, color] = stop.split(" ");
    s.setAttribute("offset", offset);
    s.setAttribute("stop-color", color);
    charcoalGrad.appendChild(s);
  });
  defs.appendChild(charcoalGrad);

  const drainageGrad = document.createElementNS(ns, "linearGradient");
  drainageGrad.id = "drainageGrad";
  drainageGrad.setAttribute("x1", "0%"); drainageGrad.setAttribute("y1", "0%");
  drainageGrad.setAttribute("x2", "0%"); drainageGrad.setAttribute("y2", "100%");
  ["0% #8b9a92", "100% #6b7a73"].forEach(stop => {
    const s = document.createElementNS(ns, "stop");
    const [offset, color] = stop.split(" ");
    s.setAttribute("offset", offset);
    s.setAttribute("stop-color", color);
    drainageGrad.appendChild(s);
  });
  defs.appendChild(drainageGrad);

  const glassPath = "M 20 380 Q 20 20 150 20 Q 280 20 280 380 Q 280 395 150 395 Q 20 395 20 380 Z";
  const glass = document.createElementNS(ns, "path");
  glass.setAttribute("d", glassPath);
  glass.setAttribute("fill", "url(#glassGrad)");
  glass.setAttribute("stroke", "rgba(255,255,255,0.3)");
  glass.setAttribute("stroke-width", "1.5");
  glass.setAttribute("filter", "url(#glassBlur)");
  vesselSvg.appendChild(glass);

  const glassBlur = document.createElementNS(ns, "filter");
  glassBlur.id = "glassBlur";
  const feGaussian = document.createElementNS(ns, "feGaussianBlur");
  feGaussian.setAttribute("stdDeviation", "0.5");
  glassBlur.appendChild(feGaussian);
  defs.appendChild(glassBlur);

  if (state.layers.drainage) {
    const drainage = document.createElementNS(ns, "path");
    drainage.setAttribute("d", "M 35 340 Q 35 355 150 355 Q 265 355 265 340 Q 265 325 150 325 Q 35 325 35 340 Z");
    drainage.setAttribute("fill", "url(#drainageGrad)");
    drainage.setAttribute("opacity", "0.85");
    vesselSvg.appendChild(drainage);
    addPebbles(35, 265, 325, 340);
  }

  if (state.layers.charcoal) {
    const charcoal = document.createElementNS(ns, "path");
    charcoal.setAttribute("d", "M 35 325 Q 35 332 150 332 Q 265 332 265 325 Q 265 318 150 318 Q 35 318 35 325 Z");
    charcoal.setAttribute("fill", "url(#charcoalGrad)");
    charcoal.setAttribute("opacity", "0.9");
    vesselSvg.appendChild(charcoal);
  }

  if (state.layers.soil) {
    const soil = document.createElementNS(ns, "path");
    soil.setAttribute("d", "M 35 260 Q 35 318 150 318 Q 265 318 265 260 Q 265 240 150 240 Q 35 240 35 260 Z");
    soil.setAttribute("fill", "url(#soilGrad)");
    vesselSvg.appendChild(soil);
    addSoilTexture();
  }

  state.plants.forEach(p => renderPlant(p));
  state.hardscape.forEach(h => renderHardscape(h));

  vesselGlass.style.opacity = state.condensation > 0 ? "1" : "0.6";
}

function addPebbles(x1, x2, y1, y2) {
  const ns = "http://www.w3.org/2000/svg";
  for (let i = 0; i < 35; i++) {
    const cx = x1 + Math.random() * (x2 - x1);
    const cy = y1 + Math.random() * (y2 - y1);
    const r = 3 + Math.random() * 5;
    const circle = document.createElementNS(ns, "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", `hsl(${180 + Math.random() * 30}, 15%, ${35 + Math.random() * 15}%)`);
    circle.setAttribute("opacity", "0.7");
    vesselSvg.appendChild(circle);
  }
}

function addSoilTexture() {
  const ns = "http://www.w3.org/2000/svg";
  for (let i = 0; i < 60; i++) {
    const cx = 50 + Math.random() * 200;
    const cy = 250 + Math.random() * 60;
    const r = 1 + Math.random() * 2;
    const circle = document.createElementNS(ns, "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", `hsl(${30 + Math.random() * 20}, 25%, ${20 + Math.random() * 10}%)`);
    circle.setAttribute("opacity", "0.4");
    vesselSvg.appendChild(circle);
  }
}

function renderPlant(plant) {
  const ns = "http://www.w3.org/2000/svg";
  const data = PLANTS.find(p => p.id === plant.id);
  if (!data) return;

  const x = plant.x || 80 + Math.random() * 140;
  const y = plant.y || 200 + Math.random() * 80;
  const scale = plant.scale || 0.8 + Math.random() * 0.4;

  const group = document.createElementNS(ns, "g");
  group.setAttribute("transform", `translate(${x}, ${y}) scale(${scale})`);
  group.dataset.plantId = plant.id;

  if (plant.id === "moss-sheet") {
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M 0 0 Q -20 -5 -30 10 Q -40 25 -25 40 Q -10 55 10 50 Q 30 45 40 30 Q 50 15 35 0 Q 20 -10 0 0 Z");
    path.setAttribute("fill", data.bg);
    path.setAttribute("opacity", "0.9");
    group.appendChild(path);
    for (let i = 0; i < 8; i++) {
      const dot = document.createElementNS(ns, "circle");
      dot.setAttribute("cx", -25 + Math.random() * 50);
      dot.setAttribute("cy", 5 + Math.random() * 35);
      dot.setAttribute("r", 1.5 + Math.random() * 2);
      dot.setAttribute("fill", "#5db85d");
      dot.setAttribute("opacity", "0.6");
      group.appendChild(dot);
    }
  } else if (plant.id === "moss-cushion") {
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M 0 -15 Q -15 -20 -20 -5 Q -25 10 -10 20 Q 5 25 15 15 Q 20 5 10 -10 Q 5 -18 0 -15 Z");
    path.setAttribute("fill", data.bg);
    path.setAttribute("opacity", "0.95");
    group.appendChild(path);
    const highlight = document.createElementNS(ns, "ellipse");
    highlight.setAttribute("cx", "-5");
    highlight.setAttribute("cy", "-8");
    highlight.setAttribute("rx", "8");
    highlight.setAttribute("ry", "6");
    highlight.setAttribute("fill", "#7aff7a");
    highlight.setAttribute("opacity", "0.3");
    group.appendChild(highlight);
  } else if (plant.id === "fern-button") {
    for (let i = -2; i <= 2; i++) {
      const frond = document.createElementNS(ns, "path");
      const angle = i * 25;
      frond.setAttribute("d", `M 0 0 Q ${i * 8} -15 ${i * 15} -35 Q ${i * 20} -50 ${i * 12} -65`);
      frond.setAttribute("stroke", data.bg);
      frond.setAttribute("stroke-width", "3");
      frond.setAttribute("fill", "none");
      frond.setAttribute("stroke-linecap", "round");
      group.appendChild(frond);
      for (let j = 0; j < 5; j++) {
        const leaf = document.createElementNS(ns, "ellipse");
        leaf.setAttribute("cx", i * 8 + j * 6);
        leaf.setAttribute("cy", -20 - j * 8);
        leaf.setAttribute("rx", "4");
        leaf.setAttribute("ry", "2");
        leaf.setAttribute("fill", data.bg);
        leaf.setAttribute("transform", `rotate(${angle - 10})`);
        group.appendChild(leaf);
      }
    }
  } else if (plant.id === "fern-maidenhair") {
    const stem = document.createElementNS(ns, "path");
    stem.setAttribute("d", "M 0 0 Q 0 -10 0 -40");
    stem.setAttribute("stroke", "#1a1a1a");
    stem.setAttribute("stroke-width", "1.5");
    stem.setAttribute("fill", "none");
    group.appendChild(stem);
    for (let i = -3; i <= 3; i++) {
      const frond = document.createElementNS(ns, "path");
      frond.setAttribute("d", `M ${i * 4} -${10 + Math.abs(i) * 5} Q ${i * 12} -${20 + Math.abs(i) * 5} ${i * 18} -${30 + Math.abs(i) * 3}`);
      frond.setAttribute("stroke", data.bg);
      frond.setAttribute("stroke-width", "1.2");
      frond.setAttribute("fill", "none");
      frond.setAttribute("stroke-linecap", "round");
      group.appendChild(frond);
      for (let j = 0; j < 4; j++) {
        const leaf = document.createElementNS(ns, "ellipse");
        leaf.setAttribute("cx", i * 6 + j * 5);
        leaf.setAttribute("cy", -15 - Math.abs(i) * 5 - j * 5);
        leaf.setAttribute("rx", "2.5");
        leaf.setAttribute("ry", "1.2");
        leaf.setAttribute("fill", data.bg);
        group.appendChild(leaf);
      }
    }
  } else if (plant.id === "fittonia") {
    const center = document.createElementNS(ns, "circle");
    center.setAttribute("r", "12");
    center.setAttribute("fill", data.bg);
    group.appendChild(center);
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const leaf = document.createElementNS(ns, "ellipse");
      leaf.setAttribute("cx", Math.cos(angle) * 10);
      leaf.setAttribute("cy", Math.sin(angle) * 10);
      leaf.setAttribute("rx", "7");
      leaf.setAttribute("ry", "4");
      leaf.setAttribute("fill", data.bg);
      leaf.setAttribute("transform", `rotate(${angle * 180 / Math.PI})`);
      group.appendChild(leaf);
      const vein = document.createElementNS(ns, "line");
      vein.setAttribute("x1", "0");
      vein.setAttribute("y1", "0");
      vein.setAttribute("x2", Math.cos(angle) * 14);
      vein.setAttribute("y2", Math.sin(angle) * 14);
      vein.setAttribute("stroke", "#e86c8a");
      vein.setAttribute("stroke-width", "0.8");
      group.appendChild(vein);
    }
  } else if (plant.id === "peperomia") {
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const leaf = document.createElementNS(ns, "path");
      leaf.setAttribute("d", "M 0 0 Q -6 -4 -10 -10 Q -4 -16 0 -18 Q 4 -16 10 -10 Q 6 -4 0 0 Z");
      leaf.setAttribute("fill", data.bg);
      leaf.setAttribute("transform", `rotate(${angle * 180 / Math.PI}) translate(0, -12)`);
      group.appendChild(leaf);
      const ripple = document.createElementNS(ns, "path");
      ripple.setAttribute("d", "M -6 -6 Q 0 -10 6 -6");
      ripple.setAttribute("stroke", "#6b8573");
      ripple.setAttribute("stroke-width", "0.6");
      ripple.setAttribute("fill", "none");
      ripple.setAttribute("transform", `rotate(${angle * 180 / Math.PI}) translate(0, -12)`);
      group.appendChild(ripple);
    }
  } else if (plant.id === "pilea") {
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2 + 0.4;
      const leaf = document.createElementNS(ns, "path");
      leaf.setAttribute("d", "M 0 0 Q -8 2 -12 -2 Q -10 -12 0 -16 Q 10 -12 8 -2 Q 12 2 0 0 Z");
      leaf.setAttribute("fill", data.bg);
      leaf.setAttribute("transform", `rotate(${angle * 180 / Math.PI}) translate(0, -8)`);
      group.appendChild(leaf);
    }
    const center = document.createElementNS(ns, "circle");
    center.setAttribute("r", "3");
    center.setAttribute("fill", "#7a5c42");
    group.appendChild(center);
  } else if (plant.id === "selaginella") {
    const stem = document.createElementNS(ns, "path");
    stem.setAttribute("d", "M 0 0 Q 5 -10 0 -25 Q -5 -35 0 -45");
    stem.setAttribute("stroke", data.bg);
    stem.setAttribute("stroke-width", "1.5");
    stem.setAttribute("fill", "none");
    group.appendChild(stem);
    for (let i = 0; i < 20; i++) {
      const y = -i * 2;
      const side = i % 2 === 0 ? 1 : -1;
      const leaf = document.createElementNS(ns, "ellipse");
      leaf.setAttribute("cx", side * 6);
      leaf.setAttribute("cy", y);
      leaf.setAttribute("rx", "3");
      leaf.setAttribute("ry", "1");
      leaf.setAttribute("fill", data.bg);
      group.appendChild(leaf);
    }
  }

  vesselSvg.appendChild(group);
}

function renderHardscape(item) {
  const ns = "http://www.w3.org/2000/svg";
  const data = HARDSCAPE.find(h => h.id === item.id);
  if (!data) return;

  const x = item.x || 60 + Math.random() * 180;
  const y = item.y || 220 + Math.random() * 100;
  const scale = item.scale || 0.7 + Math.random() * 0.5;

  const group = document.createElementNS(ns, "g");
  group.setAttribute("transform", `translate(${x}, ${y}) scale(${scale})`);
  group.dataset.hardscapeId = item.id;

  if (item.id === "rock-large") {
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M 0 -15 Q -20 -25 -30 -5 Q -35 15 -20 30 Q -10 40 15 35 Q 25 25 30 10 Q 35 -5 20 -15 Q 10 -25 0 -15 Z");
    path.setAttribute("fill", data.bg);
    path.setAttribute("opacity", "0.95");
    group.appendChild(path);
    for (let i = 0; i < 3; i++) {
      const line = document.createElementNS(ns, "path");
      line.setAttribute("d", `M ${-20 + i * 15} 5 Q ${-15 + i * 15} 15 ${-10 + i * 15} 25`);
      line.setAttribute("stroke", "#4a5650");
      line.setAttribute("stroke-width", "1");
      line.setAttribute("fill", "none");
      line.setAttribute("opacity", "0.5");
      group.appendChild(line);
    }
  } else if (item.id === "rock-small") {
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M 0 -8 Q -10 -12 -12 0 Q -10 10 0 12 Q 10 10 12 0 Q 10 -10 0 -8 Z");
    path.setAttribute("fill", data.bg);
    path.setAttribute("opacity", "0.9");
    group.appendChild(path);
    for (let i = 0; i < 5; i++) {
      const pit = document.createElementNS(ns, "ellipse");
      pit.setAttribute("cx", -6 + Math.random() * 12);
      pit.setAttribute("cy", -4 + Math.random() * 10);
      pit.setAttribute("rx", 1.5 + Math.random() * 2);
      pit.setAttribute("ry", 1 + Math.random() * 1.5);
      pit.setAttribute("fill", "#4a3a22");
      pit.setAttribute("opacity", "0.6");
      group.appendChild(pit);
    }
  } else if (item.id === "driftwood") {
    const trunk = document.createElementNS(ns, "path");
    trunk.setAttribute("d", "M 0 0 Q -5 -15 -8 -35 Q -12 -50 -5 -65 Q 2 -75 8 -65 Q 15 -50 10 -35 Q 12 -15 5 0 Z");
    trunk.setAttribute("fill", data.bg);
    group.appendChild(trunk);
    for (let i = 0; i < 3; i++) {
      const branch = document.createElementNS(ns, "path");
      const bx = i % 2 === 0 ? -5 : 5;
      const by = -15 - i * 12;
      branch.setAttribute("d", `M ${bx} ${by} Q ${bx - 15} ${by - 10} ${bx - 20} ${by - 25}`);
      branch.setAttribute("stroke", data.bg);
      branch.setAttribute("stroke-width", "3");
      branch.setAttribute("fill", "none");
      branch.setAttribute("stroke-linecap", "round");
      group.appendChild(branch);
    }
  } else if (item.id === "bark") {
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M -40 0 Q -40 -8 0 -8 Q 40 -8 40 0 Q 40 12 0 12 Q -40 12 -40 0 Z");
    path.setAttribute("fill", data.bg);
    path.setAttribute("opacity", "0.85");
    group.appendChild(path);
    for (let i = 0; i < 4; i++) {
      const line = document.createElementNS(ns, "line");
      line.setAttribute("x1", -35 + i * 20);
      line.setAttribute("y1", -6);
      line.setAttribute("x2", -35 + i * 20);
      line.setAttribute("y2", 10);
      line.setAttribute("stroke", "#3d2a1e");
      line.setAttribute("stroke-width", "0.8");
      line.setAttribute("opacity", "0.5");
      group.appendChild(line);
    }
  } else if (item.id === "crystal") {
    for (let i = 0; i < 3; i++) {
      const h = 15 + i * 8;
      const w = 8 - i * 2;
      const crystal = document.createElementNS(ns, "path");
      crystal.setAttribute("d", `M 0 ${-h} L ${-w} ${h} L ${w} ${h} Z`);
      crystal.setAttribute("fill", data.bg);
      crystal.setAttribute("opacity", "0.7");
      crystal.setAttribute("stroke", "rgba(255,255,255,0.6)");
      crystal.setAttribute("stroke-width", "0.5");
      crystal.setAttribute("transform", `translate(${i * 3 - 3}, ${i * 5}) rotate(${i * 15})`);
      group.appendChild(crystal);
    }
  } else if (item.id === "figurine") {
    const body = document.createElementNS(ns, "ellipse");
    body.setAttribute("cx", "0");
    body.setAttribute("cy", "8");
    body.setAttribute("rx", "6");
    body.setAttribute("ry", "10");
    body.setAttribute("fill", data.bg);
    group.appendChild(body);
    const head = document.createElementNS(ns, "circle");
    head.setAttribute("cx", "0");
    head.setAttribute("cy", "-4");
    head.setAttribute("r", "5");
    head.setAttribute("fill", data.bg);
    group.appendChild(head);
    const ear1 = document.createElementNS(ns, "ellipse");
    ear1.setAttribute("cx", "-5");
    ear1.setAttribute("cy", "-8");
    ear1.setAttribute("rx", "2");
    ear1.setAttribute("ry", "5");
    ear1.setAttribute("fill", data.bg);
    ear1.setAttribute("transform", "rotate(-30)");
    group.appendChild(ear1);
    const ear2 = document.createElementNS(ns, "ellipse");
    ear2.setAttribute("cx", "5");
    ear2.setAttribute("cy", "-8");
    ear2.setAttribute("rx", "2");
    ear2.setAttribute("ry", "5");
    ear2.setAttribute("fill", data.bg);
    ear2.setAttribute("transform", "rotate(30)");
    group.appendChild(ear2);
  }

  vesselSvg.appendChild(group);
}

function startCondensation() {
  if (condensInterval) clearInterval(condensInterval);
  condensInterval = setInterval(() => {
    state.condensation = (state.condensation + 1) % 4;
    condensation.style.opacity = state.condensation > 0 ? "1" : "0";
    vesselGlass.style.opacity = state.condensation > 0 ? "1" : "0.6";
  }, 8000);
  condensation.classList.add("active");
}

function mist() {
  state.mistLevel = Math.min(1, state.mistLevel + 0.3);
  condensation.classList.add("active");
  condensation.style.opacity = "1";
  vesselGlass.style.opacity = "1";
  announce("Misted — condensation rising.");
  if (mistTimeout) clearTimeout(mistTimeout);
  mistTimeout = setTimeout(() => {
    condensation.style.opacity = state.condensation > 0 ? "1" : "0";
    vesselGlass.style.opacity = state.condensation > 0 ? "1" : "0.6";
  }, 3000);
}

function cycleCondensation() {
  state.condensation = (state.condensation + 1) % 4;
  condensation.style.opacity = state.condensation > 0 ? "1" : "0";
  vesselGlass.style.opacity = state.condensation > 0 ? "1" : "0.6";
  announce(`Condensation cycle: ${["clear", "light mist", "beaded", "heavy fog"][state.condensation]}.`);
}

function clearAllPlants() {
  state.plants = [];
  state.hardscape = [];
  persistState();
  buildVessel();
  announce("All flora and hardscape cleared. Substrate remains.");
}

function resetAll() {
  state = { layers: { drainage: false, charcoal: false, soil: false }, plants: [], hardscape: [], condensation: 0, mistLevel: 0 };
  persistState();
  activeTool = null;
  toolMode.textContent = "Select a layer";
  qsa(".tool-btn-item").forEach(b => b.setAttribute("aria-pressed", "false"));
  vesselHint.textContent = "Select a tool, then tap inside the glass";
  specimenCard.hidden = true;
  condensation.classList.remove("active");
  condensation.style.opacity = "0";
  vesselGlass.style.opacity = "0.6";
  buildVessel();
  buildToolGrids();
  announce("Terrarium reset. Start with drainage layer.");
}

function exportImage() {
  const svgData = new XMLSerializer().serializeToString(vesselSvg);
  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 600, 800);
    const link = document.createElement("a");
    link.download = `terrarium-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    announce("Terrarium exported as PNG.");
  };
  img.src = "data:image/svg+xml;base64," + btoa(svgData);
}

function buildToolGrids() {
  buildToolGrid(layerGrid, LAYERS, "layer");
  buildToolGrid(plantGrid, PLANTS, "plant");
  buildToolGrid(hardscapeGrid, HARDSCAPE, "hardscape");
}

function getVesselPoint(clientX, clientY) {
  const rect = vesselWrap.getBoundingClientRect();
  const x = ((clientX - rect.left) / rect.width) * 300;
  const y = ((clientY - rect.top) / rect.height) * 400;
  return { x, y };
}

function isInsideVessel(x, y) {
  return x > 35 && x < 265 && y > 50 && y < 380;
}

function placeItem(e) {
  if (!activeTool) return;
  const { x, y } = getVesselPoint(e.clientX, e.clientY);
  if (!isInsideVessel(x, y)) {
    announce("Tap inside the glass vessel.");
    return;
  }

  if (activeTool.category === "layer") {
    const order = ["drainage", "charcoal", "soil"];
    const idx = order.indexOf(activeTool.id);
    const prev = order[idx - 1];
    if (idx > 0 && !state.layers[prev]) {
      announce(`Add ${LAYERS.find(l => l.id === prev).label} first.`);
      return;
    }
    if (state.layers[activeTool.id]) {
      announce(`${activeTool.label} already present.`);
      return;
    }
    state.layers[activeTool.id] = true;
    persistState();
    buildVessel();
    announce(`Added ${activeTool.label} layer.`);
    qsa(`.tool-btn-item[data-id="${activeTool.id}"]`).forEach(b => b.setAttribute("aria-pressed", "true"));
  } else if (activeTool.category === "plant") {
    if (!state.layers.soil) {
      announce("Add soil layer before planting.");
      return;
    }
    const existing = state.plants.find(p => p.id === activeTool.id);
    if (existing) {
      state.plants = state.plants.filter(p => p.id !== activeTool.id);
      persistState();
      buildVessel();
      announce(`Removed ${activeTool.label}.`);
      qsa(`.tool-btn-item[data-id="${activeTool.id}"]`).forEach(b => b.setAttribute("aria-pressed", "false"));
    } else if (state.plants.length < 8) {
      state.plants.push({ id: activeTool.id, x, y, scale: 0.8 + Math.random() * 0.4 });
      persistState();
      buildVessel();
      announce(`Planted ${activeTool.label}.`);
      qsa(`.tool-btn-item[data-id="${activeTool.id}"]`).forEach(b => b.setAttribute("aria-pressed", "true"));
    } else {
      announce("Maximum 8 plants. Remove one first.");
    }
  } else if (activeTool.category === "hardscape") {
    if (!state.layers.drainage) {
      announce("Add drainage layer first.");
      return;
    }
    const existing = state.hardscape.find(h => h.id === activeTool.id);
    if (existing) {
      state.hardscape = state.hardscape.filter(h => h.id !== activeTool.id);
      persistState();
      buildVessel();
      announce(`Removed ${activeTool.label}.`);
      qsa(`.tool-btn-item[data-id="${activeTool.id}"]`).forEach(b => b.setAttribute("aria-pressed", "false"));
    } else if (state.hardscape.length < 6) {
      state.hardscape.push({ id: activeTool.id, x, y, scale: 0.7 + Math.random() * 0.5 });
      persistState();
      buildVessel();
      announce(`Placed ${activeTool.label}.`);
      qsa(`.tool-btn-item[data-id="${activeTool.id}"]`).forEach(b => b.setAttribute("aria-pressed", "true"));
    } else {
      announce("Maximum 6 hardscape items. Remove one first.");
    }
  }
}

vesselWrap.addEventListener("click", placeItem);
vesselWrap.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    const rect = vesselWrap.getBoundingClientRect();
    const mockEvent = { clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 };
    placeItem(mockEvent);
  }
});

mistBtn.addEventListener("click", mist);
cycleBtn.addEventListener("click", cycleCondensation);
clearPlantsBtn.addEventListener("click", clearAllPlants);
resetBtn.addEventListener("click", resetAll);
exportBtn.addEventListener("click", exportImage);

loadState();
buildToolGrids();
buildVessel();
startCondensation();