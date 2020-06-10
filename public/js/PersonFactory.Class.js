import {Student} from './Student.Class.js';
import {Teacher} from './Teacher.Class.js';

/*
Фабрика для работы со студентами и преподавателями
 */
export class PersonFactory
{
    constructor(options)
    {
        switch (options['person_type']) {
            case 'student' : {
                return new Student(options);
            }
            case 'teacher' : {
                return new Teacher(options);
            }
        }
    }
}
