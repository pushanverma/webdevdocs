const  fs =require('fs');

let f1p =fs.promises.readFile('f1.txt');

let f2p =fs.promises.readFile('f2.txt');

let f3p =fs.promises.readFile('f3.txt');


function cb(data)
{
    console.log("File data-> "+data);
}

f1p.then(cb);

f2p.then(cb);

f3p.then(cb);

// since promises have aync behaviour so it , it produces diffrent o/p everytime .
// 👉ans ->
// File data-> this is file 2 
// File data-> this is file 3

// File data-> this is file 1


//👉ans ->
// File data-> this is file 1 
// File data-> this is file 3

// File data-> this is file 2