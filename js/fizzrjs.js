// Fizbuzz code.
var number = prompt("Enter a Number");
number = parseInt(number, 10);


//Count through numbers 1 to 100 and find the numbers divisivble by 3, 5, or both.
  for (var i=1; i<=number; i++){

  //For each number, do the following check:

  //See if it is divisible by 3
  if (i % 3 === 0){
    //If so: Psee if it is ALSO divisble by 5.
    if(i % 5 === 0){
      //See if it is divisible by 3 or 5 If so: Print Fizzbuzz.
      console.log('FizzBuzz');
    } else {
      //If only dibisible by 3: Print Fizz
      console.log('Fizz');
    }
  }

  else if (i % 5 === 0) {
    //See if it is divisible by 5
    //If so: Print Buzz
    console.log('Buzz');
  } else {
    //See if it is divisible by 3 or 5
    //If so: Print print number
    console.log(i);
   
    
  }
}
