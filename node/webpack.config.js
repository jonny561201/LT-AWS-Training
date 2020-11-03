const path = require('path');

module.exports = {
    target: 'node',
    entry: {
        'index': path.resolve(__dirname, 'index.js')
    },
    externals: [
        'aws-sdk'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    }
}