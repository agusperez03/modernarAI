/**
 * i18n.js  Lightweight translation engine
 * Reads locale data from window.MAI_LOCALES (populated by locale scripts).
 * Exposes window.initI18n() and window.setLang(lang) as plain globals.
 */
(function () {
  var DEFAULT_LANG = 'es';
  var currentLang  = DEFAULT_LANG;

  /**
   * Resolve a dotted key path against an object.
   * e.g. get(obj, "hero.headline1") => obj.hero.headline1
   */
  function get(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : null;
    }, obj);
  }

  /**
   * Apply a locale dict to all [data-i18n] elements in the DOM.
   * Also handles [data-i18n-attr] for attribute translations.
   */
  function applyTranslations(dict) {
    /* Text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = get(dict, key);
      if (val !== null) el.textContent = val;
    });

    /* Element attributes (e.g. placeholder, aria-label) */
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var raw = el.getAttribute('data-i18n-attr');
      try {
        var map = JSON.parse(raw); /* { "placeholder": "hero.pill" } */
        Object.keys(map).forEach(function (attr) {
          var val = get(dict, map[attr]);
          if (val !== null) el.setAttribute(attr, val);
        });
      } catch (e) {
        console.warn('[i18n] Bad data-i18n-attr JSON on', el, e);
      }
    });

    /* Page title */
    var titleKey = get(dict, 'page.title');
    if (titleKey) document.title = titleKey;

    /* html[lang] attribute */
    var langCode = get(dict, 'page.lang');
    if (langCode) document.documentElement.setAttribute('lang', langCode);
  }

  /** Update the active state on the language switcher buttons. */
  function updateLangButtons(lang) {
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });
  }

  /**
   * Switch the page language.
   * @param {string} lang  'es' | 'en'
   */
  function setLang(lang) {
    var locales = window.MAI_LOCALES || {};
    if (!locales[lang]) {
      console.warn('[i18n] Locale not found:', lang);
      return;
    }
    currentLang = lang;
    try { localStorage.setItem('mai-lang', lang); } catch (e) {}
    applyTranslations(locales[lang]);
    updateLangButtons(lang);
  }

  /** Initialise i18n: pick language and apply translations. */
  function initI18n() {
    var saved = null;
    try { saved = localStorage.getItem('mai-lang'); } catch (e) {}
    var lang = (saved && window.MAI_LOCALES && window.MAI_LOCALES[saved])
      ? saved
      : DEFAULT_LANG;
    setLang(lang);
  }

  /* Expose as globals */
  window.setLang  = setLang;
  window.initI18n = initI18n;
}());
