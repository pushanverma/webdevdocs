//📌every function

//every element should follow the condition 

//if all the elements follow the condition then only it will return true
const transactions = [1000, 3000, -4000, 2000, -898, 3800, 4500];


//displaying element that is +ve
let ans =transactions.every(function(n)
{
    return n>0
})

console.log(ans);

//👉 ans -->false


const transactions1 = [-1000, -3000, -4000, -2000, -898, -3800, -4500];

//displaying element that is +ve
let ans1 =transactions1.every(function(n)
{
    return n<0
})

console.log(ans1);

// 👉ans ->true