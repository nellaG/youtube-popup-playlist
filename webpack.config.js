const path = require('path');

module.exports = {
    entry: './ypopup/static/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'ypopup/static')
    }
};


