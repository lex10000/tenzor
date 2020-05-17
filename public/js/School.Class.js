
export class School
{
    /*
    тип человека (студент - учитель)
     */
    person_type;

    students = [];
    teachers = [];

    studentRenderData = [];
    teacherRenderData = [];

    /*
    получить всех студентов\учителей
     */
    addPerson(person){
        const current_person = JSON.parse(JSON.stringify(person));
        if(current_person.person_type === 'student') {
            this.students.push(current_person);
        }
        else if(current_person.person_type === 'teacher') {
            this.teachers.push(current_person);
        }
    }

    appendStudentsToDom(node_class_name)
    {
        const class_name = document.getElementsByClassName(node_class_name);
        this.studentRenderData.forEach((item) => {
            class_name[0].appendChild(item);
        })
    }
    appendTeachersToDom(node_class_name)
    {
        const class_name = document.getElementsByClassName(node_class_name);
        this.teacherRenderData.forEach((item) => {
            class_name[0].appendChild(item);
        })
    }

}