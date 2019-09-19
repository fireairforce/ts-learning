  class Animal0 {
    private name: string;
    constructor(name: string) {
      this.name = name;
    }
    public move(distance: number = 0) {
      console.log(`${this.name} moved ${distance} m`);
    }
  }

  class Hippo extends Animal0 {
    constructor() {
      super("Hippo");
    }
  }

  class Employee {
    private name: string;
    constructor(name:string){
        this.name = name
    }
  }


  let dongwu = new Animal0('Goat');
  let hema = new Hippo();
  let em = new Employee('Jason');
  // dongwu 和 hema 共享了一个私有成员
  dongwu = hema;
  // 但是dongwu 和 em的name 实际上并不是同样的一个，都是各自的私有的
  // dongwu = em;