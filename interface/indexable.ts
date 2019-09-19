interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;

myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// console.log(myStr);

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NotOkay {
  [x: number]: Dog;
  [x: string]: Animal;
}


interface ReadOnlyStringArray{
    readonly [index:number]: string
}

let myArray1: ReadOnlyStringArray = ['Alice','Bob']
// myArray1[2] = 'wd'
