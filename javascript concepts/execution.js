// Javascript is  synchronous single threaded .

var a =2;
var b =3;

function add(a,b)
 {
    return a+b;
 }

var sum1 =add(3,7);
var sum2=add(a,b);

console.log(sum1);
console.log(sum2);

