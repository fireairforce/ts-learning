// const 声明的变量是不能修改的
const numLivesForCat = 9;

const kitty = {
    name:'Kitty',
    numLives: numLivesForCat
}

// 引用没有变化，但是引用的值是可以改变的
kitty.name = 'Jerry';
kitty.numLives -- ;