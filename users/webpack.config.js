const path = require('path')

module.exports = {
    entry: './assets/scripts/index.js',
    output: {
        filename: 'usersBundle.js',
        path: path.resolve(__dirname, 'static')
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
}