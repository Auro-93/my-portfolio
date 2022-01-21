import { skills } from "../assets/data/skill-data.js";

export const generateSkills = () => {
  const skillsContainer = document.querySelector(".skills-container");
  let html = "";

  if (skills.length > 0) {
    skills.map((skill) => {
      html += `<div class="col-12 col-lg-6 col-xl-4">
        <div class="card">
          <div class="card-img d-flex justify-content-center">
          ${skill.icons.map(
            (icon) =>
              `<img src= ${icon.path} width = 40 class="img-thumbnail" alt=${icon.alt}>`
          )}
            
          </div>
          
          <div class="card-body">
            <h5 class="card-title">${skill.name}</h5>
            <p class="card-text">${skill.description}</p>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <a href=${skill.link}>Learn More</a>
          
          </div>
        </div>
      </div>`;

      skillsContainer.innerHTML = html;
    });
  }
};
