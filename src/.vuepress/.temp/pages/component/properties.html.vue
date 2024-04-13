<template><div><h1 id="properties组件" tabindex="-1"><a class="header-anchor" href="#properties组件" aria-hidden="true">#</a> Properties组件</h1>
<p>FastChar核心组件，FastChar默认集成了 properties 工具包，开发者可以非常快速便捷的操作 .properties 文件。</p>
<h2 id="获取默认的properties文件" tabindex="-1"><a class="header-anchor" href="#获取默认的properties文件" aria-hidden="true">#</a> 获取默认的properties文件</h2>
<p>在FastChar中，默认读取位于 <code v-pre>classes</code> 目录下的 <code v-pre>config.properties</code> 文件，
以maven项目为例，目录结构如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>FastCharTest/
└── main/
    ├── java/
    └── resources/
        └── config.properties <span class="token comment"># &lt;- 我们在这里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取示例如下：</p>
<CodeTabs id="16" :data='[{"id":"config.properties"},{"id":"java"}]'>
<template #title0="{ value, isActive }">config.properties</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">db_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token class-name">String</span> db_host<span class="token operator">=</span><span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"db_host"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="获取指定名称的properties文件" tabindex="-1"><a class="header-anchor" href="#获取指定名称的properties文件" aria-hidden="true">#</a> 获取指定名称的properties文件</h2>
<p>允许开发者读取位于 <code v-pre>classes</code> 目录下的指定文件名的 <code v-pre>.properties</code> 文件，
以maven项目为例，目录结构如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>FastCharTest/
└── main/
    ├── java/
    └── resources/
        └── redis_config.properties <span class="token comment"># &lt;- 我们在这里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取示例如下：</p>
<CodeTabs id="34" :data='[{"id":"redis_config.properties"},{"id":"java"}]'>
<template #title0="{ value, isActive }">redis_config.properties</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">db_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">localhost</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token comment">//读取指定 redis_config.properties 文件</span>
 <span class="token class-name">String</span> db_host<span class="token operator">=</span><span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token string">"redis_config"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"db_host"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="获取指定地址的properties文件" tabindex="-1"><a class="header-anchor" href="#获取指定地址的properties文件" aria-hidden="true">#</a> 获取指定地址的properties文件</h2>
<p>读取示例如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token class-name">String</span> db_host<span class="token operator">=</span><span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"properties文件绝对地址"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"db_host"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自动更新到内存中" tabindex="-1"><a class="header-anchor" href="#自动更新到内存中" aria-hidden="true">#</a> 自动更新到内存中</h2>
<p>FastChar默认只加载一次properties文件，存在内存中，当修改properties本地文件时，并不会自动更新到内存中，
如果开发者需要自动加载更新，按照如下配置即可：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token class-name">String</span> db_host<span class="token operator">=</span><span class="token class-name">FastChar</span>
                <span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"properties文件绝对地址"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setAutoReload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment">//开启自动更新</span>
                <span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"db_host"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="保存到本地properties文件" tabindex="-1"><a class="header-anchor" href="#保存到本地properties文件" aria-hidden="true">#</a> 保存到本地properties文件</h2>
<p>开发者可以将内存存修改的properties值，更新保存到本地的properties文件，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token class-name">String</span> db_host<span class="token operator">=</span><span class="token class-name">FastChar</span>
                <span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"properties文件绝对地址"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"new_key"</span><span class="token punctuation">,</span><span class="token string">"值"</span><span class="token punctuation">)</span><span class="token comment">//新增一个键值对</span>
                <span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//保存到本地源文件中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


