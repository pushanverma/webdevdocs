//👉 Objects is known to as "hashmap in java" and in "python it is called as dictionary"

// object is a group of key , value pair

//key: value --> propert
//key: function --> method

// key can be string/integr and same ways value also

let cap={
    name:"Steve",
    lastName:"Rogers",
    address:{
        city:"Manhattan",
        state:"New York"
    },
    age:35,
    isAvenger:true,
    movies:["First Avenger","Winter Soldier","Civil War"],
    sayHi: function() 
    {
    console.log("Cap says HI ");
    }
};
//📌get (getting keys)
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();


//📌set /update 
// console.log("cap",cap);
// cap.age =36;
// cap.isAvenger=false;
// cap.friends=["Tony","Bruce","Peter"];
// console.log("---------------------------------------");


//📌delete
// delete cap.address;
// console.log("cap",cap);

//👉diffrence between .(dot) & [](square bracket)  -->(cap.age and cap[propkey] ,where propkey="age")
// (cap.age gives values direcet , but cap[propkey] gives values through varibale )
let propkey="age"
console.log(cap[propkey]);
console.log(cap["age"]);


//📌for in loop
for(let key in cap)
{
    console.log(key," : ",cap[key]);
}

//👉 it basically internally makes its as cap["name"],cap["lastname"],cap["address"] everytime and gives the answer,
// its just the other way of writing ,nothing else

// 📌if we want to print a key , i.e not present in object , then we get undefined  for that 

 console.log(cap.xyz);




