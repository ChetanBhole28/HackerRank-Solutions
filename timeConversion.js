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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
 const timeArray = s.slice(0, 8).split(":");
    const hours = parseInt(timeArray[0]);
    const minutes = timeArray[1];
    const seconds = timeArray[2];
    const period = s.slice(8);

    // Convert to 24-hour format
    let militaryHours = hours;
    if (period === "PM" && hours !== 12) {
        militaryHours += 12;
    } else if (period === "AM" && hours === 12) {
        militaryHours = 0;
    }

    // Format the result
    const militaryTime = String(militaryHours).padStart(2, "0") + ":" + minutes + ":" + seconds;
    
    return militaryTime;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
