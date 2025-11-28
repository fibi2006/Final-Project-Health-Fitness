document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");
  const submitBtn = document.getElementById("submitBtn");

  const fields = {
    name: {
      el: document.getElementById("name"),
      validate: (v) => v.trim().length >= 2
    },
    email: {
      el: document.getElementById("email"),
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
    },
    message: {
      el: document.getElementById("message"),
      validate: (v) => v.trim().length >= 10
    }
  };

  function setValidity(el, valid) {
    el.classList.toggle("is-invalid", !valid);
    el.setAttribute("aria-invalid", String(!valid));
  }

  function validateAll() {
    let ok = true;
    for (const key in fields) {
      const { el, validate } = fields[key];
      const valid = validate(el.value);
      setValidity(el, valid);
      if (!valid && ok) el.focus();
      ok = ok && valid;
    }
    return ok;
  }

  function showAlert(message, type = "success") {
    alertBox.classList.remove("d-none", "alert-success", "alert-danger");
    alertBox.classList.add(`alert-${type}`);
    alertBox.textContent = message;
  }

  function hideAlert() {
    alertBox.classList.add("d-none");
  }

  // Live validation
  Object.values(fields).forEach(({ el, validate }) => {
    el.addEventListener("input", () => {
      setValidity(el, validate(el.value));
      hideAlert();
    });
    el.addEventListener("blur", () => setValidity(el, validate(el.value)));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    hideAlert();

    if (!validateAll()) {
      showAlert("Please fix the highlighted fields.", "danger");
      return;
    }

    // Simulate sending
    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    setTimeout(() => {
      showAlert("Thanks! Your message has been sent.", "success");
      form.reset();
      Object.values(fields).forEach(({ el }) => setValidity(el, true));
      submitBtn.disabled = false;
      submitBtn.value = "Send Message";
    }, 800);
  });
});
