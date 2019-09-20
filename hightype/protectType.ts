interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

// function getSmallPet(): Fish | Bird {
//     // ...
// }

let pet = getSmallPet();

if((pet as Fish).swim){
    (pet as Fish).swim();
} else if((pet as Bird).fly){
    (pet as Bird).fly();
}
