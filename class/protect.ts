class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Emp extends Person {
  private dep: string;
  constructor(name: string, dep: string) {
    super(name);
    this.dep = dep;
  }
  getPitch(){
      return `Hello my name is ${name},and i work in ${this.dep}`
  }
}


let zoomdong = new Emp('zoomdong','Alibaba');
console.log(zoomdong.getPitch());
// 这里调用受保护类的话还是会出现error
// console.log(zoomdong.name);