const fs =require('fs');

console.log("before");
// let data =fs.readFileSync('f1.txt');

fs.readFile('f1.txt',cb);
fs.readFile('f2.txt',cb2);


function cb(err,data)
{
    if(err)
    {
        console.log(err);
    }
    console.log(" "+data);

}

function cb2(err,data)
{
    if(err)
    {
        console.log(err);
    }
    console.log(" "+data);

}


console.log("after");

// 👉 ans ->
// before
// after
//  this is file 2
//  this is file 1
