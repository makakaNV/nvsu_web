document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const sectionId = this.getAttribute('data-section');
            
            const sections = document.querySelectorAll('section');
            sections.forEach(section => section.classList.remove('active'));
            
            const activeSection = document.getElementById(sectionId);
            activeSection.classList.add('active');
        });
    });

    document.getElementById('info').classList.add('active');
});
