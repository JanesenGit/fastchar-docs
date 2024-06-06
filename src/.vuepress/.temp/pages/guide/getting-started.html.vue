<template><div><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h1>
<h2 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境"><span>依赖环境</span></a></h2>
<p>FastChar 支持Java1.8以上版本（Java8、Java9、Java11、Java20或以上），已灵活兼容Servlet2.0（javax.servlet.*）、Servlet3.0（jakarta.servlet.*）</p>
<h2 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器"><span>运行容器</span></a></h2>
<p><a href="http://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">tomcat</a>、<a href="https://eclipse.dev/jetty/" target="_blank" rel="noopener noreferrer">jetty</a>、<a href="https://undertow.io/" target="_blank" rel="noopener noreferrer">undertow</a></p>
<h2 id="maven搭建项目" tabindex="-1"><a class="header-anchor" href="#maven搭建项目"><span>Maven搭建项目</span></a></h2>
<p>Maven搭建项目，按照以下三步即可极速搭建FastChar项目，推荐使用Maven搭建项目！省心省事省力！</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>以下的代码演示所使用的FastChar版本必须在2.0.0以上。</p>
</div>
<ul>
<li><strong>步骤 1</strong>: 在pom.xml中加入fastchar的<a href="https://mvnrepository.com/artifact/com.fastchar/fastchar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/maven-central/v/com.fastchar/fastchar?label=maven-fastchar" alt="Maven Central" loading="lazy"></a> <a href="https://github.com/JanesenGit/FastChar" target="_blank" rel="noopener noreferrer">Github</a> 引用，如下代码：</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">>com.fastchar&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">>fastchar&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">>2.0.2&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 2</strong>: 在任意的<code v-pre>package</code>中创建TestAction类并继承FastAction类，如下代码：</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> TestAction</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> FastAction</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     * 获得路由地址</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     * Get routing address</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">@return</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> getRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "/test"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> index</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">        responseText</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"搭建成功！"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 3</strong>: 使用Tomcat服务运行项目，访问项目地址即可，例如上述案例中的项目名为<code v-pre>FastCharTest</code>，那么访问的地址：http://localhost:8080/FastCharTest/test/</li>
</ul>
<h2 id="手动搭建项目" tabindex="-1"><a class="header-anchor" href="#手动搭建项目"><span>手动搭建项目</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>以下的代码演示所使用的FastChar版本必须在2.0.0以上。</p>
</div>
<ul>
<li>
<p><strong>步骤 1</strong>: 下载FastChar的<a href="https://mvnrepository.com/artifact/com.fastchar/fastchar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/maven-central/v/com.fastchar/fastchar?label=maven-fastchar" alt="Maven Central" loading="lazy"></a> ，并引用到Web项目中。</p>
</li>
<li>
<p><strong>步骤 2</strong>: 在任意的<code v-pre>package</code>中创建TestAction类并继承FastAction类，如下代码：</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> TestAction</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> FastAction</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     * 获得路由地址</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     * Get routing address</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">@return</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> getRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "/test"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> index</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">        responseText</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"搭建成功！"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 3</strong>: 使用Tomcat服务运行项目，访问项目地址即可，例如上述案例中的项目名为<code v-pre>FastCharTest</code>，那么访问的地址：http://localhost:8080/FastCharTest/test/</li>
</ul>
</div></template>


