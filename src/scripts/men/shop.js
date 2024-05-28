

const createShop = (arr) => {
    return `
    <div class="pt-5">
        <div class="max-w-[1536px] mx-auto mt-10 px-4 md:overflow-hidden overflow-x-scroll">
            <h1 class="text-3xl  px-4">Shop Essentails</h1>
        <div class="flex gap-3 mt-8">
    ${arr.map((item) => {
        return `
        <div class="">
                <div class=" max-w-[493px]  max-md:[300px] max-md:w-[390px] h-auto">
                    <img src="${item.img}" alt="" class=" w-full object-cover">
                    <h1 class="pt-4 text-[15px]">
                    ${item.title}
                    </h1>
                    <h1 class=" py-2 text-xl">
                        ${item.content}
                    </h1>

                </div>

            </div>
        `
    }).join('')}
        </div>
        </div>
    </div>
    ` 
}
const ShopCardArr = [{
    title: "Clothing",
    img: "../images/men2.jpeg",
    content:"The Seasons latest must-haves."
},
{
    title: 'Shoes',
    img: "../images/men3.jpeg",
    content:" All our Best & Greatest footwear."
},
{
    title: 'Acessories',
    img: "../images/men4.jpeg",
    content:"From hats to sports equipment & beyond."
},
]
class ShopCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createShop(ShopCardArr)
    }
}

customElements.define('shop-card',ShopCard);