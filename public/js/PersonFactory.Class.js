class PersonFactory
{
    constructor(params) {
        this.params = params;
    }
    getStudent()
    {
        return new Student(this.params);
    }
    getTeacher()
    {
        return new Teacher(this.params)
    }
}
