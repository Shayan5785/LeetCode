console.log("Running...")

// My LeetCode Profile 
// https://leetcode.com/shanmek/











// Two Sum

var twoSum = function(arr, target) {
    for(let i = 0; i <= arr.length; i++) {
        let currentVal =  arr[i]
        let j = i + 1
        while(j <= arr.length){
            let sum = currentVal + arr[j]
            if (sum == target){
                return [i,j]
            }
            j++
        }

    }
};

let nums = [3,3]
let target = 6
let ans = twoSum(nums,target)
console.log(ans)