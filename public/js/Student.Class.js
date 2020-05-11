/*
Класс для работы со студентами
Массив студентов берется из файла student_data.js, который подключается в html документе
 */
class Student {

    constructor(params) {
        this.fullName = params['fullName'];
        this.university = params['university'];
        this.photoUrl = params['photoUrl'];
        this.course = params['course'];
        this.birthDate = params['birthDate'];
        this.gender = params['gender'];
    };

    /*
     Преобразует дату в нужный нам вид. Использовал toLocaleString, чтобы получить русское название месяца
     */
    get birthDateStr() {
        return this.birthDate.toLocaleString('ru', {month: 'long'}) + ', ' + this.birthDate.getDate();
    };

    set birthDateStr(value) {
        this.birthDate = value;
    };

    /*
    Получает возвраст студента, путем разности текущего года и года рождения студента
     */
    get age() {
        return new Date().getFullYear() - this.birthDate.getFullYear();
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
    appendToDom() {
        const div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = this.renderStudentItem();

        const target = document.getElementsByClassName('users');
        const element = target[0].appendChild(div);
        this.createOpenCardListener(element);// запускает обработчик
    }

    /*
    Данный обработчик добавляет событие клик на блок студента, по которому будет открываться карточка студента
     */
    createOpenCardListener(element) {
        const layout = this.renderStudentCard();
        element.addEventListener('click', function () {
            const target = document.getElementsByClassName('student_card');
            target[0].innerHTML = layout;
            target[0].style.display = 'block';//показываем карточку студента, изменив свойство css
            const close_btn = document.getElementsByClassName('close');
            //Здесь мы добавляем еще одно событие клик, на кнопку "закрыть" (на крестик)
            //крестик рисуется в css
            close_btn[0].addEventListener('click', function () {
                target[0].style.display = 'none';//закрываем карточку студента, изменив свойство css
            })
        })
    }
}