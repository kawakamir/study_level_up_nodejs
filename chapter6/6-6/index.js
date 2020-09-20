function addPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num + 1);
        }, 100);
    });
}

addPromise(0).then((num) => {
    return addPromise(num);
}).then((num)=> {
    return addPromise(num);
}).then((num)=> {
    return addPromise(num);
}).then((num)=> {
    console.log(num);
});
