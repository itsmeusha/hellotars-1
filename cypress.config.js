const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,  // Set the desired width
  viewportHeight: 800,  // Set the desired height

  env: {
    url1textIUI: "https://chatbot.hellotars.com/conv/PtWInW/#",
    url2prime: "https://admin.hellotars.com/ai/create-chatbot",
    url3webPage: "https://hellotars.com/"
  },

  projectId: "6qt7vm",

  e2e: {
    "supportFile": "cypress/support/e2e.js",
    specPattern: [
      'cypress/integration/examples/oldlook/*.js', 
      'cypress/integration/examples/newlook/*.js',
      'cypress/integration/examples/primewebsite/*.js',
      'cypress/integration/examples/hellotarswebsite/*.js'
    ]
  },

  setupNodeEvents(on, config) {
    // implement node event listeners here
  }
});
