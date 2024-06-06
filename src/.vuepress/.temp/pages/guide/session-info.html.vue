<template><div><h1 id="session共享" tabindex="-1"><a class="header-anchor" href="#session共享"><span>Session共享</span></a></h1>
<p>FastChar默认支持分布式系统的Session共享。Session数据的存储使用 <RouteLink to="/component/cache-info.html">Cache数据缓存组件</RouteLink> 提供的缓存框架。</p>
<h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用"><span>开始使用</span></a></h2>
<p>前端开发人员在请求后端的接口时，追加请求头 <code v-pre>SessionId</code> 即可开启使用Session共享。如下：</p>
<Tabs id="12" :data='[{"id":"jquery"},{"id":"axios"}]'>
<template #title0="{ value, isActive }">jquery</template>
<template #title1="{ value, isActive }">axios</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">// jquery 全局配置请求头</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">$</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">ajaxSetup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">        headers</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">            SessionId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"e10adc3949ba59abbe56e057f20f883e"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">// axios 全局请求拦截 追加请求头</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">axios</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">interceptors</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">request</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">use</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">config</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> =></span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">    config</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">headers</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">SessionId</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "e10adc3949ba59abbe56e057f20f883e"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="hint-container caution">
<p class="hint-container-title">必读</p>
<p>可以看出 FastChar 的共享原则是将 <code v-pre>SessionId</code> 交给前端管理，前端通过request请求头传入后台，所以前端在随机生成 <code v-pre>SessionId</code> 时必须确保唯一性。</p>
<p>前端可以自由的将 <code v-pre>SessionId</code> 存入 <code v-pre>Cookie</code> 中，也就避免了后端操作 <code v-pre>Cookie</code> 跨域的问题！</p>
<p>也省去了前端部署到服务器后需要配置服务器代理。</p>
</div>
<h2 id="后端获取session" tabindex="-1"><a class="header-anchor" href="#后端获取session"><span>后端获取Session</span></a></h2>
<p>后端开发人员无需变动Session的获取方式，按照常规的<RouteLink to="/guide/action-info.html#%E8%8E%B7%E5%8F%96session">Session获取</RouteLink>即可！</p>
</div></template>


