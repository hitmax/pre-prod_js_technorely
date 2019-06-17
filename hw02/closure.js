function highLoadPerformance(a) {
  if (isNaN(a) || typeof a !== 'number') throw Error('Only number allowed');
  // Imagine that is this function is very high loaded.
  console.log(a);
  return a;
}

function memoize(fn) {
  if (typeof fn !== 'function') {
    throw Error('This is not a function');
  }

  const cache = {};

  return function (a) {
    if (cache[a]) {
      return cache[a];
    } else {
      cache[a] = fn(a);
      return cache[a];
    }
  }
}

const memoized = memoize(highLoadPerformance);

memoized(10);
memoized(10);
