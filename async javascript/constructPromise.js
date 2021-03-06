let promise = new Promise(function(resolve,reject){
    const a=2;
    const b=2;
    if(a===b)
    {
        // resolve();
        resolve("yes value are equal");
        //resolve calls .then function 
    }
    else
    {
        // reject();  
        reject("no value are not equal");
        //reject calls ,.catch function   
    }

    // you cannot put .then and catch inside the promise 
})

// π1st way 

// promise.then(function(){
//     console.log("Equal");
// })

// promise.catch(function(){
// console.log("Not Equal");
// })

//π ans ->"Equal"(because value of a & b is 2 )
//π ans -> "Not Equal"(because value of a and b is differennt a=2 , b=4)





// π2nd way(through CHAINING OF THEN AND CATCH)
// promise.then(function(){
//     console.log("Equal");
// }).catch(function(){
// console.log("Not Equal");
// })


//π 3rd way(writing in resolve and reject and returning in then and catch)

promise.then(function(data){
    // console.log(data);
    console.log("result coming from resolve method"+data);
}).catch(function(err){
    // console.log(err);
console.log("result coming from reject method"+err);
})

//πans ->yes value are equal
//πans ->result coming from resolve methodyes value are equal









