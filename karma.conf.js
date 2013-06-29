// Karma configuration file

// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  'components/es5-shim/es5-shim.js',
  'components/es5-shim/es5-sham.js',
  'components/jquery/jquery.js',
  'components/chai/chai.js',
  'node_modules/sinon/pkg/sinon.js',

  MOCHA,
  MOCHA_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  'lib/mocha-flight.js',

  {pattern: 'components/flight/**/*.js', included: false},
  {pattern: 'test/mock/*.js', included: false},
  {pattern: 'test/spec/*.js', included: false},

  'test/test-main.js'
];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit', 'teamcity'
// CLI --reporters progress
reporters = ['dots'];

// web server port
// CLI --port 9876
port = 9876;

// cli runner port
// CLI --runner-port 9100
runnerPort = 9100;

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch = true;

// start these browsers
browsers = [
    'Chrome',
    'Firefox'
];

// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = false;
