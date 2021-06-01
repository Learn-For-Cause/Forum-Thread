const express = require("express");
const historyApiFallback = require("connect-history-api-fallback");
const mongoose = require("mongoose");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const bodyParser = require('body-parser');
const { success, error } = require("consola");
const config = require("../config/config");
const webpackConfig = require("../webpack.config");

const isDev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// API routes
require("./routes")(app);




if (isDev) {
    const compiler = webpack(webpackConfig);

    app.use(
        historyApiFallback({
            verbose: false
        })
    );

    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            contentBase: path.resolve(__dirname, "../client/public"),
            stats: {
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false
            }
        })
    );

    app.use(webpackHotMiddleware(compiler));
    app.use(express.static(path.resolve(__dirname, "../dist")));
} else {
    app.use(express.static(path.resolve(__dirname, "../dist")));
    app.get("*", function(req, res) {
        res.sendFile(path.resolve(__dirname, "../dist/index.html"));
        res.end();
    });
}

// Start the server.
const startApp = async(MONGODB_URI, port) => {
    try {
        // Connection With DB
        await mongoose.connect(
            MONGODB_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );

        success({
            message: `Successfully connected with the Database \n${MONGODB_URI}`,
            badge: true
        });

        // Start Listenting for the server on PORT
        app.listen(port, () =>
            success({ message: `Server started on PORT ${port}`, badge: true })
        );
    } catch (err) {
        error({
            message: `Unable to connect with Database \n${err}`,
            badge: true
        });
        startApp(isDev ? config.db_dev : config.db, port);
    }
};

startApp(isDev ? config.db_dev : config.db, port);

module.exports = app;
