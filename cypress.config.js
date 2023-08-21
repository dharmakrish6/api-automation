const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "mochawesome",
  "reporterOptions": {
    "overwrite": false,
    "html": false,
    "json": true
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://health-dev.digit.org"
  },
});
