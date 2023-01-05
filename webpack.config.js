const path = require("path");

const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/ts/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".tsx", ".js",
            ".css"
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        moduleIds: "deterministic",
        minimizer: [
            new TerserWebpackPlugin({})
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "[contenthash].css"
        }),
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        filename: "[contenthash].js",
        path: path.resolve(__dirname, "dist")
    }
}