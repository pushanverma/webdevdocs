const fs =require('fs');

console.log('Before');

let f1p=fs.promises.readFile('f1.txt');

f1p.then(cb1);

function cb1(data){
console.log("File data->"+data);
let f2p=fs.promises.readFile('f2.txt');
f2p.then(cb2);
}

function cb2(data)
{
    console.log("File data->"+data);
    let f3p=fs.promises.readFile('f3.txt');
    f3p.then(cb3);
}


function cb3(data){
    console.log("File data->"+data);

}



console.log('After');


//👉 ans ->
// Before
// After
// File data->this is file 1
// File data->this is file 2
// File data->this is file 3

