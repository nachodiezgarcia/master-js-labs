//clone function
const obj1: object = {
  name: "Manolo"
};
function clone<T> (source: T):T {
  return {...source};
};

console.log(clone(obj1));

//merge function
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
const merge = <A extends object, B extends object>(Obj1: A, Obj2: B): A & B =>{
  return {...Obj2, ...Obj1};
}
console.log(merge(a, b));