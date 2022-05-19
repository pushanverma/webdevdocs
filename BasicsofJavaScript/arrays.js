// 📌array decalration in js

let array=[1,2,3,4,5];
console.log(array);


//📌length of array
console.log(array.length);


//📌while loop
let i=0;
while(i<array.length)
{
    console.log("The element at ",i,"is->",array[i]);
    i++;
}


//📌 In javascript we can add any data type in array , suppose we have a array of 1,2,3,4,5 amd we want to add "hello"
// which is a string , so we can add that in it 



//📌📌push (adding to back), unshift(adding to front)
array.push("last value");
console.log(array);

//👉ans --> [ 1, 2, 3, 4, 5, 'last value' ]

array.unshift("first value");
console.log(array);

//👉 ans -->[ 'first value', 1, 2, 3, 4, 5, 'last value' ]

//📌📌pop(removing from last) ,shift(removing from front )

array.pop();
console.log(array);

//👉 ans -->[ 'first value', 1, 2, 3, 4, 5 ]

array.shift();
console.log(array);
// 👉ans -->[ 1, 2, 3, 4, 5 ]


// 📌📌indexof ,contains[see yourslef]


//📌📌slice(staring index,ending index)--> you can relate to as substring , 
let partofarray=array.slice(2,4);
console.log(partofarray);


// ans -->[ 3, 4 ] i.e isne last wale index se pehle ka maal bheja hai 

let partofarray2=array.slice(2);
console.log(partofarray2);


// ans-->[ 3, 4, 5 ] i.e usne 2 se lekar saare end tak de diye

// 📌📌splice (staring,ending) --> it deletes from starting to ending index (it changes the array and not gives the copy array wih changes)

array.splice(2,3);
console.log(array);

 //ans -->[ 1, 2 ]  i.e it deletes from 2nd index and deletes 3 values from 2nd index (you can consider 3 as count and not the index)

//indexof()[basically gives the index of any element ] and contains()[it tells whether the element is present or not ] 














