function map(arr, func) {
    const arr1 = [];
    arr.forEach(function (x) {
        arr1.push(func(x));
    });
    return arr1;
}

map([1, 2, 3], x => x * 2);
