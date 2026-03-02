/* =====================================
   FORÇA COLETIVA — JAVASCRIPT
   ===================================== */

/* ===== MENU HAMBÚRGUER ===== */
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
}

/* ===== SCROLL SUAVE + FECHA MENU ===== */
document.querySelectorAll('.header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Scroll suave apenas para âncoras
        if (href.startsWith('#')) {
            e.preventDefault();

            const targetId = href.slice(1);
            const targetSection = document.getElementById(targetId);

            if (!targetSection) return;

            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Fecha menu no mobile
            menu.classList.remove('active');
        }
    });
});

/* ===== HEADER COM EFEITO AO SCROLL ===== */
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

if (header && hero) {
    window.addEventListener('scroll', () => {
        const heroHeight = hero.offsetHeight;

        if (window.scrollY > heroHeight - header.offsetHeight) {
            header.classList.add('scroll-active');
        } else {
            header.classList.remove('scroll-active');
        }
    });
}

/* ===== ANIMAÇÕES FADE-IN ===== */
const faders = document.querySelectorAll('.fade-in');

if (faders.length > 0) {
    const appearOptions = {
        threshold: 0.3
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}