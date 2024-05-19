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

function selectCard(divCard) {
    const currentCard = document.querySelector('.card-select'); //.classList.remove('card-select');

    if (!!currentCard)
        currentCard.classList.remove('card-select');

    divCard.classList.add('card-select');
}

function openCard(divCard, category) {
    const currentCard = document.querySelector('.card-open'); //.classList.remove('card-open');

    if (!!currentCard) {
        currentCard.classList.remove('card-open');
        document.querySelector('.is-show')?.classList.remove('is-show');
    }


    setTimeout(() => {
        if (category === 'dog') {
            showDog(divCard.cloneNode(true));
        } else if (category === 'cat') {
            showCat(divCard.cloneNode(true));
        }
        
        divCard.classList.add('card-open');
    }, 100)
}

function showDog(divCard) {
    const showDog = document.getElementById('show-dog');

    if (!!showDog.children && showDog.children.length > 0) {
        const currentCard = showDog.children[0];
        if (currentCard?.children[0]?.src === divCard?.children[0]?.src) {
            document.querySelector('.card-open')?.classList.remove('card-open');
            document.getElementById('container-dog').classList.remove('is-show');
            showDog.removeChild(currentCard);
            return;
        }
        showDog.removeChild(currentCard);
    }
    showDog.appendChild(divCard);

    document.getElementById('container-dog').classList.add('is-show')

}

function showCat(divCard) {
    const showCat = document.getElementById('show-cat');

    if (!!showCat.children && showCat.children.length > 0) {
        const currentCard = showCat.children[0];
        if (currentCard?.children[0]?.src === divCard?.children[0]?.src) {
            document.querySelector('.card-open')?.classList.remove('card-open');
            document.getElementById('container-cat').classList.remove('is-show');
            showCat.removeChild(currentCard);
            return;
        }
        showCat.removeChild(currentCard);
    }
    showCat.appendChild(divCard);

    document.getElementById('container-cat').classList.add('is-show')

}