(() => {
  "use strict";

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opening = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(opening));
      nav.classList.toggle("is-open", opening);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  const form = document.querySelector("#inquiry-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const required = ["name", "email", "message"];
      let valid = true;

      required.forEach((id) => {
        const field = document.getElementById(id);
        const error = document.getElementById(`${id}-error`);
        let message = "";
        if (!field.value.trim()) message = "Please complete this field.";
        if (id === "email" && field.value && !field.validity.valid) message = "Please enter a valid email address.";
        field.setAttribute("aria-invalid", String(Boolean(message)));
        error.textContent = message;
        if (message && valid) {
          field.focus();
          valid = false;
        }
      });

      if (!valid) return;
      const values = new FormData(form);
      const subject = `Appointment inquiry${values.get("service") ? ` — ${values.get("service")}` : ""}`;
      const body = [
        `Name: ${values.get("name")}`,
        `Email: ${values.get("email")}`,
        `Telephone: ${values.get("phone") || "Not provided"}`,
        `Service: ${values.get("service") || "Not sure yet"}`,
        "",
        values.get("message")
      ].join("\n");
      document.querySelector(".form-status").textContent = "Opening your email application…";
      window.location.href = `mailto:hello@marthaskinstudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
