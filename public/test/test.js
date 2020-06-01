import {PersonFactory} from "../js/PersonFactory.Class.js";

describe("Test block", function () {
    'use strict';
    const options = {
        "id" : 1,
        "fullName": "Tanya Ivanova",
        "university": "NSU",
        "course": "2",
        "birthDate":"1994-02-24",
        "photoUrl": "../images/ava01.jpg",
        "gender": "female",
        "person_type": "student"
    };
    let person = new PersonFactory(options);

    it("Проверка получение возраста персоны по дате рождения", function () {
        assert.equal(person.age, 26);
    });
    it('Проверка правильного форматирования даты рождения', function () {
        assert.equal(person.birthDateStr, 'февраль, 24');
    })
    it('получить параметр alt для картинки', () => {
        assert.equal(person.image_alt, 'ava01.jpg')
    })

});
mocha.run();
