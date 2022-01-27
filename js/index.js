import { changeTheme } from "./change-theme.js";
import { toggleMenu } from "./toggle-menu.js";
import { codeIconAnim } from "./add-animations.js";
import { touchProjectEffect } from "./touchEvents.js";
import { generateProjects } from "./generateProjectEl.js";
import { generateSkills } from "./generateSkillEl.js";
import { sendEmail } from "./email-service.js";

document.addEventListener("DOMContentLoaded", () => {
  generateSkills();
  generateProjects();
  changeTheme();
  toggleMenu();
  codeIconAnim();
  touchProjectEffect();
  sendEmail();

  //AOS SCROLL ANIMATIONS CONFIG
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 10,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
});
