document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');

    if (bar && nav && close) {
        bar.addEventListener('click', () => {
            if (parseInt(getComputedStyle(nav).right) === 0) {
                nav.style.right = '-300px';
            } else {
                nav.style.right = '0';
            }
        });

        close.addEventListener('click', () => {
            nav.style.right = '-300px';
        });

        
        const navLinks = document.querySelectorAll('#navbar a');

        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});
