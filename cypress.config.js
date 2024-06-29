const { defineConfig } = require('cypress')
const dotenv = require('dotenv').config()

module.exports = defineConfig({
    e2e: {
        // baseUrl: 'https://coding.pasv.us',

        env: {
            BASE_URL: process.env.BASE_URL,
            EMAIL: process.env.EMAIL,
            PASSWORD: process.env.PASSWORD,
        },

        excludeSpecPattern: [
            'cypress/e2e/1-getting-started/*',
            'cypress/e2e/2-advanced-examples/*',
        ],

        watchForFileChanges: false,
        viewportWidth: 1200,
        viewportHeight: 700,
        // setupNodeEvents(on, config) {
        //   // implement node event listeners here
        // },
    },
})
