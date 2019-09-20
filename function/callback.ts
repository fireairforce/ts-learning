// 定义一个接口里面有一个返回值为void的函数
interface UI {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  type: string;
  onClickBad(this:void,e:Event){
    //   this.type = e.type;
    console.log('clcked');
  }
}

let h = new Handler();

let uiElement:UI = {
    addClickListener(){

    }
}

uiElement.addClickListener(h.onClickBad)
