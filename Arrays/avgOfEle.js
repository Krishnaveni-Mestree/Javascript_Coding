//Calculate the average of all elements.


//=>Without Using Inbuilt Methods
function calculateAverage(arr) {
    if (arr.length === 0) return null; // Edge case for empty array
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  console.log(calculateAverage([10, 5, 20, 8, 30])); // Output: 14.6
  


  //=>Using Inbuilt Methods
  function calculateAverage(arr) {
    if (arr.length === 0) return null; // Edge case for empty array
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }
  
  console.log(calculateAverage([10, 5, 20, 8, 30])); // Output: 14.6
  