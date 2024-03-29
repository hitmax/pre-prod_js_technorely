const map = (array, fn) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(fn(array[i],i));
  }
  return newArr;
};

const array = [1, 2, 3];

const callbackFn = (item, index, arr) => {
  return item * index;
};

const processedArray = map(array, callbackFn);

console.log(processedArray); // должно вывести каждый элемент умноженный на его индекс [0, 2, 6]

