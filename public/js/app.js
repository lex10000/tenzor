import {School} from './School.Class.js';
import {PersonFactory, teacherArr, studentArr} from "./personLib.js";
// проинициализируем фабрику
const person = new PersonFactory();

let school = new School();

studentArr.forEach((item) => {
    school.addPerson(person.makeStudenet(item));
});

teacherArr.forEach((item) => {
    school.addPerson(person.makeTeacher(item))
});

school.students.forEach((item) => {
    const student_data = person.renderPerson(item);
    school.studentRenderData.push(student_data);
});
school.teachers.forEach((item) => {
    const teacher_data = person.renderPerson(item);
    school.teacherRenderData.push(teacher_data);
});
 school.appendStudentsToDom('students');
 school.appendTeachersToDom('teachers');
