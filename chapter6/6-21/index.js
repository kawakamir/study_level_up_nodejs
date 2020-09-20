function addPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Fail addPromise.')), 100);
    });
}

async function asyncAwaitExec() {
    let num = await addPromise(0);
    num = await addPromise(num);
    console.log(num)
}

asyncAwaitExec().catch((error) => {
    console.log('Promise内で発生した例外を補足し到達します');
    console.error(error);
});

(async () => {
    try {
        await asyncAwaitExec();
    } catch(error) {
        console.log('awaitによってtry~catch内に残るため到達します');
        console.error(error);
    }
})();
