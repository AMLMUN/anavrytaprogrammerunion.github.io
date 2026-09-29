(() => {
  const initialiseAnalytics = () => {
    const analyticsId = 'G-5WFN1C7BT9';
    const consentKey = 'amlmun-analytics-consent';
    const liveHosts = ['amlmun.gr', 'www.amlmun.gr'];

    if (!liveHosts.includes(window.location.hostname)) {
      return;
    }

    const enableAnalytics = () => {
      if (window.__amlmunAnalyticsLoaded) {
        return;
      }

      window.__amlmunAnalyticsLoaded = true;
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', analyticsId);

      const analyticsScript = document.createElement('script');
      analyticsScript.async = true;
      analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
      document.head.appendChild(analyticsScript);
    };

    const consent = window.localStorage.getItem(consentKey);
    if (consent === 'accepted') {
      enableAnalytics();
      return;
    }

    if (consent === 'declined') {
      return;
    }

    const notice = document.createElement('aside');
    notice.className = 'amlmun-analytics-notice';
    notice.setAttribute('role', 'region');
    notice.setAttribute('aria-label', 'Analytics privacy notice');
    notice.innerHTML = `
      <p>We use Google Analytics to understand how visitors use this website.</p>
      <div>
        <button type="button" data-analytics-decline>Not now</button>
        <button type="button" data-analytics-accept>Accept analytics</button>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .amlmun-analytics-notice { position: fixed; right: 1rem; bottom: 1rem; z-index: 6000; display: flex; max-width: 31rem; align-items: center; gap: 1.25rem; padding: 1rem 1.1rem 1rem 1.25rem; border: 1px solid rgba(36, 33, 32, .13); border-radius: 1rem; background: #fff; box-shadow: 0 1.2rem 3.2rem rgba(36, 33, 32, .18); color: #242120; font: 500 .88rem/1.45 Arial, sans-serif; }
      .amlmun-analytics-notice p { margin: 0; }
      .amlmun-analytics-notice div { display: flex; flex: 0 0 auto; gap: .55rem; }
      .amlmun-analytics-notice button { min-height: 2.35rem; padding: .45rem .8rem; border: 1px solid #b1161d; border-radius: 999px; background: transparent; color: #8f1016; font: 700 .78rem/1 Arial, sans-serif; cursor: pointer; }
      .amlmun-analytics-notice button[data-analytics-accept] { background: #b1161d; color: #fff; }
      .amlmun-analytics-notice button:focus-visible { outline: 3px solid rgba(177, 22, 29, .3); outline-offset: 2px; }
      @media (max-width: 575px) { .amlmun-analytics-notice { right: .75rem; bottom: .75rem; left: .75rem; display: grid; gap: .85rem; } .amlmun-analytics-notice div { justify-content: stretch; } .amlmun-analytics-notice button { flex: 1; } }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notice);

    notice.querySelector('[data-analytics-accept]').addEventListener('click', () => {
      window.localStorage.setItem(consentKey, 'accepted');
      enableAnalytics();
      notice.remove();
    });

    notice.querySelector('[data-analytics-decline]').addEventListener('click', () => {
      window.localStorage.setItem(consentKey, 'declined');
      notice.remove();
    });
  };

  initialiseAnalytics();

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
