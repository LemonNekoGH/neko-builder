const packageJson = require("./package.json")
const cp = require("child_process")
const fs = require("fs")

async function main() {
    cp.exec(`cd ../../.. && git rev-list HEAD --count`, (error, stdout) => {
        const versionNumber = parseInt(stdout.trim()) + 1
        cp.exec(`cd ../../.. && git branch --show-current`, (error1, stdout1) => {
            const branch = stdout1.trim()
            if (branch === 'master' || branch === 'main') {
                packageJson.version = `0.1.${versionNumber}-snapshot.1`
            } else if (branch !== 'release') {
                packageJson.version = `0.1.${versionNumber}-${branch}.1`
            }
            fs.writeFileSync('./package.json',JSON.stringify(packageJson,null,2))
        })
    })
}

main().then()