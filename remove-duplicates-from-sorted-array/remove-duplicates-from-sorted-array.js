/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        //console.log(i);
      if (nums[i+1] === nums[i]) {
        var spliced = nums.splice(i+1,1)
        //console.log(spliced);
        //nums.push(spliced);
        i--;  
    }
    }
    //console.log(nums);
    return nums.length;
}