'use strict';

const fs = require('fs');

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
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
let a1 = 0, b1 = 0, aliceScore = 0, bobScore = 0;
    while (a1 < a.length && b1 < b.length) {
        if (a[a1] > b[b1]) {
            aliceScore = aliceScore + 1;
            a1 = a1 + 1;
            b1 = b1 + 1;
        } else if (a[a1] < b[b1]) {
            bobScore = bobScore + 1;
            a1 = a1 + 1;
            b1 = b1 + 1;
            
        } else {
            a1 = a1 + 1;
            b1 = b1 + 1;
        }
    }
    return [aliceScore, bobScore];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
