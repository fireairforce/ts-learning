type C = { a: string; b?: number };

// 对解构的a,b没传的时候给个默认的值
function f({ a = "", b = 0 } = { a: "" }): void {
  console.log("a: ", a);
  console.log("b: ", b);
}

f({ a: "yes" });
f();
f({});