const cp=require('child_process')

// console.log("opening calculator");

// cp.execSync('calc')

// console.log("opening vscode");

// cp.execSync('code');

// cp.execSync('start chrome https://www.pepcoding.com/resources/');


// cp.execSync('start firefox https://www.youtube.com/watch?v=reQs3g5LO8E');

let output=cp.execSync('node test.js')
console.log("output->" +output);