function addPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Fail addPromise.')), 100);
    });
}

addPromise(0).then(
    (num) => addPromise(num),
    (error) => {
        console.error('Catch error1!', error);
        return Promise.reject(error);
    }
).then(
    (num) => addPromise(num),
    (error) => {
        console.error('Catch error2!', error)
    }
);
