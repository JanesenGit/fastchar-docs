export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"FastChar"} }],
  ["/changelog/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/changelog/index.html.js"), meta: {"t":"FastChar更新日志"} }],
  ["/component/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/index.html.js"), meta: {"t":"介绍"} }],
  ["/component/agency-info.html", { loader: () => import(/* webpackChunkName: "agency-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/agency-info.html.js"), meta: {"t":"动态代理组件"} }],
  ["/component/cache-info.html", { loader: () => import(/* webpackChunkName: "cache-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/cache-info.html.js"), meta: {"t":"持久化Cache缓存组件"} }],
  ["/component/cache-memory-info.html", { loader: () => import(/* webpackChunkName: "cache-memory-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/cache-memory-info.html.js"), meta: {"t":"系统内存Cache缓存组件"} }],
  ["/component/fast-json-wrap.html", { loader: () => import(/* webpackChunkName: "fast-json-wrap.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/fast-json-wrap.html.js"), meta: {"t":"FastJsonWrap组件"} }],
  ["/component/fast-map-wrap.html", { loader: () => import(/* webpackChunkName: "fast-map-wrap.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/fast-map-wrap.html.js"), meta: {"t":"FastMapWrap组件"} }],
  ["/component/json-info.html", { loader: () => import(/* webpackChunkName: "json-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/json-info.html.js"), meta: {"t":"Json组件"} }],
  ["/component/locker-info.html", { loader: () => import(/* webpackChunkName: "locker-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/locker-info.html.js"), meta: {"t":"分布式锁组件"} }],
  ["/component/mq-info.html", { loader: () => import(/* webpackChunkName: "mq-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/mq-info.html.js"), meta: {"t":"消息队列MQ组件"} }],
  ["/component/properties-info.html", { loader: () => import(/* webpackChunkName: "properties-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/properties-info.html.js"), meta: {"t":"Properties组件"} }],
  ["/component/pubsub-info.html", { loader: () => import(/* webpackChunkName: "pubsub-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/pubsub-info.html.js"), meta: {"t":"消息订阅PubSub组件"} }],
  ["/component/security-info.html", { loader: () => import(/* webpackChunkName: "security-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/security-info.html.js"), meta: {"t":"内容加解密组件"} }],
  ["/component/template-info.html", { loader: () => import(/* webpackChunkName: "template-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/template-info.html.js"), meta: {"t":"模板引擎组件"} }],
  ["/component/yaml-info.html", { loader: () => import(/* webpackChunkName: "yaml-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/component/yaml-info.html.js"), meta: {"t":"Yaml组件"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"介绍"} }],
  ["/guide/action-info.html", { loader: () => import(/* webpackChunkName: "action-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/action-info.html.js"), meta: {"t":"控制器"} }],
  ["/guide/action-out.html", { loader: () => import(/* webpackChunkName: "action-out.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/action-out.html.js"), meta: {"t":"响应请求"} }],
  ["/guide/data-cache-info.html", { loader: () => import(/* webpackChunkName: "data-cache-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/data-cache-info.html.js"), meta: {"t":"数据缓存"} }],
  ["/guide/data-xml-info.html", { loader: () => import(/* webpackChunkName: "data-xml-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/data-xml-info.html.js"), meta: {"t":"数据库自动化"} }],
  ["/guide/datasource-info.html", { loader: () => import(/* webpackChunkName: "datasource-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/datasource-info.html.js"), meta: {"t":"配置数据源"} }],
  ["/guide/entity-info.html", { loader: () => import(/* webpackChunkName: "entity-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/entity-info.html.js"), meta: {"t":"数据库实体类"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "getting-started.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"t":"快速上手"} }],
  ["/guide/interceptor-info.html", { loader: () => import(/* webpackChunkName: "interceptor-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/interceptor-info.html.js"), meta: {"t":"拦截器"} }],
  ["/guide/jdbc-info.html", { loader: () => import(/* webpackChunkName: "jdbc-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/jdbc-info.html.js"), meta: {"t":"数据库读写操作JDBC"} }],
  ["/guide/overrider-info.html", { loader: () => import(/* webpackChunkName: "overrider-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/overrider-info.html.js"), meta: {"t":"类代理器"} }],
  ["/guide/param-converter-info.html", { loader: () => import(/* webpackChunkName: "param-converter-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/param-converter-info.html.js"), meta: {"t":"参数转换器"} }],
  ["/guide/param-validator-info.html", { loader: () => import(/* webpackChunkName: "param-validator-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/param-validator-info.html.js"), meta: {"t":"参数验证器"} }],
  ["/guide/plugin-info.html", { loader: () => import(/* webpackChunkName: "plugin-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/plugin-info.html.js"), meta: {"t":"自定义插件"} }],
  ["/guide/server-deploy.html", { loader: () => import(/* webpackChunkName: "server-deploy.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/server-deploy.html.js"), meta: {"t":"服务器搭建"} }],
  ["/guide/session-info.html", { loader: () => import(/* webpackChunkName: "session-info.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/session-info.html.js"), meta: {"t":"Session共享"} }],
  ["/guide/start-deploy.html", { loader: () => import(/* webpackChunkName: "start-deploy.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/start-deploy.html.js"), meta: {"t":"打包部署"} }],
  ["/guide/start-server.html", { loader: () => import(/* webpackChunkName: "start-server.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/start-server.html.js"), meta: {"t":"本地测试"} }],
  ["/guide/system-init.html", { loader: () => import(/* webpackChunkName: "system-init.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/system-init.html.js"), meta: {"t":"全局初始化"} }],
  ["/plugin/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/plugin/index.html.js"), meta: {"t":"介绍"} }],
  ["/question/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/question/index.html.js"), meta: {"t":"介绍"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
