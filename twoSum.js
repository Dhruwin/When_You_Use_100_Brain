/*
? Question: Given an Array of integers, return the indices of the two numbers that add up to a given target.
*/
/// Brute Force:
/// Two pointers: initialize p1 at i=0, p2 at i=1,
/// check until number to find is equal to target - no. at p1
/// if equal then return [p1, p2]
var nums = [1, 3, 7, 9, 2];
var target = 11;
// for (let i = 2; i < 5000; i++) nums.push(i);
// Returns two indices if solution exists else null
var findTwoSum = function (numbers, target) {
    for (var p1 = 0; p1 < numbers.length; p1++) {
        var numberToFind = target - numbers[p1];
        for (var p2 = p1 + 1; p2 < numbers.length; p2++) {
            if (numberToFind === numbers[p2]) {
                return [p1, p2];
            }
        }
    }
    return null;
};
/// Optimized solution
var findTwoSumOpt = function (nums, target) {
    var numsMap = {};
    for (var p = 0; p < nums.length; p++) {
        var currentMapVal = numsMap[nums[p]];
        console.log(currentMapVal);
        if (currentMapVal >= 0) {
            console.log(currentMapVal, p);
            return [currentMapVal, p];
        }
        else {
            var numberToFind = target - nums[p];
            numsMap[numberToFind] = p;
            console.log(numsMap);
        }
    }
    return null;
};
var numsMap = {};
for (var p = 0; p < nums.length; p++) {
    var currentMapVal = numsMap[nums[p]];
    console.log(currentMapVal);
    if (currentMapVal >= 0) {
        console.log(currentMapVal, p);
    }
    else {
        var numberToFind = target - nums[p];
        numsMap[numberToFind] = p;
        console.log(numsMap);
    }
}
// console.time('findTwoSum');
// const solution = findTwoSum(nums, target);
// console.timeEnd('findTwoSum');
// console.time('findTwoSumOpt');
// const solutionOpt = findTwoSum(nums, target);
// console.timeEnd('findTwoSumOpt');
// console.log(solutionOpt);
