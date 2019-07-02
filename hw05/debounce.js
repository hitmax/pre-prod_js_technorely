/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
function debounce(callback, time) {

    let timer = null;

    return function (...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        };

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(onComplete, time);
    };
}

function f(x) {
    console.log(x)
}

let func = debounce(f, 1000);

func(1);
func(2);

setTimeout(function () {
    func(3)
}, 1100);
setTimeout(function () {
    func(4)
}, 1200);


