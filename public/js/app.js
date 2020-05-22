import {Header} from "./Header.Class.js";
import {PersonFactory} from "./PersonFactory.Class.js";
import {studentArr} from "./persons_data.js";
import {ComponentFactory} from "./Component.js";
import {teacherArr} from "./persons_data.js";

//создаем фабрику компонента (класс описан в Component.js)
const componentFactory = new ComponentFactory();

//создаем компонент Header, добавляем его на страницу
const header = componentFactory.create(Header, {
    title: 'Online school Tenzor',
    description: 'some text description about school',
});
header.mount(document.querySelector('header'), 'afterBegin');

//проходимся по всем студентам, и создаем компонент PersonFactory (фабрика персоны, которая будет создавать
//нового студента, и возращаем каждого студента на страницу

studentArr.forEach((currentStudent) => {
    const student = componentFactory.create(PersonFactory, currentStudent);
    student.mount(document.querySelector('.students'), 'afterBegin', 'card');
});

//проходимся по всем преподам, и создаем компонент PersonFactory (фабрика персоны, которая будет создавать
//нового препода, и возращаем каждого препода на страницу
teacherArr.forEach((currentTeacher) => {
    const teacher = componentFactory.create(PersonFactory, currentTeacher);
    teacher.mount(document.querySelector('.teachers'), 'afterBegin', 'card');
})

