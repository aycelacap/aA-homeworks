const path = require('path'); //this has be in ES5 for some reason 

module.exports = {
    entry: "./frontend/my_app.jsx",
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: "bundle.js"
    }
};

