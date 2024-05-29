const popularRightNow = [{
    title: "Nike Free Metcon 5",
   content: "Women's Workout Shoes",
    price : "$120",
    img : "../images/w-popular1.png",
},
{
    title: "Nike Killshot 2",
   content: "Women's Shoes",
    price : "$90",
    img : "../images/w-popular2.png",
},
{
    title: "Nike Air VaporMax Plus",
   content: "Women's Shoe",
    price : "$115",
    img : "../images/w-popular3.png",
},
{
    title: "Nike V2K Run",
   content: "Women's Shoes",
    price : "$210",
    img : "../images/w-popular4.png",
},
{
    title: "Nike Vaporfly 3",
   content: "Women's",
    price : "$115",
    img : "../images/w-popular5.png",
},
{
    title: "Nike Dunk Low Retro",
   content: "Women's",
    price : "$180",
    img : "../images/w-popular6.png",
},
{
    title: "Nike Zoom Vomero 5",
   content: "Women's Shoe",
    price : "$115",
    img : "../images/w-popular7.png",
},
{
    title: "Nike Air Force 1 '07",
   content: "Women's Road Racing Shoes",
    price : "$250",
    img : "../images/w-popular8.png",
},
]


// Create carousel for popular items right now (shoes)
const createCarouselPopular = (arr)=>{
    return ` 
    <div class="">
    <div class="flex justify-between mb-4 p-4 mt-8">
      <h2 class="text-3xl font-medium flex items-center"> Popular Right Now</h2>
      <div class="hidden lg:flex gap-2 items-center">
        <button id="back-btn"
          class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-100 hover:bg-[#d8d8d8]">
          <img class="w-4" src="../images/left-chevron.png" alt="" class="w-[30px]"></button>
        <button id="next-btn"
          class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-200 hover:bg-[#d8d8d8]">
          <img class="w-4" src="../images/chevron.png" alt="" class="w-[30px]"></button>
      </div>
    </div>
    
    <div id="kidPopCard" class="flex flex-no-wrap gap-2 overflow-x-scroll overflow-hidden items-start mb-8 mx-4">
    
    ${arr.map((item)=>{
        return `
        <div class="flex-none w-1/1 lg:w-1/3 lg:pb-4">
        <a href="#" class="space-y-4">
          <div class=" w-full ">
            <img
              class="object-cover "
              src="${item.img}"
            />
          </div>
          <div class="px-4 py-2">
            
            <div class="text-lg">
              <h3>${item.title}</h3>
              <p class="text-gray-500">${item.content}</p>
              <p>${item.price}</p>
              
            </div>
          </div>
        </a>
      </div>
        `
    }).join('')}
    
    </div>
  </div>
    `
}
// createCarouselArr('Popular Right Now', popularRightNow,"popular-carousel",'shoe');
class PopularWomenScroll extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
      const title = this.getAttribute('title');
        this.innerHTML = createCarouselPopular(popularRightNow, title);
        this.setupEventListeners();
    }
     // Add event listeners for back and next buttons
     setupEventListeners(){
        const backBtn = this.querySelector("#back-btn");
        const nextBtn = this.querySelector("#next-btn");
        const container = this.querySelector("#kidPopCard");
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
customElements.define('popularwomen-carousel', PopularWomenScroll);
