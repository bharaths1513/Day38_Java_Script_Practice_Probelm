//To find the number is prime number or not
let numb = 7;
let isPrime = true;

for (let i = 2; i < numb; i++) {
    let output = numb % i;

    if (output == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(numb + " is a prime Number");
} else {
    console.log(numb + " is not a prime Number");
}


//To check the condition  for Prime Number in a Range
let numb1 = 1;
let numb2 = 10;

console.log("Prime Numbers between given range ");
for (let i = numb1; i <= numb2; i++) {
    let isPrime = true;

    for (let j = 2; j <= i; j++) {
        if (i % j == 0 && j != i) {
            isPrime = false;
        }
    }

    if (isPrime == true) {
        console.log(i);
    }
}

//To find factors of a given number
let numb = 4;
console.log("Factors of the Given Number: ");

for (let i = 1; i <= numb; i++) {

    if (numb % i == 0) {
        console.log(i);
    }
}


// To find Factorial of given number
let numb = 5;

let fact = 1;
for (let i = 2; i < numb; i++) {
    fact = fact * i;
}

console.log("The factorial of the number: " + fact);


// To find Harmonic number of given n number
let n = 6;

let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += sum + (1 / i);
}

console.log("Sum of Harmonic series: " + sum);