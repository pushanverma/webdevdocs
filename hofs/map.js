// higher order functions 


//Map Functions->

//📌Map is itself a function 
// Map takes a callback function as argument 
//Map will call the callback function as many times as the elements in the array
//map will process  every value and will apply the instructions that inside the callback function
//map returns a new array and doesnt make changes in original array 
//it does not chagnge the original array 

//📌Q-1
let arr =[2,3,4,5,6,7,8,9];

let squarr =arr.map(function square(v){
    return v*v;
})

//👉ans -->[
//    4,  9, 16, 25,
//    36, 49, 64, 81 
//  ]

console.log(squarr);
console.log(arr);

//📌 Q-2

// You have to use map function and you will take out firstName and lastName separately

let name1=['Pushan Verma','Chetna Singh','Aditi Srivastava' ,'Chandresh Tomar'];

let modifiedarr=name1.map(function(n)
{
    let splitting=n.split(" ");
    return splitting
})

console.log(modifiedarr);

// 👉ans -->[
//     [ 'Pushan', 'Verma' ],
//     [ 'Chetna', 'Singh' ],
//     [ 'Aditi', 'Srivastava' ],
//     [ 'Chandresh', 'Tomar' ]
//   ]

// let modifierarr1 =name1.map(function(n)
// {
//     let splitting1=n.split(" ");
//     let first =
// })






//Q-3
// you have transaction array and you have to implement map function to convert all this ruppees into dollars
//  dollar to rs 
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

const modifiedarr2 =transactions.map(function(n)
{
    const  value =(n/inrtToUsd).toFixed(2);
    return value;
})

console.log(modifiedarr2);


// 👉ans -->

//👍when tofixed is 0
// [
//     '14',  '41',
//     '54',  '27',
//     '-12', '51',
//     '-61'
//   ]
  //👍when tofixed is 2
//   [
//     '13.51',  '40.54',
//     '54.05',  '27.03',
//     '-12.14', '51.35',
//     '-60.81'
//   ]
  









