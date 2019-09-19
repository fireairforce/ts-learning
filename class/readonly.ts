class Person0{
    readonly name:string
    constructor(name:string) {
        this.name = name;
    }
}
let john = new Person0('john');
// 只读的类就不能修改了
// john.name = 'xxx';