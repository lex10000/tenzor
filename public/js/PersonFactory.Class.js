
import {Student} from './Student.Class.js';
import {Teacher} from './Teacher.Class.js';

/*
Фабрика для работы со студентами и преподавателями
 */
export class PersonFactory
{
    /*
    При создании фабрики создаем объект класса Студент и Преподаватель
     */
    constructor() {
        this.student = new Student();
        this.teacher = new Teacher();
    }

    /*
        добавление нового студента
     */
    makeStudenet(item)
    {
        return this.student.validate(item);
    }

    /*
        добавление нового преподавателя
     */
    makeTeacher(item)
    {
        return this.teacher.validate(item);
    }

    /*
    @params Object данные студента\преподавателя
    @returns Node div возвращает эелемент -блок с навешеным обработчиком.
    Рендеринг блока Person, и добавление обработчика
     */
    renderPerson(item)
    {
        const div = document.createElement('div');
        div.setAttribute('class', 'card');

        //Если тип Студент - то рендерим блок студента, и вешаем на него соответствующий обработчик.
        //Если Преподаватель - то все то же, только с преподавателем.
        if(item['person_type'] === 'student') {
            div.innerHTML = this.student.renderItem(item);
            this.student.createOpenCardListener(div, 'popup_card', item);
        } else if (item['person_type'] === 'teacher'){
            div.innerHTML = this.teacher.renderItem(item);
            this.teacher.createOpenCardListener(div, 'popup_card', item);
        }

        return div;
    }
}
