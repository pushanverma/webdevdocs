//📌find

// it just works same as filter , but it doesnot give array , it finds the first value according to the condition and return 



const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let ans =transactions.find(function(n)
{
    return n<0;
})

console.log(ans);

// 👉ans -->-898