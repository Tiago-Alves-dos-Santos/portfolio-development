const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  // publicPath: process.env.NODE_ENV === 'production' ?'/portfolio/':'/'
  publicPath: '/portfolio/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Tiago Alves'; // Altere 'Novo Título' para o título desejado
      return args;
    });
  },
  transpileDependencies: true
})
