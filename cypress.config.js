const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,  // Set the desired width
  viewportHeight: 800,  // Set the desired height

  env: {
    url1 : "https://chatbot.hellotars.com/conv/PtWInW/#",
    url2 : "https://admin.hellotars.com/ai/create-chatbot",
    url3 : "https://hellotars.com/"
  },

  projectId: "6qt7vm",


  e2e: {
    specPattern: 'cypress/integration/examples/*.js', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

