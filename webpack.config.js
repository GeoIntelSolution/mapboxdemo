const path =require('path')
const HtmlWebPlugin=require('html-webpack-plugin')

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,"/dist"),
        filename:"[name].js",
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {loader:"babel-loader"}
                ],
                
                exclude: /node_modules/,
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            }
        ]
    },
    devServer:{
        historyApiFallback:true
    },
    plugins:[
        new HtmlWebPlugin({
            template:__dirname+"/src/index.html"
        })
    ]



}