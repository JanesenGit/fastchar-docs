<template><div><h1 id="系统内存cache缓存组件" tabindex="-1"><a class="header-anchor" href="#系统内存cache缓存组件"><span>系统内存Cache缓存组件</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastChar核心组件，FastChar默认集成了 <code v-pre>Caffeine</code> 内存缓存功能。</p>
<p>系统内存缓存顾名思义就是把数据缓存到系统内存中， 并不会持久化到磁盘中。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>开发者可以调用静态方法 <code v-pre>FastChar.getMemoryCache()</code> 快速的进行系统内存缓存读写操作。如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">//新增或修改缓存</span>
<span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getMemoryCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取指定key缓存值</span>
<span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getMemoryCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//删除指定key的缓存</span>
<span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用框架默认内存缓存" tabindex="-1"><a class="header-anchor" href="#使用框架默认内存缓存"><span>使用框架默认内存缓存</span></a></h2>
<p>FastChar默认实现了基本内存缓存功能，开发者无需做任何配置。</p>
<p>基本规则： 当内存中的缓存数据超过3分钟未使用时，将自动释放缓存的数据。</p>
<p>开发者可以通过 <code v-pre>FastMemoryCacheConfig</code> 配置缓存的基本规则，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
        
        <span class="token comment">//配置默认的缓存架构</span>
        engine<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastMemoryCacheConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setCacheTimeout</span><span class="token punctuation">(</span><span class="token number">1000L</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token comment">//设置超时时间 单位：毫秒</span>
                <span class="token punctuation">.</span><span class="token function">setCacheIdle</span><span class="token punctuation">(</span><span class="token number">1000L</span><span class="token operator">*</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置心跳间隔时间 单位：毫秒</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用caffeine作为内存缓存" tabindex="-1"><a class="header-anchor" href="#使用caffeine作为内存缓存"><span>使用Caffeine作为内存缓存</span></a></h2>
<p>如果开发者需要使用<a href="https://github.com/ben-manes/caffeine/" target="_blank" rel="noopener noreferrer">Caffeine<ExternalLinkIcon/></a>作为FastChar的内存缓存介质，只要在项目中引用相应的Caffeine客户端工具包并完成Redis配置即可。</p>
<p>以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.ben-manes.caffeine/caffeine --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.ben-manes.caffeine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>caffeine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置caffeine" tabindex="-1"><a class="header-anchor" href="#配置caffeine"><span>配置Caffeine</span></a></h3>
<p>默认系统做了Caffeine基本的优化配置，如果开发者需要再次配置，可以获取 <code v-pre>FastCaffeineConfig</code> 类进行全局配置。</p>
<p>如下修改配置：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
        
        <span class="token comment">//配置Caffeine</span>
        engine<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastCaffeineConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">getBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">expireAfterWrite</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MINUTES</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">maximumSize</span><span class="token punctuation">(</span><span class="token number">10_000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


