const co = require('co');

function addPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num + 1), 100);
    });
}

co(function* () {
    let num = yield addPromise(0);
    num = yield addPromise(num);
    num = yield addPromise(num);
    num = yield addPromise(num);
    console.log(num);
})
