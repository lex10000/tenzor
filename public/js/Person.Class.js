class Person {
    constructor(params) {
        this.fullName = params['fullName'] || ' ';
        this.birthDateStr = params['birthDate'] || new Date();
        this.gender = params['gender'] || ' ';
        this.university = params['university'] || 'Не указан университет';
        this.photoUrl = params['photoUrl'] || 'Нет фото';
    }
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
    Получает возвраста, путем разности текущего года и года рождения
     */
    get age() {
        return new Date().getFullYear() - this.birthDate.getFullYear();
    };
}