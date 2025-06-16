const arr1: number[] = [2, 4];
const arr2: number[] = [10, 5];
const concat = <T, A>(array1: T[], array2: A[]) => {
  return [...array1, ...array2];
}
console.log(concat(arr1, arr2));

//Parte opcional
//Envez de array1, deveremos poner todos los arrays que nos pasen por lo que pondremos ...argumentos: T[][]
const arrOpcional: number[]= [1, 40];
const concat2 = <T>(...argumentos: T[][]): T[] => {
  const total: T[] = [];
  for (const array of argumentos) {
    for (const elemento of array) {
      total.push(elemento);
    }
  }
  return total;
};
console.log(concat2(arr1, arr2, arrOpcional, [1, 2, 3]));