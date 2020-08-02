# LeetCode

Use `leetcode-cli` and `jest` to make it easier to play with LeetCode.

You can just write the jest test in your file (see the examples in `src` directory), and use `npm run submit` to submit your solution. The jest test will automatically be disabled in the submit content.

## Usage

- Fork this repo
- `npm install`
<!-- - `npm run login` to sign in with your leetcode account -->
- `npm run easy` to get an easy problem
- `npm run medium` to get a medium problem
- `npm run hard` to get a hard problem
- `npm run test src/1.two-sum.js` to run jest test
- `npm run submit src/1.two-sum.js` to submit the problem

## Problem solving

If you are facing the login problem, you can try this.

1. Login with browser
2. open the web devtools and copy the `LEETCODE_SESSION` FROM Cookie

<img width="905" alt="Screen Shot 2020-08-02 at 4 53 55 PM" src="https://user-images.githubusercontent.com/7057473/89119403-f0723200-d4e0-11ea-91c4-b2807c27fc59.png">

3. open the `~/.lc/leetcode/user.json`

4. write the content to the file.

```json
{
  "sessionId": "Replace with your LEETCODE_SESSION value"
}
```
