const fs = require('fs')

fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) => {
    console.log('この行は後に実行されます');
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString('utf-8'));
})

console.log("この行は先に実行されます。")
