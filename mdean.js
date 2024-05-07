

// Median of Two Sorted Arrays

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2).sort((a, b) => a - b);
    let len = nums.length;
    if (len % 2 === 0) {
        return (nums[len / 2 - 1] + nums[len / 2]) / 2;
    } else {
        return nums[(len - 1) / 2];
    }
}