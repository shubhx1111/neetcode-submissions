
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} s
     * @returns {string[]}
     */
    decode(s) {
        let result = [];
        let i = 0;

        while (i < s.length) {
            let j = i;

            while (s[j] !== "#") {
                j++;
            }

            let length = Number(s.slice(i, j));

            let str = s.slice(j + 1, j + 1 + length);

            result.push(str);

            i = j + 1 + length;
        }

        return result;
    }
}
