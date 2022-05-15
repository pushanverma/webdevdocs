const fs =require('fs');

console.log('Before');

fs.readFile('f1.txt',cb1);

function cb1(err,data){
    if(err)
    {
        console.log(error);
    }
    else
    {
        console.log(" "+data);
        fs.readFile('f2.txt',cb2);
    }
}

function cb2(err,data){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(" "+data);
        fs.readFile('f3.txt',cb3);
    }
}

function cb3(err,data){
    if(err)
    {
        console.log(err);
        
    }
    else
    {
        console.log(" "+data);
    }

}

console.log('After');

//👉 ans ->
// Before
// After
//  this is file 1
//  this is file 2
//  this is file 3





