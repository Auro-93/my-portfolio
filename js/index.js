import { changeTheme } from "./change-theme.js";
import { cursorGlowing } from "./cursor-glowing.js";
import { toggleMenu } from "./toggle-menu.js";

document.addEventListener("DOMContentLoaded", () => {
  cursorGlowing();
  changeTheme();
  toggleMenu();
});
