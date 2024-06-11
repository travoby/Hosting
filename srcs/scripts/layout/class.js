// Classic Soprt slider
const classic = document.querySelector(".classic-layout");
  fetch("../layout/classic.html")
  .then((res) => res.text())
  .then((data) => {
    classic.innerHTML = data;

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
            
        }
    }

    function classupdateSlider() {
        const offset = -currentIndex * 285; // Adjust this value as needed
        classCard.style.transform = `translateX(${offset}px)`;
    }
    pBtn.addEventListener("click", classPrev)
    nBtn.addEventListener("click", classNext)
  })
  .catch((error) => console.error("Error fetching included file:", error));


