//HANDLING TOGGLE MENU FUNCTIONS

export const toggleMenu = () => {
  let customToggler = document.querySelector(".custom-toggler");
  let navLink = document.querySelectorAll(".nav-link");

  customToggler.addEventListener("click", () => {
    //TURN X ICON TO HAMBURGER ICON
    if (customToggler.classList.contains("open")) {
      customToggler.classList.remove("open");
      document.body.classList.remove("hideYScroll");
    }
    //TURN HAMBURGER ICON TO X ICON
    else {
      document.body.classList.add("hideYScroll");
      customToggler.classList.add("open");
    }
  });

  navLink.forEach((item) => {
    item.addEventListener("click", (e) => {
      document.body.classList.remove("hideYScroll");
    });
  });
};
