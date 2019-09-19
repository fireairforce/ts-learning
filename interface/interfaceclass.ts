class Control {
  private state: any;
}
// 接口的类型只能被其类或者子类所实现
// 继承Control类并且定义一个方法
interface SelectableControl extends Control {
  select();
}

class Button extends Control implements SelectableControl {
  select() {}
}

class Textbox extends Control {
  select() {}
}

// class ImageC implements SelectableControl {
//     // 这个类没有继承Control就去直接实现select这个方法是会报错的
//     select() {}
// }
