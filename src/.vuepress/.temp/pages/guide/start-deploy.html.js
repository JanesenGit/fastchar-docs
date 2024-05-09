import comp from "/Users/Janesen/工作/space_webstorm/fastchar-docs/src/.vuepress/.temp/pages/guide/start-deploy.html.vue"
const data = JSON.parse("{\"path\":\"/guide/start-deploy.html\",\"title\":\"本地运行服务器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"本地运行服务器 FastChar框架无特殊打包要求，所以开发者按照传统打包方式进行打包部署即可。 打包war部署 开发者可以将web项目打包成war包部署到tomcat中。以maven项目为例，在pom.xml加入插件即可，如下： 采用的是 maven-war-plugin 打包插件。 打包fat-jar部署 开发者可以将项目打包成单个jar包（fat...\"},\"headers\":[{\"level\":2,\"title\":\"打包war部署\",\"slug\":\"打包war部署\",\"link\":\"#打包war部署\",\"children\":[]},{\"level\":2,\"title\":\"打包fat-jar部署\",\"slug\":\"打包fat-jar部署\",\"link\":\"#打包fat-jar部署\",\"children\":[]},{\"level\":2,\"title\":\"打包thin-jar部署\",\"slug\":\"打包thin-jar部署\",\"link\":\"#打包thin-jar部署\",\"children\":[]},{\"level\":2,\"title\":\"演示\",\"slug\":\"演示\",\"link\":\"#演示\",\"children\":[{\"level\":3,\"title\":\"fatjar和war两种 打包maven项目\",\"slug\":\"fatjar和war两种-打包maven项目\",\"link\":\"#fatjar和war两种-打包maven项目\",\"children\":[]},{\"level\":3,\"title\":\"thinjar打包 打包maven项目\",\"slug\":\"thinjar打包-打包maven项目\",\"link\":\"#thinjar打包-打包maven项目\",\"children\":[]}]},{\"level\":2,\"title\":\"Linux的JAR包启动脚本构建\",\"slug\":\"linux的jar包启动脚本构建\",\"link\":\"#linux的jar包启动脚本构建\",\"children\":[{\"level\":3,\"title\":\"第一步\",\"slug\":\"第一步\",\"link\":\"#第一步\",\"children\":[]},{\"level\":3,\"title\":\"第二步\",\"slug\":\"第二步\",\"link\":\"#第二步\",\"children\":[]},{\"level\":3,\"title\":\"使用说明\",\"slug\":\"使用说明\",\"link\":\"#使用说明\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.11,\"words\":932},\"filePathRelative\":\"guide/start-deploy.md\",\"autoDesc\":true}")
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
