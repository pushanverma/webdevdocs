const fs =require('fs');

console.log("Before");


// 📌to read file normally through callbacks
// fs.readFile("f1.txt",function(err,data){
//     if(err)
//     {
//         console.log(error);
//     }
//     else{
//         console.log("file data ->"+data);
//     }
// })

// 👉ans -> Before
// file data ->this is file 1

//📌 reading file by PROMISE
// (this is the first stage , where the promise shows pending )
let promise =fs.promises.readFile('f1.txt')
// (here we have used promise present inside the fs module)
console.log(promise);
// 👉(if we replace the file with f3.txt , then it would not run because it will not run )
// ans->
// Before
// Promise { <pending> }
// After
// (after pending stage , we have two stages -either to get fulfilled or to get rejected)
// fulfill - is done by .then 
// reject - is done by .catch
// just like try and catch

promise.then(function(data){
    console.log("File data->"+data);
})

promise.catch(function(err){
    console.log(err);
})
//👉 ans -> Before
// Promise { <pending> }
// After
// File data->this is file 1

console.log('After');

