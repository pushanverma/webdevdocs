

console.log(this);


// 👉ans -> {}
// this returns a empty object 

function f(){
    console.log(this)
}

f();
// 👉ans ->
//this returns a global object 
// {/* <ref *1> Object [global] { */}
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],       
//   clearImmediate: [Function: clearImmediate],       
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }

let obj={
    name:"Pushan",
    f:function(){
        console.log(this)
    }
}

obj.f();
// 👉ans ->{ name: 'Pushan', f: [Function: f] }
// returns object itself


let obj2={
    name:"Pushan",
    f:function f(){
        function g(){
            console.log(this);
        }
        g()
    }
}

obj2.f()

// 👉 ans->
// this will also returns a global object 
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }