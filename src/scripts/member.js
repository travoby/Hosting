const memberCard = [{
    title: "Member Product ",
   content: "Your Exclusive Access",
    btn : "Shop",
    img : "../images/member1.jpeg",
},
{
    title: "Member Reward ",
   content: "How we say Thank You",
    btn : "Celaborate",
    img : "../images/members.jpeg",
},

{
    title: "Sport and Welness Apps ",
   content: "Movement Where You're At",
    btn : "move",
    img : "../images/member3.jpeg",
},

{
    title: "Nike By You ",
   content: "Your Customization Service",
    btn : " Customize",
    img : "../images/member5.jpeg",
},

{
    title: "SNKRS ",
   content: "Your Ultimate Sneaker Community",
    btn : "Explore",
    img : "../images/member6.jpeg",
},


]

const createCarouselMember = (arr)=>{
    return ` 
    <div class="">
    <div class="flex justify-between mb-4 p-4">
      <h2 class="text-3xl font-medium flex items-center"> Member Benefits</h2>
      <div class="hidden lg:flex gap-2 items-center">
        <button id="back-btn"
          class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-100 hover:bg-[#d8d8d8]">
          <img class="w-4" src="../images/left-chevron.png" alt="" class="w-[30px]"></button>
        <button id="next-btn"
          class="cursor-pointer flex justify-center items-center h-[50px] w-[50px] rounded-full bg-gray-200 hover:bg-[#d8d8d8]">
          <img class="w-4" src="../images/chevron.png" alt="" class="w-[30px]"></button>
      </div>
    </div>
    
    <div id="memCard" class="flex flex-no-wrap gap-2 overflow-x-scroll overflow-hidden items-start mb-8 mx-4">
         <div id="Memcard" class="py-1 duration-300 flex gap-3   max-md:gap-2">
    
    ${arr.map((item)=>{
        return `

      <div class="relative w-full ">
        <div class="max-w-[590px] h-auto max-md:w-[350px] sm:w-[400px]">
            <img src="${item.img}" alt="" class="w-full h-auto   object-cover">
        </div>
        <div class=" absolute bottom-10 left-10 max-w-md mx-auto md:max-w-2xl">
            <div class="  py-5 text-white text-[15px] ">

                <div class="mt-2">
                    <h5 class=" t">${item.title}</h5>
                    <p class="text-xl">${item.content}</p>
                    <button class="bg-white text-black mt-5 px-4 py-1  rounded-full"> ${item.btn} </button>
                </div>

            </div>
        </div>
    </div>
        `
    }).join('')}
    
    </div>
  </div>
  </div>
    `
}
 export class MemberScroll extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
      const title = this.getAttribute('title');
        this.innerHTML = createCarouselMember(memberCard, title);
        this.setupEventListeners();
    }

     setupEventListeners(){
        const backBtn = this.querySelector("#back-btn");
        const nextBtn = this.querySelector("#next-btn");
        const container = this.querySelector("#memCard");
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
customElements.define('member-carousel', MemberScroll);
