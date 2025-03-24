// Check if an Array Contains a Specific Value


//=>without using inbuilt methods
function containsValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
  
  console.log(containsValue([1, 2, 3, 4, 5], 3)); // true
  console.log(containsValue([1, 2, 3, 4, 5], 6)); // false
  


//=>using inbuilt methods
function containsValue(arr, value) {
    return arr.includes(value);
  }
  
  console.log(containsValue([1, 2, 3, 4, 5], 3)); // true
  console.log(containsValue([1, 2, 3, 4, 5], 6)); // false
  