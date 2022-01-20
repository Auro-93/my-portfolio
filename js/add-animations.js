/****ADD PULSE EFFECT TO CODE ICON IN THE PROJECT LAYER WHEN HOVERING OVER IT ***/

export const codeIconAnim = () => {
  const projectLayer = document.querySelectorAll(".project-layer");

  projectLayer.forEach((layer) => {
    layer.addEventListener("mouseover", (e) => {
      e.target.children[0].classList.add(
        "animate__animated",
        "animate__heartBeat"
      );
    });

    layer.addEventListener("mouseout", (e) => {
      e.target.children[0].classList.remove(
        "animate__animated",
        "animate__heartBeat"
      );
    });
  });
};
