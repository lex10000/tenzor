
import {Person} from "./Person.Class.js";

export class Teacher extends Person
{
    validate(params) {
        super.validate(params);
        this.params['subject'] = params['subject'] || '';
        this.params['degree'] = params['degree'] || '';
        return this.params;

    }

    renderItem(item) {
        const content =
            `<img class="student_image" src="${item['photoUrl']}" alt="avatar01">
             <div class="surname">${item['fullName']}</div>
             <div class="university">${item['university']}, ${item['course']} курс</div>
             `;
        return content;
    }
    renderTeacherCard(item) {
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
    createOpenCardListener(element, target_card_class, item) {
        element.addEventListener('click', () => {
            const card = document.getElementsByClassName(target_card_class);
            card[0].innerHTML = this.renderTeacherCard(item);
            card[0].style.display = 'block';//показываем карточку студента, изменив свойство css
            super.createCloseBtnListener(card);
        });
    }
}