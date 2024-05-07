// Trending Section
const prevBTN = document.querySelector("#prev-btn");
const nextBTN = document.querySelector("#next-btn");
const cardContainer = document.querySelector("#card-container");
const cardImage = document.querySelectorAll("#card-image");


currentIndex = 0;

function nextImage() {
    if (currentIndex < 2) {
        currentIndex = (currentIndex + 1) % cardImage.length;
        updateSlider()
    }

}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + cardImage.length) % cardImage.length;
        updateSlider()
        // 0 = (0 - 1 + 5) % 5 = 4
    }
}


function updateSlider() {
    const offset = -currentIndex * 517; // Adjust this value as needed
    cardContainer.style.transform = `translateX(${offset}px)`;
}


prevBTN.addEventListener("click", prevImage)
nextBTN.addEventListener("click", nextImage)

// Classic Soprt slider

const pBtn = document.querySelector("#pBtn");
const nBtn = document.querySelector("#nBtn");
const classCard = document.querySelector("#classCard");
const classImage = document.querySelectorAll("#classImage");


currentIndex = 0;

function classNext(){
    if (currentIndex < 2){
        currentIndex = (currentIndex + 1) % classImage.length;
           classupdateSlider()
    }
}
function classPrev() {
    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + classImage.length) % classImage.length;
        classupdateSlider()
        // 0 = (0 - 1 + 5) % 5 = 4
    }
}

function classupdateSlider() {
    const offset = -currentIndex * 285; // Adjust this value as needed
    classCard.style.transform = `translateX(${offset}px)`;
}
pBtn.addEventListener("click", classPrev)
nBtn.addEventListener("click", classNext)
