// 使用setTimeout模拟像服务器端请求数据

function fetchUserInfo(userId: string): Promise<{}> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ userId });
    }, 1000);
  });
}

function fetchCartInfo(userId: string): Promise<{}> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ userId });
    }, 1200);
  });
}

function fetchGoodInfo(userId: string): Promise<{}> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ userId });
    }, 1400);
  });
}

Promise.all([fetchUserInfo("1"), fetchCartInfo("2"), fetchGoodInfo("3")]).then(
  res => {
    console.log(res);
  }
);

// 编译使用 tsc promise.ts --target es2015来进行编译
