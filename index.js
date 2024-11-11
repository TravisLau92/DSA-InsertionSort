// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function insertionSort(arr) {

 // Outer loop
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j;

    // Inner loop

    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }

    // Place current in the correct location
    arr[j + 1] = currentValue;
  }

  return arr;
}

const inputArray = [22, 11, 99, 88, 9];

console.log('Sorted Array:', insertionSort(inputArray));