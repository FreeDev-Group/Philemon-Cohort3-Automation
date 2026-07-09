/// <reference types="cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  allowCypressEnv: true,
  // Here are the environment variables for the test user account
  env: {
    email: "paulafumba58@gmail.com",
    password: "@Jesusmynum1"
  },

  video: true,
  videoCompression: true,

  e2e: {
    baseUrl: "https://student.michaelkentburns.com",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
