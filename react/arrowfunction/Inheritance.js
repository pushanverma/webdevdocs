class Person
{
 constructor(name,age){
     (this.name =name),(this.age=age);
 }   
}
class teacher extends Person
{
    constructor(name, age , classStrength)
    {
        super(name,age)
        this.classStrength=classStrength
    }
}

class student extends Person
{
    constructor(name, age , cgpa){
        super(name , age)
        this.cgpa =cgpa
    }
}

let person1= new Person("Adam",25);
let teacher1=new teacher("Sunita",36,100);
let student1=new student("Mark",21,8.3);

console.log(person1);
console.log(teacher1);
console.log(student1);

// 👉 ans -> 
// Person { name: 'Adam', age: 25 }
// teacher { name: 'Sunita', age: 36, classStrength: 100 }
// student { name: 'Mark', age: 21, cgpa: 8.3 }