const shopPre = document.querySelector("#shopPre");
const shopNext = document.querySelector("#shopNext");
const scrollWomen = document.querySelector("#scrollWomen")

function scrollNext(){
    scrollWomen.scrollBy({
        left: 300,
        behavior: "smooth",
      });
}
function scrollBack(){
    scrollWomen.scrollBy({
        left: -300,
        behavior: "smooth",
      });
}

shopPre.addEventListener("click",scrollBack)
shopNext.addEventListener("click", scrollNext)


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


const memPopPre = document.querySelector("#memPopPre");
const memPopNext = document.querySelector("#memPopNext");
const scrollMemPop = document.querySelector("#memPopCard")

function scrollMemPopNext(){
    scrollMemPop.scrollBy({
        left: 300,
        behavior: "smooth",
      });
}
function scrollMemPopBack(){
    scrollMemPop.scrollBy({
        left: -300,
        behavior: "smooth",
      });
}

memPopPre.addEventListener("click",scrollMemPopBack)
memPopNext.addEventListener("click", scrollMemPopNext)

