/// <reference types="cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  video: true,
  videoCompression: true,

  e2e: {
    baseUrl: "https://student.michaelkentburns.com",

    // Here are the environment variables for the test user account
    env: {
      // valid credentials
      username: "Paul Afumba.",
      password: "@JesusmyNum1",

      // invalid credentials
        fakeusername: "invaliduser",
        fakepassword: "invalidpassword",
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
