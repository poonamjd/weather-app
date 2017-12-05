var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('onswipe',function(){
    console.log("door is opened");
});
var fan=function(){
    console.log("fan is on");
    emitter.removeListener('onswipe',fan);
}
emitter.on('onswipe',fan);
emitter.once('onswipe',function(){
    console.log("AC is opened");
});

emitter.emit('onswipe');
emitter.emit('onswipe');