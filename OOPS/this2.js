'use strict'

console.log(this);

//👉 ans ->{}

function f(){
    console.log(this)
}

f();

//👉 ans -> undefined

let obj={
    name:"Pushan",
    f:function(){
        console.log(this)
    }
}

obj.f();

// ans -> { name: 'Pushan', f: [Function: f] }

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

//👉 ans ->undefined

