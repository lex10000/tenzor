/*
Класс для работы со студентами
 */
import {Person} from "./Person.Class.js";

export class Student extends Person {

    constructor(options) {
        super(options);
        this.options['course'] = options['course'] || 'Не указан';
    }

   
    render() {
        return (<div>
            <img className="card__image" src={item['photoUrl']} alt={this.image_alt}/>
            <div className="card__surname">{item['fullName']}</div>
            <div className="card__university">{item['university']}, {item['course']} курс</div>
        </div>);
    }

    popupWindow(item) {
        return `<div class="popup-card__close"></div>
                <img class="popup-card__image" src="${item.photoUrl}" alt="${this.image_alt}">
                <div class="popup-card__surname">${item.fullName}</div>
                <div class="popup-card__university">${item.university}, ${item.course} курс</div>
                <div class="popup-card__birthday">Дата рождения : ${this.birthDateStr}. ${item.age} лет</div>`;
    }
}