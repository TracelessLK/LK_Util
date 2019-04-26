const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')

const repoMapObj = {
  'LK-S': 'https://github.com/TracelessLK/LK-S.git',
  'LK-D': 'https://github.com/TracelessLK/LK-D.git',
  'LK-M': 'https://github.com/TracelessLK/LK-M.git',
  'LK_M': 'https://github.com/TracelessLK/LK-M.git',
  'LK-C': 'https://github.com/TracelessLK/LK-C.git',
}
console.log('version: 0.0.1')
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
      if (['LK-M', 'LK_M'].includes(rootFolder)){
        runCmdSync(`git checkout dev_z && git branch -m dev`)
      }
      getCmdStr(repoMapObj[rootFolder]).split('\n')
        .map(ele => ele.trim())
        .filter(ele => Boolean(ele))
        .forEach(runCmdSync)
      // process LK-C in submodule
      if (['LK-M', 'LK-D', 'LK_M'].includes(rootFolder)) {
        const LK_C_path = path.resolve(cwd, 'submodule/LK-C')
        if(fs.existsSync(LK_C_path)) {
          console.log('working on LK-C in submodule');
          [
            'git remote remove origin-deprecated',
            'git remote rename origin origin-deprecated',
            `git remote add origin ${repoMapObj['LK-C']}`,
            'git fetch --all',
            'git branch -u origin/dev dev',
            'git checkout dev',
            'git remote remove origin-deprecated'
          ].forEach(ele => {
            runCmdSync(ele, {
              cwd: LK_C_path
            })
          })
        }
      }
      console.log('initial push successfully ')
    }
  }
}


function runCmdSync(cmd, option={}) {
  console.log(cmd)
  childProcess.execSync(cmd, option)
}

function checkGitRepo(rootDir) {
  return fs.existsSync(path.resolve(rootDir, '.git'))
}

function getCmdStr(gitUrl) {
  return `
     git remote remove origin-deprecated
  git remote rename origin origin-deprecated
git remote add origin ${gitUrl}
git push --force origin master:master
git push --force origin dev:dev
git push --force origin publish:publish
git remote remove origin-deprecated
  `
}
