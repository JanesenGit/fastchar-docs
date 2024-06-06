import {hopeTheme} from "vuepress-theme-hope";
import {algolia} from "./configs/algolia";
import {navbar} from "./configs/navbar";
import {sidebar} from "./configs/sidebar";

const themeConfig = hopeTheme({
    logo: '/images/logo.svg',
    logoDark: '/images/logo-dark.svg',
    //代码仓库
    repo: 'https://github.com/JanesenGit/fastchar-docs',
    docsDir: 'src',
    darkmode: "toggle",
    navbarIcon: true,
    hostname: "https://www.fastchar.com",
    fullscreen: true,
    displayFooter: true,
    footer: "Copyright © 2018-2024 FastChar🇨🇳. All rights reserved",
    iconAssets: "//at.alicdn.com/t/c/font_1142863_b6e77r7s7ug.css",
    plugins: {
        seo: true,
        mdEnhance: {
            codetabs: true,
            tabs: true,
            mark: true,
            imgLazyload: true,
            imgMark: true,
            imgSize: true,
            flowchart:true,
            print: true,
        },
        copyright: false,
        copyCode: {
            showInMobile: true,
        },
        docsearch: algolia,
        comment: {
            provider: "Giscus",
            repo: "JanesenGit/fastchar-docs",
            repoId: "R_kgDOLtiHVQ",
            category: "Announcements",
            categoryId: "DIC_kwDOLtiHVc4CeqPv",

        },
    },
    locales: {
        '/': {
            navbar: navbar,
            navbarIcon: true,
            selectLanguageName: '简体中文',
            selectLanguageText: '选择语言',
            selectLanguageAriaLabel: '选择语言',
            sidebar: sidebar,
            sidebarDepth: 0,
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdatedText: '上次更新',
            contributorsText: '贡献者',
            tip: '提示',
            warning: '注意',
            danger: '警告',
            notFound: [
                '这里什么都没有',
                '我们怎么到这来了？',
                '这是一个 404 页面',
                '看起来我们进入了错误的链接',
            ],
            backToHome: '返回首页',
            openInNewWindow: '在新窗口打开',
            toggleColorMode: '切换颜色模式',
            toggleSidebar: '切换侧边栏',
        },
    }
});

export {
    themeConfig
}