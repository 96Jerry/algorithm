/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;
    const charCount = {};
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        charCount[char] = (charCount[char] || 0) + 1;
        
        maxCount = Math.max(maxCount, charCount[char]);
        
        while (right - left + 1 - maxCount > k) {
            charCount[s[left]]--;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};