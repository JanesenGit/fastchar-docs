/**
 * 侧边导航栏
 */
const sidebar = {
    "/guide": [
        {
            text: '指南',
            children: [
                '/guide/README.md',
                '/guide/getting-started.md',
                '/guide/system-init.md',
                '/guide/start-server.md',
                '/guide/start-deploy.md',
                '/guide/server-deploy.md',
            ],
        },
        {
            text: '基础',
            children: [
                '/guide/action-info.md',
                '/guide/action-out.md',
                '/guide/datasource-info.md',
                '/guide/jdbc-info.md',
                '/guide/entity-info.md',
            ],
        },
        {
            text:'深入',
            children: [
                '/guide/overrider-info.md',
                '/guide/interceptor-info.md',
                '/guide/data-cache-info.md',
                '/guide/data-xml-info.md',
                '/guide/param-converter-info.md',
                '/guide/param-validator-info.md',
                '/guide/session-info.md',
                '/guide/plugin-info.md',
            ],
        },
    ],
    "/component":[
        {
            text: '内置组件',
            children: [
                '/component/README.md',
                '/component/properties-info.md',
                '/component/yaml-info.md',
                '/component/json-info.md',
                '/component/fast-json-wrap.md',
                '/component/fast-map-wrap.md',
                '/component/security-info.md',
                '/component/cache-info.md',
                '/component/cache-memory-info.md',
                '/component/template-info.md',
                '/component/mq-info.md',
                '/component/pubsub-info.md',
                '/component/agency-info.md',
                '/component/locker-info.md',
            ],
        },
    ],
    "/changelog":[
        {
            text: '更新列表',
            children: [
                '/changelog/README.md',
            ],
        },
    ]
};

export {
    sidebar
};