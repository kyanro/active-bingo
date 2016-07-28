module.exports = {
    entry: {
        sample: "./src/index.tsx"
    },
    output: {
        filename: "./public/dist/[name]/bundle.js"
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.tsx?$/, loader: "ts-loader"}
        ],

        preLoaders: [
            {test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDom"
    // }
};
