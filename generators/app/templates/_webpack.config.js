var webpack = require('webpack'),
    path = require('path');

var libName="<%= libName %>";

module.exports = {
    entry:{
        'entry':'./src/index.ts',
        '.entry.min':'./src/index.ts'
    },
    output:{
        path: path.resolve(__dirname,'_bundles'),
        filename:libName+".[name].js",
        libraryTarget: 'umd',
        library: libName,
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            query: {
                declaration: false
            }
        }]
    }

};