class Animals {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance:number){
      console.log(`${this.name} moved ${distance}m`);
  }
}

class Snake extends Animals{
   constructor(name:string){
       super(name);
   }

   move(distance:number = 5){
      console.log('Slitering ....');
      super.move(distance);
   }
}


class Hourse extends Animals{
    constructor(name:string){
        super(name);
    }
    move(distance:number=45){
        console.log('Galloping...');
        super.move(distance);
    }
}

let sam = new Snake('Sammy');
let tom:Animals = new Hourse('Tommy');

sam.move();
tom.move(12);