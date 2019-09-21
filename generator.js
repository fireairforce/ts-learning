function* infiniteList() {
    let i = 0;
    while (i < 3) {
        yield i++;
    }
}
let gen = infiniteList();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// console.log(gen.next());
//同样使用es2015去进行编译
function* generator() {
    console.log(`Execution started`);
    yield 0;
    console.log(`Execution resumed`);
    yield 1;
    console.log(`Execution end`);
}
const iterator = generator();
console.log(iterator.next().value);
console.log(iterator.next());
// console.log(iterator.next());
