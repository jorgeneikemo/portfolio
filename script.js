document.addEventListener("DOMContentLoaded", function () {
    const projectsSection = document.getElementById("projects");
    const linkToProjects = document.querySelector("a[href='#projects']");

    linkToProjects.addEventListener("click", function (event) {
      event.preventDefault();
      projectsSection.scrollIntoView({ behavior: "smooth" });
    });
  });