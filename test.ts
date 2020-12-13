type s = string;
let a:s;
// s 实际上是一种类型了，这里被当做value使用了
// typeof s;

type TypeName<T> = T extends string ? "string" : T extends number ? "number" : T extends boolean ? "boolean" : T extends undefined ? "undefined" : T extends Function ? "function" : "object";

// 这里条件类型推导结果会推导出联合类型
type t1 = TypeName<string | (() => void)>

type Partical1<T> = {
  [P in keyof T]?: T[P];
}

type Clone<T> = {
  [K in keyof T]: T[K];
}

// 获取函数返回值类型

const test = () => {
  return 'test';
}

// string
type returnType = ReturnType<typeof test>;

