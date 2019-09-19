class User{
    fullName:string
    firstName:string
    lastName:string
    
    constructor(firstName:string,lastName:string){
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + ' ' + lastName
    }
}

// 接口本质上是对对象属性的一个描述
interface Person{
    firstName:string,
    lastName:string
}

function greeter(person:Person){
    return 'Hello ' + person.firstName + person.lastName
}

let user = new User('zoom','dong');

console.log(greeter(user));