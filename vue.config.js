const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Tiago Alves'; // Altere 'Novo Título' para o título desejado
      return args;
    });
  },
  transpileDependencies: true
})
