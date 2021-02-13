#!/usr/bin/env node
const { BuildFileReader } = require('../lib/config')
const program = require('commander')
const packageJson = require('../package.json')

program
  .version(`neko-builder ${packageJson.version}`)
  .usage('<command> [options]')

program
  .command('debug')
  .description('[FOR neko-builder DEVELOPERS]')
  .option('--print-config <path>', 'read config file and print the Config object.', 'neko-builder.config.js')
  .action((args) => {
    console.log(args)
    if (args.printConfig) {
      console.log(BuildFileReader.readFromFile(args.printConfig))
    }
  })

program
  .command('tasks')
  .option('--config | -C <path>')
  .description('show all executable tasks')
  .action((args) => {
    const configFile = args.config || args.C
    if (configFile) {
      try {
        console.log('=============================')
        console.log('neko-builder tasks')
        console.log('-----------------------------')
        console.log('name | category | description')
        console.log('-----------------------------')
        const config = BuildFileReader.readFromFile(configFile)
        config.tasks.forEach((task) => {
          console.log(`${task.name} | ${task.category} | ${task.description}`)
        })
        console.log('=============================')
      } catch (e) {
        console.log(`${e.name}: ${e.message}`)
      }
    }
  })

program
  .command('task <name>')
  .description('execute task by name')
  .option('--config | -C <path>', 'specify the build file.', 'neko-builder.config.js')
  .action((name, args) => {
    const configFile = args.config || args.C
    if (configFile) {
      try {
        const config = BuildFileReader.readFromFile(configFile)
        const task = config.tasks.find((it) => it.name === name)
        if (!task) {
          console.log(`Task not found: ${name}`)
        } else {
          task.action()
        }
      } catch (e) {
        console.log(`${e.name}: ${e.message}`)
      }
    }
  })

program.parse(process.argv)
