
// Populartion  Section

const popularCard = document.getElementById('popularCard');
const popPre = document.getElementById('popPre');
const popNext = document.getElementById('popNext');

let scrollWidth = popularCard.scrollWidth;
let clientWidth = popularCard.clientWidth;
let scrollLeft = popularCard.scrollLeft;

popPre.addEventListener('click', () => {
    scrollLeft -= clientWidth;
    if (scrollLeft < 0) {
        scrollLeft = 0;
    }
    popularCard.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
});

popNext.addEventListener('click', () => {
    scrollLeft += clientWidth;
    if (scrollLeft > scrollWidth - clientWidth) {
        scrollLeft = scrollWidth - clientWidth;
    }
    popularCard.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
});






