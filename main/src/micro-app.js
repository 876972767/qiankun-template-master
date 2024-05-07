import store from './store'

const microApps = [
  {
    name: 'sub-vue',
    entry: process.env.VUE_APP_SUB_VUE,
    // entry: 'http://172.19.25.147:7777/',
    activeRule: '/sub-vue'
  },
  {
    name: 'sub-react',
    entry: process.env.VUE_APP_SUB_REACT,
    // entry: 'http://172.19.25.147:7788/',
    activeRule: '/sub-react'
  },
  {
    name: 'sub-html',
    entry: process.env.VUE_APP_SUB_HTML,
    // entry: 'http://172.19.25.147:7799/',
    activeRule: '/sub-html'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
