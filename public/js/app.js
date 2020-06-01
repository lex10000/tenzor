import {Header} from "./Header.Class.js";
import {PersonFactory} from "./PersonFactory.Class.js";
import {ComponentFactory} from "./Component.js";
import Dataset from "./Dataset.class.js";

//создаем фабрику компонента (класс описан в Component.js)
const componentFactory = new ComponentFactory();

//создаем компонент Header, добавляем его на страницу
const header = componentFactory.create(Header, {
    title: 'Online school Tenzor',
    description: 'some text description about school',
});
header.mount(document.querySelector('header'), 'afterBegin');


//запрашиваем всех студентов, потом проходимся по каждому, и монитруем на страницу

const dataset = new Dataset('http://localhost:8080/api/');
const students = dataset.getAllPersons('students')
    .then((result) => {
        for (const key in result) {
            const student = componentFactory.create(PersonFactory, result[key]);
            student.mount(document.querySelector('.students'), 'afterBegin', 'card');
        }
    })

//запрашиваем всех преподов, но с параметрами, потом проходимся по каждому, и монитруем на страницу

const page = 1;
const limit = 1;
const teachers = dataset.getLimitPersons('teachers', page, limit)
    .then((result) => {
        for (const key in result) {
            const teacher = componentFactory.create(PersonFactory, result[key]);
            teacher.mount(document.querySelector('.teachers'), 'afterBegin', 'card');
        }
    })




