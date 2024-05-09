<template><div><h1 id="持久化cache缓存组件" tabindex="-1"><a class="header-anchor" href="#持久化cache缓存组件"><span>持久化Cache缓存组件</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastChar核心组件，FastChar默认集成了 <code v-pre>Redis</code> <code v-pre>EhCache2</code> <code v-pre>EhCache3</code> 缓存，开发可以根据自身情况选择使用不同的模板引擎。</p>
<p>缓存的数据将持久化的磁盘中。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>开发者可以调用静态方法 <code v-pre>FastChar.getCache()</code> 快速的进行缓存读写操作。如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">//新增或修改缓存</span>
<span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"User"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取指定tag标签的key缓存值</span>
<span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"User"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//删除指定tag标签的缓存</span>
<span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"User"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//删除指定tag标签下的指定key的缓存</span>
<span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"User"</span><span class="token punctuation">,</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//判断指定tag标签的key是否存在</span>
<span class="token keyword">boolean</span> exists <span class="token operator">=</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token string">"User"</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用redis作为缓存" tabindex="-1"><a class="header-anchor" href="#使用redis作为缓存"><span>使用Redis作为缓存</span></a></h2>
<p>如果开发者需要使用Redis作为FastChar的缓存介质，只要在项目中引用相应的Redis客户端工具包并完成Redis配置即可。</p>
<p>FastChar默认支持 <code v-pre>jedis</code> <code v-pre>lettuce</code> <code v-pre>redisson</code> 客户端工具连接操作Redis缓存。</p>
<h3 id="redis配置" tabindex="-1"><a class="header-anchor" href="#redis配置"><span>Redis配置</span></a></h3>
<p>开发者需要手动配置Redis的服务器地址和账户密码等信息。如下：</p>
<h4 id="配置单个redis" tabindex="-1"><a class="header-anchor" href="#配置单个redis"><span>配置单个Redis</span></a></h4>
<ul>
<li>配置类 <code v-pre>FastRedisConfig</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
         <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastRedisConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//配置了本地无账户密码的redis服务器</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置主从模式的多个redis" tabindex="-1"><a class="header-anchor" href="#配置主从模式的多个redis"><span>配置主从模式的多个Redis</span></a></h4>
<ul>
<li>配置类 <code v-pre>FastRedisConfig</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
         <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastRedisConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token comment">//配置了本地无账户密码的redis服务器</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.100"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.101"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">必读</p>
<p>配置【主从】模式的多个Redis的服务器，最终以哪台作为【主】服务器，由于各个客户端工具包的配置差异，请根据具体使用的客户端工具进行配置。</p>
</div>
<h4 id="配置集群模式的多个redis" tabindex="-1"><a class="header-anchor" href="#配置集群模式的多个redis"><span>配置集群模式的多个Redis</span></a></h4>
<ul>
<li>配置类 <code v-pre>FastRedisConfig</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
         <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastRedisConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setCluster</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment">//开启集群模式</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token comment">//配置了本地无账户密码的redis服务器</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.100"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.101"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">说明</p>
<p>完成Redis配置后，即可<RouteLink to="/component/cache-info.html#%E4%BD%BF%E7%94%A8">使用</RouteLink>数据缓存功能。</p>
</div>
<h3 id="使用jedis" tabindex="-1"><a class="header-anchor" href="#使用jedis"><span>使用Jedis</span></a></h3>
<p>如果开发者需要使用<a href="https://mvnrepository.com/artifact/redis.clients/jedis" target="_blank" rel="noopener noreferrer">Jedis<ExternalLinkIcon/></a>作为Redis客户端工具包，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/redis.clients/jedis --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>4.4.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置jedis" tabindex="-1"><a class="header-anchor" href="#配置jedis"><span>配置Jedis</span></a></h4>
<ul>
<li>配置类 <code v-pre>FastJedisConfig</code></li>
</ul>
<p>当Redis服务器模式采用【主从】模式后，需要指定【主】服务器，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastRedisConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token comment">//配置了本地无账户密码的redis服务器</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.100"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.101"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">jedisConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//获取jedis相关配置类</span>
                <span class="token punctuation">.</span><span class="token function">setMasterName</span><span class="token punctuation">(</span><span class="token string">"主redis的服务器名"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置主服务器</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">说明</p>
<p>完成Jedis配置后，即可<RouteLink to="/component/cache-info.html#%E4%BD%BF%E7%94%A8">使用</RouteLink>数据缓存功能。</p>
</div>
<h3 id="使用lettuce" tabindex="-1"><a class="header-anchor" href="#使用lettuce"><span>使用Lettuce</span></a></h3>
<p>如果开发者需要使用<a href="https://lettuce.io/" target="_blank" rel="noopener noreferrer">Lettuce<ExternalLinkIcon/></a>作为Redis客户端工具包，只要在项目中引用相应的客户端包即可。</p>
<p>以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/io.lettuce/lettuce-core --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>io.lettuce<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lettuce-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>6.2.5.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">内置说明</p>
<p>由于lettuce采用了netty框架，所以支持缓存数据的异步操作，所以FastChar在执行缓存delete和set时使用了异步执行。</p>
</div>
<h4 id="配置lettuce" tabindex="-1"><a class="header-anchor" href="#配置lettuce"><span>配置Lettuce</span></a></h4>
<ul>
<li>配置类 <code v-pre>FastLettuceConfig</code></li>
</ul>
<p>当Redis服务器模式采用【主从】模式后，需要指定【主】服务器，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastRedisConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token comment">//配置了本地无账户密码的redis服务器</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.100"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.101"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">lettuceConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//获取lettuce相关配置</span>
                <span class="token punctuation">.</span><span class="token function">setMasterId</span><span class="token punctuation">(</span><span class="token string">"主Redis的ID"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">说明</p>
<p>完成Lettuce配置后，即可<RouteLink to="/component/cache-info.html#%E4%BD%BF%E7%94%A8">使用</RouteLink>数据缓存功能。</p>
</div>
<h3 id="使用redisson" tabindex="-1"><a class="header-anchor" href="#使用redisson"><span>使用Redisson</span></a></h3>
<p>如果开发者需要使用<a href="https://redisson.org/" target="_blank" rel="noopener noreferrer">Redisson<ExternalLinkIcon/></a>作为Redis客户端工具包，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.redisson/redisson --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.redisson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>redisson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.23.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置redisson" tabindex="-1"><a class="header-anchor" href="#配置redisson"><span>配置Redisson</span></a></h4>
<ul>
<li>配置类 <code v-pre>FastRedissonConfig</code></li>
</ul>
<p>当Redis服务器模式采用【主从】模式后，需要指定【主】服务器，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastRedisConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token comment">//配置了本地无账户密码的redis服务器</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.100"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"192.168.0.101"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">redissonConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//Redisson相关配置</span>
                <span class="token punctuation">.</span><span class="token function">setMasterServer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FastRedisHostAndPort</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//指定【主】Redis的地址和端口</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">说明</p>
<p>完成Redisson配置后，即可<RouteLink to="/component/cache-info.html#%E4%BD%BF%E7%94%A8">使用</RouteLink>数据缓存功能。</p>
</div>
<h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h3>
<p>如果jedis、lettuce和redisson的jar包都存在项目中</p>
<p>FastChar 选择的优先级为：<code v-pre>redisson &gt; lettuce &gt; jedis</code></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>jedis、lettuce和redisson必须只能引用其中一个，否则操作redis异常！</p>
</div>
<h2 id="使用ehcache2作为缓存" tabindex="-1"><a class="header-anchor" href="#使用ehcache2作为缓存"><span>使用EhCache2作为缓存</span></a></h2>
<p>如果开发者需要使用<a href="https://www.ehcache.org/" target="_blank" rel="noopener noreferrer">EhCache2<ExternalLinkIcon/></a>作为FastChar的缓存介质，只要在项目中引用相应的EhCache2工具包并完成EhCache2配置即可。</p>
<p>以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/net.sf.ehcache/ehcache --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>net.sf.ehcache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>ehcache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.10.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置ehcache2" tabindex="-1"><a class="header-anchor" href="#配置ehcache2"><span>配置EhCache2</span></a></h3>
<ul>
<li>配置类 <code v-pre>FastEhCache2Config</code></li>
</ul>
<Tabs id="197" :data='[{"id":"配置示例"},{"id":"ehcache2.xml的内容"}]'>
<template #title0="{ value, isActive }">配置示例</template>
<template #title1="{ value, isActive }">ehcache2.xml的内容</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//配置方式一</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastEhCache2Config</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token comment">//代码显示配置ehcache</span>
                <span class="token punctuation">.</span><span class="token function">setConfiguration</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//配置方式二</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastEhCache2Config</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token comment">//xml配置文件配置，位于 类的根目录 下</span>
                <span class="token punctuation">.</span><span class="token function">setConfigurationFileName</span><span class="token punctuation">(</span><span class="token string">"ehcache2.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>
<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ehcache</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xsi:</span>noNamespaceSchemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../config/ehcache.xsd<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>consumerCache<span class="token punctuation">"</span></span>
		 <span class="token attr-name">maxBytesLocalDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1G<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>diskStore</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java.io.tmpdir<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!--
       name:缓存名称。
       maxElementsInMemory：缓存最大个数。
       eternal:对象是否永久有效，一但设置了，timeout将不起作用。
       timeToIdleSeconds：设置对象在失效前的允许闲置时间（单位：秒）。仅当eternal=false对象不是永久有效时使用，可选属性，默认值是0，也就是可闲置时间无穷大。
       timeToLiveSeconds：设置对象在失效前允许存活时间（单位：秒）。最大时间介于创建时间和失效时间之间。仅当eternal=false对象不是永久有效时使用，默认是0.，也就是对象存活时间无穷大。
       overflowToDisk：当内存中对象数量达到maxElementsInMemory时，Ehcache将会对象写到磁盘中。
       diskSpoolBufferSizeMB：这个参数设置DiskStore（磁盘缓存）的缓存区大小。默认是30MB。每个Cache都应该有自己的一个缓冲区。
       maxElementsOnDisk：硬盘最大缓存个数。
       diskPersistent：是否缓存虚拟机重启期数据 Whether the disk store persists between restarts of the Virtual Machine. The default value is false.
       diskExpiryThreadIntervalSeconds：磁盘失效线程运行时间间隔，默认是120秒。
       memoryStoreEvictionPolicy：当达到maxElementsInMemory限制时，Ehcache将会根据指定的策略去清理内存。默认策略是LRU（最近最少使用）。你可以设置为FIFO（先进先出）或是LFU（较少使用）。
       clearOnFlush：内存数量最大时是否清除。
    --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defaultCache</span>
			<span class="token attr-name">maxElementsInMemory</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10000<span class="token punctuation">"</span></span>
			<span class="token attr-name">maxElementsOnDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
			<span class="token attr-name">eternal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
			<span class="token attr-name">overflowToDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
			<span class="token attr-name">diskPersistent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
			<span class="token attr-name">timeToIdleSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
			<span class="token attr-name">timeToLiveSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
			<span class="token attr-name">diskSpoolBufferSizeMB</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span>
			<span class="token attr-name">diskExpiryThreadIntervalSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span>
			<span class="token attr-name">memoryStoreEvictionPolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LFU<span class="token punctuation">"</span></span>
	<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ehcache</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="使用ehcache3作为缓存" tabindex="-1"><a class="header-anchor" href="#使用ehcache3作为缓存"><span>使用EhCache3作为缓存</span></a></h2>
<p>如果开发者需要使用<a href="https://www.ehcache.org/" target="_blank" rel="noopener noreferrer">EhCache3<ExternalLinkIcon/></a>作为FastChar的缓存介质，只要在项目中引用相应的EhCache3工具包并完成EhCache3配置即可。</p>
<p>以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/net.sf.ehcache/ehcache --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>net.sf.ehcache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>ehcache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.10.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置ehcache3" tabindex="-1"><a class="header-anchor" href="#配置ehcache3"><span>配置EhCache3</span></a></h3>
<ul>
<li>配置类 <code v-pre>FastEhCache3Config</code></li>
</ul>
<Tabs id="225" :data='[{"id":"配置示例"},{"id":"ehcache3.xml的内容"}]'>
<template #title0="{ value, isActive }">配置示例</template>
<template #title1="{ value, isActive }">ehcache3.xml的内容</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//配置方式一</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastEhCache3Config</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token comment">//代码显示配置ehcache</span>
                <span class="token punctuation">.</span><span class="token function">setConfiguration</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//配置方式二</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastEhCache3Config</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token comment">//xml配置文件配置，位于 类的根目录 下</span>
                <span class="token punctuation">.</span><span class="token function">setConfigurationFileName</span><span class="token punctuation">(</span><span class="token string">"ehcache3.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>
<span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ehcache</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xsi:</span>noNamespaceSchemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../config/ehcache.xsd<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>consumerCache<span class="token punctuation">"</span></span>
		 <span class="token attr-name">maxBytesLocalDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1G<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>diskStore</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java.io.tmpdir<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!--
       name:缓存名称。
       maxElementsInMemory：缓存最大个数。
       eternal:对象是否永久有效，一但设置了，timeout将不起作用。
       timeToIdleSeconds：设置对象在失效前的允许闲置时间（单位：秒）。仅当eternal=false对象不是永久有效时使用，可选属性，默认值是0，也就是可闲置时间无穷大。
       timeToLiveSeconds：设置对象在失效前允许存活时间（单位：秒）。最大时间介于创建时间和失效时间之间。仅当eternal=false对象不是永久有效时使用，默认是0.，也就是对象存活时间无穷大。
       overflowToDisk：当内存中对象数量达到maxElementsInMemory时，Ehcache将会对象写到磁盘中。
       diskSpoolBufferSizeMB：这个参数设置DiskStore（磁盘缓存）的缓存区大小。默认是30MB。每个Cache都应该有自己的一个缓冲区。
       maxElementsOnDisk：硬盘最大缓存个数。
       diskPersistent：是否缓存虚拟机重启期数据 Whether the disk store persists between restarts of the Virtual Machine. The default value is false.
       diskExpiryThreadIntervalSeconds：磁盘失效线程运行时间间隔，默认是120秒。
       memoryStoreEvictionPolicy：当达到maxElementsInMemory限制时，Ehcache将会根据指定的策略去清理内存。默认策略是LRU（最近最少使用）。你可以设置为FIFO（先进先出）或是LFU（较少使用）。
       clearOnFlush：内存数量最大时是否清除。
    --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defaultCache</span>
			<span class="token attr-name">maxElementsInMemory</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10000<span class="token punctuation">"</span></span>
			<span class="token attr-name">maxElementsOnDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
			<span class="token attr-name">eternal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
			<span class="token attr-name">overflowToDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
			<span class="token attr-name">diskPersistent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
			<span class="token attr-name">timeToIdleSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
			<span class="token attr-name">timeToLiveSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
			<span class="token attr-name">diskSpoolBufferSizeMB</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span>
			<span class="token attr-name">diskExpiryThreadIntervalSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span>
			<span class="token attr-name">memoryStoreEvictionPolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LFU<span class="token punctuation">"</span></span>
	<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ehcache</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="优先级-1" tabindex="-1"><a class="header-anchor" href="#优先级-1"><span>优先级</span></a></h2>
<p>如果redis、ehcache2和ehcache3的相关jar包都存在项目中</p>
<p>FastChar 选择的优先级为：<code v-pre>redis &gt; ehcache3 &gt; ehcache2</code></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>redis、ehcache2和ehcache3的相关jar包必须只能引用其中一个，否则操作cache异常！</p>
</div>
<h2 id="自定义实现缓存" tabindex="-1"><a class="header-anchor" href="#自定义实现缓存"><span>自定义实现缓存</span></a></h2>
<p>开发者可以实现 <code v-pre>IFastCache</code> 接口 自定义实现缓存数据处理。然后将<RouteLink to="/guide/overrider-info.html#%E4%BB%A3%E7%90%86%E7%B1%BB%E7%9A%84%E6%B3%A8%E5%86%8C">实现的类注册到代理器</RouteLink>中即可！</p>
</div></template>


