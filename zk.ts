let first = [1, 2];
let second = [4, 5];
let bothPlus = [0,...first,...second,5];

let defaults = {
    food:'spicy',
    price:'$10',
    ambiance:'noisy'
}

let search = {
    ...defaults,
    food:'rich'
}

console.log(search);