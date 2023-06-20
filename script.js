// Add JavaScript functionality here

// Example: Display current date and time in the footer
const footer = document.querySelector('footer');
const currentDate = new Date();
footer.innerHTML = `&copy; ${currentDate.getFullYear()} My Personal Website. All rights reserved.`;

// Example: Implement smooth scrolling for anchor links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
