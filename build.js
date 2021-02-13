const cp = require('child_process')
const fs = require('fs')
const path = require('path')

const packages = [
  'packages/@lemonneko/neko-builder',
  'packages/@lemonneko/neko-builder-plugin-java'
]

async function updateVersion() {
  cp.exec('git rev-list HEAD --count', (error, stdout) => {
    const versionNumber = parseInt(stdout.trim()) + 1
    cp.exec('git branch --show-current', (error1, stdout1) => {
      packages.forEach((pkg) => {
        const packageJsonObj = require(path.resolve(pkg + '/package.json'))
        const branch = stdout1.trim()
        if (branch === 'master' || branch === 'main') {
          packageJsonObj.version = `0.1.${versionNumber}-snapshot.1`
        } else if (branch !== 'release') {
          packageJsonObj.version = `0.1.${versionNumber}-${branch}.1`
        }
        fs.writeFileSync(path.resolve(pkg + '/package.json'), JSON.stringify(packageJsonObj, null, 2))
      })
    })
  })
}

async function build() {
  packages.forEach((pkg) => {
    cp.exec(`cd ${path.resolve(pkg)} && pwd && yarn run build`, (err, stdout, errout) => {
      console.log(stdout)
      console.log(errout)
    })
  })
}

async function main () {
  await updateVersion()
  await build()
}

main().then()
