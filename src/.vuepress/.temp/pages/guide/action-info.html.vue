<template><div><h1 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器"><span>控制器</span></a></h1>
<p>FastChar 控制器的核心基类： <code v-pre>FastAction</code></p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastAction类承担着MVC中的控制器的作用，是FastChar的核心类之一，与struts2的action或springboot的controller概念类似。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>FastAction是线程安全的</p>
</div>
<p>开始尝试第一个Action类，如下：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问url地址 <code v-pre>/test</code> 默认进入FastAction类里的 <code v-pre>index</code> 方法</p>
<h2 id="注册" tabindex="-1"><a class="header-anchor" href="#注册"><span>注册</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>无论是自动注册还是手动注册，FastChar都做了去重处理！所以不用担心会出现重复注册的问题。</p>
</div>
<h3 id="自动注册" tabindex="-1"><a class="header-anchor" href="#自动注册"><span>自动注册</span></a></h3>
<p>当系统启动后，FastChar的扫描器会自动注册项目中所有【包含引用的Jar包】继承FastAction的类。</p>
<h3 id="手动注册" tabindex="-1"><a class="header-anchor" href="#手动注册"><span>手动注册</span></a></h3>
<p>如果开发者需要手动注册一个FastAction类，则在全局初始化的时候注册即可，如下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//获取action集装器，并注册自定的TestAction类</span>
        engine<span class="token punctuation">.</span><span class="token function">getActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">TestAction</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**此处省略其他方法代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当FastAction类完成注册后，FastChar核心解析器利用Java反射技术开始分析FastAction类，并识别所有公开的对象方法。</p>
<h3 id="禁用fastaction" tabindex="-1"><a class="header-anchor" href="#禁用fastaction"><span>禁用FastAction</span></a></h3>
<p>如果需要禁止访问FastAction，通过 <code v-pre>AFastAction</code> 注解配置即可，如下</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token annotation punctuation">@AFastAction</span><span class="token punctuation">(</span>enable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAction</span> <span class="token keyword">extends</span> <span class="token class-name">FastAction</span> <span class="token punctuation">{</span>
    <span class="token comment">//省略其他代码</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="确定方法的url地址" tabindex="-1"><a class="header-anchor" href="#确定方法的url地址"><span>确定方法的url地址</span></a></h2>
<p>在FastAction类里定义的方法名即为url地址，如下</p>
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
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"登录成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相对url地址组成规则是： <code v-pre>getRoute</code> 方法的返回值通过 <code v-pre>/</code> 符号拼接 <code v-pre>方法名</code></p>
<p>所以最终的url地址为 <code v-pre>http://***/test/login</code>  即可访问到 TestAction里的 login 方法</p>
<h3 id="不同url地址访问同一个方法" tabindex="-1"><a class="header-anchor" href="#不同url地址访问同一个方法"><span>不同url地址访问同一个方法</span></a></h3>
<p>如果需要不同的url地址访问同一个方法，则可以通过 <code v-pre>AFastRoute</code> 注解配置更多的url地址，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code> <span class="token annotation punctuation">@AFastRoute</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"/login1"</span><span class="token punctuation">,</span> <span class="token string">"/login2"</span><span class="token punctuation">,</span><span class="token string">"/login3"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"登录成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问login方法的url地址有： <code v-pre>/test/login</code> <code v-pre>/test/login1</code> <code v-pre>/test/login2</code> <code v-pre>/test/login3</code></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>如果 url 地址未匹配到 <code v-pre>FastAction</code> 里的方法，则默认执行 <code v-pre>FastAction</code> 类里的 <code v-pre>index</code> 方法</p>
</div>
<h2 id="无法通过url访问的方法" tabindex="-1"><a class="header-anchor" href="#无法通过url访问的方法"><span>无法通过url访问的方法</span></a></h2>
<p>在FastAction中允许开发者禁用某些方法不允许通过url地址访问，具体如下：</p>
<ul>
<li><code v-pre>private</code> 修饰的方法，例如：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**方法体**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>static</code> 修饰的方法，例如</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**方法体**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>abstract</code> 修饰的方法，例如：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>transient</code> 修饰的方法，例如：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">transient</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**方法体**/</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="请求参数获取" tabindex="-1"><a class="header-anchor" href="#请求参数获取"><span>请求参数获取</span></a></h2>
<p>FastAction默认解析处理了请求携带的所有参数，包括附件，所以开发者按照规则调用即可。</p>
<h3 id="显式获取参数" tabindex="-1"><a class="header-anchor" href="#显式获取参数"><span>显式获取参数</span></a></h3>
<p>FastAction提供了getParam相关方法，可以快速的获取请求携带的参数，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//获取参数</span>
    
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token function">getParam</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token function">getParam</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//自动转换为int类型</span>
    <span class="token keyword">int</span> code<span class="token operator">=</span><span class="token function">getParamToInt</span><span class="token punctuation">(</span><span class="token string">"code"</span><span class="token punctuation">)</span>
    
    <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
    
    <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"登录成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法形参获取参数" tabindex="-1"><a class="header-anchor" href="#方法形参获取参数"><span>方法形参获取参数</span></a></h3>
<p>通过方法形参定义参数，FastChar会触发参数转换器进行数据转换，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token comment">//形参注入</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span><span class="token class-name">String</span> password<span class="token punctuation">,</span><span class="token keyword">int</span> code<span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
    
    <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"登录成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取上传的附件" tabindex="-1"><a class="header-anchor" href="#获取上传的附件"><span>获取上传的附件</span></a></h3>
<p>FastAction自动解析附件并保存了附件，所以开发者获取上传附件的方法极其简单，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//获取参数</span>
    <span class="token class-name">FastFile</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> userHeadImg <span class="token operator">=</span> <span class="token function">getParamFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//获取附件保存后的相对的url地址 ，例如：attachments/images/test.jpg</span>
    <span class="token class-name">String</span> fileUrl<span class="token operator">=</span>userHeadImg<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
    
    <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改附件默认保存的目录" tabindex="-1"><a class="header-anchor" href="#修改附件默认保存的目录"><span>修改附件默认保存的目录</span></a></h4>
<p>FastChar 附件默认保存的目录是相对项目的 <code v-pre>attachments</code> 文件夹，开发者可以在<RouteLink to="/guide/system-init.html">全局初始化</RouteLink>时自行修改，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//设置系统附件默认保存的路径</span>
        engine<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setAttachmentPath</span><span class="token punctuation">(</span><span class="token string">"保存附件的绝对路径"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取-url-参数" tabindex="-1"><a class="header-anchor" href="#获取-url-参数"><span>获取 <code v-pre>URL</code> 参数</span></a></h3>
<p>FastAction允许获取url地址中 <code v-pre>/</code> 分割的多余地址，如下：</p>
<CodeTabs id="161" :data='[{"id":"html"},{"id":"java"}]'>
<template #title0="{ value, isActive }">html</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://****/test/login/param1/param2<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userNickName<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
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
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> urlParam0 <span class="token operator">=</span> <span class="token function">getUrlParam</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//值：param1</span>
        <span class="token class-name">String</span> urlParam1 <span class="token operator">=</span> <span class="token function">getUrlParam</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//值：param2</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"登录成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container tip">
<p class="hint-container-title">解说</p>
<p>由于 <code v-pre>TestAction</code> 类里未匹配到 方法 <code v-pre>param2</code>  和 方法 <code v-pre>param1</code> ，匹配到 <code v-pre>login</code> 方法，
而未匹配到的将以url参数形式传递给方法 <code v-pre>login</code> 中</p>
</div>
<h3 id="获取-map-参数" tabindex="-1"><a class="header-anchor" href="#获取-map-参数"><span>获取 <code v-pre>Map</code> 参数</span></a></h3>
<p>FastAction 支持按照 <code v-pre>{prefix}.{attr}</code> 格式提交参数，并在后台转为 <code v-pre>Map</code> 对象，如下：</p>
<CodeTabs id="180" :data='[{"id":"html"},{"id":"java"}]'>
<template #title0="{ value, isActive }">html</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://****/test/updateUser<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.userId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dept.deptId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dept.deptName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>部门名称<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
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
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//获取前端用户相关参数，并自动合并转为map对象</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> userInfo <span class="token operator">=</span> <span class="token function">getParamToMap</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//传入参数的前缀 user 即可</span>
        <span class="token class-name">Object</span> userNickName<span class="token operator">=</span>userInfo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"userNickName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> userId<span class="token operator">=</span>userInfo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span>
            
        <span class="token comment">//获取前端部门相关参数，并自动合并转为map对象</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> deptInfo <span class="token operator">=</span> <span class="token function">getParamToMap</span><span class="token punctuation">(</span><span class="token string">"dept"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//传入参数的前缀 dept 即可</span>
        <span class="token class-name">Object</span> deptId<span class="token operator">=</span>deptInfo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"deptId"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> deptName<span class="token operator">=</span>deptInfo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"deptName"</span><span class="token punctuation">)</span>
        
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container tip">
<p class="hint-container-title">解说</p>
<p>参数格式 <code v-pre>{prefix}.{attr}</code> 在 <code v-pre>FastAction</code> 调用 <code v-pre>getParamToMap</code> 方法，并传入
参数前缀 <code v-pre>{prefix}</code> 即可将相同前缀的参数合并为 <code v-pre>Map</code> 对象，
Map的 key 为 <code v-pre>{attr}</code> ，value 为 参数值</p>
</div>
<h3 id="获取-list-map-参数" tabindex="-1"><a class="header-anchor" href="#获取-list-map-参数"><span>获取 <code v-pre>List&lt;Map&gt;</code> 参数</span></a></h3>
<p>FastAction 支持按照 <code v-pre>{prefix}[i].{attr}</code> 格式提交参数，并在后台转为 <code v-pre>List&lt;Map&gt;</code> 对象，如下：</p>
<CodeTabs id="199" :data='[{"id":"html"},{"id":"java"}]'>
<template #title0="{ value, isActive }">html</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://****/test/updateUser<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[0].userId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[0].userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[1].userId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[1].userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[2].userId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[2].userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称3<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
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
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//获取参数前缀为user，并且包含下标[i]的参数，转为List&lt;Map>格式</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> users <span class="token operator">=</span> <span class="token function">getParamToMapList</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> user <span class="token operator">:</span> users<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span> userId <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Object</span> userNickName <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"userNickName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container tip">
<p class="hint-container-title">解说</p>
<p>参数格式 <code v-pre>{prefix}[i].{attr}</code> 在 <code v-pre>FastAction</code> 调用 <code v-pre>getParamToMapList</code> 方法，并传入
参数前缀 <code v-pre>{prefix}</code> 即可将相同前缀的参数合并为 <code v-pre>List&lt;Map&gt;</code> 对象。</p>
<p>每项 <code v-pre>Map</code> 的 key 为 <code v-pre>{attr}</code> ，value 为 参数值</p>
<div class="hint-container caution">
<p class="hint-container-title">注意</p>
<p>其中 i 是可变的数字，仅用来 正序排序 参数，不代表 <code v-pre>List</code> 中的子项 下标</p>
</div>
</div>
<h3 id="获取-list-参数" tabindex="-1"><a class="header-anchor" href="#获取-list-参数"><span>获取 <code v-pre>List&lt;?&gt;</code> 参数</span></a></h3>
<p>FastAction 支持按照 <code v-pre>{prefix}[i]</code> 格式提交参数，并在后台转为 <code v-pre>List&lt;?&gt;</code> 对象，如下：</p>
<CodeTabs id="226" :data='[{"id":"html"},{"id":"java"}]'>
<template #title0="{ value, isActive }">html</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://****/test/updateUser<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userId[0]<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userId[1]<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userId[2]<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
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
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//获取参数前缀为userId并且包含下标[i]的参数，转为List&lt;String>格式</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userId <span class="token operator">=</span> <span class="token function">getParamToList</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container tip">
<p class="hint-container-title">解说</p>
<p>参数格式 <code v-pre>{prefix}[i]</code> 在 <code v-pre>FastAction</code> 调用 <code v-pre>getParamToList</code> 方法，并传入
参数前缀 <code v-pre>{prefix}</code> 即可将相同前缀的参数合并为 <code v-pre>List&lt;?&gt;</code> 对象。</p>
<div class="hint-container caution">
<p class="hint-container-title">注意</p>
<p>其中 i 是可变的数字，仅用来 正序排序 参数，不代表 <code v-pre>List</code> 中的子项 下标</p>
</div>
</div>
<h3 id="获取-fastentity-数据库实体-参数" tabindex="-1"><a class="header-anchor" href="#获取-fastentity-数据库实体-参数"><span>获取 <code v-pre>FastEntity</code> <RouteLink to="/guide/entity-info.html">数据库实体</RouteLink> 参数</span></a></h3>
<p>FastAction 支持按照 <code v-pre>{prefix}.{attr}</code> 格式提交参数，并在后台转为 <code v-pre>FastEntity</code> 对象，如下：</p>
<CodeTabs id="250" :data='[{"id":"html"},{"id":"java"}]'>
<template #title0="{ value, isActive }">html</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://****/test/updateUser<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.userId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dept.deptId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dept.deptName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>部门名称<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
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
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//获取前端用户相关参数，并自动合并转为map对象</span>
        <span class="token class-name">FcUserEntity</span> user <span class="token operator">=</span> <span class="token function">getParamToEntity</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//传入参数的前缀 user 即可</span>
            
        <span class="token comment">//获取前端部门相关参数，并自动合并转为map对象</span>
        <span class="token class-name">FcDeptEntity</span> user <span class="token operator">=</span> <span class="token function">getParamToEntity</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token class-name">FcDeptEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//传入参数的前缀 dept 即可</span>
        
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container tip">
<p class="hint-container-title">解说</p>
<p>参数格式 <code v-pre>{prefix}.{attr}</code> 在 <code v-pre>FastAction</code> 调用 <code v-pre>getParamToMap</code> 方法。</p>
<p>第一个方法参值为： 参数前缀 <code v-pre>{prefix}</code></p>
<p>第二个方法参值为：<code v-pre>FastEntity</code> 的 <code v-pre>.class</code> 类</p>
<p>即可将相同前缀的参数合并为 <code v-pre>FastEntity</code> 对象，</p>
<p><code v-pre>FastEntity</code> 的 key 为 <code v-pre>{attr}</code> ，value 为 参数值</p>
</div>
<h3 id="获取-list-fastentity-数据库实体-参数" tabindex="-1"><a class="header-anchor" href="#获取-list-fastentity-数据库实体-参数"><span>获取 <code v-pre>List&lt;FastEntity&gt;</code> <RouteLink to="/guide/entity-info.html">数据库实体</RouteLink> 参数</span></a></h3>
<p>FastAction 支持按照 <code v-pre>{prefix}[i].{attr}</code> 格式提交参数，并在后台转为 <code v-pre>List&lt;FastEntity&gt;</code> 对象，如下：</p>
<CodeTabs id="281" :data='[{"id":"html"},{"id":"java"}]'>
<template #title0="{ value, isActive }">html</template>
<template #title1="{ value, isActive }">java</template>
<template #tab0="{ value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://****/test/updateUser<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[0].userId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[0].userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[1].userId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[1].userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称2<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[2].userId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user[2].userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称3<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
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
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//获取参数前缀为user，并且包含下标[i]的参数，转为List&lt;Map>格式</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">></span></span> users <span class="token operator">=</span> <span class="token function">getParamToEntityList</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">FcUserEntity</span> user <span class="token operator">:</span> users<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container tip">
<p class="hint-container-title">解说</p>
<p>参数格式 <code v-pre>{prefix}[i].{attr}</code> 在 <code v-pre>FastAction</code> 调用 <code v-pre>getParamToMapList</code> 方法。</p>
<p>第一个方法参值为： 参数前缀 <code v-pre>{prefix}</code></p>
<p>第二个方法参值为：<code v-pre>FastEntity</code> 的 <code v-pre>.class</code> 类</p>
<p>即可将相同前缀的参数合并为 <code v-pre>List&lt;FastEntity&gt;</code> 对象。</p>
<p>每项 <code v-pre>FastEntity</code> 的 key 为 <code v-pre>{attr}</code> ，value 为 参数值</p>
<div class="hint-container caution">
<p class="hint-container-title">注意</p>
<p>其中 i 是可变的数字，仅用来 正序排序 参数，不代表 <code v-pre>List</code> 中的子项 下标</p>
</div>
</div>
<h2 id="获取session" tabindex="-1"><a class="header-anchor" href="#获取session"><span>获取Session</span></a></h2>
<p>开发者按照如下方式即可获取到Session对象，如下：</p>
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
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

         <span class="token class-name">FastHttpSession</span> session <span class="token operator">=</span> <span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


