const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "n97ewe",
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
  fixturesFolder: false,
});
