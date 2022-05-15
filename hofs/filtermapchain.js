
//👉 Q-those who are female , we have to return their age 
let arr = [
    {name: "A", age: 14, gender: "M"}, 
    {name: "B", age: 34, gender: "M"}, 
    {name: "C", age: 24, gender: "F"}, 
    {name: "D", age: 44, gender: "F"}, 
    {name: "E", age: 44, gender: "M"}, 
    {name: "I", age: 28, gender: "F"}, 
    {name: "G", age: 36, gender: "M"}, 
    {name: "H", age: 47, gender: "F"}
]


let ladiesage =arr.filter(function(n)
{
    if(n.gender=='F')
    {
        return true;
    }
    else
    {
        return false;
    }
})

console.log(ladiesage);

// 👉ans -->[
//     { name: 'C', age: 24, gender: 'F' },
//     { name: 'D', age: 44, gender: 'F' },
//     { name: 'I', age: 28, gender: 'F' },
//     { name: 'H', age: 47, gender: 'F' }
//   ]

let finalans =ladiesage.map(function(n){
    return n.age; 
})

console.log(finalans);

// 👉ans -->[ 24, 44, 28, 47 ]




//this was the naive approach to the problem 

//now we will study this 



//📌📌FILTER MAP CHAIN

let ladiesage1 =arr.filter(function(n)
{
    if(n.gender=='F')
    {
        return true;
    }
    else
    {
        return false;
    }
}).map(function(n){
    return n.age
})


console.log(ladiesage1);

// 👉ans --> [ 24, 44, 28, 47 ]