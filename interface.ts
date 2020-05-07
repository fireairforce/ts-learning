interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 object" };

printLabel(myObj);


interface Person {
  readonly id: number;
  name: string;
  
}