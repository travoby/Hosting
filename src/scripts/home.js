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
        
    }
}

function updateSlider() {
    const offset = -currentIndex * 517; // Adjust this value as needed
    cardContainer.style.transform = `translateX(${offset}px)`;
}

prevBTN.addEventListener("click", prevImage)
nextBTN.addEventListener("click", nextImage)

