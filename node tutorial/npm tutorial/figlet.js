const figlet =require('figlet')

// var figlet = require('figlet');

figlet('Hello Pushan!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});