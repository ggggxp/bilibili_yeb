const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false //关闭格式检查（error Component name “Login“ should always be multi-word vue/multi-word-component-names）
})
