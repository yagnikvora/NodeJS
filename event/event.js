const EventEmitter = require('events');

class MyClass extends EventEmitter { 
    StartTick(){
        setInterval(()=>this.emit("tick"),1000);
    }
}

myEmitter = new MyClass();
myEmitter.StartTick();
myEmitter.on('tick',()=>console.log("Tick"));