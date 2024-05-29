 const createMoreTo = (arr) => {
    return `
    <div>
        <div class="mx-auto max-w-[1536px] mt-8">
            <h1 class="text-3xl font-medium px-4">More To Explore</h1>
        </div>
        <div class="mx-auto max-w-[1536px] mt-8 px-4 ">
            <div class=" columns-2 max-md:flex flex-col">
    ${arr.map((item) => {
        return `
      
         <div class="relative w-full">
                <img class="w-full py-2" src="${item.img}" alt="">
                <div class=" absolute bottom-10 left-10 max-w-md mx-auto md:max-w-2xl max-md:text-[15px]">
                    <div class="  py-5  ">
                        <div class="mt-2 ">
                            <h5 class="text-black text-3xl">${item.title}</h5>
                            <button class="bg-black text-white mt-5 px-4 py-1  rounded-full"> ${item.btn} </button>
                        </div>

                    </div>
                </div>
            </div>
        `
    }).join('')}

        </div>
    </div>
    ` 
}
const moreToCardArr = [{
    title: "Features Footerwear: Dunks",
    img: "../images//menmore.jpeg",

    btn:"Shop"
},
{
    title: "Versatile Workout Styles",
    img: "../images/menmore3.jpeg",

    btn:"Shop"
},
{
    title: "Running Essentails",
    img: "../images/menmore2.jpeg",

    btn:"Shop"
},
{
    title: "Nike Fleece For Spring",
    img: "../images/menmore4.jpeg",
    btn:"Shop"
},

]
 class MoreToCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createMoreTo(moreToCardArr)
    }
}

customElements.define('moreto-card',MoreToCard);