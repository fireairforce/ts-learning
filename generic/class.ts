// 把泛型的类型直接放在类的后面
class GenricNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenricNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};

let stringNumberic = new GenricNumber<string>();
stringNumberic.zeroValue = "";
stringNumberic.add = function(x, y) {
  return x + y;
};
console.log(stringNumberic.add(stringNumberic.zeroValue, "test"));
