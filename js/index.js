import { changeTheme } from "./change-theme.js";
import { cursorGlowing } from "./cursor-glowing.js";
import { toggleMenu } from "./toggle-menu.js";
import { codeIconAnim } from "./add-animations.js";
import { touchProjectEffect } from "./touchEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  cursorGlowing();
  changeTheme();
  toggleMenu();
  codeIconAnim();
  touchProjectEffect();
});
