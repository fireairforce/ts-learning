interface Square {
  color: string;
  area: number;
}

// 加个问号表示属性是可选的
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: "white", area: 1000 };
  // 这里判断一下可选属性
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({})
console.log(createSquare({}));
console.log(createSquare({color:'blue',width:100}));
console.log(createSquare({color:'yello'}));
