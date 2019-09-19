class Greteer{
    greeting: string
    constructor(message:string){
        this.greeting = message;
    }
    greet(){
        return 'Hello,' + this.greeting
    }
}

let greeter = new Greteer('world');
greeter.greet();
