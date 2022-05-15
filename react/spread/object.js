let obj={
    name :'adam',
    address: {
            country:'USA',
            State:{
                    stateName:'New York',
                    pincode:123456
                    }
            }
}

//1. obj2=obj;

//2. obj2={...obj};


// 3.obj.address.country="India";

// obj2={...obj,address:{...obj.address},state:{...obj.address.State}}   //✨SHALLOW COPY

// 6.let obj2=JSON.parse(JSON.stringify(obj)) //✨DEEP COPY

// 4.obj.address.country="India";



// 5.obj.address.country="India";
// obj.address.State.pincode=2222;


console.log(obj);
console.log(obj2);

// 1.👉ans ->
// {
//     name: 'adam',
//     address: { country: 'USA', State: { stateName: 'New York', pincode: 123456 } }
//   }
//   {
//     name: 'adam',
//     address: { country: 'USA', State: { stateName: 'New York', pincode: 123456 } }
//   }

//2.👉 ans ->
// {
//     name: 'adam',
//     address: { country: 'USA', State: { stateName: 'New York', pincode: 123456 } }
//   }
//   {
//     name: 'adam',
//     address: { country: 'USA', State: { stateName: 'New York', pincode: 123456 } }
//   }

//3.(obove spread operator )👉 ans ->
// {
//     name: 'adam',
//     address: {
//       country: 'India',
//       State: { stateName: 'New York', pincode: 123456 }
//     }
//   }
//   {
//     name: 'adam',
//     address: {
//       country: 'India',
//       State: { stateName: 'New York', pincode: 123456 }
//     }
//   }


// 4. below spread operator 4.👉ans ->
// {
//     name: 'adam',
//     address: {
//       country: 'India',
//       State: { stateName: 'New York', pincode: 123456 }
//     }
//   }
//   {
//     name: 'adam',
//     address: { country: 'USA', State: { stateName: 'New York', pincode: 123456 } }
//   }

// 5.👉ans ->
// {
//     name: 'adam',
//     address: { country: 'India', State: { stateName: 'New York', pincode: 2222 } }
//   }
//   {
//     name: 'adam',
//     address: { country: 'USA', State: { stateName: 'New York', pincode: 2222 } },
//     state: { stateName: 'New York', pincode: 123456 }
//   }

//6.(along with 5 conidition open )👉 ans -> 
// {
//     name: 'adam',
//     address: { country: 'India', State: { stateName: 'New York', pincode: 2222 } }
//   }
//   {
//     name: 'adam',
//     address: { country: 'USA', State: { stateName: 'New York', pincode: 123456 } }
//   }

