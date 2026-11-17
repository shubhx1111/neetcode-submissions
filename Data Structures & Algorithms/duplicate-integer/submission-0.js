class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let myset = new Set(nums);
        if(nums.length == myset.size)
        return false;

        return true;
    }
}
