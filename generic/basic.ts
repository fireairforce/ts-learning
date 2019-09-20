// 返回任何传入它的值,T同来捕获用户的传入类型
function identity<T>(arg: T): T {
  return arg;
}

let output0 = identity<string>("mystring");
let output = identity("Mystring");

function loginingIndetity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

let myIdentity2: { <T>(arg: T): T } = identity;

interface G<T>{
    (arg:T):T
}

let myIdentity3:G<number> = identity;