
const createMember= (arr) => {
    return `
    <div>
        <div>
            <div class="mx-auto max-w-[1536px] mt-8 px-4 flex justify-between items-center">
                <h1 class="text-2xl font-bold"> NIKE MEMBERSHIP </h1>
            </div>
        </div>
        <div class="">
            <div class="w-full px-4 max-w-[1536px] mx-auto ">
                <div class="py-1 flex gap-3 overflow-x-scroll mt-5 ">
    ${arr.map((item) => {
        return `
            <div class="relative w-full">
                        <div class="w-[500px] h-[600px]">
                            <img src="${item.img}" alt="" class="w-full h-full object-cover">
                        </div>
                        <div class=" absolute bottom-10 left-10 max-w-md mx-auto md:max-w-2xl">
                            <div class="  py-5 text-[#1e3934] text-[15px] ">
    
                                <div class="mt-2">
                                    <h6 class="text-white ">${item.title}</h6>
                                    <h1 class="text-white text-[25px]">${item.content} </h1>
                                    <button class="bg-white text-black mt-5 px-4 py-1  rounded-full"> ${item.btn}</button>
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

const memberCardArr = [{
    title: "Member Product",
    img: "../images/member1.jpeg",
    content:"Your Exclusive Access",
    btn:"Shop now"
},
{
    title: 'Sports & Wellness Apps',
    img: "../images/home1.jpeg",
    content:"Movement Where You're At",
    btn:"Move"
},
{
    title: 'Nike by You',
    img: "../images/member3.jpeg",
    content:"Your Custonmization Service",
    btn:"Customize"
},
]
class MemberCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createMember(memberCardArr)
    }
}

customElements.define('member-card', MemberCard);