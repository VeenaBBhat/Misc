var eventEmitter = require("events").EventEmitter;

class MyEventClass extends eventEmitter {
	constructor(count){
		super();
		this.count=count;
	}	//setInterval setTimeout 500
	increment() {
		var self=this;
		var myfun=setInterval(function(){
		if(self.count % 2 == 0) {
			self.emit("even");
			console.log("event emitted");
			}
		if(self.count==50) clearInterval(myfun);
		self.count++;
	},300);
	}	
}

var access=new MyEventClass(1);

access.increment();

var myhandler=access.on('even',handleEvent);

function handleEvent(){
	console.log('Number is even! ::'+this.count);
	if(this.count==30) myhandler.removeListener('even',handleEvent);
}
