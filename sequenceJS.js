

    // to get single digit random function
    let num = Math.floor(Math.random()*10);
    console.log(num);


    // to get random dice num
    let dice = Math.floor(Math.random()*10)%6 +1;
    console.log(dice);

    // Adding two random dice and printing result
    let dice1 = (Math.floor(Math.random()*10)%6) +1;
    let dice2 = (Math.floor(Math.random()*10)%6) +1;
    let result=dice1+dice2;
    console.log(dice1);
    console.log(dice2);
    console.log("Addition of to Dice Number is: "+result);

    // Reads 5, 2 digits random number and to find average of random number
    let a = 5;
    let result = 0;
    for(i=0;i<a;i++){
        let random = Math.floor(Math.random()*10)%99;
        result = result + random;
        let average = result/5;
    }
    console.log(result);
    console.log(average);

    // unit conversion inch to feet
    let oneFoot = 12 ; 
    let oneInch = 0.084; 
    let result = 42 * oneInch;
    console.log("42 inches is equal to :" + result + " feets");

    // unit conversion feet to meters
    let oneFoot1 = 0.305; 
    let oneMeter = 3.37; 
    let result = ((60 * 40) * oneMeter);
    console.log("60 feet * 40 feet value in meters is : " + result);

    // unit conversion to acres
    let oneAcre = 43650;
    let result = ((60 * 40)/oneAcre)* 25;
    console.log("Area of 25 plots in acres is : " + result);