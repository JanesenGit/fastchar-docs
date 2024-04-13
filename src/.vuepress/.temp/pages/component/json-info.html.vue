<template><div><h1 id="json组件" tabindex="-1"><a class="header-anchor" href="#json组件"><span>Json组件</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastChar核心组件，FastChar默认集成了JSON工具包：gson、fastjson和fastjson2</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>开发者可以直接通过FastChar提供的静态方法 <code v-pre>FastChar.getJson()</code> 直接进行json数据转换。如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token string">"hello word!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>FastChar会自动根据开发者导入的包选择json转换工具。</p>
</div>
<h2 id="使用gson作为json工具包" tabindex="-1"><a class="header-anchor" href="#使用gson作为json工具包"><span>使用Gson作为Json工具包</span></a></h2>
<p>如果开发者需要使用<a href="https://github.com/google/gson" target="_blank" rel="noopener noreferrer">gson<ExternalLinkIcon/></a>作为FastChar默认的json转换工具包，只要在项目中引用gson包即可，以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>    <span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.google.code.gson/gson --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.google.code.gson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>gson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.9.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用fastjson作为json工具包" tabindex="-1"><a class="header-anchor" href="#使用fastjson作为json工具包"><span>使用Fastjson作为Json工具包</span></a></h2>
<p>如果开发者需要使用<a href="https://github.com/alibaba/fastjson" target="_blank" rel="noopener noreferrer">fastjson<ExternalLinkIcon/></a>作为FastChar默认的json转换工具包，只要在项目中引用gson包即可，以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>    <span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.alibaba/fastjson --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>fastjson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用fastjson2作为json工具包" tabindex="-1"><a class="header-anchor" href="#使用fastjson2作为json工具包"><span>使用Fastjson2作为Json工具包</span></a></h2>
<p>如果开发者需要使用<a href="https://alibaba.github.io/fastjson2/" target="_blank" rel="noopener noreferrer">fastjson2<ExternalLinkIcon/></a>作为FastChar默认的json转换工具包，只要在项目中引用gson包即可，以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>    <span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.alibaba.fastjson2/fastjson2 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.fastjson2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>fastjson2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.38<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h2>
<p>如果gson、fastjson和fastjson2的jar包都存在项目中</p>
<p>FastChar 选择的优先级为：<code v-pre>fastjson2 &gt; fastjson &gt; gson</code></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>gson、fastjson和fastjson2必须引用其中一个，否则转换json异常！</p>
</div>
<h2 id="自定义工具包" tabindex="-1"><a class="header-anchor" href="#自定义工具包"><span>自定义工具包</span></a></h2>
<p>开发者可以实现 <code v-pre>IFastJson</code> 接口 自定义选择json工具包进行转换。然后将<RouteLink to="/guide/overrider-info.html#%E4%BB%A3%E7%90%86%E7%B1%BB%E7%9A%84%E6%B3%A8%E5%86%8C">实现的类注册到代理器</RouteLink>中即可！</p>
</div></template>


