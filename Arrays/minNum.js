//Find the smallest number in an array.


//=>without using inbuilt methods
function findSmallest(arr) {
    if (arr.length === 0) return null; // Edge case for empty array
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  
  console.log(findSmallest([10, 5, 20, 8, 30])); // Output: 5


  //=>using inbuilt methods
  function findSmallest(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallest([10, 5, 20, 8, 30])); // Output: 5
  
  