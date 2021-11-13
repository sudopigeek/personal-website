import { ProjectCard } from "./ProjectCard.js";

const getProjects = () => {
    return fetch("https://data.ferrelltechnology.com/self/projects")
    .then(res => res.json())
}

getProjects().then(projects => {
    const container = document.getElementById("Container");
    Array.from(projects.projects).forEach(project => {
        container.innerHTML += ProjectCard(project);
    })
})