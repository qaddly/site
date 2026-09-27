document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    setTimeout(() => {
        if (splash) {
            splash.classList.add('hidden');
            setTimeout(() => {
                splash.remove();
                if (window.innerWidth <= 768) {
                    document.body.style.transform = 'scale(0.9)';
                    document.body.style.transformOrigin = 'top left';
                    document.body.style.width = '111.11vw';
                    document.body.style.height = '111.11vh';
                    document.body.style.overflow = 'auto';
                }
            }, 600);
        }
    }, 3000);
});
