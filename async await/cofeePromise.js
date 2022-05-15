function placeOrder(drink){

    return new Promise(function(resolve,reject){
        if(drink==='coffee')
        {
            resolve('order for coffee')
        }
        else
        {
            reject('order cannot be placed')
        }
    })
}

function processOrder(order)
{
    return new Promise(function(resolve){
        console.log('Order is being processed');
        resolve(`${order} served`);
    })
}



//📌📌PROMIESED SOLUTION


// placeOrder('coffee')
// .then(function(demand){
//     console.log(demand);
//     let processing =processOrder(demand);
//     return processing;
//     // console.log(processing);    when we print it here the Promise is in its Pending stage 
// })

// 👉ans 1->
// order for coffee
// Order is being processed
// Promise { 'order for coffee served' }




// .then(function(processing){
//     console.log(processing);

// })
// .catch(function(err){
//     console.log(err);
// })

//👉 ans2 -> 
// order for coffee
// Order is being processed
// order for coffee served




// 📌📌 ASYNC AWAIT SOLUTION

async function serverOrder(){
    
    try{
        let orderplaced =await placeOrder('tea');
        console.log(orderplaced);
        let processedorder =await processOrder(orderplaced);
        console.log(processedorder);
    }
    catch(error){
        console.log(error);
    }
}

serverOrder();




