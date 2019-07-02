/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
function throttle(callback, time) {
    var isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        callback.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, time);
    }

    return wrapper;
}

let f = function (a) {
    console.log(a)
};

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);
