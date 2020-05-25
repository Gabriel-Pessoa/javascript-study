const modoDev = process.env.NODE_ENV !== 'production' // if(process.env.NODE_ENV == production) { modoDev = false } else { modoDev = true }  
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', // if(modoDev) { modoDev = 'development'} else {modoDev = 'production'}
    entry: './src/index.js', // arquivo de entrada
    devServer: { // webServer
        contentBase: './build', // ler a pasta build, que só será criada no modo production. Fica armazenada em memória no modo development
        port: 9000,
    },
    optimization: { // opções de configurações do minizicadores
        minimizer: [
            new UglifyJsPlugin({ //minificador de js
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({}) // minificador de css
        ]
    },
    output: { // pasta de saída do minificadores (só vai gerar com 'npm run build')
        filename: 'app.js', // nome do arquivo
        path: __dirname + '/build' // caminho da pasta
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'estilo.css' }), // plugin para extrair css
        new CopyWebpackPlugin([
            { context: 'src/', from: '**/*.html' }, // copia as páginas html para a pata build, essa cópia é necessária porque os arquivos não serão referenciados em arquivos secundários
            { context: 'src/', from: 'imgs/**/*' } // copia as imgs para a pasta build, essa cópia é necessária porque os arquivos não serão referenciados em arquivos secundários
        ])
    ],
    module: {
        rules: [{ // regras
            test: /\.s?[ac]ss$/, // regras de css / sass
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/, // regras de imagem ao lincar no css ou importar no js, ele será copiado aqui
            use: ['file-loader']
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)$/, // tudo referenciado a partir do fonte será copiado
            use: ['file-loader']
        }]
    }
}