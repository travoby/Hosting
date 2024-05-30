const trendingCard = [{
    title: "Rep Your Team In March And Beyond ",
    img : "../images/nike-just-do-it2.jpg",
},
{
    title: "Air Max Dn",
    img : "../images/air max .webp",
},

{
    title: "Fast Forward. Rewind. ",

    img : "../images/nike-just-do(1).jpeg",
},

{
    title: "Nike Motiva: For All Walks ",
    img : "../images/nike-just-do-it(4).jpg",
},

{
    title: "Expression in Motion",
    img : "../images/nike-just-do-it7.png",
},

]

// Create carousel 
  const createCarouselTrending = (arr)=>{
    return ` 
    <div class="mt-8">
    <div class="flex justify-between mb-4 p-4">
      <h2 class="text-3xl font-medium flex items-center"> Trending </h2>
      <div class="hidden lg:flex gap-2 items-center">
        <button id="back-btn"
          class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-100 hover:bg-[#d8d8d8]">
          <img class="w-4" src="../images/left-chevron.png" alt="" class="w-[30px]"></button>
        <button id="next-btn"
          class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-200 hover:bg-[#d8d8d8]">
          <img class="w-4" src="../images/chevron.png" alt="" class="w-[30px]"></button>
      </div>
    </div>
    
    <div id="card-container" class="w-full max-w-[1536px] mx-auto px-4 overflow-x-hidden mt-8 ">
         <div  class="w-full duration-200 gap-3 flex justify-between items-center">
    
    ${arr.map((item)=>{
        return `
        <div  class="w-full">
            <div class="w-[500px] h-[500px]">
                <img src="${item.img}" alt="" class="w-full h-full object-cover">
            </div>
            <p class="mt-4 text-[18px]">${item.title}</p>
        </div>
        `
    }).join('')}
    
    </div>
  </div>
  </div>
    `
}

export  class TrendingScroll extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
      const title = this.getAttribute('title');
        this.innerHTML = createCarouselTrending(trendingCard, title);
        this.setupEventListeners();
    }

     setupEventListeners(){
        const backBtn = this.querySelector("#back-btn");
        const nextBtn = this.querySelector("#next-btn");
        const container = this.querySelector("#card-container");
        this.addBackEventListener(container, backBtn);
        this.addNextEventListener(container, nextBtn);
      }
  
    
      addNextEventListener(element, btn) {
        btn.addEventListener("click", function () {
          element.scrollBy({
            left: 300,
            behavior: "smooth",
          });
        });
      }
  
    
      addBackEventListener(element, btn) {
        btn.addEventListener("click", function () {
          element.scrollBy({
            left: -300,
            behavior: "smooth",
          });
        });
      }
}
customElements.define('trending-carousel', TrendingScroll);
