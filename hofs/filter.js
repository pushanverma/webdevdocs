

//📌Filter 
//filter returns a new array containing array elements that matches a specified condition 

//it doesnot change the original array
//for loop ki condition ki jesi hai yeh 
//jo value true hongi wahi array mei jakar gir jayengi , aur jinki condition satisfy nahi hongi wo discard ho jauengi 



// 📌Q-1
let arr=[2,3,4,5,6,7,8,9];

let ans =arr.filter(function(n)
{
    if(n%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
)

console.log(ans);

// 👉ans ->[ 2, 4, 6, 8 ]



//📌Q-2

//Filter out the profit in transactions i.e the +ve ones

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


let profit=transactions.filter(function(n){

    if(n>0)
    {
        return true;
    }
    else
    {
        return false;
    }
})

console.log(profit);

//👉 ans --> [ 1000, 3000, 4000, 2000, 3800 ]

