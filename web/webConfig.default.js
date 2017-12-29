'use strict'

const path = require('path')

let basePath = __dirname + '/'
let chainPath = path.join(__dirname, 'chains') + '/'

const webConfig = {
  basePath,
  chainPath,
  cckPath: path.join(__dirname, 'cck.js'),
  helperPath: path.join(__dirname, 'helper.js'),
  // routes
  routes: [],
  // jwt configuration
  jwtSecret: 'secret' + String(Math.round(Math.random() * 1000000000)) + 'jwt',
  jwtExpired: 60 * 60 * 24,
  jwtTokenName: 'token',
  // session configuration
  sessionSecret: 'secret' + String(Math.round(Math.random() * 1000000000)) + 'session',
  sessionMaxAge: 60 * 60 * 24,
  sessionSaveUnitialized: true,
  sessionResave: true,
  // hook configuration
  startupHook: path.join(chainPath, 'core.hook.startup.chiml'),
  beforeRequestHook: null,
  afterRequestHook: null,
  // list of express middlewares function
  middlewares: [],
  // mongoUrl database
  mongoUrl: 'mongodb://localhost/chimera-web-app',
  // verbosity level
  verbose: 0,
  // migration path
  migrationPath: path.join(__dirname, 'migrations') + '/',
  // location of static resources
  staticPath: path.join(__dirname, 'public') + '/',
  // favicon path
  faviconPath: path.join(__dirname, 'public/favicon.ico'),
  // location of view files
  viewPath: path.join(__dirname, 'views') + '/',
  // error view tempalate
  errorTemplate: path.join(__dirname, 'views/error.ejs'),
  defaultTemplate: null
}

module.exports = webConfig
