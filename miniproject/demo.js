const inquirer = require('inquirer');


//📌learning about inquirer package 

//👉prompt- is a resolve like function  in functions which accepts object and contains key value pairs 
// value comes in selection
// name gives two choices choices 1 and 2 and stores value in name and .then function recieves either of the 
// two choices and prints accordingly

inquirer
.prompt([
    {
        type :'list',
        name :'selection',
        choices: ['choices1','choices2']
    }
])
.then(function(ans){
    if(ans.selection ==='choices1')
    {
        console.log('choice 1 is selected');
    }
    else
    {
        console.log('choice 2 is selected');
    }
})