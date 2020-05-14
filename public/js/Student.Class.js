/*
Класс для работы со студентами
Массив студентов берется из файла student_data.js, который подключается в html документе
 */
class Student extends Person {

    constructor(params) {
        super(params);
        this.course = params['course'] || 'Не указан';
        return this;
    };

    /*
        Создает шаблон блока студента
        @returns {string} content - сгенерированный шаблон
     */
    renderStudentItem() {
        const content =
            `<img class="student_image" src="${this.photoUrl}" alt="avatar01">
             <div class="surname">${this.fullName}</div>
             <div class="universitet">${this.university}, ${this.course} курс</div>
             `;
        return content;
    }

    /*
        Создает шаблон карточки студента
        @returns {string} content - сгенерированный шаблон
    */
    renderStudentCard() {
        const gender = (this.gender === 'male') ? 'Родился' : 'Родилась';
        const content =
            `
                <div class="close"></div>
                <img class="student_image" src="${this.photoUrl}" alt="avatar01">
                <div class="surname">${this.fullName}</div>
                <div class="universitet">${this.university}, ${this.course} курс</div>
                <div class="birthday">${gender} : ${this.birthDateStr}. ${this.age} лет</div>
                
            `;
        return content;

    }

    /*
    Метод добавляет блок текущего студента на страницу, после чего запускает добавление обработчика к данному блоку
     */
    appendToDom(users_class) {
        const class_name = document.getElementsByClassName(users_class);
        const div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = this.renderStudentItem();
        return class_name[0].appendChild(div);
    }

           /*
           Здесь мы добавляем еще одно событие клик, на кнопку "закрыть" (на крестик)
           крестик рисуется в css
        */


    /*
    Данный обработчик добавляет событие клик на блок студента, по которому будет открываться карточка студента
     */
    createOpenCardListener(element, target_card_class) {
        const layout = this.renderStudentCard();
        element.addEventListener('click', function () {
            const student_card = document.getElementsByClassName(target_card_class);
            student_card[0].innerHTML = layout;
            student_card[0].style.display = 'block';//показываем карточку студента, изменив свойство css
            const close_btn = document.getElementsByClassName('close');

            close_btn[0].addEventListener('click', function () {
                student_card[0].style.display = 'none';//закрываем карточку студента, изменив свойство css
                student_card[0].innerHTML = '';
            })
        });
    }
}