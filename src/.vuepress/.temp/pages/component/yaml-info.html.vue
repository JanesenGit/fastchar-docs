<template><div><h1 id="yaml组件" tabindex="-1"><a class="header-anchor" href="#yaml组件"><span>Yaml组件</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastChar核心组件，FastChar默认集成了 yaml 工具包，开发者可以非常快速便捷的操作 <code v-pre>.yaml</code> 文件。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>开发者需要集成yaml的工具包。以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.yaml/snakeyaml --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.yaml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>snakeyaml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取默认的yaml文件" tabindex="-1"><a class="header-anchor" href="#获取默认的yaml文件"><span>获取默认的yaml文件</span></a></h2>
<p>在FastChar中，默认读取位于 <code v-pre>classes</code> 目录下的 <code v-pre>config.yml</code> 文件，
以maven项目为例，目录结构如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>FastCharTest/
└── main/
    ├── java/
    └── resources/
        └── config.yml <span class="token comment"># &lt;- 在这里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取示例如下：</p>
<CodeTabs id="26" :data='[{"id":"config.yml"},{"id":"java"}]'>
<template #title0="{ value, isActive }">config.yml</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># This is a YML file示例注释</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> My Application名称
<span class="token key atrule">description</span><span class="token punctuation">:</span> A simple Java Web application描述
<span class="token key atrule">version</span><span class="token punctuation">:</span> 1.0版本
<span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token comment">#定义嵌套属性</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mydb
  <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> db_name<span class="token operator">=</span><span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getYaml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"database.name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="获取指定名称的yaml文件" tabindex="-1"><a class="header-anchor" href="#获取指定名称的yaml文件"><span>获取指定名称的yaml文件</span></a></h2>
<p>允许开发者读取位于 <code v-pre>classes</code> 目录下的指定文件名的 <code v-pre>.yaml</code> 文件，
以maven项目为例，目录结构如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>FastCharTest/
└── main/
    ├── java/
    └── resources/
        └── redis_config.yaml <span class="token comment"># &lt;- 在这里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取示例如下：</p>
<CodeTabs id="44" :data='[{"id":"redis_config.yaml"},{"id":"java"}]'>
<template #title0="{ value, isActive }">redis_config.yaml</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># This is a YML file示例注释</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> My Application名称
<span class="token key atrule">description</span><span class="token punctuation">:</span> A simple Java Web application描述
<span class="token key atrule">version</span><span class="token punctuation">:</span> 1.0版本
<span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token comment">#定义嵌套属性</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mydb
  <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">String</span> db_name<span class="token operator">=</span><span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getYaml</span><span class="token punctuation">(</span><span class="token string">"redis_config"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"database.name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="获取指定地址的yml文件" tabindex="-1"><a class="header-anchor" href="#获取指定地址的yml文件"><span>获取指定地址的yml文件</span></a></h2>
<p>读取示例如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">String</span> db_name<span class="token operator">=</span><span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getYaml</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"yml文件绝对地址"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"database.name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动更新到内存中" tabindex="-1"><a class="header-anchor" href="#自动更新到内存中"><span>自动更新到内存中</span></a></h2>
<p>FastChar默认只加载一次yaml文件存在内存中，当修改yaml本地文件时，并不会自动更新到内存中，
如果开发者需要自动加载更新，按照如下配置即可：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> db_name <span class="token operator">=</span> <span class="token class-name">FastChar</span>
                <span class="token punctuation">.</span><span class="token function">getYaml</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"yml文件绝对地址"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setAutoReload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment">//开启自动更新</span>
                <span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"database.name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="保存到本地yaml文件" tabindex="-1"><a class="header-anchor" href="#保存到本地yaml文件"><span>保存到本地yaml文件</span></a></h2>
<p>开发者可以将内存存修改的yaml值，更新保存到本地的yaml文件，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">FastChar</span>
        <span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"yml文件绝对地址"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"new_key"</span><span class="token punctuation">,</span><span class="token string">"值"</span><span class="token punctuation">)</span><span class="token comment">//新增一个键值对</span>
        <span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//保存到本地源文件中</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


