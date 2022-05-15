//📌Some function


//some elements should follow the condition . ie if any of the one follow the condition then it will return true

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


//displaying element that is +ve
let ans =transactions.some(function(n)
{
    return n>0
})

console.log(ans);

// 👉ans -->true


const transactions1 = [-1000, -3000, -4000, -2000, -898, -3800, -4500];

//displaying element that is +ve
let ans1 =transactions1.some(function(n)
{
    return n>0
})

console.log(ans1);

//👉 ans ->false