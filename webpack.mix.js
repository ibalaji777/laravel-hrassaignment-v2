const webpack=require('./webpack.config')
const mix = require('laravel-mix')


mix.js('resources/js/app.js', 'public/js')
.postCss('resources/css/app.css','resources/css/vuetify.css', 'public/css', [

])

    .vue()

    // mix.override(config => {
    //     config.modules.rules.push({
    //         test: /\.s(c|a)ss$/,
    //         use: [
    //           'vue-style-loader',
    //           'css-loader',
    //           {
    //             loader: 'sass-loader',
    //             // Requires sass-loader@^7.0.0
    //             options: {
    //               implementation: require('sass'),
    //               indentedSyntax: true // optional
    //             },
    //             // Requires >= sass-loader@^8.0.0
    //             options: {
    //               implementation: require('sass'),
    //               sassOptions: {
    //                 indentedSyntax: true // optional
    //               },
    //             },
    //           },
    //         ],
    //     })
    // })
    // <- Add this
    // .sass('resources/css/app.css', 'public/css',{
    //     implementation: require('sass')
    // })
    mix.webpackConfig(webpack);
