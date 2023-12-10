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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
     const sortedArray = arr.sort((a,b) => a - b);
let n = sortedArray.length;
let minimum = 0;
let maximum = 0;
for(let i = 0; i < n; i++){
    if(i != n-1){
        minimum = minimum + arr[i];
    }
    if(i != 0){
        maximum = maximum + arr[i];
    }
}
console.log(minimum + " " + maximum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
