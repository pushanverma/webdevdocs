console.log(this);

// 👉ans ->(returns window object (just like global object))
// Window
// index.html:42 Live reload enabled.

function f(){
    console.log(this);
}

// 👉ans ->{}

let obj1={
    name :'Pushan',
    f:function f(){
        console.log(this);
    }
} 
obj1.f();

// 👉ans ->{name: 'Pushan', f: ƒ}


let obj2={
    name:'Pushan',
    f:function f(){
        function g(){
            console.log(this);
        }
        g()
    }
}

obj2.f();

// ans -> window object
