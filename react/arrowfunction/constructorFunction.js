function car(Name, Model, Color)
{
    this.name =Name 
    this.model =Model
    this.color =Color

    this.test =function(){
        console.log(`I am driving ${this.model} `);
    }
}

let car1=new car('BMW','X6','White')
let car2=new car('Mercedes','G Wagon','Golden')
console.log(car1);
console.log(car2);
// 👉ans ->
// car {
    //     name: 'BMW',
    //     model: 'X6',
    //     color: 'White',
    //     test: [Function (anonymous)]
    //   }
    //   car {
        //     name: 'Mercedes',
        //     model: 'G Wagon',
        //     color: 'Golden',
        //     test: [Function (anonymous)]
        //   }
        
        car1.test();
// ans -> I am driving X6