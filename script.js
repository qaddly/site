document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    setTimeout(() => {
        if (splash) {
            splash.classList.add('hidden');
            setTimeout(() => {
                splash.remove();
            }, 600);
        }
    }, 3000);
});
