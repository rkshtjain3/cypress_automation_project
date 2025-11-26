const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

function loadEnvConfig(environment) {
  const configPath = path.join(__dirname, 'cypress', 'config', `${environment}.json`);

  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    console.log(`📝 Loaded ${environment} environment configuration`);
    return config;
  }

  console.log('⚠️  No environment config found, using defaults');
  return {};
}

module.exports = defineConfig({
  e2e: {
    // Load environment-specific config
    ...loadEnvConfig(process.env.CYPRESS_ENV || 'production'),

    setupNodeEvents(on, config) {
      // Log task for custom logging
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });

      return config;
    },

    // Retry configuration
    retries: {
      runMode: process.env.CYPRESS_ENV === 'production' ? 2 : 1,
      openMode: 0
    },

    // Timeouts
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 15000,
    responseTimeout: 15000,

    // Video & Screenshots
    video: process.env.CI ? true : true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',

    // Viewport
    viewportWidth: 1280,
    viewportHeight: 720,

    // ChromeBrowser launch options
    chromeWebSecurity: false,

    // Spec pattern
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/examples/**', '**/__snapshots__/**'],

    // Support files
    supportFile: 'cypress/support/e2e.js',

    // Experimental features
    experimentalStudio: false
  },

  // Reporter configuration
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    reportFilename: '[name]-report',
    timestamp: 'mmddyyyy_HHMMss'
  },

  // Environment variables
  env: {
    coverage: false
  }
});
