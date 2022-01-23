import { projects } from "../assets/data/project-data.js";

export const generateProjects = () => {
  const projectsContainer = document.querySelector(".projects-container");
  let html = "";

  if (projects.length > 0) {
    projects.map((project) => {
      html += `<div 
        class = "project d-flex flex-column flex-lg-row"
        data-aos="fade-up"
        data-aos-offset="120"
        data-aos-duration="600"
        data-aos-easing="ease-in-out-sine"
        data-aos-once="true"
        >
          <div class="img-container d-flex align-items-center justify-content-center">
            <img src= ${project.image} class="img-fluid" alt= ${project.imgAlt}>
            <div class="project-layer">
              <div class="code-icon-container d-flex justify-content-center align-items-center">
                <a href=${project.repository} target = "_blank">
                  <i class="fas fa-code fa-lg animate__animated animate__pulse"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="description-container d-flex flex-column align-items-center justify-content-center">
            <h1>${project.name}</h1>
            <p>${project.description}
               </p>
            <a href=${project.website} target="_blank">VIEW PROJECT</a>
          </div>
        </div>`;

      projectsContainer.innerHTML = html;
    });
  }
};
