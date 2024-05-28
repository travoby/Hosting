{/* <section>
<div class="mx-auto max-w-[1536px] px-4 mt-8">
    <h1 class="text-3xl  px-4">More To Explore</h1>
</div>
<div class="mx-auto max-w-[1536px] mt-8 px-4 ">
    <div class=" columns-2 max-md:flex flex-col ">
        <div class="relative w-full">
            <img class="w-full" src="../images//menmore.jpeg" alt="">
            <div class=" absolute bottom-10 left-10 max-w-md mx-auto md:max-w-2xl">
                <div class="   py-5 mt-2 md:text-[20px] ">
                   
                        <h5 class="text-black text-3xl">Features Footerwear: Dunks</h5>
                        
                        <button class="bg-black text-white mt-5 px-4 py-3  rounded-full"> Shop </button>
                    

                </div>
            </div>
        </div>

        <div class="relative w-full">
            <img class="w-full mt-4" src="../images/menmore3.jpeg" alt="">
            <div class=" absolute bottom-10 left-10 max-w-md mx-auto md:max-w-2xl">
                <div class="  py-5 mt-2 md:text-[20px]">
                        <h5 class="text-white text-3xl">Versatile Workout Styles</h5>
                        
                        <button class="bg-white text-black text-base mt-5 px-4 py-3  rounded-full"> Shop </button>
                    

                </div>
            </div>
        </div>


        <div class="relative w-full">
            <img class="w-full mt-4" src="../images/menmore2.jpeg" alt="">
            <div class=" absolute bottom-10 left-10 max-w-md mx-auto md:max-w-2xl">
                <div class="  py-5 mt-2 md:text-[20px] ">

                   
                        <h5 class="text-white text-3xl">Running Essentails</h5>
                        
                        <button class="bg-white text-black text-base mt-5 px-4 py-3 rounded-full"> Shop </button>
                   

                </div>
            </div>
        </div>

        <div class="relative w-full">
            <img class="w-full mt-4" src="../images/menmore4.jpeg" alt="">
            <div class=" absolute bottom-10 left-10 max-w-md mx-auto md:max-w-2xl">
                <div class="  py-5 mt-2 md:text-[14px] ">

                    
                        <h5 class="text-black text-3xl">Nike Fleece For Spring</h5>
                        
                        <button class="bg-black text-white text-base mt-5 px-4 py-3  rounded-full"> Shop </button>
                   

                </div>
            </div>
        </div>

    </div>

</div>
</section>  */}


const createMore = (arr) => {
    return `
    <div>
    <div class="mx-auto max-w-[1536px] px-4 mt-8">
        <h1 class="text-3xl  px-4">More To Explore</h1></div>
        <div class="mx-auto max-w-[1536px] mt-8 px-4 ">
            <div class=" columns-2 max-md:flex flex-col "
    ${arr.map((item) => {
        return `
        <div class="relative w-full">
            <img class="w-full" src="${item.img}" alt="">
            <div class=" absolute bottom-10 left-10 max-w-md mx-auto md:max-w-2xl">
                <div class="   py-5 mt-2 md:text-[20px] ">
                   
                        <h5 class="text-black text-3xl">${item.title}</h5>
                        
                        <button class="bg-black text-white mt-5 px-4 py-3  rounded-full"> ${item.btn} </button>
                    

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
const moreCardArr = [{
    title: "Features Footerwear: Dunks",
    img: "../images//menmore.jpeg",
    btn:"shop"
},
{
    title: "Features Footerwear: Dunks",
    img: "../images//menmore.jpeg",
    btn:"shop"
},
{
    title: "Features Footerwear: Dunks",
    img: "../images//menmore.jpeg",
    btn:"shop"
},
{
    title: "Features Footerwear: Dunks",
    img: "../images//menmore.jpeg",
    btn:"shop"
},
]
class MoreCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createMore(moreCardArr)
    }
}

customElements.define('mores-component',MoreCard);

class MoreCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createMore(moreCardArr)
    }
}

customElements.define('more-component',MoreCard);