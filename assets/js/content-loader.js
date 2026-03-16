/**
 * ContentLoader - Populates DOM from content.json
 * Edit assets/content.json to change page content.
 */

(function () {
  "use strict";

  const ContentLoader = {
    data: null,

    async init() {
      try {
        const res = await fetch("./assets/content.json");
        this.data = await res.json();
        this.applySimple();
        this.renderNav();
        this.renderScenarios();
        this.renderPartnership();
        this.renderSystemFlow();
        this.renderValidation();
        this.renderFaq();
        this.renderIntegration();
        this.renderFooter();
      } catch (e) {
        console.warn("ContentLoader: could not load content.json", e);
      }
    },

    get(path) {
      const keys = path.split(".");
      let v = this.data;
      for (const k of keys) v = v?.[k];
      return v;
    },

    escapeHtml(s) {
      if (typeof s !== "string") return "";
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    },

    applySimple() {
      document.querySelectorAll("[data-content]").forEach((el) => {
        const val = this.get(el.getAttribute("data-content"));
        if (val != null && typeof val === "string") el.textContent = val;
      });
      document.querySelectorAll("[data-href]").forEach((el) => {
        const val = this.get(el.getAttribute("data-href"));
        if (val != null && typeof val === "string") el.href = val;
      });
    },

    renderNav() {
      const items = this.get("nav");
      if (!Array.isArray(items)) return;
      const linkHtml = items
        .map(
          (item) =>
            `<a href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} class="relative px-6 py-5 text-xs font-medium tracking-wider text-white/70 hover:text-white transition-colors border-l border-white/10">
              <span class="text-orange-500">${(item.label.split(".")[0] || "")}.</span>
              <span class="ml-1">${item.label.split(".")[1] || ""}</span>
            </a>`
        )
        .join("");
      const nav = document.getElementById("nav-links");
      if (nav) nav.innerHTML = linkHtml;
      const mobileNav = document.getElementById("mobile-nav");
      if (mobileNav) {
        mobileNav.innerHTML = items
          .map(
            (item) =>
              `<a href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} class="block px-6 py-4 text-sm text-white/70 hover:text-white hover:bg-white/5 border-b border-white/10">
                <span class="text-orange-500">${(item.label.split(".")[0] || "")}.</span>
                <span class="ml-1">${item.label.split(".")[1] || ""}</span>
              </a>`
          )
          .join("");
      }
    },

    renderScenarios() {
      const container = document.getElementById("scenarios-grid");
      const items = this.get("scenarios.items");
      if (!container || !Array.isArray(items)) return;
      container.innerHTML = items
        .map(
          (s, i) => `
          <div class="bg-black p-6 lg:p-8 group hover:bg-white/5 transition-colors ${i === 0 ? "border-t-2 border-t-orange-500" : ""}">
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs font-mono text-white/40">${s.id || ""}</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">${s.title}</h3>
            <p class="text-sm text-white/50 leading-relaxed">${s.desc}</p>
            ${s.metric ? `<div class="flex items-baseline gap-2 mt-6"><span class="text-3xl lg:text-4xl font-mono text-white">${s.metric}</span><span class="text-xs text-white/40">${s.metricLabel || ""}</span></div>` : ""}
          </div>`
        )
        .join("");
    },

    renderPartnership() {
      const container = document.getElementById("partnership-logos");
      const partnership = this.get("scenarios.partnership");
      if (!container || !partnership?.partners) return;
      container.innerHTML = partnership.partners
        .map(
          (p) =>
            `<a href="${p.url || "#"}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-white/70 hover:text-white transition-colors" title="${this.escapeHtml(p.name)}">${typeof PartnerLogos !== "undefined" && PartnerLogos[p.name] ? PartnerLogos[p.name] : ""}<span class="text-xs font-medium tracking-wider uppercase">${this.escapeHtml(p.name)}</span></a>`
        )
        .join("");
    },

    renderSystemFlow() {
      const container = document.getElementById("system-flow-grid");
      const steps = this.get("systemFlow.steps");
      if (!container || !Array.isArray(steps)) return;
      const icons = {
        "01": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-white/40 shrink-0"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
        "02": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-white/40 shrink-0"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        "03": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-white/40 shrink-0"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
        "04": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-white/40 shrink-0"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/></svg>'
      };
      container.innerHTML = steps
        .map(
          (s) => `
          <div class="bg-black p-6 lg:p-8 group hover:bg-white/5 transition-colors">
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs font-mono text-white/40">${s.id}</span>
              ${icons[s.id] || ""}
            </div>
            <h3 class="text-lg font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">${s.title}${s.status === "core" ? ' <span class="ml-2 text-xs text-orange-500 font-mono">[CORE]</span>' : ""}</h3>
            <p class="text-xs text-white/40 mb-3">${s.subtitle || ""}</p>
            ${s.desc ? `<p class="text-sm text-white/50 leading-relaxed">${s.desc}</p>` : ""}
            ${s.nodes ? s.nodes.map((n) => `<div class="flex justify-between text-xs py-1 mt-2"><span class="text-white/50 font-mono">${n.name}</span><span class="font-mono ${n.status === "linked" ? "text-green-400" : n.status === "sync" ? "text-orange-500" : "text-white/30"}">${n.status.toUpperCase()}</span></div>`).join("") : ""}
            ${s.metric ? `<div class="mt-4 pt-4 border-t border-white/10"><div class="flex items-baseline gap-2"><span class="text-xl font-mono text-white">${s.metric}</span><span class="text-xs text-white/40">${s.metricLabel}</span></div></div>` : ""}
          </div>`
        )
        .join("");
    },

    renderFaq() {
      const items = this.get("faq.items");
      if (!Array.isArray(items)) return;
      const makeFaqHtml = (subset) =>
        subset
          .map(
            (item, i) => `
          <div class="faq-item bg-white/5 border border-white/10 rounded overflow-hidden group">
            <button class="faq-trigger w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-white/5 transition-colors" data-faq-index="${i}" aria-expanded="false">
              <span class="text-sm font-medium text-white">${item.q}</span>
              <svg class="faq-chevron w-4 h-4 text-white/50 shrink-0 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-content hidden border-t border-white/10">
              <div class="faq-answer px-6 py-4 text-sm text-white/60 leading-relaxed">${(item.a || "").split(/\n\n+/).map((p) => `<p>${this.escapeHtml(p.trim())}</p>`).join("")}</div>
            </div>
          </div>`
          )
          .join("");
      const attachFaqHandlers = (el, html) => {
        if (!el) return;
        el.innerHTML = html;
        el.querySelectorAll(".faq-trigger").forEach((btn) => {
          btn.addEventListener("click", () => {
            const item = btn.closest(".faq-item");
            const content = item.querySelector(".faq-content");
            const chevron = item.querySelector(".faq-chevron");
            const isOpen = content.classList.contains("hidden");
            content.classList.toggle("hidden", !isOpen);
            chevron.style.transform = isOpen ? "rotate(180deg)" : "";
            btn.setAttribute("aria-expanded", isOpen);
          });
        });
      };
      attachFaqHandlers(document.getElementById("faq-list"), makeFaqHtml(items));
      const leftItems = items.slice(0, 3);
      const rightItems = items.slice(3, 6);
      attachFaqHandlers(document.getElementById("faq-list-divider-left"), makeFaqHtml(leftItems));
      attachFaqHandlers(document.getElementById("faq-list-divider"), makeFaqHtml(rightItems));
    },

    renderValidation() {
      const compliance = document.getElementById("validation-compliance");
      const partners = document.getElementById("validation-partners");
      const comp = this.get("validation.compliance");
      const part = this.get("validation.partners");
      if (compliance && Array.isArray(comp)) {
        compliance.innerHTML = comp
          .map((c) => `<div class="flex justify-between items-start py-2 border-b border-white/5 gap-2"><div><span class="text-xs text-white/60 font-mono">${c.name}</span>${c.detail ? `<p class="text-[10px] text-white/40 mt-0.5">${c.detail}</p>` : ""}</div><span class="text-xs text-green-400 font-mono shrink-0">[${c.status}]</span></div>`)
          .join("");
      }
      if (partners && Array.isArray(part)) {
        partners.innerHTML = part.map((p) => `<span class="text-xs text-white/60 bg-white/5 px-2 py-1 rounded">${p}</span>`).join("");
      }
    },

    renderIntegration() {
      const cards = this.get("integration.cards");
      if (!Array.isArray(cards)) return;
      const html = cards
        .map(
          (c) => `
          <div class="relative bg-black p-6 lg:p-8 group hover:bg-white/5 transition-colors ${c.highlighted ? "ring-1 ring-orange-500" : ""}">
            ${c.badge ? `<div class="absolute -top-px left-1/2 -translate-x-1/2"><span class="bg-orange-500 text-black text-xs font-semibold px-3 py-1">${c.badge}</span></div>` : ""}
            <div class="text-xs text-white/40 font-mono mb-4">${c.tag || ""}</div>
            <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">${c.name}</h3>
            <p class="text-sm text-white/50 mb-6 leading-relaxed">${c.desc}</p>
            <ul class="space-y-3 mb-8">
              ${(c.features || []).map((f) => `<li class="flex items-center gap-3"><span class="text-sm text-white/70">${f}</span></li>`).join("")}
            </ul>
            <a href="${c.href || "#"}" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 text-sm font-semibold transition-all ${c.highlighted ? "bg-white text-black hover:bg-orange-500 hover:text-white" : "border border-white/20 text-white hover:bg-white/5"}">${c.cta}</a>
          </div>`
        )
        .join("");
      const grid1 = document.getElementById("integration-grid");
      const grid2 = document.getElementById("integration-grid-2");
      if (grid1) grid1.innerHTML = html;
      if (grid2) {
        const partners = this.get("integration2.partners") || [];
        const partnerHtml = partners
          .map(
            (p) =>
              `<a href="${p.url || "#"}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-white/70 hover:text-white transition-colors shrink-0" title="${this.escapeHtml(p.name)}">${typeof PartnerLogos !== "undefined" && PartnerLogos[p.name] ? PartnerLogos[p.name] : ""}<span class="text-xs font-medium tracking-wider">${this.escapeHtml(p.name)}</span></a>`
          )
          .join("");
        const mediaBrands = this.get("integration2.mediaBrands") || [];
        const mediaBrandHtml = mediaBrands
          .map(
            (b) =>
              `<a href="${b.url || "#"}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center px-4 py-3 text-white/70 hover:text-white transition-colors text-xs font-medium tracking-wider" title="${this.escapeHtml(b.name)}">${this.escapeHtml(b.name)}</a>`
          )
          .join("");
        const mediaCardHtml = mediaBrands.length > 0
          ? `
          <div class="relative bg-black p-8 lg:p-12 group hover:bg-white/5 transition-colors ring-1 ring-white/10">
            <div class="absolute -top-px left-1/2 -translate-x-1/2"><span class="bg-orange-500 text-black text-xs font-semibold px-3 py-1">as seen in</span></div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-8 items-center justify-items-center">${mediaBrandHtml}</div>
          </div>`
          : "";
        grid2.innerHTML = `
          <div class="relative bg-black p-6 lg:p-8 group hover:bg-white/5 transition-colors ring-1 ring-orange-500">
            <div class="absolute -top-px left-1/2 -translate-x-1/2"><span class="bg-orange-500 text-black text-xs font-semibold px-3 py-1">partners</span></div>
            <div class="flex flex-wrap items-center justify-center gap-6 pt-6">${partnerHtml}</div>
          </div>
          ${mediaCardHtml}`;
      }
    },

    renderFooter() {
      const cols = ["platform", "resources", "developers", "company"];
      cols.forEach((key) => {
        const col = document.getElementById(`footer-${key}`);
        const section = this.get(`footer.${key}`);
        if (!col || !section) return;
        col.innerHTML = `
          <h4 class="text-xs text-white/40 font-mono mb-4">${section.title}</h4>
          <ul class="space-y-3">
            ${section.links.map((l) => `<li><a href="${l.href}" class="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">${l.name}${l.badge ? `<span class="text-[10px] bg-orange-500/20 text-orange-500 px-1.5 py-0.5 rounded">${l.badge}</span>` : ""}</a></li>`).join("")}
          </ul>`;
      });
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => ContentLoader.init());
  } else {
    ContentLoader.init();
  }
})();
