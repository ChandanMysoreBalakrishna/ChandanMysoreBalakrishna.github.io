(function () {
  const data = window.SITE_DATA;

  const TYPES = {
    work: { label: "Work" },
    education: { label: "Education" },
    extracurricular: { label: "Extracurricular" }
  };

  const ICONS = {
    linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    github: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 2-10 7L2 6"
  };

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function svgIcon(path, size) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    const p = document.createElementNS(ns, "path");
    p.setAttribute("d", path);
    svg.appendChild(p);
    return svg;
  }

  // Profile text
  document.querySelectorAll("[data-profile]").forEach((node) => {
    node.textContent = data.profile[node.dataset.profile] || "";
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  // Hero stats
  const stats = document.getElementById("heroStats");
  (data.profile.stats || []).forEach((s) => {
    const item = el("div", "stat");
    item.append(el("div", "stat-value", s.value), el("div", "stat-label", s.label));
    stats.appendChild(item);
  });

  // Filters
  const active = new Set(Object.keys(TYPES));
  const filters = document.getElementById("filters");
  const present = new Set(data.timeline.map((e) => e.type));
  Object.entries(TYPES).forEach(([type, cfg]) => {
    if (!present.has(type)) return;
    const btn = el("button", `filter filter-${type} is-active`);
    btn.type = "button";
    btn.setAttribute("aria-pressed", "true");
    btn.append(el("span", "filter-dot"), document.createTextNode(cfg.label));
    btn.addEventListener("click", () => {
      if (active.has(type) && active.size === 1) return;
      active.has(type) ? active.delete(type) : active.add(type);
      const on = active.has(type);
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", String(on));
      applyFilter();
    });
    filters.appendChild(btn);
  });

  // Timeline
  const timeline = document.getElementById("timeline");
  const line = el("div", "timeline-line");
  timeline.appendChild(line);

  const sorted = [...data.timeline].sort((a, b) => {
    if (!a.start) return -1;
    if (!b.start) return 1;
    return b.start.localeCompare(a.start);
  });

  let lastYear = null;
  sorted.forEach((entry) => {
    const year = entry.start ? entry.start.slice(0, 4) : "Now";
    if (year !== lastYear) {
      const marker = el("div", "year-marker reveal", year);
      marker.dataset.year = year;
      timeline.appendChild(marker);
      lastYear = year;
    }

    const item = el("div", `entry entry-${entry.type} reveal`);
    item.dataset.type = entry.type;
    item.dataset.year = year;
    item.appendChild(el("div", "entry-node"));

    const card = el("article", "entry-card");
    const head = el("div", "entry-head");
    const left = el("div", "entry-titles");
    left.append(
      el("div", "entry-period", entry.period),
      el("h3", "entry-title", entry.title),
      el("p", "entry-org", entry.org)
    );
    head.append(left, el("span", "entry-badge", entry.type));
    card.appendChild(head);

    if (entry.description) card.appendChild(el("p", "entry-desc", entry.description));
    if (entry.tags && entry.tags.length) {
      const tags = el("div", "entry-tags");
      entry.tags.forEach((t) => tags.appendChild(el("span", "tag", t)));
      card.appendChild(tags);
    }
    item.appendChild(card);
    timeline.appendChild(item);
  });

  function applyFilter() {
    const visibleYears = new Set();
    timeline.querySelectorAll(".entry").forEach((e) => {
      const show = active.has(e.dataset.type);
      e.hidden = !show;
      if (show) visibleYears.add(e.dataset.year);
    });
    timeline.querySelectorAll(".year-marker").forEach((m) => {
      m.hidden = !visibleYears.has(m.dataset.year);
    });
  }

  // Contact
  const grid = document.getElementById("contactGrid");
  data.contact.forEach((c) => {
    const a = el("a", "contact-card reveal");
    a.href = c.href;
    if (!c.href.startsWith("mailto:")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    const icon = el("div", "contact-icon");
    icon.appendChild(svgIcon(ICONS[c.icon] || ICONS.mail, 20));
    const text = el("div", "contact-text");
    text.append(el("div", "contact-label", c.label), el("div", "contact-value", c.value));
    const arrow = el("div", "contact-arrow");
    arrow.appendChild(svgIcon("M7 17 17 7M7 7h10v10", 16));
    a.append(icon, text, arrow);
    grid.appendChild(a);
  });

  // Header background on scroll
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  // Active nav link
  const links = [...document.querySelectorAll(".nav-link")];
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${e.target.id}`));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section").forEach((s) => sectionObserver.observe(s));

  // Reveal on scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        revealObserver.unobserve(e.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((n, i) => {
    if (n.closest(".hero")) n.style.transitionDelay = `${i * 80}ms`;
    revealObserver.observe(n);
  });

  // Timeline line grows as you scroll
  const growLine = () => {
    const rect = timeline.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.75 - rect.top) / rect.height));
    line.style.transform = `scaleY(${progress})`;
  };
  window.addEventListener("scroll", growLine, { passive: true });
  window.addEventListener("resize", growLine);
  growLine();
})();
