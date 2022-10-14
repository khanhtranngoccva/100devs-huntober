/** Given a number as an input, print out every integer from 1 to that number.
 * However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5,
 * print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
 *
 * @param num {number} A positive integer.
 * @example ```js
 * fizzBuzz(5); // -> 1, 2, fizz, 4, buzz
 * fizzBuzz(9); // -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
 * fizzBuzz(15); // -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 15, fizz buzz
 * ```
 */
function fizzBuzz(num) {
    // Create a for loop from 1 to num, including the end.
    for (let i = 1; i <= num; i++) {
        // Conditional logic:
        // If i % 3 === 0 && i % 5 === 0 -> fizz buzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz");
        }
        // Else If i % 3 === 0 -> fizz
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Else If i % 5 === 0 -> buzz
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // Else log i
        else {
            console.log(i);
        }
    }
}

fizzBuzz(5);
fizzBuzz(9);
fizzBuzz(15);