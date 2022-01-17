const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


const webpackConfig = () => {
    //Getting command line args from npm command in package.json
    console.log(process.argv);
    return {
        entry:"./src/index.js",
        output:{
        path : path.resolve(__dirname,'/dist'),
            filename : 'bundle.js'
        },
        module:{
            rules : [
                {
                    test:/\.(js|jsx)$/,
                    exclude:/node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
    }
};


module.exports = webpackConfig();