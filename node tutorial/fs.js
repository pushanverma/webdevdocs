
const fs =require('fs');

const path=require('path');

//reading file
// let content =fs.readFileSync('f1.txt');
//  console.log("Hello"+content);

//writing a file
//  fs.writeFileSync('f2.txt', 'This data is from f2');
 
//updating a file
// fs.appendFileSync('f2.txt','this is new data');


//deleting a file

// fs.unlinkSync('f3.txt');
//  console.log("deleted");





//--------------Folders----------------------------------//

// 1. making directory / making folder

// fs.mkdirSync('myDirectory')
//  console.log('directory added');



//2.removing directory (comment above mkdirSync otherwise error)

//  fs.rmdirSync('myDirectory')
//   console.log('directory deleeted');



  //3.existence of directory -return true or false

// let doesexist=fs.existsSync('myDirectory')
//  console.log(doesexist);










let sourcefilepath='C:\\Users\\pusha\\OneDrive\\Desktop\\Pep web dev\\node tutorial\\myDirectory\\f12.txt';
// (jaha se file leni hai )

let destinationpath='C:\\Users\\pusha\\OneDrive\\Desktop\\Pep web dev\\node tutorial\\myDirectory2';
// (jaha par file paste karni hai )

let tobecopiedFilename=path.basename(sourcefilepath);
 console.log(tobecopiedFilename);

 let destpath=path.join(destinationpath,tobecopiedFilename);
  console.log(destinationpath);

  fs.copyFileSync(sourcefilepath,destinationpath);
  console.log('file copied');