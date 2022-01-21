import { changeTheme } from "./change-theme.js";
import { cursorGlowing } from "./cursor-glowing.js";
import { toggleMenu } from "./toggle-menu.js";
import { codeIconAnim } from "./add-animations.js";
import { touchProjectEffect } from "./touchEvents.js";
import { generateProjects } from "./generateProjectEl.js";
import { generateSkills } from "./generateSkillEl.js";

document.addEventListener("DOMContentLoaded", () => {
  generateSkills();
  generateProjects();
  cursorGlowing();
  changeTheme();
  toggleMenu();
  codeIconAnim();
  touchProjectEffect();
});
