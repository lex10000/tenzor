import {Component} from "./Component.js";

export class Popup extends Component
{
    popupWindow;

    constructor(options, popupKey, popupWindow) {
        super(options);
        this.popupKey = popupKey;
        this.popupWindow = popupWindow;
    }

    render(item)
    {
       return this.popupWindow;
    }

    /*
    Перед добавлением попапа на страницу проверим, есть ли попап уже с таким ключом (классом), если есть, то удалим его
     */
    beforeMount()
    {
        const popup = document.querySelector(`.${this.popupKey}`);
        if(popup) popup.remove();
    }

    afterMount() {
        let popupClass = this.component.getAttribute('class');
        this.component.setAttribute('class', `${popupClass} ${this.popupKey}`);

        const close_btn = this.component.querySelector('.popup-card__close');
        close_btn.addEventListener('click', () => {
            this.unmount();
        })
    }
}