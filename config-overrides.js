
module.exports = {
    webpack: function (config, env) {
        config.output.library = 'reactApp'
        config.output.libraryTarget = 'umd'
        config.output.publicPath = 'http://localhost:' + process.env.PORT
        return config;
    },
    devServer: function (configFunction) {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost)
            config.port = process.env.PORT
            config.headers = {
                'Access-Control-Allow-Origin': '*'
            }
            return config
        }
    }
}
