// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills toggle functionality
function showSkills(category) {
    // Hide all skill sections
    document.querySelectorAll('.skills-grid').forEach(grid => {
        grid.classList.add('hidden');
    });
    
    // Show selected skill section
    document.getElementById(category).classList.remove('hidden');
    
    // Update button states
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activate clicked button
    const clickedBtn = document.querySelector(`[onclick*="${category}"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});
