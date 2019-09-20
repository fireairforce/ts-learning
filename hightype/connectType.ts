function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    // 声明一个长度加一的数组然后用空格来填充一波
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  // 类型不满足上面两种类型就报错
  throw new Error(`Expected string or number got ${padding}`);
}

// padLeft("wdwddwdw", false);
