const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "isaya-cypress-e2e-tests",

  e2e: {
    baseUrl: "https://student.michaelkentburns.com/",
    video: true,
    videoCompression: true, // 32,
    videosFolder: "cypress/videos",
    viewportWidth: 1280,
    viewportHeight: 720,
    keystrokeDelay: 100,

    setupNodeEvents(on, config) {
      return;
      // implement node event listeners here
      on("after:spec", (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === "failed"),
          );
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video);
          }
        }
      });
    },
  },
});
