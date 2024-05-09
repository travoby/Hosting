// Classic Soprt slider

const menPre = document.querySelector("#classicPre");
const menNext = document.querySelector("#classicNext");
const menCard = document.querySelector("#classMenCard");
const menImage = document.querySelectorAll("#classMenImage");

currentIndex = 0;

function classNextImage(){
    
    if (currentIndex < 2){
        currentIndex = (currentIndex + 1) % menImage.length;
           imageUpdate()
    }
}
function classPreImage() {
    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + menImage.length) % menImage.length;
        imageUpdate()
        // 0 = (0 - 1 + 5) % 5 = 4
    }
}

function imageUpdate() {
    const offset = -currentIndex * 285; // Adjust this value as needed
    menCard.style.transform = `translateX(${offset}px)`;
}
menPre.addEventListener("click", classPreImage)
menNext.addEventListener("click", classNextImage)


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




