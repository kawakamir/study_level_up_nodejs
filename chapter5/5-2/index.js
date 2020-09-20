const fs = require('fs');


try {fs.readFile(__dirname + 'notfound.txt', 'utf8', (err, data) => {
    console.log('コールバックは遅延実行されます。')
    if (err) {
        throw err;
    }
});
} catch(error) {
    console.log('Catch error!');
}

console.log('コールバックの完了を待たず、先にtry~catchを抜けます。')