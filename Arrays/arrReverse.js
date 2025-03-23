//Reverse an array.


//=>Without Using Inbuilt Methods
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
  



//=>Using Inbuilt Methods
function reverseArray(arr) {
    return arr.slice().reverse(); // slice() is used to avoid mutating the original array
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
  