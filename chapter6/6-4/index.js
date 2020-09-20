function add(num, callback) {
    setTimeout(() => {
        callback(num + 1);
    }, 100);
}

add(0, (num) => {
    add(num, (num) => {
        add(num, (num) => {
            add(num, (num) => {
                console.log(num);
            });
        });
    });
});
