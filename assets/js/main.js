/**
 * main.js  Application entry point
 * All dependencies (locales, shader, i18n) are already loaded via <script> tags.
 */
document.addEventListener('DOMContentLoaded', function () {

  /*  WebGL Shader  */
  var canvas = document.getElementById('shaderCanvas');
  if (canvas && typeof window.initShader === 'function') {
    window.initShader(canvas);
  }

  /*  i18n  */
  if (typeof window.initI18n === 'function') {
    window.initI18n();
  }

  /*  Language switcher buttons  */
  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof window.setLang === 'function') {
        window.setLang(btn.dataset.langBtn);
      }
    });
  });

  /*  Smooth-scroll nav links (offset for sticky header)  */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var headerOffset = 112;
      var top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

});
