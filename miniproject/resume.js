const inquirer = require('inquirer');
const cp =require('child_process');

//learning about inquirer package 

//prompt- is a resolve in functions which accepts object and contains 
// value comes in selection
// name gives two choices choices 1 and 2 and stores value in name and .then function recieves either of the 
// two choices and prints accordingly

function displayList()
{
    inquirer
    .prompt([
        {
            type :'list',
            name :'selection',
            choices: ['About','Skills','Education','Projects']
        }
    ])
    .then(function(ans){
        if(ans.selection ==='About')
        {
            console.log('Hi I am a developer ,Hustler and Fighter ,I will achieve my goals with my hard work .');
            displayNext();
        }
        else if(ans.selection ==='Skills')
        {
            console.log('Java , JavaScript , react ,MongoDb ,Express.js , Node.js');
            displayNext();
        }
        else if(ans.selection ==='Education')
        {
            cp.execSync('start chrome https://drive.google.com/file/d/1rzx1lqn9A-IR6b9AXUqSQ6myjN52IkeG/view?usp=sharing')
            displayNext();
        }
        else
        {
            cp.execSync('start chrome https://github.com/pushanverma')
            displayNext();
        }
    })
}

displayList();
function displayNext()
{
    inquirer
.prompt([
    {
        type :'list',
        name :'selection',
        choices: ['Go back','exit']
    }
])
.then(function(ans){
    if(ans.selection==='Go back')
    {
        displayList();
    }
    else
    {
        console.log('Resume closed');
    }
})
}