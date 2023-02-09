#! env node
const { unlinkSync } = require('fs')
const { join, resolve } = require('path')

const yeoman = require('yeoman-environment')
const TerminalAdapter = require('yeoman-environment/lib/adapter')

const widgetDefaults = require('../.widget-defaults.json')

const rmFiles = ['.eslintrc.js', '.gitattributes', '.gitignore', '.prettierignore', 'prettier.config.js']
const myConsole = { log() {}, error() {} }

async function createWidget(platform, name) {
  // automate the prompt
  const adapter = new TerminalAdapter({ console: myConsole })
  adapter.promptModule = async (questions, answers) => {
    return Object.assign(widgetDefaults, { name, platform })
  }

  // set up the yeoman environment
  const env = yeoman.createEnv(null, null, adapter)

  // const widgetGeneratorPath = require.resolve('@mendix/generator-widget')
  const widgetGeneratorPath = resolve('./node_modules/@mendix/generator-widget/generators/app/index.js')
  env.register(widgetGeneratorPath, 'widget')

  // run the generator
  const path = `./widgets-${platform}/${name}`
  await env.run(`widget ${path}`, { 'skip-install': true })

  // clean up files
  rmFiles.forEach(file => unlinkSync(join(path, file)))
}

if (process.argv.length < 4) {
  console.log('Usage: create-widget.js [web|native] [name]')
  process.exit(-1)
}

createWidget(process.argv[2], process.argv[3]).catch(e => console.error(e))
