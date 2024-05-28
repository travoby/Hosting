
const createMenu = (arr) => {
    return `
    <div class="  mx-auto sticky top-0 z-[50] bg-white ">
        <div class="w-full items-center lg:justify-center justify-between flex">
        <div class="max-w-[1536px] mx-auto lg:items-center lg:relative lg:justify-start justify-between  w-full py-[20px] flex lg:flex-row flex-col p-6">
        <div class="flex items-center justify-start">
            <p class="text-[26px]">Men</p>
        </div>
    ${arr.map((item) => {
        return `

        <div class="flex lg:flex items-center text-nowrap overflow-hidden lg:justify-center w-full">
            <ul class="text-[20px] flex items-center  md:overflow-x-hidden">
                <li>
                    <a href="#"><span class="hover:text-gray-300 hover:underline">${item.title}</span></a>
                </li>
            </ul>
        </div>
        `
    }).join('')}
        </div>
        </div>
    </div>
    ` 
}
const menuCardArr = [{
    title: "Shoes"
  
},
{
    title: 'Clothing'

},
{
    title: 'Acessories'
},
{
    title: 'Sales'
},
]
class MenuCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createMenu(menuCardArr)
    }
}

customElements.define('menu-component',MenuCard);