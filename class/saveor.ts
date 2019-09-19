// 把一个普通的类改写为存取器的形式
let passcode = "secret1 passcode";

class Employee {
  private _fullName: string;
  get fullName() {
    return this._fullName;
  }
  set fullName(newName: string) {
    //   检查密码修改是否符合限制
    if (passcode && passcode === "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error:Unauthorized update of employee!");
    }
  }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
