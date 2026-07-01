/// <reference types="cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  video: true,

  e2e: {
    baseUrl: "https://student.michaelkentburns.com",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
