interface Counter {
  // 函数类型，有个start参数，返回一个string类型
  (start: number): string;
  //   一些额外的属性
  interval: number;
  reset():void;
}

// 定义一个函数，返回一个Counter类型的接口
function getCounter():Counter{
  let counter = (function(star:number){}) as Counter;
  counter.interval = 123;
  counter.reset = function(){

  }
  return counter;
}

let c = getCounter();
// 因为这就是个这样的函数
c(10);
// 它也可以当成对象使用
c.reset();
c.interval = 5.0;
