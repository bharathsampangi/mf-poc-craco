const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function (config, env) {
        // ...add your webpack config
        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = {
        cacheGroups: {
            default: false,
        },
        };
        config.output.filename = "static/js/[name].js";
        config.plugins[5].options.filename = "static/css/[name].css";
        config.plugins[5].options.moduleFilename = () => "static/css/main.css";
        config.plugins = [
            ...config.plugins,
            new ModuleFederation(
                {
                    name: "dash",
                    filename: "remoteEntry.js",
                    library: {
                        type: "var",
                        name: "dash",
                    },
                    exposes: {
                        // expose each component
                        "./Component": "./src/index.js",
                        "./HomeContainer": "./src/home.js"
                    }
                })
        ];
        return config;
    }
}