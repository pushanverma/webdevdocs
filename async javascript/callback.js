//Call back functions -Any function that is passed as an argument to another function is known as Callback function.



function printFirstname(firstname,cb,cb2)
{

    //cb recieves Lastname function
    //cb2 recieves printage function
 console.log(firstname);
 cb("Verma")
 cb2(22);
}

function printLastname(lastname)
{
    console.log(lastname);
}

function printAge(age)
{
    console.log(age)
}

printFirstname("Pushan",printLastname,printAge);

//👉 ans->
// Pushan
// Verma
// 22
