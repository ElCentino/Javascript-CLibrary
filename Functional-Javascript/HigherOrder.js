
const doItSafe = (n, message, func) => {

    if(n != null && typeof n === 'number') {
        if(message != null && typeof message === 'string') {
            return func(n, message);
        }
    }
};

const doItSafer = (func) => {

    return (n, message) => {

        if(n != null && typeof n === 'number') {
            if(message != null && typeof message === 'string') {
                return func(n, message);
            }
        }
    }
};


var banana = doItSafer((n, message) => {
    for(let i = 0; i < n; i++) {
        console.log(message);
    }
});

banana(5, "Banana");


// const banana = doItSafe(5, "Banana", (n, message) => {
        
//     for(let i = 0; i < n; i++) {
//         console.log(message);
//     }
// });