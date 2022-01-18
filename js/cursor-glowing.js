//HANDLING CURSOR GLOWING ON MOUSEMOVE

let cursor = document.querySelector(".cursor-glow");

export const cursorGlowing = () => {
  window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });
};
