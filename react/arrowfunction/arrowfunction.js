// 😊ARROW FUNCTIONS 

//                                             ✨EXAMPLE 1
let add =function addition(a,b)
{
    console.log(a+b);
}

add(3,4)
//👉 ans -> 7
let add1 =(a,b)=>{
    console.log(a+b)
}
add1(3,2)
//👉 ans -> 5

//                                              ✨EXAMPLE 2
let regularfunction =function(name)
{
    console.log(`I am ${name} `);
}
regularfunction('Adam');
// 👉ans -> I am Adam

let arrowfunction =(name)=>
{
    console.log(`I am ${name} `);
}
arrowfunction('Steve Rogers');

// 👉ans -> I am Steve Rogers

//                                               ✨EXAMPLE 3
function test1()
{
    console.log(this); //global object 
}

let test2 =()=>{
    console.log(this);
}

test1()
test2()

// ans -> 
// global object 
// {}  //this returns empty object 





//                                               ✨EXAMPLE 4

let person ={
    name :'Adam',
    age :27,
    showDetails : function(){
        console.log(this.name+" "+this.age);
    },
    showArrowDetails: ()=>{
        console.log(this.name+" "+this.age);
    }

}

person.showDetails()
person.showArrowDetails()

// 👉ans -> 
// Adam 27
// undefined undefined