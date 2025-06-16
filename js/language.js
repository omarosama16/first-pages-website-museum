
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-en], [data-ar], [data-fr]');
    elements.forEach(element => {
        if (element.getAttribute(`data-${lang}`)) {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    }); 
    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
}
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            setLanguage(this.value);
        });
        for (let i = 0; i < languageSelect.options.length; i++) {
            if (languageSelect.options[i].value === currentLanguage) {
                languageSelect.selectedIndex = i;
                break;
            }
        }
    }
    setLanguage(currentLanguage);
});