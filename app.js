//flat method : it converts multiple array into single array


//task1

let arr = [1, [[2, [3, [4, [5]]]]], 6];
let result = arr.flat(4);

console.log(result);

//task2

let numbers = [10,[[20,30,40],[50,[60,70],80,[90,100],110],][120,130],140];
let result1 = numbers.flat(Infinity);
console.log(result1);

//task3

let cart = ["Mobile",["Laptop", "Mouse"],["Keyboard", ["Headphones", "Charger"]], "Watch"];

let result3 = cart.flat(Infinity);

console.log(result3);



//task4

let nestedarray = [10, [[20, [30, 40]], 50], [[60, 70], 80]];

let resultt = nestedarray.flat(3);
console.log(resultt);


//task4

let array = [1, [[2, 3], [4, [5, 6]]], [7, [8, [9, 10]]]];

let resullt = array.flat(Infinity);
console.log(resullt);


//task5

let num = [1,[[4,9],[5,[9 ,5]]],[4,[7,[5,0]]]];

let result5 = num.flat(4);
console.log(result5)


//task6

let fees = [[15000, 20000],[25000, [30000, 35000]],[40000, 45000]];

let result6 = fees.flat(2);

console.log(result6);


//task7

let alph = [['a','b'],['c', ['d', 'e']],['f','g']];
let result7 = alph.flat(Infinity);
console.log(result7)
