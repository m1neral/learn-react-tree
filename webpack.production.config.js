var webpack = require('webpack');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.min.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /(\.js$|\.jsx$)/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};
