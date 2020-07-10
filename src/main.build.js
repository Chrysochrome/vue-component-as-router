/**
 * 最后打包发布的时候会使用此文件，请将main.js中的引用部分转移到这里
 * 不要写入公共依赖文件夹，不要引入iview，iviewex和vuex
 */
import App from './App.vue'

// 在此处引入vuex和router，将下面导出对象改为{app: App, store: store, routes: router}
// import store from './Store'

export default { app: App }
