//Find the largest number in an array.


//=>whithout using Inbuilt Methods
function findLargest(arr) {
    if (arr.length === 0){ // Edge case for empty array
        return null;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
  console.log(findLargest([10, 5, 20, 8, 30])); // Output: 30



  //=>using inbuilt methods
  function findLargest(arr) {
    return Math.max(...arr);
  }
  
  console.log(findLargest([10, 5, 20, 8, 30])); // Output: 30
  
  
