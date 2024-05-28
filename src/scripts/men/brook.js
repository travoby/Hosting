
const createBrook = (arr) => {
    return `
    <div class="max-w-[1536px] mx-auto mt-10">
                <div class="overflow-x-scroll mt-10 px-4 ">
                    <h1 class="text-3xl   px-4">Brooks Koepka's Favs</h1>
                    <div class="flex gap-3  mt-10 max-md:flex-col">
    ${arr.map((item) => {
        return `
            <div class=" relative w-full">
                <img src="${item.img}" alt="" class="w-full h-[550px] object-cover">

                <div class="absolute bottom-10 left-10 text-white max-w-md mx-auto md:max-w-2xl">

                    <h1 class="text-3xl">${item.title}</h1>
                    <button class="bg-white text-black mt-5 px-4 py-1  rounded-full">${item.btn}</button>
                </div>
            </div>
        `
    }).join('')}

        </div>
    </div>
</div>
    `
}

const brookCardArr = [{
    title: " Brooks's Golf Essentials",
    img: "../images/brooks-4.jpeg",
    btn: "Shop"
},
{
    title: "Brooks's Off-Course Picks",
    img: "../images/brooks-3.jpeg",
    btn: "Shop"
},
]
class BrookCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createBrook(brookCardArr)
    }
}

customElements.define('brook-card', BrookCard);