 const createSize = (arr) => {
    return `
    <div>
        <div class="mx-auto max-w-[1536px] mt-8">
            <h1 class="text-3xl font-medium px-4">Size for All</h1>
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
                            <p class="text-black py-5">${item.content} </p>
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
const sizeCardArr = [{
    title: "Big kid-size2",
    img: "../images/kid-size1.jpeg",
    content:"Explore apparel (XS-XL) and shoes (3.5-7Y).",
    btn:"Shop"
},
{
    title: "Big kid-size2",
    img: "../images/kid-size3.jpeg",
    content:"Explore apparel (XS-XL) and shoes (3.5-7Y).",
    btn:"Shop"
},
{
    title: "Big kid-size2",
    img: "../images/kid-size2.jpeg",
    content:"Explore apparel (XS-XL) and shoes (3.5-7Y).",
    btn:"Shop"
},
{
    title: "Big kid-size2",
    img: "../images/kid-size1.jpeg",
    content:"Explore apparel (XS-XL) and shoes (3.5-7Y).",
    btn:"Shop"
},

]
 export class SizeCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createSize(sizeCardArr)
    }
}

customElements.define('size-card',SizeCard);