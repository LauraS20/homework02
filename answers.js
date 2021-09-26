// Task 1
// Write a JavaScript function which accepts an argument and returns the type.

/* 
// Solution 1
function getType(arg){
    return typeof arg;
}
 */

/* 
// Solution 2
function getType(arg){
    return typeof(arg);
}
 */
/* 
console.info(getType(1));
console.info(getType(true));
console.info(getType(""));
console.info(getType({}));
console.info(getType([])); 
*/


// Task 2
// Write a JavaScript function that accepts a number as a parameter and check 
// the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that 
// has no positive divisors other than 1 and itself.
// Hint : Remember that we used % to check if number can divide without a remainder. 
// You will probably need to use a for..loop.
// Checks even or oneven

/* 
// Solution 1 L
let i = prompt("Type in a number");
function checkIfPrime(){
    if(i>1 && i % 2 != 0) {
        alert("This is an uneven number");
    } else {
        alert("This is an even number");
    }
}
checkIfPrime();
 */

/* 
// Solution V
function isPrime(val){
    if(val<=1){
        return false;
    }
    for(let i=2;i<val;i++) {
  //      console.info(i); // for checking, returns 1 2 3 4 5 6 7 8 9
        if(val % i === 0)
        return false;
    }
    return true;
}
for(let i=0; i<200; i++){ 
    console.info(i,isPrime(i));
}
 */


// Task 3 
// Write a JavaScript function to convert an amount to small coins.
// Note: Coins are 1,2,5,10,20,50

/* 
let x = prompt("Type in number in cents you want to convert in coins");
function moneyConverter(x, coins) 
{
 if (x === 0) 
  {
     return [];
   } 
 else
   {
     if (x >= coins[0]) 
       {
        left = (x - coins[0]);
       return [coins[0]].concat(moneyConverter(left, coins));
       } 
      else
       {
       coins.shift();
        return moneyConverter(x, coins);
        }
   }
} 
console.log(moneyConverter(x, [50, 20, 10, 5, 2, 1])); 
*/


// Task 4
// Write a JavaScript program to get the integers in range (x, y)
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8] 

/* 
// Solution
function getRange(x,y){
  //  x++;
    for (let i=x+1; i<y; i++) {
        console.info(i);
    }
}
getRange(4,17); 
 */


// Task 5
// Write a JavaScript program that accept three integers and display the larger
/* 
// Solution L
let value1 = prompt("Add value 1");
let value2 = prompt("Add value 2"); 
let value3 = prompt("Add value 3"); 
console.log(Math.max(value1, value2, value3));
 */

// Task 6
// Write a JavaScript conditional statement to find the sign of product of 
// three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

// Solution L
/* 
let value1 = prompt("Add value 1");
let value2 = prompt("Add value 2"); 
let value3 = prompt("Add value 3");  */

/* 
let value1 = 1;
let value2 = -8; 
let value3 = 2; 

if((value1 + value2 + value3) < 0){
    alert("The result is -");
} else if((value1 + value2 + value3) == 0) {
    alert("The result is 0");
} else {
    alert("The result is +");
} 
 */

