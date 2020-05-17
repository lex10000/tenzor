import {School} from './School.Class.js';
import {PersonFactory, teacherArr, studentArr} from "./personLib.js";
// проинициализируем фабрику
const person = new PersonFactory();
//проинициализируем школу
let school = new School();

//добавить всех студентов из входного массива
studentArr.forEach((item) => {
    school.addPerson(person.makeStudenet(item));
});

//добавить всех преподавателей из входного массива
teacherArr.forEach((item) => {
    school.addPerson(person.makeTeacher(item))
});

//для каждого добавленного студента сделать рендер его блока для сайта
school.students.forEach((item) => {
    const student_data = person.renderPerson(item);
    school.studentRenderData.push(student_data);
});

//для каждого добавленного преподавателя сделать рендер его блока для сайта
school.teachers.forEach((item) => {
    const teacher_data = person.renderPerson(item);
    school.teacherRenderData.push(teacher_data);
});

//добавить всех студентов и преподатваленей на сайт
 school.appendStudentsToDom('students');
 school.appendTeachersToDom('teachers');
