var seleniumDirectory = "./node_modules/protractor/node_modules/webdriver-manager/selenium/";

exports.config = {
  seleniumServerJar: `${seleniumDirectory}selenium-server-standalone-3.4.0.jar`,
  localSeleniumStandaloneOpts: {
    port: 4444,
    jvmArgs: [
      `-Dwebdriver.ie.driver=${seleniumDirectory}IEDriverServer3.4.0.exe`,
      `-Dwebdriver.gecko.driver=${seleniumDirectory}geckodriver-v0.16.1.exe`,
      `-Dwebdriver.chrome.driver=${seleniumDirectory}chromedriver_2.29.exe`]
  },

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [{
    'browserName': 'internet explorer'
  }, {
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }],

  // Restrict no. of browser running at once so it is easier to see the problem!
  maxSessions: 1,

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
