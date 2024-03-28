// JS assignment 19

// Chapter 26-30

var linebreak="<br>";

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num1=prompt("Enter a postive integar");
document.write("number: "+num1+linebreak+"round off value: "+Math.round(num1)+linebreak+"floor value: "+Math.floor(num1)+linebreak+"ceil value: "+Math.ceil(num1));

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num2=prompt("Enter a negative integar");
document.write(linebreak+"number: "+num2+linebreak+"round off value: "+Math.round(num2)+linebreak+"floor value: "+Math.floor(num2)+linebreak+"ceil value: "+Math.ceil(num2));

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num3=-4;
document.write(linebreak+"The absolute vallue of "+num3+" is "+Math.abs(num3));

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

document.write(linebreak+"random dice value: "+Math.floor(Math.random()*6+1))

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coin=Math.floor(Math.random()*2+1);
if(coin===2){
    document.write(linebreak+coin+linebreak+"random coin value: Heads ");
}
else{
    document.write(linebreak+coin+linebreak+"random coin value: Tails ");
}

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

document.write("random number between 1 to 100: "+Math.floor(Math.random()*100+1));

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var input=prompt("Enter your weight in kiograms: ");
var weight;
if(input.includes("kgs")||input.includes("kilograms")){
    weight=parseFloat(input)
    document.write(linebreak+"The weight of user is "+weight+ " kilograms");
}
else{
    weight=parseFloat(input.replace(/[^\d.]/g,''))
    document.write(linebreak+"The weight of user is "+weight+ " kilograms");
}

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var secret=Math.floor(Math.random()*10+1);
var input2=parseInt(prompt("Enter a number between 1 to 10: "));
if(input2===secret){
    alert("Congrats you guess it right!!")
}
else{
    alert("Try again \n Prevent this page from creating additional dialogs")
}

// Questions 26-30

// Chapter 26 

// 1. Form a statement that rounds a number to the nearest integer.
var num4=6.2;
console.log(Math.round(num4));

// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn&#39;t been declared beforehand.

var origNum=3.4;
var roundNum=Math.ceil(origNum);
console.log(roundNum);

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn&#39;t been declared beforehand.

var origNum=3.4;
var roundNum=Math.floor(origNum);
console.log(roundNum);

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn&#39;t been declared beforehand.

var origNum=3.4;
var roundNum=Math.round(origNum);
console.log(roundNum);

// 5. Round .5 to 0 and assign it to a variable that hasn&#39;t been declared
// beforehand.

var rounded=Math.floor(0.5);
console.log(rounded);

// Chapter 27

// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50

console.log(Math.random()*50+1);

// 2. Generate a random number and assign it to a variable that hasn&#39;t
// been declared beforehand.

var randomNumber=Math.random();
console.log("Random number "+randomNumber)

// 3. You have to create a dice in JavaScript with the use of
// pseudorandom number.

var diceRoll = Math.floor(Math.random() * 6+1);
console.log("Dice roll: " + diceRoll);

// Chapter 28, 29:

// 1. How do you convert a string to an integer in JavaScript?
parseInt
parseFloat

// 2. Write a JavaScript function to convert the string &quot;123&quot; to an
// integer.

var num5="123";
var num6=parseInt(num5);
console.log(num6)

// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?

var num7="1.234";
var num8=parseFloat(num7);
console.log(num7)

// 5. How can you convert a number to a string in JavaScript?

var num9=1235;
var num10=num9.toString();
console.log("number into string: "+ num10)

// 7. Can you convert a string representing a decimal number (e.g.,
//     &quot;3.14&quot;) to an integer in JavaScript? If so, how?

var num11="3.14";
var num12=parseFloat(num11);
console.log("number into string: "+ num11)

// Chapter 30

// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn&#39;t been declared beforehand.

var num13 = 4.14159264859;
var newNum = num13.toFixed(4).toString();
console.log("Rounded and converted number into string: " + newNum);

// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.

var num14 = 5.6789;
num14 = Number(num14.toFixed(2));
console.log("Rounded number to 2 decimal places: " + num14);

// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.

var num15 = 5.6789;
if (num15.toFixed(2).toString().length > 4) {
    console.log(num15)
}

// 4. Assign a number with many decimal places to a variable. Code an
// alert that displays the number rounded to 2 decimal places and
// converted to a string.

var num16=9.1232435465;
var num17=num16.toFixed(2).toString();
console.log("rounded number to 2 decimal number "+ num17)