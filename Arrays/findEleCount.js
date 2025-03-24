//Count Occurrences of an Element in an Array


//=>without using inbuilt methods
function countOccurrences(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // 3
  console.log(countOccurrences([5, 6, 7, 8], 9)); // 0
  


//=>using inbuilt methods
function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
  }
  
  console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // 3
  console.log(countOccurrences([5, 6, 7, 8], 9)); // 0
  