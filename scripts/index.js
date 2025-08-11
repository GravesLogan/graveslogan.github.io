const projects = document.querySelectorAll('.projects li');
projects.forEach(project => {
    project.addEventListener('click', () => {
        const details = project.querySelector('section');
        if (details) {
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        }
    });
})