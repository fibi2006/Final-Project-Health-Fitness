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

    const challengeName = card.getAttribute("data-challenge");
    const today = new Date().toISOString().split('T')[0];

    // جلب حالة التقدم من localStorage
    let state = JSON.parse(localStorage.getItem(challengeName)) || { progress: 0, lastUpdate: null };

    // تحديث progress عند تحميل الصفحة
    let current = setProgress(progressEl, state.progress);

    // تعطيل الزر لو ضغط اليوم
    if (state.lastUpdate === today) {
      btn.disabled = true;
      btn.textContent = "Done Today";
    }

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // منع الضغط أكثر من مرة في اليوم
      const now = new Date().toISOString().split('T')[0];
      if (state.lastUpdate === now) return;

      // زيادة التقدم
      current = setProgress(progressEl, Math.min(100, current + STEP));

      // حفظ التحديث في localStorage
      state.progress = current;
      state.lastUpdate = now;
      localStorage.setItem(challengeName, JSON.stringify(state));

      // تعطيل الزر بعد الضغط
      btn.disabled = true;
      btn.textContent = "Done Today";
    });
  });
});
لع