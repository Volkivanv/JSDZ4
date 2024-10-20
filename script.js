//1

//1.1
// const arr = [1, 2, 3];
// arr.forEach(element => {
//     console.log(element);
// });

//1.2
// const arr2 = ['ghg',1,4,2,'asdf'];
// console.log(arr2.length);

//1.3
// const abc = ['a', 'b', 'c'];
// console.log(abc);
// for (let i = 0; i < abc.length; i++) {
//     abc[i] = i+1;
// }

// console.log(abc);

//2
//2.1
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
    
// }
// console.log(arr);

//2.2
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr);

//2.3
// const arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// console.log(arr);

//2.4
// const arr = ['e','q', 2, 5, '6'];
// console.log(arr.shift());
// console.log(arr.pop());
// console.log(arr.length);

//3
//3.1
// for (let i = 11; i < 34; i++){
//     console.log(i); 
// }

//3.2
// for (let i = 2; i < 50; i++) {
//     console.log(2*i);
// }

//3.4
// for (let i = 100; i >=0; i--) {
//     console.log(i);
    
// }
//3.5
// let x = 2;
// let j = 0;
// for (let i = x; i < 1000; i*=3){
//     console.log(i);
//     console.log(j);
//     j++;

// }

//4
//4.1

// const arr = [2, 5, 9 , 15, 1, 4];
// arr.forEach(element => {
//     if(element > 3 && element < 10){
//         console.log(element);
//     }
// });

//4.2
// let sum = 0;
// for (let i = 2; i <= 500; i++) {
//     sum+=i*2;
// }

// console.log(sum);

//4.3
// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// arr.forEach(element => {
//     sum+=element;
// });
// console.log(sum);

//4.4
// let str = '-';
// for (let i = 1; i < 10; i++) {

//     str+=i+'-';
// }
// console.log(str);

//4.5
// const arr = [2, 5, 9, 0, 3, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element !== 0){
//         console.log(element);
//     } else {
//         break;
//     }
// }

//Homework
//1 Описание задачи: Используя цикл for, выведите в консоль 11 строк, где каждая
// строка содержит индекс и описание числа (0 - это ноль, 1 - нечетное число, 2 - четное
//     число и т.д.).

// for (let i = 0; i < 10; i++) {
//     if(i === 0){
//         console.log(`${i} - это ноль`);
//     } else if (i%2 == 0) {
//         console.log(`${i} - четное число`);
//     } else {
//         console.log(`${i} - нечетное число`);
//     }
// }

//2 Описание задачи: Имеется массив [1, 2, 3, 4, 5, 6, 7]. Необходимо удалить
// элементы 4 и 5, чтобы получить массив [1, 2, 3, 6, 7].

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(arr.indexOf(4),1);
// arr.splice(arr.indexOf(5),1);

// console.log(arr);

//3
// const arr = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(Math.floor(Math.random()*10));
// }
// console.log(arr);

// let sum = 0;
// arr.forEach(element => {
//     sum+=element;
// });
// console.log(sum);

// console.log(Math.min(...arr));

// console.log(arr.includes(3)? `в массиве есть 3`: `в массиве нет 3`);

//4
for (let i = 1; i < 20; i++) {
    console.log('x'.repeat(i));
    
}