

const popularPre = document.querySelector("#popularPre");
const popularNext = document.querySelector("#popularNext");
const scrollpop = document.querySelector("#pop-Card")

function scrollPopNext(){
    scrollpop.scrollBy({
        left: 300,
        behavior: "smooth",
      });
}
function scrollPopBack(){
    scrollpop.scrollBy({
        left: -300,
        behavior: "smooth",
      });
}

popularPre.addEventListener("click",scrollPopBack)
popularNext.addEventListener("click", scrollPopNext)

