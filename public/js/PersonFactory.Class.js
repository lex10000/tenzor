class PersonFactory
{
    constructor(person_type, params) {
        this.params = params;
        return new person_type(this.params);
    }
}
