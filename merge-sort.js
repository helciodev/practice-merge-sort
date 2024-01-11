// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  // Divide the array in half

  const halfA = arr.slice(0, mid);
  const halfB = arr.slice(mid);

  // Recursively sort the left half
  const leftHalf = mergeSort(halfA);
  // Recursively sort the right half
  const rightHalf = mergeSort(halfB);

  // Merge the halves together and return
  return merge(leftHalf, rightHalf);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  const arr = [];
  // Point to the first value of each array
  let i = 0;
  let j = 0;
  // While there are still values in each array...
  if (arrA.length && arrB.length) {
    while (i < arrA.length || j < arrB.length) {
      let firstValueA = arrA[i];
      let firstValueB = arrB[j];

      // Compare the first values of each array
      // Move the pointer to the next value in that array
      if (firstValueA < firstValueB) {
        // Add the smaller value to the return array
        arr.push(firstValueA);
        i++;
      } else {
        // Add the smaller value to the return array
        arr.push(firstValueB);
        j++;
      }
    }
  } else {
    return arrA.length && !arrB.length ? arrA : arrB;
  }
  // Return the return array

  return arr;
}

module.exports = [merge, mergeSort];
