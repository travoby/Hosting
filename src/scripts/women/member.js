
const memberPre = document.querySelector("#memPopPre");
const memberNext = document.querySelector("#memPopNext");
const scrollpop = document.querySelector("#memPopCard")

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

memberPre.addEventListener("click",scrollPopBack)
memberNext.addEventListener("click", scrollPopNext)
