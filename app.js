const reliable = document.querySelector('.reliable');
const heading = document.querySelector('.heading');
const headingTwos = document.querySelectorAll('h2');
const body = document.querySelector('body');
const cards = document.querySelectorAll('.cards');

const lightTheme = document.querySelector('.light');
const darkTheme = document.querySelector('.dark');

darkTheme.addEventListener('click', () => 
{
    body.classList.add('dark-bg');
    reliable.classList.add('text-color');
    heading.classList.add('text-color');
    for(let headingTwo of headingTwos)
    {
        headingTwo.classList.add('text-color');
    }
    for(let card of cards)
    {
        card.classList.add('dark-cards');
    }
    lightTheme.style.color = 'white';
    darkTheme.style.color = 'white';
});

lightTheme.addEventListener('click', () => 
{
    body.classList.remove('dark-bg');
    reliable.classList.remove('text-color');
    heading.classList.remove('text-color');
    for(let headingTwo of headingTwos)
    {
        headingTwo.classList.remove('text-color');
    }
    for(let card of cards)
    {
        card.classList.remove('dark-cards');
    }
    lightTheme.style.color = 'black';
    darkTheme.style.color = 'black';
});