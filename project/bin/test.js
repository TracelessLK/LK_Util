const os = require('os')
const childProcess = require('child_process')

const result = childProcess.execSync(`
git st
`).toString()
console.log(result)
