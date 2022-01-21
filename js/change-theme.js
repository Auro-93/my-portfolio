import { themeColors } from "../assets/data/theme-colors.js";

/*HANDLING CHANGE THEME COLOR*/

export const changeTheme = () => {
  let switchButton = document.querySelector(".switch");
  switchButton.addEventListener("click", (e) => {
    if (e.target.checked === true) {
      document.documentElement.style.setProperty(
        "--light-custom",
        themeColors[1].light
      );
      document.documentElement.style.setProperty(
        "--accent-custom",
        themeColors[1].accent
      );
      document.documentElement.style.setProperty(
        "--bg-custom",
        themeColors[1].bg
      );
    } else {
      document.documentElement.style.setProperty(
        "--light-custom",
        themeColors[0].light
      );
      document.documentElement.style.setProperty(
        "--accent-custom",
        themeColors[0].accent
      );
      document.documentElement.style.setProperty(
        "--bg-custom",
        themeColors[0].bg
      );
    }
  });
};
