document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    setTimeout(() => {
        if (splash) {
            splash.classList.add('hidden');
            if (window.innerWidth <= 768) {
                document.body.style.transform = 'scale(0.9)';
            }
            setTimeout(() => {
                splash.remove();
            }, 600);
        }
    }, 3000);
});
