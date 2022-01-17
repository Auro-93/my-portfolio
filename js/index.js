//HANDLING CURSOR GLOWING ON MOUSEMOVE

let cursor = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

//HANDLING TOGGLE MENU FUNCTIONS

let customToggler = document.querySelector(".custom-toggler");

customToggler.addEventListener("click", toggleMenu);

function toggleMenu() {
  //TURN X ICON TO HAMBURGER ICON
  if (customToggler.classList.contains("open")) {
    document.body.classList.remove("hideYScroll");
    customToggler.classList.remove("open");
  }
  //TURN HAMBURGER ICON TO X ICON
  else {
    customToggler.classList.add("open");
    document.body.classList.add("hideYScroll");
  }
}

/*HANDLING CHANGE THEME COLORS*/

let themeColors = [
  {
    type: "pink",
    accent: "rgba(231, 59, 239, 1)",
    bg: "rgba(69, 17, 72, 1)",
  },
  {
    type: "cyan",
    accent: "rgba(30, 199, 241, 1)",
    bg: "rgba(13, 44, 80, 1)",
  },
];

let switchButton = document.querySelector(".switch");

switchButton.addEventListener("click", (e) => {
  if (e.target.checked === true) {
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
      "--accent-custom",
      themeColors[0].accent
    );
    document.documentElement.style.setProperty(
      "--bg-custom",
      themeColors[0].bg
    );
  }
});
