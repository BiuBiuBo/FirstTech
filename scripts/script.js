const excludedLocalePaths = ['faqs', '2324'];

var userLang = localStorage.getItem('lang') || navigator.language || navigator.userLanguage;

function isExceptedPath() {
  return excludedLocalePaths.some(path => window.location.href.includes(path));
}

  function switchWebLanguege() {
    console.log('Current language: ' + userLang);
    // if (userLang === 'en') {
    //   localStorage.setItem('lang', 'vi');
    // } else {
    //   localStorage.setItem('lang', 'en');
    // }
    console.log('Language changed to ' + localStorage.getItem('lang'));
    window.location.href = '/'
  }

document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".navbar").style.backgroundColor = "#000000";
    } else {
      document.querySelector(".navbar").style.backgroundColor = "transparent";
    }
  }

  // if (localStorage.getItem('lang') === null) {
  //   localStorage.setItem('lang', navigator.language || navigator.userLanguage);
  // }

  if (localStorage.getItem('lang') !== 'en') {
    localStorage.setItem('lang', 'en');
  }

  document.getElementById('language-selector').onclick = switchWebLanguege;

  if (userLang !== 'vi' && !window.location.href.includes('en') && !isExceptedPath()) {
    console.log('Redirecting to English version');
    window.location.href = 'en';
  }
});