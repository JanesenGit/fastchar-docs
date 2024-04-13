import comp from "/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/session-info.html.vue"
const data = JSON.parse("{\"path\":\"/guide/session-info.html\",\"title\":\"Session共享\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"Session共享 FastChar默认支持分布式系统的Session共享。Session数据的存储使用 提供的缓存框架。 开始使用 前端开发人员在请求后端的接口时，追加请求头 SessionId 即可开启使用Session共享。如下： 必读 可以看出 FastChar 的共享原则是将 SessionId 交给前端管理，前端通过request请求头传入...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.fastchar.com/guide/session-info.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"FastChar\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Session共享\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Session共享 FastChar默认支持分布式系统的Session共享。Session数据的存储使用 提供的缓存框架。 开始使用 前端开发人员在请求后端的接口时，追加请求头 SessionId 即可开启使用Session共享。如下： 必读 可以看出 FastChar 的共享原则是将 SessionId 交给前端管理，前端通过request请求头传入...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Session共享\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"开始使用\",\"slug\":\"开始使用\",\"link\":\"#开始使用\",\"children\":[]},{\"level\":2,\"title\":\"后端获取Session\",\"slug\":\"后端获取session\",\"link\":\"#后端获取session\",\"children\":[]}],\"readingTime\":{\"minutes\":0.85,\"words\":255},\"filePathRelative\":\"guide/session-info.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
