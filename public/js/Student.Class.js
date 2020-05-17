/*
Класс для работы со студентами
Массив студентов берется из файла student_data.js, который подключается в html документе
 */
import {Person} from "./Person.Class.js";

export class Student extends Person {

    validate(params) {
        super.validate(params);
        this.params['course'] = params['course'] || 'Не указан';
        return this.params;
    }

    /*
        Создает шаблон блока студента
        @returns {string} content - сгенерированный шаблон
     */
    renderItem(item) {
        const content = `
                <img class="student_image" src="${item['photoUrl']}" alt="avatar01">
                 <div class="surname">${item['fullName']}</div>
                 <div class="university">${item['university']}, ${item['course']} курс</div>
             `;
        return content;
    }

    /*
        Создает шаблон карточки студента
        @returns {string} content - сгенерированный шаблон
    */
    renderStudentCard(item) {
        const gender = (item.gender === 'male') ? 'Родился' : 'Родилась';
        const content =
            `
                <div class="close"></div>
                <img class="student_image" src="${item.photoUrl}" alt="avatar01">
                <div class="surname">${item.fullName}</div>
                <div class="universitet">${item.university}, ${item.course} курс</div>
                <div class="birthday">${gender} : ${item.birthDateStr}. ${item.age} лет</div>
                
            `;
        return content;

    }

    /*
    Данный обработчик добавляет событие клик на блок студента, по которому будет открываться карточка студента
     */
    createOpenCardListener(element, target_card_class, item) {
        element.addEventListener('click', () => {
            const card = document.getElementsByClassName(target_card_class);
            card[0].innerHTML = this.renderStudentCard(item);
            card[0].style.display = 'block';//показываем карточку студента, изменив свойство css
            super.createCloseBtnListener(card);
        });
    }
}