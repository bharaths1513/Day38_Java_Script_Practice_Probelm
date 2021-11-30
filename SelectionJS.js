//to check the min and max number
let array=new Array();
for(let i=0;i<5;i++){
   let randomCheck=Math.floor(Math.random()*900+100);
   console.log("Random number is: " +randomCheck);
   array.push(randomCheck); 
}
console.log("Maximum number is: "+Math.max(...array));
console.log("Minimum number is: "+Math.min(...array));

const year = 2021;
checkLeapYear(year);

// to check weather the year is leap year or not
function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// Fliping coin
const HEAD =0;
let Toss = Math.floor(Math.random() * 10) % 2;
    if(Toss == HEAD)
        console.log("Heads");
    else
        console.log("Tails");

// Reading a Single digit number in Word 
let number = Math.floor(Math.random()*10);
if(number ==0)
console.log("Zero");
else if(number == 1)
console.log("One");
else if(number == 2)
console.log("Two");
else if(number == 3)
console.log("Three");
else if(number == 4)
console.log("Four");
else if(number == 5)
console.log("Five");
else if(number == 6)
console.log("Six");
else if(number == 7)
console.log("Seven");
else if(number == 8)
console.log("Eight");
else if(number == 9)
console.log("Nine");

// // Reading a number and display WeekDay
let daynumber = (Math.floor(Math.random() * (10))% 7)+1 ;
let day;
if( number == 1) {
    day = 'Sunday';
} else if (number == 2) {
    day = 'Monday';
}else if (number == 3) {
    day ='Tuesday';
}else if (number == 4) {
    day ='Wednesday';
}else if (number == 5) {
    day ='Thursday';
}else if (number == 6) {
    day ='Friday';
}else if (number == 7) {
    day ='Saturday';
}
else{
    day = 'invalied day number';
}
console.log('The day is :'+ day)

// Reading a random number and printing Unit, Ten and Hunderds

let num = Math.floor(Math.random()*1000)%1000;
console.log("Number is: "+num);
if(num >=0 && num <=9) 
    console.log("the number is: UNITS")
 else if( num>=10 && num<=99) 
        console.log("The number is in: TENS");
else if(num >=100 && num <=999) 
    console.log("The number is in: HUNDERDS");

