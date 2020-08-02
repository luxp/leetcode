const fs = require('fs')
const execSync = require('child_process').execSync
const path = require('path')

let fileName = process.argv[2]
let fileToSubmitContent = fs
  .readFileSync(path.resolve(__dirname, '../', fileName))
  .toString()
fileToSubmitContent += '\nfunction test() {}'

let fileToSubmitPath = path.resolve(__dirname, '.temp.js')
fs.writeFileSync(fileToSubmitPath, fileToSubmitContent)
execSync(`leetcode submit ${fileToSubmitPath}`, { stdio: 'inherit' })
execSync(`rm ${fileToSubmitPath}`)
