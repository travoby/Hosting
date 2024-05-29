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