//Find the Index of a Particular Element


//=>without using inbuilt methods
function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1; // Return -1 if not found
  }
  
  console.log(findIndex([10, 20, 30, 40], 30)); // 2
  console.log(findIndex([10, 20, 30, 40], 50)); // -1
  


//=>using inbuilt methods
function findIndex(arr, value) {
    return arr.indexOf(value);
  }
  
  console.log(findIndex([10, 20, 30, 40], 30)); // 2
  console.log(findIndex([10, 20, 30, 40], 50)); // -1
  