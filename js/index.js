function init() {
  //variable declarations
  const menuIcon = document.querySelector(".hamburger");
  const menuContent = document.querySelector(".menu-content");
  const closeMenuIcon = document.querySelector(".close-button");

  //events
  menuIcon.addEventListener("click", openMenu);
  closeMenuIcon.addEventListener("click", closeMenu);

  ///functions
  function openMenu() {
    menuContent.style.top = 0;
  }
  function closeMenu() {
    menuContent.style.top = "-80vh";
  }
}

window.addEventListener("DOMContentLoaded", init);
