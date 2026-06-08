// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');
        navMenu.classList.toggle('flex-col');
        navMenu.classList.toggle('absolute');
        navMenu.classList.toggle('top-full');
        navMenu.classList.toggle('left-0');
        navMenu.classList.toggle('w-full');
        navMenu.classList.toggle('bg-slate-950');
        navMenu.classList.toggle('px-6');
        navMenu.classList.toggle('py-4');
        navMenu.classList.toggle('gap-4');
        navMenu.classList.toggle('border-b');
        navMenu.classList.toggle('border-yellow-600');
        menuBtn.textContent = navMenu.classList.contains('hidden') ? '☰' : '✕';
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.add('hidden');
            navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-slate-950', 'px-6', 'py-4', 'gap-4', 'border-b', 'border-yellow-600');
            menuBtn.textContent = '☰';
        });
    });
}

// Highlight active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#navMenu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('text-yellow-500', 'border-b', 'border-yellow-500', 'pb-0.5');
    }
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));