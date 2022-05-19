function sayHi(param)
 {
     console.log("Hello from Pushan");
     console.log("paramaters recieved ->"+param);
     return "\n returning hello from our side";
 }


 //👉 Math.random gives value less than 1 (any value leass than 1 --> 0.9, 0.98, 0.54, 0.32, 0.1)
 function sayHi2(param)
 {
     let val =Math.random() >0.5 ? true : false ;
     return val;
 }



//👉even if we dont write param in argument of sayHi  and in body , we can get console.log  

// 📌param can accept anything , whether it will be (string/ int / arr )
//  sayHi(10);
//  sayHi("hello my name is Pushan Verma , I am sde at Google ");






  // 👉declaring array and then passing 
 let arr =["pushan","verma","is","my name "];
 // 📌to get the return value from  sayHi we should receive it value under a varibale .
 let ans =sayHi(arr);
 console.log(ans);



 let ans2=sayHi2();
 console.log(ans2);


 


 



