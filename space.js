document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    const sections = document.querySelectorAll('.accordion-section');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const sectionId = this.getAttribute('href').substring(1);  // Get the section id
            const section = document.getElementById(sectionId);

            // First, close all sections
            sections.forEach(sec => {
                if (sec !== section) {
                    sec.style.display = 'none';  // Hide all other sections
                }
            });

            // Toggle the clicked section
            if (section.style.display === 'block') {
                section.style.display = 'none';  // If it's already open, close it
            } else {
                section.style.display = 'block';  // Otherwise, open it
            }
        });
    });
});
