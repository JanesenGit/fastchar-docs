# Session共享

FastChar默认支持分布式系统的Session共享。Session数据的存储使用 [Cache数据缓存组件](../component/cache-info.md) 提供的缓存框架。

## 开始使用

前端开发人员在请求后端的接口时，追加请求头 `SessionId` 即可开启使用Session共享。如下：

::: tabs

@tab jquery

```javascript
// jquery 全局配置请求头
$.ajaxSetup(
    {
        headers: {
            SessionId: "e10adc3949ba59abbe56e057f20f883e",
        }
    }
);
```

@tab axios

```javascript
// axios 全局请求拦截 追加请求头
axios.interceptors.request.use(config => {
    config.headers.SessionId = "e10adc3949ba59abbe56e057f20f883e";
    return config
})
```
:::


::: danger 必读

可以看出 FastChar 的共享原则是将 `SessionId` 交给前端管理，前端通过request请求头传入后台，所以前端在随机生成 `SessionId` 时必须确保唯一性。

前端可以自由的将 `SessionId` 存入 `Cookie` 中，也就避免了后端操作 `Cookie` 跨域的问题！

也省去了前端部署到服务器后需要配置服务器代理。

:::


## 后端获取Session
后端开发人员无需变动Session的获取方式，按照常规的[Session获取](action-info.md#获取session)即可！

