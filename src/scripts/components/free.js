const createFreeShipping = ()=>{
    return `
    <nav class=" border-gray-200 bg-gray-100  max-md:text-[15px]">
        <div class=" p-3 px-1 w-full   ">
            <ul class=" flex justify-center text-center gap-4">
                <li class="  text-md font-semibold"> Members: Free Shipping on Orders $50+</li>
            </ul>
        </div>
    </nav>

    `;
}
export class Free extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback() {

        this.innerHTML = createFreeShipping();
    }
}

customElements.define('freeshipping-component', Free);
