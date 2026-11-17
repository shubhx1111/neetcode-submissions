class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map();
        for(let num of nums){
            map.set(num,(map.get(num) || 0) + 1 );
        }
const bucket = new Array(nums.length + 1).fill(null).map(() => []);
        let result = [];
        for (let [num, freq] of map) {
            bucket[freq].push(num);
        }
        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
            for (let num of bucket[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }
        return result;
        
        
    }
}
