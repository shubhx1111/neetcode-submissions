class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i = 0 ; i< nums.length ; i++){
            let any = target - nums[i];
            if(map.has(any))
            return [map.get(any) , i]

            map.set(nums[i] , i)

        }
    }
}
