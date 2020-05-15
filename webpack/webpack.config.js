// como será interpretado pelo Node, teremos que usar a sintaxa que o Node entende
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// exportar objeto de configuração
module.exports = {
    mode: modoDev ? 'development':'production', // modo de desenvolvimento (com comentários e extenso), production (minificado)
    entry: './src/principal.js', // ponto de entrada
    output: {
        filename: 'principal.js', // nome do arquivo
        path: __dirname + '/public' // __dirname aponta para a pasta raiz 
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel:true // executar de forma mais rápida possível
            }),
            new OptimizeCSSAssetsPlugin({})
        ]   
    },
    plugins: [
        new MiniCssExtractPlugin({ // função construtora
            filename: "estilo.css" // nome do arquivo 
        })    
    ],
    module: {
        // regras
        rules: [{
            test: /\.s?[ac]ss$/, //loader responsável por extensão .css        
            use: [
                MiniCssExtractPlugin.loader, // criar um css externo
                //'style-loader', //Adicionar CSS a DOM injetando a tag <style>
                'css-loader', // interpretar @import, url()
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,   
            use: ['file-loader']   
        }]
    }
}