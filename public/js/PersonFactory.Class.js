
import {Student} from './Student.Class.js';
import {Teacher} from './Teacher.Class.js';
export class PersonFactory
{
    constructor() {
        this.student = new Student();
        this.teacher = new Teacher();
    }
    makeStudenet(item)
    {
        return this.student.validate(item);
    }
    makeTeacher(item)
    {
        return this.teacher.validate(item);
    }

    renderPerson(item)
    {
        const div = document.createElement('div');
        div.setAttribute('class', 'card');

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
