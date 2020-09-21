const fs = require('fs');

console.log('File size:', fs.statSync(__dirname + '/data.txt').size / 1024 / 1024, 'MB');

fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) => {
    const used = process.memoryUsage();
    const messages = [];
    for (let key in used) {
        messages.push(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100 } MB`)
    }
    console.log('Memory: ', messages.join(', '))
})
