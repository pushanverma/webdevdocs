class person 
{
    constructor(name , age){
        this.name =name
        this.age =age
    }
}

class teacher
{
    constructor(name , age){
        this.name =name
        this.age =age
    }
}


let person1=new person('Adam',27);
console.log(person1);
//👉 ans ->person { name: 'Adam', age: 27 }

let teacher1 =new teacher('Sunita',36)
console.log(teacher1); 
//👉ans -> teacher { name: 'Sunita', age: 36 }

