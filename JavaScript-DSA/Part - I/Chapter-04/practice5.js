//  FizzBuzz: for 1 to 30, print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5,
// 'FizzBuzz' for both,  otherwise the number.

// multiples/gunitok 3 => Fizz || Buzz for 5 

let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(num);
}
