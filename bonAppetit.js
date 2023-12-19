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
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    // Write your code here
   /* let fair_bill = 0
    for(let i = 0; i < bill.length; i++){
        if(bill[k] !== bill[i]){
            fair_bill = fair_bill + bill[i];
        }
    }
    let count = fair_bill / 2;
    let anna_fair_bill = b - count;
    if(count === b){
        console.log("Bon Appetit");
    }
    else{
        console.log(anna_fair_bill);
    }*/
    let diff = ((bill.reduce((acc, currVal) => acc + currVal)) - bill[k]) / 2;
    let charged = b;
    if(diff !== charged){
        charged -= diff;
        console.log(charged);
    }
    else{
        console.log("Bon Appetit");
    }
    
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
