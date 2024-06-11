// Section Popular in kids
const kidPopPre = document.querySelector("#kidPopPre");
const kidPopNext = document.querySelector("#kidPopNext");
const scrollKidPop = document.querySelector("#kidPopCard")

function scrollKidPopNext(){
    scrollKidPop.scrollBy({
        left: 300,
        behavior: "smooth",
      });
}
function scrollKidPopBack(){
    scrollKidPop.scrollBy({
        left: -300,
        behavior: "smooth",
      });
}

kidPopPre.addEventListener("click",scrollKidPopBack)
kidPopNext.addEventListener("click", scrollKidPopNext)









