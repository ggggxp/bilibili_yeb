[002_云e办前端创建项目_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ff4y1M7XK?p=2&vd_source=b4034e748c41276c7564ce22d04759d2)

### 环境准备

1. 管理员身份打开cmd
2. 下载Node.js ： http://nodejs.cn/download
   - 可以安装到D盘
3. 安装node.js淘宝镜像加速器（cnpm）
   - `npm install cnpm -g` 
   - 不过，建议不要用 cnpm 安装（会有各种诡异的bug）可以通过如下操作解决 npm 下载速度慢的问题
   - `npm install --registry=https://registry.npm.taobao.org`
4. (可选)安装nrm并用`nrm ls`查看
5. 安装新版本的@vue/cli
   - `npm install -g @vue/cli`
6. 检验是否安装成功
   - `node -v`
   - `vue --version`

### 项目创建及运行

1. 管理员身份打开powershell 
2. 打开项目所在位置
   - `cd D:\new_codefield\java_projects`
3. 创建名叫yeb的项目
   - `vue create yeb`
   - ![image-20220813212326277](C:\Users\86135\AppData\Roaming\Typora\typora-user-images\image-20220813212326277.png)
   - 选择（上下键和空格） Manually select features
     - 如果要选择vue版本，教学视频用的是vue 2.x
   - 选择 Babel 和 Router
     - 若没有Router选项，参见如下教程：[(28条消息) vue2:安装、配置、使用前端路由vue-router_H_x的博客-CSDN博客_vue2安装路由](https://blog.csdn.net/qq_43650979/article/details/104185450)
   - 不使用history mode
   - 配置信息存储位置：In package.json
   - 不保存为未来项目的模板
4. 根据提示，执行 `cd yeb` 和 `npm run serve`
5. 以后在vscode中运行该项目时，直接在终端执行上述**两条**命令即可

### 前端登录页面

##### 安装element-ui

- 参考[组件 | Element](https://element.eleme.cn/#/zh-CN/component/quickstart)的 *安装* 和 *快速上手* 部分
- vscode终端在yeb路径下运行`npm i element-ui -S`，成功后在package.json的dependencies中有一行“element-ui”
- 按照 *快速上手* 配置main.js

##### 执行逻辑

1. main.js：程序入口
   - render：渲染组件app.vue
2. app.vue的`<router-view/>`：渲染路由加载的组件，index.js
3. router>index.js：通过path找到Login.vue
4. Login.vue：
   1. 创建表单[组件 | Element](https://element.eleme.cn/#/zh-CN/component/form)
      1. `<template></template>`之间写`<el-form>`等前端布局
      2. `<script></script>`之间

##### 报错及解决

*`error Component name “Login“ should always be multi-word vue/multi-word-component-names`*

在vue.config.js的主体添加 `lintOnSave:false`关闭格式检查

