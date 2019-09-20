function extend<T, U>(first: T, second: U) {
  let result = {} as T & U;
  for (let id in first) {
    result[id] = first[id] as any;
  }
  for(let id in second){
      if(!result.hasOwnProperty(id)){
          result[id] = second[id] as any;
      }
  }
  return result;
}

class Person0{
    constructor(public name:string){

    }
}
interface loggable{
    log():void
}

class ConSole implements loggable{
    log(){
        console.log(`qqaaa`);
    }
}

// 我们把Person0和ConSole的类型通过extend拓展到一起，使得它成为一个联合类型
var item = extend(new Person0('wd'),new ConSole())
// item就相当于拿到了两种类型的属性
item.name;
item.log();