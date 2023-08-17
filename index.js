console.log("%c Привет учитель", "color:red; font-size:55px; ")


let obj1 = { a: "Privet", b: "Uchitel" };
let obj2 = { c: "Ya", d: "Sqwery" };

const koroche_titanik_ytonul = Object.assign({}, obj1, obj2);

console.log(koroche_titanik_ytonul);



const key = Object.keys(koroche_titanik_ytonul);

console.log(
    key)



    let filtr = ["Hello", 123, "World", true, 456, false];

    let types = {
      number: [],
      string: [],
      boolean: [],
      object: []
    };
    
    for (let element of filtr) {
      if (typeof element === "number") {
        types.number.push(element);
      } else if (typeof element === "string") {
        types.string.push(element);
      } else if (typeof element === "boolean") {
        types.boolean.push(element);
      } else {
        types.object.push(element);
      }
    }
    
    console.log(types);


      


