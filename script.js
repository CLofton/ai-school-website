document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("active", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("active");
        document.body.classList.remove("nav-open");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.contains("active");

      document.querySelectorAll(".faq-item.active").forEach((openItem) => {
        openItem.classList.remove("active");
        const openButton = openItem.querySelector(".faq-question");
        if (openButton) openButton.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const shell = form.closest(".form-shell") || form;
      shell.classList.add("is-submitted");
      form.reset();
    });
  });

  if (document.querySelector("[data-events-list]") && typeof EVENTS !== "undefined") {
    renderEvents();
  }
});

function renderEvents() {
  const list = document.querySelector("[data-events-list]");
  const featured = document.querySelector("[data-featured-event]");
  const now = new Date();
  const upcoming = EVENTS
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (featured && upcoming.length) {
    const next = upcoming[0];
    const nextDate = new Date(next.date);
    featured.querySelector("[data-featured-title]").textContent = next.title;
    featured.querySelector("[data-featured-meta]").textContent =
      `${formatFullDate(nextDate)} · ${next.time} · ${next.price === 0 ? "Free" : "$" + next.price}`;
    featured.querySelector("[data-featured-copy]").textContent = next.description;
    featured.querySelector("a").href = `event-detail.html?id=${next.id}`;
  }

  if (!list) return;

  list.innerHTML = upcoming.slice(0, 6).map((event) => {
    const date = new Date(event.date);
    const price = event.price === 0 ? "Free" : "$" + event.price;
    return `
      <article class="event-card">
        <div class="event-date">${date.toLocaleDateString("en-US", { month: "short" })}<br>${date.getDate()}</div>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <div class="event-meta">
          <span>${event.time}</span>
          <span>${capitalize(event.type)}</span>
          <span>${price}</span>
        </div>
        <a class="button button-secondary button-small" href="event-detail.html?id=${event.id}">View event</a>
      </article>
    `;
  }).join("");
}

function formatFullDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : "";
}
