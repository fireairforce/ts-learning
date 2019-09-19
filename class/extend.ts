class Animal{
    move(distance:number = 0){
      console.log(`Animal move ${distance}`);
    }
 
}


class Dog extends Animal{
    bark(){
        console.log('wolf!wolf!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
