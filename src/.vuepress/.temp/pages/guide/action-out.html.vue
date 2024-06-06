<template><div><h1 id="响应请求" tabindex="-1"><a class="header-anchor" href="#响应请求"><span>响应请求</span></a></h1>
<p>FastChar 用来响应Request请求的类：FastOut</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastOut是FastChar核心类之一，用作响应Response输出</p>
<h2 id="显式调用" tabindex="-1"><a class="header-anchor" href="#显式调用"><span>显式调用</span></a></h2>
<p>通过FastAction提供的response系列方法，开发者可以显式调用response相关方法响应请求，如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> TestAction</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> FastAction</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    /**省略其他代码**/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> login</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">        responseText</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"登录成功！"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求访问到 <code v-pre>login</code> 方法后，方法内部响应了 <code v-pre>content-type</code> 为 <code v-pre>text/plain</code> 的文本内容。</p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>当方法内部显式的调用了response相关方法后，程序将立即中断方法执行。如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> login</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">() {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">        responseText</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"登录成功！"</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        //以下代码程序不会执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">getParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"name"</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者内嵌调用方法，如下</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> userInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">() {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">        login</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        //以下代码程序不会执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> userId</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">getParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"userId"</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="方法返回内容" tabindex="-1"><a class="header-anchor" href="#方法返回内容"><span>方法返回内容</span></a></h2>
<p>进入FastAction方法后，开发者可以通过方法返回值用做响应请求。如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> TestAction</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> FastAction</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    /**省略其他代码**/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">AFastResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">FastOut</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">TEXT</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> login</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "登录成功！"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以发现方法 <code v-pre>login</code> 多了一个注解 <code v-pre>AFastResponse</code> ，此注解的作用是告诉系统方法返回的内容使用 <code v-pre>content-type</code>
为 <code v-pre>text/plain</code>
来响应内容。</p>
<p>也就是类型为<code v-pre>FastOut.Type.TEXT</code> 对应FastOut类为 <code v-pre>FastOutText</code></p>
<h2 id="方法返回类型" tabindex="-1"><a class="header-anchor" href="#方法返回类型"><span>方法返回类型</span></a></h2>
<p>进入FastAction方法后，开发者可以通过方法返回响应的类型用做响应请求。如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> TestAction</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> FastAction</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    /**省略其他代码**/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> Object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> login</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> FastOutText</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"登录成功！"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认提供的响应类型" tabindex="-1"><a class="header-anchor" href="#默认提供的响应类型"><span>默认提供的响应类型</span></a></h2>
<p>以下默认响应类型，在包 <code v-pre>com.fastchar.out</code> 中</p>
<h3 id="fastouttext" tabindex="-1"><a class="header-anchor" href="#fastouttext"><span>FastOutText</span></a></h3>
<ul>
<li>响应文本格式（text/plain）</li>
<li>注解类型：FastOut.Type.TEXT</li>
<li>显式调用示例： <code v-pre>responseText(&quot;文本&quot;);</code></li>
</ul>
<h3 id="fastouthtml" tabindex="-1"><a class="header-anchor" href="#fastouthtml"><span>FastOutHtml</span></a></h3>
<ul>
<li>响应网页格式（text/html）</li>
<li>注解类型：FastOut.Type.HTML</li>
<li>显式调用示例： <code v-pre>responseHtml(&quot;&lt;h1&gt;网页内容&lt;/h1&gt;&quot;);</code></li>
</ul>
<h3 id="fastoutjson" tabindex="-1"><a class="header-anchor" href="#fastoutjson"><span>FastOutJson</span></a></h3>
<ul>
<li>响应Json格式（application/json）</li>
<li>注解类型：FastOut.Type.JSON</li>
<li>显式调用示例： <code v-pre>responseJson(&quot;json数据&quot;);</code></li>
<li>需要引用json工具包，<RouteLink to="/guide/component-info.html#json%E7%BB%84%E4%BB%B6">点击查看</RouteLink></li>
</ul>
<h3 id="fastoutfile" tabindex="-1"><a class="header-anchor" href="#fastoutfile"><span>FastOutFile</span></a></h3>
<ul>
<li>响应File文件（application/octet-stream）</li>
<li>注解类型：FastOut.Type.FILE</li>
<li>显式调用示例： <code v-pre>responseFile(new File(&quot;文件路径&quot;));</code></li>
</ul>
<h3 id="fastoutjsp" tabindex="-1"><a class="header-anchor" href="#fastoutjsp"><span>FastOutJsp</span></a></h3>
<ul>
<li>响应Jsp</li>
<li>注解类型：FastOut.Type.JSP</li>
<li>显式调用示例： <code v-pre>responseJsp(&quot;jsp路径&quot;);</code></li>
</ul>
<h3 id="fastoutxml" tabindex="-1"><a class="header-anchor" href="#fastoutxml"><span>FastOutXml</span></a></h3>
<ul>
<li>响应Xml格式（text/xml）</li>
<li>注解类型：FastOut.Type.XML</li>
<li>显式调用示例： <code v-pre>responseXml(&quot;&lt;root&gt;xml内容&lt;/root&gt;&quot;);</code></li>
</ul>
<h3 id="fastoutfreemarker" tabindex="-1"><a class="header-anchor" href="#fastoutfreemarker"><span>FastOutFreemarker</span></a></h3>
<ul>
<li>响应<a href="http://freemarker.foofun.cn/index.html" target="_blank" rel="noopener noreferrer">Freemarker</a>模板</li>
<li>注解类型：FastOut.Type.FREEMARKER</li>
<li>显式调用示例： <code v-pre>responseFreemarker(&quot;模板路径&quot;);</code></li>
<li>由内置模板组件功能提供支持 <RouteLink to="/component/template-info.html#freemarker%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E">Freemarker模板引擎</RouteLink></li>
</ul>
<h3 id="fastoutvelocity" tabindex="-1"><a class="header-anchor" href="#fastoutvelocity"><span>FastOutVelocity</span></a></h3>
<ul>
<li>响应<a href="https://velocity.apache.org/engine/devel/user-guide.html#about-this-guide" target="_blank" rel="noopener noreferrer">Velocity</a>模板</li>
<li>注解类型：FastOut.Type.VELOCITY</li>
<li>显式调用示例： <code v-pre>responseVelocity(&quot;模板路径&quot;);</code></li>
<li>由内置模板组件功能提供支持 <RouteLink to="/component/template-info.html#velocity%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E">Velocity模板引擎</RouteLink></li>
</ul>
<h3 id="fastoutthymeleaf" tabindex="-1"><a class="header-anchor" href="#fastoutthymeleaf"><span>FastOutThymeleaf</span></a></h3>
<ul>
<li>响应<a href="https://www.thymeleaf.org/index.html" target="_blank" rel="noopener noreferrer">Thymeleaf</a>模板</li>
<li>注解类型：FastOut.Type.THYMELEAF</li>
<li>显式调用示例： <code v-pre>responseThymeleaf(&quot;模板路径&quot;);</code></li>
<li>由内置模板组件功能提供支持 <RouteLink to="/component/template-info.html#thymeleaf%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E">Thymeleaf模板引擎</RouteLink></li>
</ul>
<h3 id="fastoutcaptcha" tabindex="-1"><a class="header-anchor" href="#fastoutcaptcha"><span>FastOutCaptcha</span></a></h3>
<ul>
<li>响应验证码图片（image/jpeg）</li>
<li>注解类型：无</li>
<li>显式调用示例： <code v-pre>responseCaptcha();</code></li>
</ul>
<h3 id="fastoutparamerror" tabindex="-1"><a class="header-anchor" href="#fastoutparamerror"><span>FastOutParamError</span></a></h3>
<ul>
<li>响应参数错误。IFastValidator验证器使用此类型响应</li>
<li>注解类型：无</li>
<li>显式调用示例： <code v-pre>responseParamError(&quot;参数名&quot;, &quot;错误信息&quot;);</code></li>
</ul>
<h3 id="fastoutstatus" tabindex="-1"><a class="header-anchor" href="#fastoutstatus"><span>FastOutStatus</span></a></h3>
<ul>
<li>响应状态，例如404、500等</li>
<li>注解类型：FastOut.Type.STATUS</li>
<li>显式调用示例： <code v-pre>responseStatus(404);</code></li>
</ul>
<h3 id="fastoutforward" tabindex="-1"><a class="header-anchor" href="#fastoutforward"><span>FastOutForward</span></a></h3>
<ul>
<li>转发请求</li>
<li>注解类型：<code v-pre>FastOut.Type.FORWARD</code></li>
<li>显式调用示例： <code v-pre>	forward(&quot;路径&quot;);</code></li>
</ul>
<h3 id="fastoutredirect" tabindex="-1"><a class="header-anchor" href="#fastoutredirect"><span>FastOutRedirect</span></a></h3>
<ul>
<li>重定向请求</li>
<li>注解类型：<code v-pre>FastOut.Type.REDIRECT</code></li>
<li>显式调用示例： <code v-pre>redirect(&quot;路径&quot;);</code></li>
</ul>
<h2 id="自定义响应类型" tabindex="-1"><a class="header-anchor" href="#自定义响应类型"><span>自定义响应类型</span></a></h2>
<p>如果FastChar默认的响应类型无法满足业务需求，也可以自定义响应类型，如下自定义的FastOut：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> TestOut</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> FastOut</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">TestOut</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     * 响应数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"> action</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> response</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">FastAction</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"> action</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> Exception</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        // 变量 data 继承自 FastOut </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        action</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">getResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">getWriter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">write</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">valueOf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(data));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在FastAction使用response响应即可，如下代码：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">    response</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> TestOut</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"登录成功！"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


