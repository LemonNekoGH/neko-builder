const {ConfigReader} = require('../lib/config')
const fs = require('fs')
const path = require('path')

test('readAndPrint',() => {
    console.log(ConfigReader.readConfigFromFile('test/sample.config.js'))
})