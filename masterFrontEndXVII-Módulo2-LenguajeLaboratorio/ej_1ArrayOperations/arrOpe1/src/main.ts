const arr: number[] = [1, 2, 3, 4];

const head = <T>(array: T[]): T => {
    const [first,]= array;
    return first;
};
console.log(head(arr));

const tail = <T>(array: T[]): T[] => {
    const [, ...rest] = array;
    return rest;
};
console.log(tail(arr));

const init = <T>(array: T[]): T[] =>{
    const arrayLast: number = array.length-1;
    return [...array.slice(0, arrayLast)];
};
console.log(init(arr));

// Con operador spread "Solo el ultimo elemento"
const last = <T>(array: T[]): T[] => {
    const arrayLast: number = array.length-1;
    return [...array.slice(arrayLast, array.length)];
}
console.log(last(arr));

//last sin métodos del Array.prototype
const last2 = <T>(array: T[]): T => {
    const arrayLast: number = array.length-1;
    return array[arrayLast];
}
console.log(last2(arr));