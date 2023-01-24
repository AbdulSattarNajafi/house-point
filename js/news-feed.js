
// Widget show more & show less
const showMoreBtn = document.querySelector('.show-more');
const showLessBtn = document.querySelector('.show-less');

showMoreBtn.addEventListener('click', (e) => {
    const parentEl = e.currentTarget.parentElement.parentElement;
    showMoreBtn.classList.add('hide')
    parentEl.classList.remove('pins-show-less');
});

showLessBtn.addEventListener('click', (e) => {
    const parentEl = e.currentTarget.parentElement.parentElement;
    showMoreBtn.classList.remove('hide')
    parentEl.classList.add('pins-show-less');
});
