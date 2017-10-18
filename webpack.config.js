var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        data: [
            // 'react-hot-loader/patch',
            // 'webpack-dev-server/client?http://localhost:4444',
            // 'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:4444/public/js'
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react', 'stage-2']
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    devServer: {
        host: 'localhost',
        port: 4444,
        historyApiFallback: false,
        hotOnly: true,
        inline: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {"/api/**": {target: 'http://localhost:3001/', secure: false}}
    }
};
