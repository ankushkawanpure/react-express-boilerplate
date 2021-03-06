module.exports = {
    entry : './app-client.js',
    output: {
        path : 'public',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test : /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query : {
                    presets : ['es2015', 'react']
                }
            }
        ]
    }
};  