class School
{
    person_type;

    persons_data;

    constructor(person_type) {
        this.person_type = person_type;
        this.persons_data = this.person_type === 'student' ? studentArr : teacherArr;
    }
    removePerson(name) {
        //удалить студента\учителя по имени
    }

    addPerson(params){
        //добавить студента\учителя в массив
    }

    getPersonByName(name)
    {
        //получить данные студента по имени
    }
    getOnePerson(name = null){
        if(name){
            //найти студента в массиве
        }
    }

    getAllPersons()
    {
        return persons_data;
    }

}