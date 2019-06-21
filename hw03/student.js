class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        // В es6 есть так называемые template string,
        // в которых с помощью ${} можно указывать переменные
        return `${this.name} ${this.surname}`
    }
}


class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        let currentCourse = new Date() - new Date(this.year, 0, 1);
        let oneYearMs = 1000 * 60 * 60 * 24 * 365;
        return (Math.floor(currentCourse / oneYearMs));
    }
}

const student = new Student('Вася', 'Пупкин', 2016);

console.log(student.name); //выведет 'Вася'
console.log(student.surname); //выведет 'Пупкин'
console.log(student.getFullName()); //выведет 'Вася Пупкин'
console.log(student.year); //выведет 2016
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2019

