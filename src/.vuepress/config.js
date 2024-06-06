import {defineUserConfig} from 'vuepress'
import {themeConfig} from "./theme";

export default defineUserConfig({
    base: "/",
    title: 'FastChar官方文档',
    description: 'FastChar官方文档网站',
    head: [
        ['link', {rel: 'icon', href: '/favicons/favicon.png'}]
        ,
        [
            "script", {},
            `
                /*百度站点推送代码*/
                (function () {
                    let bp = document.createElement('script');
                    let curProtocol = window.location.protocol.split(':')[0];
                    if (curProtocol === 'https') {
                        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
                    } else {
                        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
                    }
                    let s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(bp, s);
                })();
            `
        ],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'FastChar🇨🇳',
            description: 'FastChar官方文档网站',
        },
    },
    theme: themeConfig,
});