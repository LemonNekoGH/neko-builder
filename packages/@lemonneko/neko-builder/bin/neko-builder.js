#!/usr/bin/env node
const {ConfigReader} = require("../lib/config");
const program = require('commander')
const packageJson = require('../package.json')

program
    .version(`neko-builder ${packageJson.version}`)
    .usage('neko-builder <command> [options]')

program
    .command('debug', '[FOR DEVELOPERS]')
    .option('--read-config','read config file and print the Config object.')
    .action((args) => {
        if (args.contains('--read-config')) {
            console.log(ConfigReader.readConfig())
        }
    })

program.parse(process.argv)