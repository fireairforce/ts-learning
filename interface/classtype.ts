interface ClockInterface {
  // 这两个类型是实例类型
  currentTime: Date;
  setTime(d: Date);
}

interface ClockContructor {
  new (hour: number, minute: number);
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
  setTime(d: Date) {
    this.currentTime = d;
  }
}

// 实例接口类型
interface ClockInter {
  tick();
}

interface ClockCon {
  new (hour: number, minute: number): ClockInter;
}

function createClock(ctor: ClockCon, hour: number, minute: number):ClockInter {
  return new ctor(hour,minute);
}

class DClock implements ClockInter{
    constructor(h:number,m:number){
       
    }
    tick(){
        console.log('beep beep');
    }
}

class AClock implements ClockInter{
    constructor(h:number,m:number){

    }
    tick(){
        console.log('tick tick');
    }
}


// 创造类的实例

let digtial = createClock(DClock,12,17);

let a = createClock(AClock,15,38);