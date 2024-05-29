const shopWomenCard = [{
  title: "Clothing ",
  img : "../images/women-2.jpeg",
},
{
  title: "Shoe",
  img : "../images/women-3.jpeg",
},

{
  title: "Accessories",

  img : "../images/women-4.jpeg",
},

{
  title: "Bras & Leggings ",
  img : "../images/women-5.jpeg",
},


]

// Create carousel 
const createCarouselShopWomen = (arr)=>{
  return ` 
  <div class="mt-8">
  <div class="flex justify-between mb-4 p-4">
    <h2 class="text-3xl flex items-center"> Shop The Essentails </h2>
    <div class="hidden lg:flex gap-2 items-center">
      <button id="back-btn"
        class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-100 hover:bg-[#d8d8d8]">
        <img class="w-4" src="../images/left-chevron.png" alt="" class="w-[30px]"></button>
      <button id="next-btn"
        class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-200 hover:bg-[#d8d8d8]">
        <img class="w-4" src="../images/chevron.png" alt="" class="w-[30px]"></button>
    </div>
  </div>
  
  <div id="scrollWomen" class="w-full max-w-[1536px] mx-auto px-4 overflow-x-hidden mt-8 ">
       <div  class="w-full duration-200 gap-3 flex justify-between items-center">
  
  ${arr.map((item)=>{
      return `
      <div  class="w-full">
          <div class="w-[400px] h-[400px]">
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
// createCarouselArr('Popular Right Now', popularRightNow,"popular-carousel",'shoe');
 class ShopWomenScroll extends HTMLElement{
  constructor(){
      super()
  }
  connectedCallback(){
    const title = this.getAttribute('title');
      this.innerHTML = createCarouselShopWomen(shopWomenCard, title);
      this.setupEventListeners();
  }
   // Add event listeners for back and next buttons
   setupEventListeners(){
      const backBtn = this.querySelector("#back-btn");
      const nextBtn = this.querySelector("#next-btn");
      const container = this.querySelector("#scrollWomen");
      this.addBackEventListener(container, backBtn);
      this.addNextEventListener(container, nextBtn);
    }

    // Event listener for next button
    addNextEventListener(element, btn) {
      btn.addEventListener("click", function () {
        element.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      });
    }

    // Event listener for back button
    addBackEventListener(element, btn) {
      btn.addEventListener("click", function () {
        element.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      });
    }
}
customElements.define('shopwomen-carousel', ShopWomenScroll);
