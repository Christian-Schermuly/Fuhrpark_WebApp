module.exports = {
    entry: './app/main.js',
    output: {
        path: './app',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './app',
        port: 8100,
        headers: { "Access-Control-Allow-Origin": "http://localhost:8100",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization" },
        inline: false,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            
                
            },
            {
                test: /\.css$/,
                loader:'style!css!'
        }
        ]
    },
    node:{
        net: 'empty',
        dns: 'empty',
}
}