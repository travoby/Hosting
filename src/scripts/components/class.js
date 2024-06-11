

    const createClassic = (arr)=>{
        return `
        <h2 class="p-4 text-3xl font-medium flex items-center relative z-0 mt-5">
        Classic Spotlight
      </h2>
        <div id="default-carousel mt-4 " data-carousel="slide" class="w-full px-4 relative">
    
        <div id="cardScroll"  class="relative w-full flex flex-nowrap gap-4 flex-none overflow-x-auto no-scrollbar">
            ${arr.map((item)=>{
                return `
                <div class="flex-none z-0">
                    <img class=" w-[360px]" src="${item.img}" alt="">
                </div>
                `
            }).join('')}
    
        </div>
        <button id="previous" class="absolute z-40 left-8 rounded-full bg-gray-200 p-2 top-[40%] flex items-center justify-center h-50% focus:outline-none">
                <img src="../images/left-chevron.png" alt="" class="w-[30px]" />
            </button>
        <button id="next" class="absolute z-40 right-8 rounded-full bg-gray-200 p-2 top-[40%] flex items-center justify-center h-50% focus:outline-none" >
                <img src="../images/chevron.png" alt="" class="w-[30px]" />
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
    export  class Classic extends HTMLElement {
            constructor(){
                super()
            }
            connectedCallback(){
                this.innerHTML = createClassic(classCardArr);
                this.setupEventListeners();
            }
    
                setupEventListeners(){
                    const backBtn = this.querySelector("#previous");
                    const nextBtn = this.querySelector("#next");
                    const cardScroll = this.querySelector("#cardScroll");
                    this.addBackEventListener(cardScroll, backBtn);
                    this.addNextEventListener(cardScroll, nextBtn);
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
        
        customElements.define("classic-slider", Classic)
    
    