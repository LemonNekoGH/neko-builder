const cp = require('child_process')
const fs = require('fs')
const path = require('path')

const packageJsons = [
    'packages/@lemonneko/neko-builder/package.json',
    'packages/@lemonneko/neko-builder-plugin-java/package.json'
]

async function main() {
    cp.exec('git rev-list HEAD --count', (error, stdout) => {
        const versionNumber = parseInt(stdout.trim()) + 1
        cp.exec('git branch --show-current', (error1, stdout1) => {
            packageJsons.forEach((packageJson) => {
                const packageJsonObj = require(path.resolve(packageJson))
                const branch = stdout1.trim()
                if (branch === 'master' || branch === 'main') {
                    packageJsonObj.version = `0.1.${versionNumber}-snapshot.1`
                } else if (branch !== 'release') {
                    packageJsonObj.version = `0.1.${versionNumber}-${branch}.1`
                }
                fs.writeFileSync(path.resolve(packageJson), JSON.stringify(packageJsonObj, null, 2))
            })
        })
    })
}

main().then()
