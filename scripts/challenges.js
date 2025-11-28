// ...existing code...
document.addEventListener("DOMContentLoaded", () => {
  const STEP = 10;

  function setProgress(progressEl, value) {
    const clamped = Math.max(0, Math.min(100, value));
    let bar = progressEl.querySelector(".progress-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "progress-bar";
      progressEl.appendChild(bar);
    }
    bar.style.width = clamped + "%";
    bar.textContent = clamped + "%";
    progressEl.setAttribute("aria-valuenow", String(clamped));
    return clamped;
  }

  document.querySelectorAll(".card-fitness[data-challenge]").forEach(card => {
    const progressEl = card.querySelector(".progress");
    const btn = card.querySelector(".challenge-btn");
    if (!progressEl || !btn) return;

    // Reset to 0% on load
    let current = setProgress(progressEl, 0);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      current = setProgress(progressEl, Math.min(100, current + STEP));
    });
  });
});
// ...existing code...
