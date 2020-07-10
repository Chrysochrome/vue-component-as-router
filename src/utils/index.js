import core from 'nr.os.js'

const {
  utils, coding, scriptLoader, lib, reduxUtils
} = core.SDK
const reduxStore = core.store
const {
  actions, portalEventManager, appEventManager, axios, httpErrorHandler, createNewInstance
} = core
const reduxActions = actions

// 重构http
const newAxios = createNewInstance()
newAxios.get = (url, config) => new Promise((resolve, reject) => {
  axios.get(url, config).then((response) => {
    resolve(response.data)
  }).catch(reject)
})

newAxios.post = (url, param, config) => new Promise((resolve, reject) => {
  axios.post(url, param, config).then((response) => {
    resolve(response.data)
  }).catch(reject)
})

newAxios.delete = (url, config) => new Promise((resolve, reject) => {
  axios.delete(url, config).then((response) => {
    resolve(response.data)
  }).catch(reject)
})

newAxios.put = (url, param, config) => new Promise((resolve, reject) => {
  axios.put(url, param, config).then((response) => {
    resolve(response.data)
  }).catch(reject)
})

export const hasAuthority = () => reduxStore.getState().user.username === 'admin'

export {
  utils,
  reduxActions,
  reduxStore,
  portalEventManager,
  appEventManager,
  axios,
  newAxios,
  httpErrorHandler,
  createNewInstance,
  coding,
  scriptLoader,
  lib,
  reduxUtils
}
