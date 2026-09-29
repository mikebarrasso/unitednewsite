/* Reach demo review bridge.
 *
 * This deployment is the immutable visual outcome used by the allowlisted
 * WealthReach sales-demo firm. The helper never runs in a top-level visit; it
 * only loads when this site is embedded in the authenticated Reach preview.
 */
if (typeof window !== "undefined" && window.self !== window.top) {
  if (!document.querySelector("script[data-wr-editor-bridge]")) {
    const script = document.createElement("script");
    script.src = "/__wr/demo-editor-bridge.js";
    script.setAttribute("data-wr-editor-bridge", "");
    document.head.appendChild(script);
  }
}
