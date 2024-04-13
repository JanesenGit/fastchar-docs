<template><div><h1 id="本地测试" tabindex="-1"><a class="header-anchor" href="#本地测试"><span>本地测试</span></a></h1>
<p>FastChar 提供了 <code v-pre>tomcat</code> <code v-pre>jetty</code> <code v-pre>undertow</code> 三个嵌入式服务器工具包，开发者可以自由选择使用本地快速测试项目。</p>
<h2 id="使用开发环境启动测试" tabindex="-1"><a class="header-anchor" href="#使用开发环境启动测试"><span>使用开发环境启动测试</span></a></h2>
<p>由于FastChar只是JavaWeb项目的Web框架，所以开发者完全可以使用对应的开发环境进行部署测试。</p>
<p>只要按照最基本（Servlet）的JavaWeb项目部署测试即可。</p>
<p>支持 Eclipse 、MyEclipse 和 IntelliJ IDEA ，开发环境使用的服务器容器建议使用Tomcat 7.0以上</p>
<h2 id="使用嵌入式tomcat" tabindex="-1"><a class="header-anchor" href="#使用嵌入式tomcat"><span>使用嵌入式Tomcat</span></a></h2>
<p>开发者如果需要使用嵌入式tomcat启动项目，按照如下步骤：</p>
<ul>
<li>步骤一：
需要引用FastChar提供的工具包，以maven项目为例，如下：</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fastchar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>fastchar-server-tomcat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>[1.0,)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>步骤二：在main方法中启动，如下：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastServer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">FastServerTomcat</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FastTomcatConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setContextPath</span><span class="token punctuation">(</span><span class="token string">"/test_project"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在浏览器中访问：http://localhost:8888/test_project 即可。</p>
<h2 id="使用嵌入式jetty" tabindex="-1"><a class="header-anchor" href="#使用嵌入式jetty"><span>使用嵌入式Jetty</span></a></h2>
<p>开发者如果需要使用嵌入式tomcat启动项目，按照如下步骤：</p>
<ul>
<li>步骤一：
需要引用FastChar提供的工具包，以maven项目为例，如下：</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fastchar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>fastchar-server-jetty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>[1.0,)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>步骤二：在main方法中启动，如下：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastServer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FastServerJetty</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FastJettyConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setContextPath</span><span class="token punctuation">(</span><span class="token string">"/test_project"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在浏览器中访问：http://localhost:8888/test_project 即可。</p>
<h2 id="使用嵌入式undertow" tabindex="-1"><a class="header-anchor" href="#使用嵌入式undertow"><span>使用嵌入式Undertow</span></a></h2>
<p>开发者如果需要使用嵌入式undertow启动项目，按照如下步骤：</p>
<ul>
<li>步骤一：
需要引用FastChar提供的工具包，以maven项目为例，如下：</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fastchar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>fastchar-server-undertow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>[1.0,)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>步骤二：在main方法中启动，如下：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastServer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FastServerUndertow</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FastUndertowConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setContextPath</span><span class="token punctuation">(</span><span class="token string">"/test_project"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在浏览器中访问：http://localhost:8888/test_project 即可。</p>
<h2 id="嵌入式启动项目说明【必读】" tabindex="-1"><a class="header-anchor" href="#嵌入式启动项目说明【必读】"><span>嵌入式启动项目说明【必读】</span></a></h2>
<p>1、在使用嵌入式启动项目时，必须要设置 <code v-pre>contextPath</code> 值，在本地测试使用时，由于开发环境的编译生成目录不同，所以在设置 <code v-pre>contextPath</code> 路径时，
请自行检查本地开发环境的编译目录是否与 <code v-pre>contextPath</code> 值一致。</p>
</div></template>


