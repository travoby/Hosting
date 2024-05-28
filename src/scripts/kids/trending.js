
const createTrending = (arr) => {
    return `
    <div class="">
        <div class="max-w-[1536px] mx-auto overflow-x-scroll mt-10 ">
            <h1 class="text-2xl ">Trending</h1>
            <div class="flex  gap-3 mt-8 flex-col md:flex-row">
    ${arr.map((item) => {
        return `
      
            <div class="relative w-full md:w-1/2"> <img src="${item.img}" alt=""
                class="w-full h-[400px] md:h-[700px] object-cover">
                <div class="absolute bottom-10 left-10 text-white">
                    <h1>${item.title}</h1>
                    <h1 class="text-2xl">${item.content} </h1> <button
                        class="bg-white text-black mt-5 px-4 py-1 rounded-full"> ${item.btn}</button>
                </div>
            </div>
        `
    }).join('')}

        </div>
    </div>
</div>
    `
}

const trendingCardArr = [{
    title: "What's Limit?",
    img: "../images/kid-trend1.jpeg",
    content:"Serena Williams Design Crew Collection",
    btn:"Shop"
},
{
    title: 'Expression in Motion',
    img: "../images/kid-trend2.jpeg",
    content:"Refreshing Adventure Collection",
    btn:"Shop"
},
]
class TrendingCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createTrending(trendingCardArr)
    }
}

customElements.define('trending-card', TrendingCard);