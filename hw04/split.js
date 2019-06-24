function split(string, separator, limit) {
    let pos = 0;
    let arr = [];
    let cLength = (limit && limit < string.length) ? limit : string.length;
    if (separator === '') {
        for (let i = 0; i < cLength; i++) {
            arr.push(string[i]);
        }
    } else {
        while (true) {
            let foundPos = string.indexOf(separator, pos);
            if (foundPos == -1) break;
            if (arr.length == limit) return arr;
            arr.push(string.slice(pos, foundPos));
            pos = foundPos + separator.length;
        }
        arr.push(string.slice(pos, string.length));

        // это работает только для сепаратора из одного символа...
        // for (let i = 0; i < string.length; i++) {
        //     if (string[i] === separator) {
        //         arr.push(string.slice(pos, i));
        //         if (arr.length == limit) {
        //             return arr;
        //         }
        //         pos = ++i;
        //     }
        // }
        // arr.push(string.slice(pos, string.length));
    }
    return arr;
}


const string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';
const string2 = 'Lorem ipsum';
const string3 = 'Masha, Petya, Vasya, Tolya';

console.log(split(string, ' '));
console.log(split(string, ' ', 3));
console.log(split(string, ' ', 10));
console.log(split(string2, ''));
console.log(split(string2, '', 8));
console.log(split(string3, ','));
console.log(split(string3, ',', 2));

