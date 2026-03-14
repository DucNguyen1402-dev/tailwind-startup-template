const filterBtns = [...document.querySelectorAll("[data-filter]")];
const projects = [...document.querySelectorAll("[data-category]")];

function showProjects(filter) {
  projects.forEach((project) => {
    const match = filter === "all" || project.dataset.category === filter;

    if (match) {
      gsap.set(project, { display: "block", opacity: 0.5, scale: 0.5 });

      gsap.to(project, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    } else {
      gsap.to(project, {
        opacity: 0,
        scale: 0.8,
        duration: 0.1,
        display: "none",
        ease: "power2.in",
      });
    }
  });
}

function highlightFilterBtn(filter) {
  filterBtns.forEach((filterBtn) => filterBtn.classList.remove("after:opacity-100", "text-white"));
  filter.classList.add("after:opacity-100", "text-white");
}

const allBtn = document.querySelector('[data-filter="all"]');
highlightFilterBtn(allBtn);
showProjects("all");

filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", (e) => {
    const btn = e.currentTarget;
    highlightFilterBtn(btn);
    const caterogy = btn.dataset.filter;
    showProjects(caterogy);
  });
});
