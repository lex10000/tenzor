import { Component } from './Component.js';
import {Popup} from "./Popup.Class.js";

export class Person extends Component{

    constructor(options)
    {
        super(options);
        this.options['fullName'] = options['fullName'] || ' ';
        this.options['birthDate'] = options['birthDate'] || new Date();
        this.options['gender'] = options['gender'] || ' ';
        this.options['university'] = options['university'] || 'Не указан университет';
        this.options['photoUrl'] = options['photoUrl'] || 'Нет фото';
        this.options['person_type'] = options['person_type'];
        this.options['age'] = this.age;
    }

    get birthDateStr() {
        return this.options['birthDate'].toLocaleString('ru', {month: 'long'}) + ', ' + this.options['birthDate'].getDate();
    };

    set birthDateStr(value) {
        this.options['birthDate'] = value;
    };

    get age() {
        return new Date().getFullYear() - this.options['birthDate'].getFullYear();
    };

    get image_alt() {
        return this.options['photoUrl'].substring(this.options['photoUrl'].lastIndexOf('/')+1, this.options['photoUrl'].length);
    }

    /*
    create eventListener to open a popup card by click
     */
    afterMount() {
        this.component.addEventListener('click', () => {
            const popUp = new Popup(this.options, 'person', this.popupWindow(this.options));
            popUp.mount(document.body, undefined,'popup_card');
        })
    }
}