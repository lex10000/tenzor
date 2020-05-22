
import {Person} from "./Person.Class.js";

export class Teacher extends Person
{
    constructor(options) {
        super(options);
        this.options['course'] = options['course'] || 'Не указан';
        this.options['subject'] = options['subject'] || '';
        this.options['degree'] = options['degree'] || '';
    }

    /*
        Создает шаблон блока преподавателя
        @return {string} content - сгенерированный шаблон
     */
    render(item) {
        return `<img class="card__image" src="${item['photoUrl']}" alt="${this.image_alt}">
             <div class="card__surname">${item['fullName']}</div>
             <div class="card__university">${item['university']}</div>
             <div class="card__subject">${this.options['subject']}</div>
             <div class="card__degree">${this.options['degree']}</div>`;
    }
    popupWindow(item)
    {
        return `<div class="popup-card__close"></div>
                <img class="popup-card__image" src="${item.photoUrl}" alt="${this.image_alt}">
                <div class="popup-card__surname">${item.fullName}</div>
                <div class="popup-card__university">${item.university}</div>
                <div class="popup-card__subject">${this.options['subject']}</div>
                <div class="popup-card__degree">${this.options['degree']}</div>`;
    }
}