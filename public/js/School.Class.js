class School
{
    /*
    тип человека (студент - учитель)
     */
    person_type;

    /*
    данные человека (из массива)
     */
    persons_data;

    /*
    получить отдельного человека по параметрам
     */
    getPerson(params)
    {
        const person = new PersonFactory(params);
        return this.person_type === 'student' ? person.getStudent() : person.getTeacher();
    }

    /*
    получить всех студентов\учителей
     */
    getAllPersons(person_type)
    {
        this.person_type = person_type;
        if(this.person_type === 'student') {
            this.persons_data = studentArr;
        }
        else if(this.person_type === 'teacher')
            this.persons_data = teacherArr;
        return this.persons_data || ' ';
    }
    /*
    следующие методы не успеваю доделать, доделаю к следующему уроку. Вкратце описал эти методы
     */
    removePerson(name) {
        //удалить студента\учителя по имени из массива
    }

    addPerson(params){
        //добавить студента\учителя в массив
    }
    getOnePerson(name = null){
        if(name){
            //найти студента в массиве
        }
    }

}