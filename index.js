// Review - Conditionals
// NOTE! Pay close attention to creating code with good and consistent code style.

// Save a random whole number between -10 and 10 to a variable.
const num1 = Math.floor(Math.random()* (11 - (-11)) + (-11));
console.log(num1);
// If that variable is greater than 0, print "Ye" and otherwise print "No"
if (num1 > 0){
    console.log("Ye")
} else {
    console.log("No")
}

// If that variable is greater than 5, print "Winner", otherwise if that variable is greather than 0, print "OK", otherwise print "Try again!"
if (num1 > 1){
    console.log("Winner")
} else if (num1 > 0){
    console.log("OK")
} else {
    console.log("Try again")
}

// Save another random number between -10 and 10 to a variable.
const num2 = Math.floor(Math.random()* (11 - (-11)) + (-11));
console.log(num2);

// If both variables are more than 5, print "Good scores!"
if (num1 > 5 && num2 > 5){
    console.log("Good scores!")
}

// If either variable is below -9, print "Minus nine!"
if ( num1 < -9 || num2 < -9){
    console.log("Minus nine!");
}

// Create a variable to store a message. If your random numbers added together is smaller than zero, save the message "We have gone sub zero!". Otherwise, set the message to null.
let message;

if (num1 + num2 < 0){
    message = "We have gone sub zero!";
    console.log(message);
} else{
    message = "";
    console.log(message);
}
