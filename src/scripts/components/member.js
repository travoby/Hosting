// Member Benefit slider
export const member = document.querySelector(".member-layout");
  fetch("../layout/member.html")
  .then((res) => res.text())
  .then((data) => {
    member.innerHTML = data;

    // Members
    const memCardContainer = document.getElementById("memCard");
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
        const offset = -currentIndex * 560; // Adjust this value as needed
        memCardContainer.style.transform = `translateX(${offset}px)`;
    }

    memPreBtn.addEventListener("click",  memPrev)
    memNextBtn.addEventListener("click", memNext)
  })
  .catch((error) => console.error("Error fetching included file:", error));


