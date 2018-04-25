const path = require('path');

module.exports = {
    entry: './ypopup/static/js/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'ypopup/static')
    },
    devtool: "source-map",

    resolve: {
        extensions:[".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};


