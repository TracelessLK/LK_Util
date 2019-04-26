const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')

const repoMapObj = {
  'LK-S': 'https://github.com/TracelessLK/LK-S.git',
  'LK-D': 'https://github.com/TracelessLK/LK-D.git',
  'LK-M': 'https://github.com/TracelessLK/LK-M.git',
  'LK-C': 'https://github.com/TracelessLK/LK-C.git',
}

start()

function start() {
  const cwd = process.cwd()
  const rootFolder = path.basename(cwd)

  if (!repoMapObj.hasOwnProperty(rootFolder)) {
    throw new Error(`${rootFolder} is not in ${Object.keys(repoMapObj)}`)
  } else {
    if (!checkGitRepo(cwd)) {
      throw new Error(`${cwd} is not a git repo`)
    } else {
      // LK-M has dev_z branch not dev
      if (rootFolder === 'LK-M'){
        runCmdSync(`git checkout dev_z && git branch -m dev`)
      }
      getCmdStr(repoMapObj[rootFolder]).split('\n').forEach(runCmdSync)
      console.log('initial push successfully ')
    }
  }
}


function runCmdSync(cmd) {
  console.log(cmd)
  childProcess.execSync(cmd)
}

function checkGitRepo(rootDir) {
  return fs.existsSync(path.resolve(rootDir, '.git'))
}

function getCmdStr(gitUrl) {
  return `
  git remote rename origin origin-deprecated
git remote add origin ${gitUrl}
git push --force origin master:master
git push --force origin dev:dev
git push --force origin publish:publish
git remote remove origin-deprecated
  `
}
