const lenis = new Lenis({
  autoRaf: true,
});

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
    class="bottomToTop fadeIn w-10 cursor-pointer z-40 bg-[#f5e474] h-10 fixed bottom-5 right-5 hover:opacity-80 transition-all duration-500 hidden text-zinc-700 flex items-center justify-center rounded-lg "><i class="fa-solid fa-angle-up"></i>
</div>`

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.querySelector(".bottomToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

AOS.init({
  once: true,
  duration: 1000
});

(function () {
  const STORAGE_KEY = 'cookie-consent:v1';

  const $banner = document.getElementById('cookie-banner');
  const $prefs = document.getElementById('cookie-prefs');
  const $btnAcceptAll = document.querySelector('[data-accept-all]');
  const $btnReject = document.querySelector('[data-reject]');
  const $btnManage = document.querySelector('[data-manage-preferences]');
  const $btnSave = $prefs.querySelector('[data-save]');
  const $btnCloses = $prefs.querySelectorAll('[data-close]');
  const $toggleAnalytics = document.getElementById('toggle-analytics');
  const $toggleMarketing = document.getElementById('toggle-marketing');

  const getConsent = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); }
    catch { return null; }
  };
  const setConsent = (consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...consent,
      updatedAt: new Date().toISOString()
    }));
  };

  const hideBanner = () => $banner.classList.add('hidden');
  const showBanner = () => $banner.classList.remove('hidden');
  const openPrefs = () => {
    // seed toggles from existing or defaults
    const existing = getConsent() || { analytics: false, marketing: false };
    $toggleAnalytics.checked = !!existing.analytics;
    $toggleMarketing.checked = !!existing.marketing;

    $prefs.classList.remove('hidden');
    // focus the first focusable element for accessibility
    $prefs.querySelector('[data-save]').focus();
    document.body.classList.add('overflow-y-hidden');
  };
  const closePrefs = () => {
    $prefs.classList.add('hidden');
    document.body.classList.remove('overflow-y-hidden');
    // return focus to Manage button
    $btnManage && $btnManage.focus();
  };

  // Initialize
  const initial = getConsent();
  if (initial) hideBanner(); else showBanner();

  // Handlers
  $btnAcceptAll?.addEventListener('click', () => {
    setConsent({ necessary: true, analytics: true, marketing: true });
    hideBanner();
  });

  $btnReject?.addEventListener('click', () => {
    setConsent({ necessary: true, analytics: false, marketing: false });
    hideBanner();
  });

  $btnManage?.addEventListener('click', openPrefs);
  $btnCloses.forEach(btn => btn.addEventListener('click', closePrefs));

  $btnSave?.addEventListener('click', () => {
    setConsent({
      necessary: true,
      analytics: !!$toggleAnalytics.checked,
      marketing: !!$toggleMarketing.checked
    });
    closePrefs();
    hideBanner();
  });

  // ESC to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$prefs.classList.contains('hidden')) {
      closePrefs();
    }
  });

  // (Optional) Helper for your scripts: gate loading of tools by consent
  window.__cookieConsent = {
    get: getConsent,
    onReady: (cb) => cb(getConsent())
  };
})();
