'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
let m = apples.length;
let n = oranges.length;
let count_of_apples = [];
let count_of_oranges = [];
let apples_fallen = 0;
let oranges_fallen = 0; 

for(let i = 0; i < m; i++){
    count_of_apples.push(a + apples[i]);
}

for(let i = 0; i < n; i++){
    count_of_oranges.push(b + oranges[i]);
}

for(let i = 0; i < count_of_apples.length; i++){
    if(count_of_apples[i] >= s && count_of_apples[i] <= t){
        apples_fallen = apples_fallen + 1;
    }
}
console.log(apples_fallen);
 
for(let i = 0; i < count_of_oranges.length; i++){
    if(count_of_oranges[i] >= s && count_of_oranges[i] <= t){
        oranges_fallen = oranges_fallen + 1;
    }
} 
console.log(oranges_fallen);
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
