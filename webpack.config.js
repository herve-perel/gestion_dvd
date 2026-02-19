const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/app.js')
    .enableStimulusBridge('./assets/controllers.json') // si tu utilises Stimulus
    .enableSassLoader()
    .enableSingleRuntimeChunk() // << important
;

module.exports = Encore.getWebpackConfig();
