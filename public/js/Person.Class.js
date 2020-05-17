export class Person {
    params = {};

    validate(params)
    {
        this.params['fullName'] = params['fullName'] || ' ';
        this.params['birthDate'] = params['birthDate'] || new Date();
        this.params['gender'] = params['gender'] || ' ';
        this.params['university'] = params['university'] || 'Не указан университет';
        this.params['photoUrl'] = params['photoUrl'] || 'Нет фото';
        this.params['person_type'] = params['person_type'];
        this.params['age'] = this.age;
    }
    /*
    Преобразует дату в нужный нам вид. Использовал toLocaleString, чтобы получить русское название месяца
    */
    get birthDateStr() {
        return this.params['birthDate'].toLocaleString('ru', {month: 'long'}) + ', ' + this.params['birthDate'].getDate();
    };

    set birthDateStr(value) {
        this.params['birthDate'] = value;
    };

    /*
    Получает возвраста, путем разности текущего года и года рождения
     */
    get age() {
        return new Date().getFullYear() - this.params['birthDate'].getFullYear();
    };

    get params()
    {
        return this.params;
    }

    createCloseBtnListener(card)
    {
        const close_btn = document.getElementsByClassName('close');
        close_btn[0].addEventListener('click', function () {
            card[0].style.display = 'none';//закрываем карточку студента, изменив свойство css
            card[0].innerHTML = '';
        });
    }
}