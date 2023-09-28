function navigationToggle() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-toggle");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hidden-nav");
}
