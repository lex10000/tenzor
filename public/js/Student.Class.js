/*
Класс для работы со студентами
Массив студентов берется из файла student_data.js, который подключается в html документе
 */
class Student extends Person{

    constructor(params) {
        super(params);
        this.course = params['course'] || 'Не указан';
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
    appendToDom(target) {
        const div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = this.renderStudentItem();
        return target.appendChild(div);
    }

    /*
    Данный обработчик добавляет событие клик на блок студента, по которому будет открываться карточка студента
     */
    createOpenCardListener(element, target_card) {
        const _this = this;
        element.addEventListener('click', function () {
            target_card.innerHTML = _this.renderStudentCard();
            target_card.style.display = 'block';//показываем карточку студента, изменив свойство css
            _this.createCloseBtnListener(target_card);
        });
    }

    /*
        Здесь мы добавляем еще одно событие клик, на кнопку "закрыть" (на крестик)
        крестик рисуется в css
     */
    createCloseBtnListener(target_card) {
        const close_btn = document.getElementsByClassName('close');
        close_btn[0].addEventListener('click', function () {
            target_card.style.display = 'none';//закрываем карточку студента, изменив свойство css
        })
    }
}