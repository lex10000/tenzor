
ReactDOM.render(
    <Header title={'Online school Tenzor'} description={'some text description about school'}/>, document.querySelector('#header', 'afterBegin')
);

// //запрашиваем всех студентов, потом проходимся по каждому, и монитруем на страницу
//
const dataset = new Dataset('http://localhost:8080/api/');
const students = dataset.getAllPersons('students')
    .then((result) => {
        let key;
        for (key in result) {
            const student = new PersonFactory(result[key]);
            console.log(student);
            //student.mount(document.querySelector('.students'), 'afterBegin', 'card');
        }
    })

// //запрашиваем всех преподов, но с параметрами, потом проходимся по каждому, и монитруем на страницу
//
// const page = 1;
// const limit = 1;
// const teachers = dataset.getLimitPersons('teachers', page, limit)
//     .then((result) => {
//         let key;
//         for (key in result) {
//             const teacher = componentFactory.create(PersonFactory, result[key]);
//             teacher.mount(document.querySelector('.teachers'), 'afterBegin', 'card');
//         }
//     })
//
//
//

