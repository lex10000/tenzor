class Teacher extends Person
{
    constructor(params) {
        super(params);
        this.subject = params['subject'] || '';
        this.degree = params['degree'] || '';
    }
}