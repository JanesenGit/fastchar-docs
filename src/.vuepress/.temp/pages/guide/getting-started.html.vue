<template><div><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h1>
<h2 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境"><span>依赖环境</span></a></h2>
<p>FastChar 要求Java1.8以上版本。</p>
<h2 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器"><span>运行容器</span></a></h2>
<p><a href="http://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">tomcat<ExternalLinkIcon/></a>、<a href="https://eclipse.dev/jetty/" target="_blank" rel="noopener noreferrer">jetty<ExternalLinkIcon/></a>、<a href="https://undertow.io/" target="_blank" rel="noopener noreferrer">undertow<ExternalLinkIcon/></a></p>
<h2 id="maven搭建项目" tabindex="-1"><a class="header-anchor" href="#maven搭建项目"><span>Maven搭建项目</span></a></h2>
<p>Maven搭建项目，按照以下三步即可极速搭建FastChar项目，推荐使用Maven搭建项目！省心省事省力！</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>以下的代码演示所使用的FastChar版本必须在2.0.0以上。</p>
</div>
<ul>
<li><strong>步骤 1</strong>: 在pom.xml中加入fastchar的<a href="https://mvnrepository.com/artifact/com.fastchar/fastchar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/maven-central/v/com.fastchar/fastchar?label=maven-fastchar" alt="Maven Central" loading="lazy"><ExternalLinkIcon/></a>引用，如下代码：</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fastchar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>fastchar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 2</strong>: 在任意的<code v-pre>package</code>中创建TestAction类并继承FastAction类，如下代码：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAction</span> <span class="token keyword">extends</span> <span class="token class-name">FastAction</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获得路由地址
     * Get routing address
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> <span class="token function">getRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"/test"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"搭建成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 3</strong>: 使用Tomcat服务运行项目，访问项目地址即可，例如上述案例中的项目名为<code v-pre>FastCharTest</code>，那么访问的地址：http://localhost:8080/FastCharTest/test/</li>
</ul>
<h2 id="手动搭建项目" tabindex="-1"><a class="header-anchor" href="#手动搭建项目"><span>手动搭建项目</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>以下的代码演示所使用的FastChar版本必须在2.0.0以上。</p>
</div>
<ul>
<li>
<p><strong>步骤 1</strong>: 下载FastChar的<a href="https://mvnrepository.com/artifact/com.fastchar/fastchar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/maven-central/v/com.fastchar/fastchar?label=maven-fastchar" alt="Maven Central" loading="lazy"><ExternalLinkIcon/></a> ，并引用到Web项目中。</p>
</li>
<li>
<p><strong>步骤 2</strong>: 在任意的<code v-pre>package</code>中创建TestAction类并继承FastAction类，如下代码：</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAction</span> <span class="token keyword">extends</span> <span class="token class-name">FastAction</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获得路由地址
     * Get routing address
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> <span class="token function">getRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"/test"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"搭建成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 3</strong>: 使用Tomcat服务运行项目，访问项目地址即可，例如上述案例中的项目名为<code v-pre>FastCharTest</code>，那么访问的地址：http://localhost:8080/FastCharTest/test/</li>
</ul>
</div></template>


