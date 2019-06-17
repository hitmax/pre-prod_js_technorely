const makeDiscount = (percent) => {
    console.log('discount ' + percent + '%');
    if (typeof percent !== 'number' || isNaN(percent) || percent > 100 || percent < 0) {
        throw Error('Only number in range 0-100 allowed');
    }
    return (price) => {
        if (typeof price !== 'number' || isNaN(price) || price < 0) {
            throw Error('Only positive number allowed');
        }
        console.log('old price ' + price, 'current price:');
        return price * (100 - percent) * 0.01;
    };

};

console.log(makeDiscount(10)(500));
console.log(makeDiscount(90)(500));

