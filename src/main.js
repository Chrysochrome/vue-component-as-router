import Vue from 'vue'
import App from './App.vue'
import iview from 'iview'
import nros from 'nr.os.js'
import iviewex from 'iviewex'
import vuex from 'vuex'

// 公共资源目录，会引入nr.os提供的资源文件以供调试，打包时不会包含这些文件
import './public_library'

Vue.prototype.$utils = nros.SDK.utils

// 登录信息
const loginInfo = {
  au_path: '/nvwa/login',
  usr_name: 'admin',
  usr_psw: 'admin',
  tenant: '__default_tenant__'
}

const {
  utils
} = nros.SDK

window.nros = nros

// const CRYPTO_KEY = lib.CryptoJS.enc.Utf8.parse('JIUQI/NEWREP/AES')
// const CRYPTO_VI = lib.CryptoJS.enc.Utf8.parse('JIUQI/NEWREP/AES')

// function encrypt (data) {
//   return coding.enCoding(data,
//     CRYPTO_KEY,
//     { iv: CRYPTO_VI, mode: lib.CryptoJS.mode.CBC, padding: lib.CryptoJS.pad.ZeroPadding })
// }

// function decrypt (data) {
//   return coding.deCoding(data,
//     CRYPTO_KEY,
//     { iv: CRYPTO_VI, mode: lib.CryptoJS.mode.CBC, padding: lib.CryptoJS.pad.ZeroPadding })
// }
const loginParam = {
  username: loginInfo.usr_name,
  pwd: loginInfo.usr_psw,
  tenant: loginInfo.tenant,
  encrypted: false
}
nros.restful.post(loginInfo.au_path, loginParam).then((res) => {
  utils.setToken(res.token)
  if (window._v) {
    window._v.$Message.info(`${loginInfo.usr_name} 登录成功`)
  } else {
    console.log(`${loginInfo.usr_name} 登录成功`)
  }
}).catch((res) => {
  if (window._v) {
    window._v.$Message.error(`<span>${loginInfo.usr_name} 登录失败</span><div style="margin-left: 15px;">info: ${res.data.message}</div>`)
  } else {
    console.log(`${loginInfo.usr_name} 登录失败`)
  }
})
// 优先执行登录操作
setTimeout(() => {}, 1000)

// 保持原有app中调用名不变
Vue.prototype.$portalAPI = nros.event
Vue.use(nros.restful)

Vue.use(iview)
Vue.use(iviewex)
Vue.use(vuex)
// Vue.config.productionTip = false

window._v = new Vue({
  render: h => h(App)
}).$mount('#app')
