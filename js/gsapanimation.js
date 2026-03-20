export function gsapAnimations() {
    const sections = gsap.utils.toArray('.doc-section');
    const navLinks = gsap.utils.toArray('.nav-link');

    // animates hero on load
    gsap.from('#hero-title', {
        duration: 0.6,
        opacity: 0,
        scale: 0.88,
        ease: 'back.out(1.7)'
    });

    gsap.from('#hero-shadow', {
        duration: 0.6,
        opacity: 0,
        x: -10,
        y: -10,
        ease: 'power2.out',
        delay: 0.2
    });

    gsap.from('#main-nav', {
        duration: 0.5,
        opacity: 0,
        y: -16,
        ease: 'power2.out',
        delay: 0.4
    });

    // reveals each section on scroll
    function revealSection(section, index) {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 88%',
                toggleActions: 'play none none none'
            },
            duration: 0.6,
            opacity: 0,
            y: 30,
            ease: 'power2.out',
            delay: index * 0.08
        });
    }

    sections.forEach(revealSection);

    // highlights the active nav link
    function setActiveNav(id) {
        navLinks.forEach(function updateLinkState(link) {
            link.classList.toggle(
                'active',
                link.getAttribute('href') === `#${id}`
            );
        });
    }

    // creates scroll triggers for nav
    sections.forEach(function createNavTrigger(section) {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 40%',
            end: 'bottom 40%',

            onEnter: function onSectionEnter() {
                setActiveNav(section.id);
            },

            onEnterBack: function onSectionEnterBack() {
                setActiveNav(section.id);
            }
        });
    });

}