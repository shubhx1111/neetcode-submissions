class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

    if (s.length !== t.length) return false;

    return s.split('').sort().join('') ===
       t.split('').sort().join('');


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

    }
}