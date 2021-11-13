export const ProjectCard = obj => {
    return `
    <div class="col-4 col-12-medium">
        <span class="image fit"><img src="${obj.imageFile}" alt="" /></span>
        <h3>${obj.name}</h3>
        <p>
            ${obj.description}
        </p>
        <ul class="actions special">
            <li><a href="${obj.repositoryUrl}" target="_blank" class="button">GitHub</a></li>
        </ul>
    </div>
    `
}