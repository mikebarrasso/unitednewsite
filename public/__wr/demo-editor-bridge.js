(function () {
  "use strict";

  if (typeof window === "undefined" || window.self === window.parent) return;

  const ALLOWED_PARENT_ORIGINS = [
    "https://attract.wealthreach.ai",
    "https://app.wealthreach.com",
    "http://localhost:3000",
  ];
  const BRIDGE_SOURCE = "wr-editor-bridge";
  const SHELL_SOURCE = "wr-editor-shell";
  const VERSION = 1;
  const TARGET_SELECTOR =
    "h1,h2,h3,h4,h5,h6,p,blockquote,li,a,button,img,picture,svg";

  let activeShellOrigin = null;
  let pickerArmed = false;
  let hoverBox = null;
  let hoveredElement = null;
  let highlightRecords = [];

  function normalizeText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function post(type, payload, origin) {
    const targetOrigin = origin || activeShellOrigin;
    if (!targetOrigin) return;
    try {
      window.parent.postMessage(
        Object.assign(
          { source: BRIDGE_SOURCE, v: VERSION, type: type },
          payload || {}
        ),
        targetOrigin
      );
    } catch {
      // A parent navigation can invalidate the target between frames.
    }
  }

  function postReady() {
    for (const origin of ALLOWED_PARENT_ORIGINS) {
      post(
        "bridge-ready",
        { route: window.location.pathname, capabilities: ["multiIndexFocus"] },
        origin
      );
    }
  }

  function makeOutline(color, fill) {
    const box = document.createElement("div");
    box.setAttribute("data-wr-demo-review", "");
    Object.assign(box.style, {
      position: "fixed",
      zIndex: "2147483646",
      pointerEvents: "none",
      border: `3px solid ${color}`,
      borderRadius: "8px",
      background: fill,
      boxShadow: `0 0 0 3px ${fill}, 0 8px 28px rgba(0,0,0,.18)`,
      transition:
        "left 120ms ease, top 120ms ease, width 120ms ease, height 120ms ease, opacity 120ms ease",
    });
    document.body.appendChild(box);
    return box;
  }

  function positionBox(box, element) {
    if (!box || !element || !element.isConnected) return;
    const rect = element.getBoundingClientRect();
    box.style.left = `${Math.max(2, rect.left - 5)}px`;
    box.style.top = `${Math.max(2, rect.top - 5)}px`;
    box.style.width = `${Math.max(0, rect.width + 10)}px`;
    box.style.height = `${Math.max(0, rect.height + 10)}px`;
  }

  function positionAll() {
    if (hoverBox && hoveredElement) positionBox(hoverBox, hoveredElement);
    for (const record of highlightRecords) {
      positionBox(record.box, record.element);
    }
  }

  function meaningfulTarget(node) {
    if (!(node instanceof Element)) return null;
    if (node.closest("[data-wr-demo-review]")) return null;
    return node.closest(TARGET_SELECTOR);
  }

  function clearHover() {
    hoverBox?.remove();
    hoverBox = null;
    hoveredElement = null;
  }

  function onPointerMove(event) {
    if (!pickerArmed) return;
    const target = meaningfulTarget(event.target);
    if (!target || target === hoveredElement) return;
    hoveredElement = target;
    if (!hoverBox) {
      hoverBox = makeOutline("#60a5fa", "rgba(59,130,246,.13)");
    }
    positionBox(hoverBox, target);
  }

  function selectionFor(element) {
    const rect = element.getBoundingClientRect();
    const tagName = element.tagName.toLowerCase();
    const image =
      tagName === "img"
        ? element
        : tagName === "picture"
          ? element.querySelector("img")
          : null;
    return {
      selectionId: `demo-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      componentStack: [],
      tagName: tagName,
      role:
        image || tagName === "svg"
          ? "image"
          : normalizeText(element.textContent)
            ? "text"
            : "other",
      textContent: normalizeText(element.textContent).slice(0, 400),
      imgSrc: image && image.currentSrc ? image.currentSrc : undefined,
      route: window.location.pathname,
      rect: {
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      },
      // The demo deployment is immutable. Selection is fully supported, but
      // direct in-place persistence correctly stays off.
      editableText: false,
    };
  }

  function onPick(event) {
    if (!pickerArmed) return;
    const target = meaningfulTarget(event.target);
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    post("element-selected", { selection: selectionFor(target) });
    disarmPicker();
  }

  function onPickerKeydown(event) {
    if (event.key !== "Escape") return;
    disarmPicker();
    post("selection-cleared");
  }

  function armPicker() {
    clearHighlights();
    pickerArmed = true;
    document.addEventListener("pointermove", onPointerMove, true);
    document.addEventListener("click", onPick, true);
    document.addEventListener("keydown", onPickerKeydown, true);
  }

  function disarmPicker() {
    pickerArmed = false;
    document.removeEventListener("pointermove", onPointerMove, true);
    document.removeEventListener("click", onPick, true);
    document.removeEventListener("keydown", onPickerKeydown, true);
    clearHover();
  }

  function restorePrevious() {
    for (const record of highlightRecords) {
      if (!record.swapped) continue;
      record.element.textContent = record.originalText;
      record.swapped = false;
    }
  }

  function clearHighlights() {
    restorePrevious();
    for (const record of highlightRecords) record.box.remove();
    highlightRecords = [];
  }

  function findTextElement(expected) {
    const wanted = normalizeText(expected);
    if (!wanted) return null;
    const candidates = Array.from(document.querySelectorAll(TARGET_SELECTOR))
      .filter((element) => !element.closest("[data-wr-demo-review]"))
      .map((element) => ({ element, text: normalizeText(element.textContent) }))
      .filter(
        (candidate) =>
          candidate.text === wanted || candidate.text.includes(wanted)
      )
      .sort((left, right) => {
        const leftExact = left.text === wanted ? 0 : 1;
        const rightExact = right.text === wanted ? 0 : 1;
        return leftExact - rightExact || left.text.length - right.text.length;
      });
    return candidates[0]?.element || null;
  }

  function showHighlights(anchors) {
    disarmPicker();
    clearHighlights();
    const results = anchors.map((anchor, index) => {
      const element =
        anchor && anchor.kind === "text" ? findTextElement(anchor.text) : null;
      if (!element) {
        return { index: index, matched: false, canShowPrevious: false };
      }
      const box = makeOutline("#f59e0b", "rgba(245,158,11,.15)");
      const badge = document.createElement("span");
      badge.textContent = "Changed";
      Object.assign(badge.style, {
        position: "absolute",
        top: "-24px",
        left: "-3px",
        padding: "3px 7px",
        borderRadius: "999px",
        background: "#f59e0b",
        color: "#111827",
        font: "600 11px/1.2 ui-sans-serif, system-ui, sans-serif",
        letterSpacing: ".01em",
      });
      box.appendChild(badge);
      const originalText = element.textContent || "";
      highlightRecords.push({
        index: index,
        element: element,
        box: box,
        previousText: anchor.previousText,
        originalText: originalText,
        swapped: false,
      });
      positionBox(box, element);
      return {
        index: index,
        matched: true,
        canShowPrevious: Boolean(anchor.previousText),
      };
    });
    post("change-highlights-shown", {
      matchedCount: results.filter((result) => result.matched).length,
      requestedCount: anchors.length,
      anchors: results,
    });
  }

  function focusHighlights(data) {
    restorePrevious();
    const requested = Array.isArray(data.indices) ? data.indices : [data.index];
    const focused = new Set(requested);
    let first = null;
    for (const record of highlightRecords) {
      const isFocused = focused.has(record.index);
      record.box.style.opacity = isFocused ? "1" : ".18";
      if (!isFocused) continue;
      if (!first) first = record.element;
      if (data.showPrevious && record.previousText) {
        record.element.textContent = record.previousText;
        record.swapped = true;
      }
    }
    positionAll();
    first?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  window.addEventListener("message", function (event) {
    if (event.source !== window.parent) return;
    if (!ALLOWED_PARENT_ORIGINS.includes(event.origin)) return;
    const data = event.data;
    if (!data || data.source !== SHELL_SOURCE || data.v !== VERSION) return;
    activeShellOrigin = event.origin;
    if (data.type === "arm") armPicker();
    if (data.type === "disarm") disarmPicker();
    if (data.type === "show-change-highlights") {
      showHighlights(Array.isArray(data.anchors) ? data.anchors : []);
    }
    if (data.type === "focus-change-highlight") focusHighlights(data);
    if (data.type === "clear-change-highlights") clearHighlights();
  });

  window.addEventListener("resize", positionAll);
  window.addEventListener("scroll", positionAll, true);
  window.addEventListener("pagehide", function () {
    disarmPicker();
    clearHighlights();
  });
  window.addEventListener("popstate", function () {
    post("route-changed", { route: window.location.pathname });
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", postReady, { once: true });
  } else {
    postReady();
  }
})();
