
const createFeature = (arr) => {
    return `
    <div class="">
        <div class="max-w-[1536px] mx-auto overflow-x-scroll mt-10 ">
            <h1 class="text-2xl ">Feature</h1>
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

const featureCardArr = [{
    title: "Nike Alphafly 3",
    img: "../images/nike-just-do-it(5).jpg",
    content:"Push Beyond What's Possible",
    btn:"Shop"
},
{
    title: 'Jordan New Arrivals 3',
    img: "../images/trending.jpeg",
    content:"Air Jordan 4 <br> 'Vivid Sulfur'",
    btn:"Shop"
},
]
class FeatureCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createFeature(featureCardArr)
    }
}

customElements.define('feature-card', FeatureCard);