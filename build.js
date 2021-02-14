const cp = require('child_process')
const fs = require('fs')
const path = require('path')

const packages = [
    'packages/@lemonneko/neko-builder',
    'packages/@lemonneko/neko-builder-plugin-java'
]

console.log(packages)

function updateVersion(index) {
    const pkg = packages[index]
    return cp.exec('git rev-list HEAD --count', (error, stdout) => {
        const versionNumber = parseInt(stdout.trim()) + 1
        cp.exec('git branch --show-current', (error1, stdout1) => {
                const packageJsonObj = require(path.resolve(pkg + '/package.json'))
                const branch = stdout1.trim()
                const version = `0.1.${versionNumber}-snapshot.1`
                console.log(`update version ${pkg} to ${version}`)
                if (branch === 'master' || branch === 'main') {
                    packageJsonObj.version = version
                } else if (branch !== 'release') {
                    packageJsonObj.version = version
                }
                if (packageJsonObj.dependencies['@lemonneko/neko-builder']) {
                    packageJsonObj.dependencies['@lemonneko/neko-builder'] = '^' + version
                }
                fs.writeFileSync(path.resolve(pkg + '/package.json'), JSON.stringify(packageJsonObj, null, 2))
        })
    }).addListener('close',() => {
        if (index !== packages.length - 1) {
            updateVersion(++index)
        }
    })
}

function build(index) {
    const pkg = packages[index]
    console.log(`building ${pkg}`)
    cp.exec(`cd ${path.resolve(pkg)} && pwd && yarn run build`, (err, stdout, errout) => {
        console.log(stdout)
        console.log(errout)
    }).addListener('close', () => {
        if (index !== packages.length - 1) {
            build(++index)
        }
    })
}

function main() {
    updateVersion(0).addListener('close', () => {
        build(0)
    })
}

main()
