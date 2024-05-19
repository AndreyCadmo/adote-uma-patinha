document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header')
    const intro = document.getElementById('intro')
    const button = document.getElementById('button')

    const currentMode = localStorage.getItem('darkMode') || 'light-mode';
    document.body.classList.add(currentMode);
    header.classList.add(currentMode);
    intro.classList.add(currentMode);
    console.log(currentMode)

    if (currentMode == "dark-mode") {
        button.checked = true;
    }

});
function darkmode() {
    const header = document.getElementById('header')
    const intro = document.getElementById('intro')

   if (document.body.classList.contains('dark-mode')) {
       document.body.classList.remove('dark-mode');
       document.body.classList.add('light-mode');
       header.classList.add('light-mode');
       header.classList.remove('dark-mode');
       intro.classList.add('light-mode');
       intro.classList.remove('dark-mode');
       localStorage.setItem('darkMode', 'light-mode');
   } else {
       document.body.classList.remove('light-mode');
       document.body.classList.add('dark-mode');
       header.classList.add('dark-mode');
       header.classList.remove('light-mode');
       intro.classList.add('dark-mode');
       intro.classList.remove('light-mode');
       localStorage.setItem('darkMode', 'dark-mode');
   }
};