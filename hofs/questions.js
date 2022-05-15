
// 📌Q-1 Get the number of products whose price is atleast 100

const products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 },
  ];

//   let prouductabove100 =products.map(function(products){
//         return products.price
//   }).filter(function(price){
//       return price>=100
//   }).length

// 👉ans->2  (correct one )

//📌Approach -2

  let productabove100 =products.filter(function(item){
      return item.price>=100
    }).map(function(item){
        return item.name
    }).length
    
    console.log(productabove100);

    //👉 ans -> 2(also correct one 😊)



//📌 Q-2 //Get the movie Names from this Array of Objects
//method and only get the movie name which has rating higher than or equal to 8
// use Filter and map  chaining to achaive the objective


var newReleases = [
    {
           "id": 1,
           "title": "Die Hard",
            "rating":9
           
    },
    {
           "id": 2,
           "title": "Bad Boys",
            "rating":7
           
    },
    {
           "id": 3,
           "title": "The Chamber",
           "rating": 10
           
    },
    
];

// soltion---->
let moviename =newReleases.filter(function(movie){
    return movie.rating>=8
}).map(function(movie){
    return movie.title
})


console.log(moviename);

// 👉ans ->[ 'Die Hard', 'The Chamber' ]


//📌 Q-3

//👉(a)You have to use map function and have to get all the students name in upperCase
//Map Question


//👉(b)Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord 
//use filter method to approach the problem
let studentRecords = [ {name: 'Abhishek', id: 123, marks : 98 },
          {name: 'Udai', id: 101, marks : 90 },
          {name: 'Himanshu', id: 200, marks : 96 },
          {name: 'Mrinal', id: 115, marks : 75 } ]


//   solution -(a)


let ans1 =studentRecords.map(function(student){
    return student.name.toUpperCase();
})

console.log(ans1);

// 👉ans ->[ 'ABHISHEK', 'UDAI', 'HIMANSHU', 'MRINAL' ]


let ans2=studentRecords.filter(function(stu){
    if(stu.marks>50 && stu.id>120)
    return stu
})

console.log(ans2);

// 👉ans->[
//     { name: 'Abhishek', id: 123, marks: 98 },
//     { name: 'Himanshu', id: 200, marks: 96 }
//   ]


// 📌📌Reduce questions 


// From the transaction array filter out positive Elements and calculate the total amount 
// Use filter and reduce method

const transactions =[1000,3000,4000,2000,-898,3800,-4500];

let ans =transactions.filter(function(transactions){
        return transactions>0
}).reduce(function(answer,value){
    let sum =answer+value
    return sum
},0)

console.log(ans);

// 👉ans ->13800






