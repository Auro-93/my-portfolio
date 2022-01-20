/**THIS FUNCTION IS TRIGGERED WHEN USER TOUCHES PROJECT LAYER */

export const touchProjectEffect = () => {
  const projectLayer = document.querySelectorAll(".project-layer");
  const codeIcon = document.querySelectorAll(".code-icon-container");

  projectLayer.forEach((layer) => {
    layer.addEventListener("touchstart", (e) => {
      e.target.style.animation = "project-layer-gradient 0.2s linear forwards";
      e.target.children[0].style.opacity = 1;
    });

    layer.addEventListener("touchcancel", (e) => {
      e.target.style.background =
        "linear-gradient(100deg, transparent, transparent)";
      e.target.children[0].style.opacity = 0;
    });
  });
};
