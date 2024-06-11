

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



// Members
const memCardContainer = document.getElementById("Memcard");
const memImages = document.querySelectorAll("#memImage");
const memPreBtn = document.getElementById("memPreBtn");
const memNextBtn = document.getElementById("memNextBtn");
currentIndex = 0;

function memNext() {
    if (currentIndex < 1) {
        currentIndex = (currentIndex + 1) % memImages.length;
        Slider()
    }

}

function memPrev() {
    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + memImages.length) % memImages.length;
        Slider()
    }
}

function Slider() {
    const offset = -currentIndex * 540; // Adjust this value as needed
    memCardContainer.style.transform = `translateX(${offset}px)`;
}


memPreBtn.addEventListener("click",  memPrev)
memNextBtn.addEventListener("click", memNext)




