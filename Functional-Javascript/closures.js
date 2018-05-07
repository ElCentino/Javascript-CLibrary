
// function counter(count) {

//     return {
//         increment: function() {
//             return count++;
//         },
//         currentVal: function() {
//             return count;
//         }
//     }
// }

//functional way

const counter = count => {

    return {
        increment: () => count++,
        currentVal: () => count,
        add: value => count += value
    }
}

const count = counter(5);
count.increment();
count.increment();
count.increment();
count.add(10);

console.log(count.currentVal());