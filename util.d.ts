type Partical<T> = {
  [K in keyof T]?: T[K];
}

type Required1<T> = {
  [K in keyof T]-?: T[K];
}

type ReadOnly1<T> = {
  readonly [K in keyof T]: T[K];
}

