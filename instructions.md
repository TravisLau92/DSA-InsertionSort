**Title: Implement Insertion Sort Algorithm**

**Objective:**
Create a JavaScript function to apply the Insertion Sort algorithm to an array of integers. The function should sort the array in ascending order and output the sorted array.

**Given the following input:**

```javascript
const inputArray = [22, 11, 99, 88, 9];

console.log("Sorted Array:", insertionSort(inputArray));
```

For example, after implementing the `insertionSort` function, you should be able to produce the following output:
```javascript
[9, 11, 22, 88, 99]
```

<details>
<summary>Hints</summary>

1. Define a function `insertionSort(arr)` that receives an array `arr` as its argument.
2. Start by assuming that the first element is already sorted. Begin the outer loop from the second element.
3. Within the outer loop, create an inner loop that compares the current element with the ones before it.
4. Shift the sorted elements one position up to make space if the current element is smaller than the compared elements.
5. Insert the current element at the correct position in the sorted part of the array.
6. Continue these steps until the entire array is sorted and return the sorted array.
7. Test your function with `inputArray` to check if it sorts the array as expected.

Remember, Insertion Sort builds the sorted array one element at a time by inserting each new element into its proper place within the sorted subset.

</details>

**Challenge:**

- Optimize the Insertion Sort function to minimize shifts. Implement binary insertion sort to use binary search for finding the insertion point.
- Include various test cases, such as a reverse-sorted array and an array with multiple identical elements, to test the robustness of your function.