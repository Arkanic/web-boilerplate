// dev hosting for the compiled code

const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const config = require("./webpack.config");

const app = express();

if(process.argv.length > 2 && process.argv[2] == "prod") {
    console.log("(production) Serving from folder...");
    app.use(express.static("dist"));
} else {
    console.log("(dev) Webpack hotswap generating...");
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler));
}

app.listen(8080, () => {
    console.log("Dev server started");
});