function join(array, separator) {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        string += array[i] + separator;
    }
    return string;
}


const array = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];

console.log(join(array, ' '));
