let x = 3;
let a = [0,1,null];

class Animal4{
    numLeas: number
}

class Bee extends Animal4{

}

class Lions extends Animal4{
  
}

// 能推断出一个联合的类型
let zoo = [new Bee(),new Lions()];

window.onmousedown = function(mouseEvent:any){
    // 这个地方会使用onmousedown去推断mouseEvent类型
    console.log(mouseEvent.clientTime);
}
