
// ๐Primitive and Non Primitive data type


//๐ PRIMITIVE DATA TYPE
let a =2.5
console.log(a,typeof(a))

//๐ ans -->2.5 number


let b ="hello"
console.log(b,typeof(b));

//๐ans -->hello string

let c =true
console.log(c,typeof(c));

//๐ans -->true boolean

let d =undefined
console.log(d,typeof(d));

//๐ ans -->undefined undefined

let e =null
console.log(e,typeof(e));

// ๐ans-->null object

//๐Even though null is a primitive data type , it is given object in js (in  js - it is treated as missing object)(it is considered as a bug in js till date)






//๐ ๐NON PRIMITIVE DATA TYPE


let firstperson ="hitesh"

let secondperson =firstperson

console.log(firstperson);
console.log(secondperson);

// ๐ans-->(ACCESS BY VALUE)
// hitesh
// hitesh

let firstperson1 ="hitesh"

let secondperson1 =firstperson

firstperson1="arshad"

console.log(firstperson1);
console.log(secondperson1);

//๐ ans -->(ACCESS BY REFERENCE )
// arshad
// hitesh



