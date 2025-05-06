/*
  var, let, const – scope and hoisting
  Primitive types: string, number, boolean, null, undefined, symbol
   Reference types: object, array, function
*/

// var name = 'Jhon doe';
// let name2 ='Jack';
// const name3= "Kate Williums";

// var x =10;
//   function Sum(n1,n2)
//   {
//       var y=80;
      
//       console.log(y);//80
//       console.log(x);//10
//       {
//         let x=45;
        
//         console.log(x);//45
//       }
//       console.log(x);//10
//   }
//  function Sub(n1,n2)
//   {
//       var z=90;
//       console.log(z);//90
//       console.log(x);//10
//       //console.log(y);//undefined
//   }

//   Sum();
//   Sub();

let num =5 ;
console.log(typeof num);
num ="Ram";
console.log(typeof num);
num =true;
console.log(typeof num);
num = null;
console.log(typeof num);

num = undefined;
console.log(typeof num);
