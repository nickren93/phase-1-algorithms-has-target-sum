function hasTargetSum(array, target) {
  // Write your algorithm here
  /*
    Rewrite the problem in my own word:
      I nned to write a function which take two input (an array of integers, and an integer),
      the function needs to find if any two of the integers in this array can add up to the second
      input integer. Which means I can iterate each integer element in the first input array by 
      adding each element with each of the rest element and see if they add up to the second input
      integer, if it does, the function return true and ends. IF it doens't, keep iterating until
      the end, if no integer pairs can add up to equal to the second input integer, the function
      returns false and ends.
  */
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) === target) {
        return true
      }
    }
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
    the Big O time complexity of my function is: O(n²)
*/


/* 
  Add your pseudocode here
  function hasTargetSum(array, target){
    iterate through each element in the input array
      another loop for adding the current element to each of one of the rest integers in the array
      if (the sum === target){
        return true
      }
      return false
  }
*/


/*
  Add written explanation of your solution here:
    adding each element integer in the first input array one by one to see if we can find a 
    pair that adds up to equal to the second input integer.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([8, 0], 8));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 2], 2));

  console.log("");

  //--------------------------------
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
