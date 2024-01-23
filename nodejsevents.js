/*
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('EngineOn', () => {
    console.log('Please turn on the engine!');
    setTimeout(() => {
        console.log('Please turn on the engine! Gentle reminder.');
    }, 3000);
})
*/
console.log("The script is running.")
myEmitter.emit('EngineOn');
console.log("The script is still running.")


const EvenEmitter = require('events');
class MyEmitter extends EventEmitter{}
const myemitter = new MyEmitter();
myemitter.on('EngineOn',() => {
    console.log('Please turn off the engine.');
    setTimeout(() => {
        console.log('Gentle reminder! Please turn off the engine!');
    }, 3000);
})