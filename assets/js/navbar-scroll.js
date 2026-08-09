(() => {
  const initialiseNavbar = () => {
    const navbar = document.querySelector('.menu .navbar-fixed-top');

    if (!navbar) {
      return;
    }

    document.querySelectorAll('.menu .icons-menu').forEach((iconsMenu) => {
      iconsMenu.remove();
    });

    navbar.querySelectorAll('a').forEach((link) => {
      if (link.textContent.trim() === 'Contact') {
        link.textContent = 'Contact Us';
      }
    });

    let previousScrollPosition = window.scrollY;
    let animationFramePending = false;

    const updateNavbar = () => {
      const currentScrollPosition = window.scrollY;
      const menuIsOpen = navbar.classList.contains('opened')
        || navbar.querySelector('.navbar-collapse.show') !== null;

      if (currentScrollPosition <= 8 || currentScrollPosition < previousScrollPosition || menuIsOpen) {
        navbar.classList.remove('navbar-scroll-hidden');
      } else if (currentScrollPosition > 96) {
        navbar.classList.add('navbar-scroll-hidden');
      }

      previousScrollPosition = currentScrollPosition;
      animationFramePending = false;
    };

    window.addEventListener('scroll', () => {
      if (!animationFramePending) {
        animationFramePending = true;
        window.requestAnimationFrame(updateNavbar);
      }
    }, { passive: true });

    window.addEventListener('resize', updateNavbar);
    updateNavbar();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiseNavbar, { once: true });
  } else {
    initialiseNavbar();
  }
})();
