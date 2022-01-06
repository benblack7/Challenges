/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let hash = {}
   
   for (let i = 0; i < nums.length; i++ ) {
       let current = nums[i];
       if( hash[target - current] !== undefined) {
           return [hash[target - current], i]
       }
       hash[current] = i;
   }
    return [];
};