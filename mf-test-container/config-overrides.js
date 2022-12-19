const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function (config, env) {
        // ...add your webpack config
        config.plugins = [
            ...config.plugins,
            new ModuleFederation({
                name: 'mfe2',
                library: { type: 'var', name: 'mfe2'},
                remotes: {
                    mfe1: 'dash',
                }
            })
        ]
        return config;
    }
}