abstract class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printName(): void {
    console.log(`Department name ${this.name}`);
  }
  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting ad Auditing");
  }

  printMeeting(): void {
    //   每天早上10点开会
    console.log("The Accounting Department meets each Monday at 10am");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
let department: AccountingDepartment;
department = new AccountingDepartment();
// 他可以调用抽象类里面的方法，但是无法调用派生类里面的方法
department.printName();
department.printMeeting();

// 这个地方就会报错
department.generateReports();