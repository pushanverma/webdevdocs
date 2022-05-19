// 📌STRINGS

//👉 i.e string can be declared in single and double quotes unlike java 
let singlequote ='single quote ki string';
let doublequote ="double quote ki string";

console.log(singlequote);
console.log(doublequote);


//📌charAt
let char =singlequote.charAt(3);
console.log(char);


// ans-->g

//📌charCodeAt
// (basically it gives ascii value of the charAt )

let ascii=singlequote.charCodeAt(3);
console.log(ascii);

// ans-->103 (ascii value of g)

//📌substring
// (it gives substring as java )
let substr =singlequote.substring(2,8);
console.log(substr);

// ans-->ngle q



//📌split 
// (it acts like split in java (stringBuilder) but here it gives array of strings as output)


let arrstr=singlequote.split("i");
console.log(arrstr);
// ans-->[ 's', 'ngle quote k', ' str', 'ng' ]


let nospace =singlequote.split("");
console.log(nospace);
// ans-->[
//     's', 'i', 'n', 'g', 'l',
//     'e', ' ', 'q', 'u', 'o',
//     't', 'e', ' ', 'k', 'i',
//     ' ', 's', 't', 'r', 'i',
//     'n', 'g'
//   ]

//📌 join 
// (int arrstr1 we have splitted on the basis of " "(space) and after that we have joined on the basis of $ )
let arrstr1=singlequote.split(" ");
console.log(arrstr1);
let str=arrstr1.join("$")
console.log(str);

// ans-->[ 'single', 'quote', 'ki', 'string' ]
// single$quote$ki$string

//📌trim
// (basically it removes white spaces from front and end )

let ans ='  hello my name is pushan    ';
console.log(ans.trim());


// ans-->hello my name is pushan
// (you can see that ans has so many white spaces infront and at back , so trim removes it )





