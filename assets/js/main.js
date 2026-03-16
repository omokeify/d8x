/**
 * App - Navigation and smooth scrolling (used when not using React bundle)
 */

(function () {
  "use strict";

  const NavController = {
    toggle: null,
    menu: null,

    init() {
      this.toggle = document.getElementById("nav-toggle");
      this.menu = document.getElementById("mobile-nav");

      if (this.toggle && this.menu) {
        this.toggle.addEventListener("click", () => this.toggleMenu());
      }

      this.setupSmoothScroll();
    },

    toggleMenu() {
      const isHidden = this.menu.classList.contains("hidden");
      this.menu.classList.toggle("hidden", !isHidden);
    },

    setupSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const href = anchor.getAttribute("href");
          if (href === "#") return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            this.menu?.classList.add("hidden");
          }
        });
      });
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => NavController.init());
  } else {
    NavController.init();
  }
})();
