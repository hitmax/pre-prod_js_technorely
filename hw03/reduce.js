const reduce = (array, fn, initial) => {
    var i, initialValue;
    if (initial === undefined) {
        initialValue = array[0];
        i = 1;
    } else {
        initialValue = initial;
        i = 0;
    }

    for (i; i < array.length; i++) {
        initialValue = fn(initialValue, array[i], i, array);
    }
    return initialValue;
};

const array = [1, 2, 3];

const callbackFn = (accumulator, item, index, arr) => {
    return {
        ...accumulator,
        [index]: item
    };
};

const processedArray = reduce(array, callbackFn, {});

console.log(processedArray); // должно вывести массив, преобразованный в объект {0: 1, 1: 2, 2: 3}


