export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"FastChar官方文档\",\"description\":\"FastChar官方文档网站\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicons/favicon.png\"}],[\"script\",{},\"\\n                /*百度站点推送代码*/\\n                (function () {\\n                    let bp = document.createElement('script');\\n                    let curProtocol = window.location.protocol.split(':')[0];\\n                    if (curProtocol === 'https') {\\n                        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';\\n                    } else {\\n                        bp.src = 'http://push.zhanzhang.baidu.com/push.js';\\n                    }\\n                    let s = document.getElementsByTagName(\\\"script\\\")[0];\\n                    s.parentNode.insertBefore(bp, s);\\n                })();\\n            \"]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"FastChar\",\"description\":\"FastChar官方文档网站\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}