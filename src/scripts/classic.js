 const createCarouselClassic = (arr)=>{
    return `
    <h2 class="p-4 text-3xl font-medium flex items-center relative z-0 mt-5">
    Classic Spotlight
  </h2>
    <div id="default-carousel mt-4 " data-carousel="slide" class="w-full px-4 relative">

    <div id="container"  class="relative w-full flex flex-nowrap gap-4 flex-none overflow-x-auto no-scrollbar">
        ${arr.map((item)=>{
            return `
            <div class="flex-none z-0">
                <img class=" w-[360px]" src="${item.img}" alt="">
            </div>
            `
        }).join('')}

    </div>
    <!-- Slider controls -->
    <button id="back-btn" type="button" class="absolute z-10  top-0 start-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 z-[-1]  rounded-full bg-white">
            <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
        </span>
    </button>
    <button id="next-btn" type="button" class="absolute z-10 top-0 end-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center z-[-1] w-10 h-10 rounded-full bg-white">
            <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
        </span>
    </button>
</div>`
}

const classCardArr = [{
    img: "../images/women-12.jpeg",
},
{
    img: "../images/women-9.jpeg",
},
{
    img: "../images/women-10.jpeg",
},
{
    img: "../images/women-8.jpeg",
},
{
    img: "../images/women-11.jpeg",
},
{
    img: "../images/women-12.jpeg",
},

]
export  class CarouselClassic extends HTMLElement {
        constructor(){
            super()
        }
        connectedCallback(){
            this.innerHTML = createCarouselClassic(classCardArr);
            this.setupEventListeners();
        }

            setupEventListeners(){
                const backBtn = this.querySelector("#back-btn");
                const nextBtn = this.querySelector("#next-btn");
                const container = this.querySelector("#container");
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
    
    customElements.define("classic-carousel", CarouselClassic)

