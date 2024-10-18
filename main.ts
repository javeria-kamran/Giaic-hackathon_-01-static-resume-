const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection) {
        // Check if the section is currently visible or hidden, then toggle
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    } else {
        console.error('Skills section not found');
    }
});
