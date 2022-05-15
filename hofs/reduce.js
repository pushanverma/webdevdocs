const arr =[2,3,4,5,6];

// c is a procedural language 
// c++ and java is a object oriented language
// javascript is a functional programming language

//reduce returns only single time after executing the whole program 


let addition =arr.reduce(function(sum,value){
    let updatedsum =sum+value;
    return updatedsum
},0)

console.log(addition);

// 👉ans ->20

let multiplication =arr.reduce(function(product,value){
    let updatedproduct =product*value;
    return updatedproduct
},1)

console.log(multiplication);

// 👉ans->720


//📌📌ReduceRight

// (It is same as reduce , only diffrence is that it runs from right)
let addition1=arr.reduceRight(function(sum,value){
    let updatedsum1=sum+value;
    return updatedsum1
},0)

console.log(addition1);

// ans->20



