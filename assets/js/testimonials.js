document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      id: 1,
      quote: "This changed everything for me.",
      author: "Sarah Chen",
      role: "Designer at Figma",
      avatar: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0",
    },
    {
      id: 2,
      quote: "Simply brilliant. Nothing else compares.",
      author: "Marcus Johnson",
      role: "Engineer at Vercel",
      avatar: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0",
    },
    {
      id: 3,
      quote: "The attention to detail is unmatched.",
      author: "Elena Rodriguez",
      role: "Founder at Craft",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0",
    },
  ];

  let activeIndex = 0;
  let isAnimating = false;
  
  const quoteEl = document.getElementById("test-quote");
  const roleEl = document.getElementById("test-role");
  const avatarsEl = document.getElementById("test-avatars");

  if (!quoteEl || !roleEl || !avatarsEl) return;

  function renderAvatars() {
    avatarsEl.innerHTML = testimonials.map((t, index) => {
      const isActive = activeIndex === index;
      
      return `
        <button
          onclick="window.selectTestimonial(${index})"
          onmouseenter="window.hoverTestimonial(${index}, true)"
          onmouseleave="window.hoverTestimonial(${index}, false)"
          id="test-btn-${index}"
          class="relative flex items-center gap-0 rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'bg-white shadow-lg pr-4 pl-2 py-2' : 'bg-transparent hover:bg-white/10 p-0.5'}"
        >
          <div class="relative flex-shrink-0">
            <img
              src="${t.avatar}"
              alt="${t.author}"
              class="w-8 h-8 rounded-full object-cover transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'ring-2 ring-black/30' : 'ring-0 hover:scale-105'}"
            />
          </div>
          <div id="test-name-wrapper-${index}" class="grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'grid-cols-[1fr] opacity-100 ml-2' : 'grid-cols-[0fr] opacity-0 ml-0'}">
            <div class="overflow-hidden">
              <span class="text-sm font-medium whitespace-nowrap block transition-colors duration-300 ${isActive ? 'text-black' : 'text-white'}">
                ${t.author}
              </span>
            </div>
          </div>
        </button>
      `;
    }).join("");
  }

  window.hoverTestimonial = (index, isHovering) => {
    if (index === activeIndex) return;
    const btn = document.getElementById(`test-btn-${index}`);
    const nameWrapper = document.getElementById(`test-name-wrapper-${index}`);
    
    if (isHovering) {
      btn.classList.remove('p-0.5');
      btn.classList.add('pr-4', 'pl-2', 'py-2');
      nameWrapper.style.gridTemplateColumns = "1fr";
      nameWrapper.style.opacity = "1";
      nameWrapper.style.marginLeft = "0.5rem";
    } else {
      btn.classList.add('p-0.5');
      btn.classList.remove('pr-4', 'pl-2', 'py-2');
      nameWrapper.style.gridTemplateColumns = "0fr";
      nameWrapper.style.opacity = "0";
      nameWrapper.style.marginLeft = "0";
    }
  };

  window.selectTestimonial = (index) => {
    if (index === activeIndex || isAnimating) return;
    isAnimating = true;

    // Animate out
    quoteEl.classList.add("opacity-0", "blur-[4px]", "scale-[0.98]");
    roleEl.classList.add("opacity-0", "translate-y-2");
    
    activeIndex = index;
    renderAvatars();

    setTimeout(() => {
      quoteEl.innerText = testimonials[activeIndex].quote;
      roleEl.innerText = testimonials[activeIndex].role;

      // Animate in
      quoteEl.classList.remove("opacity-0", "blur-[4px]", "scale-[0.98]");
      roleEl.classList.remove("opacity-0", "translate-y-2");

      setTimeout(() => {
        isAnimating = false;
      }, 400);
    }, 200);
  };

  quoteEl.innerText = testimonials[0].quote;
  roleEl.innerText = testimonials[0].role;
  renderAvatars();
});
