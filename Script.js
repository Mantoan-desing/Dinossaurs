document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            alert('Mais informações sobre ' + section.querySelector('h2').innerText);
        });
    });
});