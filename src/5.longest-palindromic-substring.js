
/**
 * 
 * @param {string} s 
 * @param {number} index 
 * @param {number} length 
 */
function checkPalindrome (s, index, length) {
    let leftStr = s.substr(index - length, length)
    let rightStr = s.substr(index + 1, length)
    rightStr = rightStr.split('').reverse().join('')
  
    return leftStr === rightStr
}

function prepareStr (s) {
    return s.split('').join('#')
}

/**
 * 
 * @param {s} s 
 * @param {*} centerStub 中间的是不是占位符
 */
function recoverStr (s) {
    let result = ''
    let splited = s.split('')
    let len = splited.length;
    for (let i = 0; i < len; i += 2) {
        result += splited[i]
    }
    return result
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    s = prepareStr(s)
    let len = s.length
    if (!len) {
        return s
    }
    let longestString = s[0]
    let longestLength = 1;
    for(let i = 1; i < len - 1; ++i) {
        let endLength = Math.min(i, len - i - 1)
        if (endLength + 1 < longestLength) break
        if (i % 2) {
            for (let j = 1; j <= endLength; j += 2) {
                if (j + 1 <= longestLength) {
                    continue
                }
                if (checkPalindrome(s, i, j)) {
                    longestString = s.substr(i - j, j * 2 + 1)
                    longestLength = j + 1
                } else {
                    break
                }
            }   
        } else {
            for (let j = 2; j <= endLength; j += 2) {
                if (j + 1 <= longestLength ) {
                    continue
                }
                if (checkPalindrome(s, i, j)) {
                    longestString = s.substr(i - j, j * 2 + 1)
                    longestLength = j + 1
                } else {
                    break
                }
            } 
        }                                                                                   
    }

    return recoverStr(longestString)
};

test('default', () => {})