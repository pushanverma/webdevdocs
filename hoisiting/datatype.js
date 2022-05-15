
// 📌Primitive and Non Primitive data type


//📌 PRIMITIVE DATA TYPE
let a =2.5
console.log(a,typeof(a))

//👉 ans -->2.5 number


let b ="hello"
console.log(b,typeof(b));

//👉ans -->hello string

let c =true
console.log(c,typeof(c));

//👉ans -->true boolean

let d =undefined
console.log(d,typeof(d));

//👉 ans -->undefined undefined

let e =null
console.log(e,typeof(e));

// 👉ans-->null object

//📌Even though null is a primitive data type , it is given object in js (in  js - it is treated as missing object)(it is considered as a bug in js till date)






//📌 📌NON PRIMITIVE DATA TYPE


let firstperson ="hitesh"

let secondperson =firstperson

console.log(firstperson);
console.log(secondperson);

// 👉ans-->(ACCESS BY VALUE)
// hitesh
// hitesh

let firstperson1 ="hitesh"

let secondperson1 =firstperson

firstperson1="arshad"

console.log(firstperson1);
console.log(secondperson1);

//👉 ans -->(ACCESS BY REFERENCE )
// arshad
// hitesh



