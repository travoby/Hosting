// Popular slider
export const popular = document.querySelector(".popular-layout");
  fetch("../layout/popular.html")
  .then((res) => res.text())
  .then((data) => {
   popular.innerHTML = data;

    const popularPre = document.querySelector("#popularPre");
    const popularNext = document.querySelector("#popularNext");
    const scrollpop = document.querySelector("#pop-Card")
    
    function scrollPopNext(){
        scrollpop.scrollBy({
            left: 100,
            behavior: "smooth",
          });
    }
    function scrollPopBack(){
        scrollpop.scrollBy({
            left: -100,
            behavior: "smooth",
          });
    }
    
    popularPre.addEventListener("click",scrollPopBack)
    popularNext.addEventListener("click",scrollPopNext)
   
  })
  .catch((error) => console.error("Error fetching included file:", error));

