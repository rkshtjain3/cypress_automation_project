const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://testproai.com',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    reportFilename: '[name]-report'
  }
});
