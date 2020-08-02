const clipboardy = require('clipboardy')
const fs = require('fs')
const open = require('open')

// const execSync = require('child_process').execSync
const path = require('path')

let fileName = process.argv[2]
let fileToSubmitContent = fs
  .readFileSync(path.resolve(__dirname, '../', fileName))
  .toString()
fileToSubmitContent += '\nfunction test() {}'

// let fileToSubmitPath = path.resolve(__dirname, '.temp.js')
// leetcode cli can not login now issue: https://github.com/skygragon/leetcode-cli/issues/213
// fs.writeFileSync(fileToSubmitPath, fileToSubmitContent)
// execSync(`leetcode submit ${fileToSubmitPath}`, { stdio: 'inherit' })
clipboardy.writeSync(fileToSubmitContent.toString())
let leetcodeLink = getTheProblemLeetcodeLink(fileToSubmitContent)
open(leetcodeLink)
// execSync(`rm ${fileToSubmitPath}`)

function getTheProblemLeetcodeLink(content) {
  let matchResult = content.match(/https\:\/\/leetcode.com\/problems\/(.*?)\n/)
  return matchResult[0]
}
