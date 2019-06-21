class MyString {

    ucFirstLetter(item) {
        return item[0].toUpperCase() + item.slice(1);
    };

    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return this.ucFirstLetter(str);
    }

    ucWords(str) {
        return str.split(' ').map(item => this.ucFirstLetter(item), this).join(' ');
    }
}

const str = new MyString();


console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucFirst('hello man'));
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
console.log(str.ucWords('hello how are you'));
console.log('------');