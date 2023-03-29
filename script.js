function prep() {
    console.log("Hello Prepbyte");
}
prep();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function sum(a,b) {
    console.log(a+b);
}
sum(3,4)
// Create one arrow function
  const sum=(a,b)=>{
    console.log(a+b);
  }
  sum(10,20);



var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
var x = 21;

girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
}

// question 6

var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

// Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    let fact=1;
    for(i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    console.log(fact);
}
factorial(5)


// day 2 question 1



function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}


var a = 10;
(function (){
    console.log(a);
    var a = 20;
   
})();

const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")