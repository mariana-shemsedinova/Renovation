function changeLanguage(language) {
  window.location.href = `${language}.html`;
  //localStorage.setItem('language', language);
  //location.reload();
}

document.addEventListener('DOMContentLoaded', (event) => {
  //const language = localStorage.getItem('language');
  //if (language) {
  //window.location.href = `${language}.html`;
  //}
});
