
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    document.body.classList.add('dark-mode'); 
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    document.body.classList.remove('dark-mode'); 
    localStorage.setItem('darkmode', null);
}


document.addEventListener('DOMContentLoaded', function() {
    if(darkmode === "active") {
        enableDarkmode();
    }
    
    
    if (themeSwitch) {
        themeSwitch.addEventListener("click", () => {
            darkmode = localStorage.getItem('darkmode');
            darkmode !== "active" ? enableDarkmode() : disableDarkmode();
        });
    }
});