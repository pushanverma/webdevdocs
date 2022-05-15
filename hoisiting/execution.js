//📌execution context - a environment , where javascript code is executed and evaluated

//global execution context - by default an execution provided by js ,i.e known as global execution context 
//this is the place where the whole code resides.

//eg. consider a example of nesting a loop , then the first loop is global exec context and the rest are
// sub exec context 


var a =3;
var b =5;

function sum(a,b)
{
    return a+b;
}

var sum1 =sum(5,6);
var sum2=sum(a,b);
console.log(sum1);
console.log(sum2);


