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
const popBtnPre =document.querySelector('#popPre')
const popBtnNext =document.querySelector('#popNext')
const popCard =document.querySelector('#popularCard')
const popImage =document.querySelectorAll('#popularImage')

currentIndex=0;

function popNext(){
    if (currentIndex < 4){
        currentIndex = (currentIndex + 1) % popImage.length;
           Update()
    }

}
function popPre(){
    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + popImage.length) % popImage.length;
        Update()

    }

}
function Update() {
    const offset = -currentIndex * 415; // Adjust this value as needed
   popCard.style.transform = `translateX(${offset}px)`;
}
popBtnPre.addEventListener("click", popPre)
popBtnNext.addEventListener("click", popNext)


// Members







