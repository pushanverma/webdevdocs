let arr =[1,2,3,4];

let arr2=arr;

arr.push(5)
arr[2]=23;
console.log(...arr);
console.log(arr2);

//👉ans -> [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4 ] 

// since we change one value in array , and both the array reflects changes , because they both points to same address 
// this is called ✨"access by reference in js"  

//👉ans ->[ 1, 2, 3, 4, 5]
// [ 1, 2, 3, 4, 5 ]

// 👉ans->1 2 3 4 5 6    //when console.log(...arr);
// [ 1, 2, 3, 4, 5, 6 ]

//📌when we try to modify indexes in array 
// 1 2 23 4 5
// [ 1, 2, 23, 4, 5 ]






