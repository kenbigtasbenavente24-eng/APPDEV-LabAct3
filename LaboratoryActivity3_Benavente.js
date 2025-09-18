/* 
 / AppDev, Laboratory Activity 3
 / Ken Benavente, BSCS 2A
*/

const base_num = 3; // my student no. is 2024-01-09893

console.log("Base number = " + base_num);

console.log("\nProblem 1: Grade Calculator");
console.log("Grade = " + (base_num * 10 + 5));
console.log("Rating: " + calculateGrade(base_num * 10 + 5));

console.log("\nProblem 2: Star Pattern");
showStars(base_num + 2);

console.log("\nProblem 3: Prime Number Checker");
if (isPrime(base_num + 10))
    console.log((base_num + 10) + " is a prime number!");
else
    console.log((base_num + 10) + " is not a prime number!");

console.log("\nProblem 4: Multiplication Table");
multiplicationTable(base_num);

// ------------ USER-MADE FUNCTIONS ------------ // 

function calculateGrade(score)
{
    if (score < 60) return 'F';
    if (score < 70) return 'D';
    if (score < 80) return 'C';
    if (score < 90) return 'B';
    return 'A'; // if-statement unnecessary, all conditions are accounted for
}

function showStars(rows)
{
    for (let stars = 1; stars <= rows; stars++)
    {
        let pattern = '';
        for (let i = 0; i < stars; i++)
        {
            pattern += '*';
        }
        console.log(pattern);
    }
}

function isPrime(n)
{
    if (n <= 1) return false;
    if (n <= 3) return true; // at this point only checks for 2 and 3

    let sqrt = Math.sqrt(n);
    for (let div = 2; div <= sqrt; div++)
    {
        if (n % div === 0) return false; // a remainder of 0 entails a factor other than the number itself
    }
    return true;
}

function multiplicationTable(n)
{
    console.log("*\t1   2   3   4   5   6   7   8   9   10");
    process.stdout.write(n + "\t");
    for (let i = 1; i <= 10; i++)
    {
        let product = (n * i).toString().padEnd(4, ' ');
        process.stdout.write(product);
    }
}