const index = require('.')

test('test', () => {
    expect(index.checkPalindrome('121', 1, 1)).toBe(true)
})


test('prepare', () => {
    console.log(index.prepareStr('121'))
    expect(index.prepareStr('121')).toBe('1#2#1')
})

test('prepare', () => {
    expect(index.recoverStr('1#2#1')).toBe('121')
    expect(index.recoverStr('1#2#1#1')).toBe('1211')
})

test('longestPalindrome', () => {
    expect(index.longestPalindrome('aaaa')).toBe('aaaa')
    expect(index.longestPalindrome('')).toBe('')
    expect(index.longestPalindrome('a')).toBe('a')
    expect(index.longestPalindrome('ac')).toBe('a')
    expect(index.longestPalindrome('11')).toBe('11')
    expect(index.longestPalindrome('121')).toBe('121')
    expect(index.longestPalindrome('xx1a2a1ee')).toBe('1a2a1')
})