function initialize() {
  const HEADER_MENU_ICON = document.getElementById("header-menu-icon");
  HEADER_MENU_ICON.addEventListener("click", showSideMenu);

  const SIDE_MENU_ICON = document.getElementById("side-menu-icon");
  SIDE_MENU_ICON.addEventListener("click", hideSideMenu);
}

function showSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.classList.add("side-menu-open");
  SIDE_MENU.classList.remove("side-menu-close");
}

function hideSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.classList.add("side-menu-close");
  SIDE_MENU.classList.remove("side-menu-open");
}

initialize();