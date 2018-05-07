
const ENABLE_DEBUG_MODE = true;

const printMessage = message => {
    console.log(message);
};

const doNothing = () => {

};

var debug;

if(ENABLE_DEBUG_MODE) {
    debug = printMessage;
} else {
    debug = doNothing;
}

debug("Hello Functional World");
