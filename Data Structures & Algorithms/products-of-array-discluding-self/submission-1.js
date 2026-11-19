class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
          let suffix = 1;
        const n = nums.length;
        let result = new Array(n).fill(1);
        for (let i = 0 ; i < nums.length ; i++)
        {
           
            result[i] = prefix;
            prefix *= nums[i];
        }
        for(let i = n-1 ; i>=0 ;i--)
        {
           
            result[i] *= suffix;
            suffix *= nums[i];
        }
            return result;
    }
}
