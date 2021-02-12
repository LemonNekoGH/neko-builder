const {mavenCentral} = require("../lib/repository");
const {compile} = require('../lib/dependency')

module.exports = {
    name: 'sample',
    dependencies: [
        compile('moe.lemonneko:neko-logger:1.0.1_RELEASE')
    ],
    repositories: [
        mavenCentral()
    ]
}