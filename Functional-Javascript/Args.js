
const x = 1;

function add(x, y) {
    return x + y;
}

function doIf(condition, a, b, func) {
    if(condition) {
        console.log(func(a, b));
    }
}

doIf(x === 1, 5, 1, add);

doIf(x === 1, 5, 6, function(a, b) {
    return 5 + 6;
});