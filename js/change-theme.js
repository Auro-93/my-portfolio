/*HANDLING CHANGE THEME COLOR*/

let themeColors = [
  {
    type: "pink",
    accent: "rgba(231, 59, 239, 1)",
    light: "rgba(239, 233, 254, 0.4)",
    bg: "rgba(69, 17, 72, 1)",
  },
  {
    type: "cyan",
    light: "rgba(216, 237, 245, 0.4)",
    accent: "rgba(30, 199, 241, 1)",
    bg: "rgba(13, 44, 80, 1)",
  },
];

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
