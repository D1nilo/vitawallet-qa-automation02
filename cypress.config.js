const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://vitawallet.io",
        viewportWidth: 1280,
        viewportHeight: 720,
        video: true,
        screenshotOnRunFailure: true,
        setupNodeEvents(on, config) {
            // ⚠️ IMPORTANTE:
            // Aquí NO debe haber:
            // - require("@cypress/webpack-preprocessor")
            // - require("cypress-mochawesome-reporter/plugin")
            // - nada que registre preprocesadores
            return config;
        },
    },
});
