const { EventEmitter } = require('events');

const ev = new EventEmitter();

ev.on('eventName', (data) => {
    console.log('on', data);
})

ev.once('eventName', (data) => {
    console.log('once', data);
});

ev.emit('eventName', 1234);
ev.emit('eventName', 5678);
