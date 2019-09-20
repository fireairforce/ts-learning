class BeeKeeper {
  hasMask: boolean;
}

class LionKeeper {
  nametag: string;
}

class Animal {
  numLengs: number;
}

class Beg extends Animal {
  keeper: BeeKeeper;
}

class Lion extends LionKeeper {
  keeper: LionKeeper;
}

function createInstance<T extends Animal>(c:new()=>T):T{
    return new c();
}

