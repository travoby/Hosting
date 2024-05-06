// get element with id
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


// // trending slider
// const prevBTN = document.querySelector("#prev-btn");
// const nextBTN = document.querySelector("#next-btn");
// const sliderContainer = document.querySelector("#slider");
// const cardSlider = document.querySelectorAll("#card-slider");

// let currentIndex = 0;

// function nextSlide() {
//   if (currentIndex < 2) {
//     currentIndex = (currentIndex + 1) % cardSlider.length;
//     updateSlider();
//   }
// }

// function prevSlide() {
//   if (currentIndex > 0) {
//     currentIndex =
//       (currentIndex - 1 + cardSlider.length) % cardSlider.length;
//     updateSlider();
//   }
// }

// function updateSlider() {
//   const offset = -currentIndex * 538; // Adjust this value as needed
//   sliderImg.style.transform = translateX(${offset}px);
// }
// prevBTN.addEventListener("click", prevSlide);
// nextBTN.addEventListener("click", nextSlide);