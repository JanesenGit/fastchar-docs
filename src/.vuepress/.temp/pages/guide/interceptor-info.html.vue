<template><div><h1 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器"><span>拦截器</span></a></h1>
<p>FastChar 允许开发者通过配置拦截器拦截FastAction或原始HttpServletRequest的请求。</p>
<h2 id="ifastinterceptor接口" tabindex="-1"><a class="header-anchor" href="#ifastinterceptor接口"><span>IFastInterceptor接口</span></a></h2>
<p>是FastChar核心类之一，可用来拦截FastAction的请求。</p>
<h3 id="实现一个拦截器" tabindex="-1"><a class="header-anchor" href="#实现一个拦截器"><span>实现一个拦截器</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebSiteInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">IFastInterceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInterceptor</span><span class="token punctuation">(</span><span class="token class-name">FastAction</span> fastAction<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//可以向模板引擎中追加参数</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getTemplates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">,</span> fastAction<span class="token punctuation">.</span><span class="token function">getProjectHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//也可以追加额外的http请求的参数</span>
        fastAction<span class="token punctuation">.</span><span class="token function">addParam</span><span class="token punctuation">(</span><span class="token string">"other"</span><span class="token punctuation">,</span> <span class="token string">"追加额外的参数！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//继续执行下一步操作</span>
        fastAction<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拦截before" tabindex="-1"><a class="header-anchor" href="#拦截before"><span>拦截before</span></a></h3>
<p>可以在执行FastAction的方法 前（before） 进行拦截，配置方式有如下两种：</p>
<Tabs id="22" :data='[{"id":"方式一"},{"id":"方式二"}]'>
<template #title0="{ value, isActive }">方式一</template>
<template #title1="{ value, isActive }">方式二</template>
<template #tab0="{ value, isActive }">
<p>在<RouteLink to="/guide/system-init.html">系统全局初始化</RouteLink>时手动注册，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//注册拦截器</span>
        engine<span class="token punctuation">.</span><span class="token function">getInterceptors</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addBefore</span><span class="token punctuation">(</span><span class="token class-name">WebSiteInterceptor</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">"/*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//参数 '/*' 标识拦截系统的所有请求，可以使用通配符 *</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</template>
<template #tab1="{ value, isActive }">
<p>使用 <code v-pre>AFastBefore</code> 注解 在指定 FastAction类 或 方法 中标注，如下在方法中拦截：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@AFastBefore</span><span class="token punctuation">(</span><span class="token class-name">WebSiteInterceptor</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token function">getParamToInt</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"获取成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"获取失败！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="拦截after" tabindex="-1"><a class="header-anchor" href="#拦截after"><span>拦截After</span></a></h3>
<p>可以在执行FastAction的方法 后（after） 进行拦截，配置方式有如下两种：</p>
<Tabs id="45" :data='[{"id":"方式一"},{"id":"方式二"}]'>
<template #title0="{ value, isActive }">方式一</template>
<template #title1="{ value, isActive }">方式二</template>
<template #tab0="{ value, isActive }">
<p>在<RouteLink to="/guide/system-init.html">系统全局初始化</RouteLink>时手动注册，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//注册拦截器</span>
        engine<span class="token punctuation">.</span><span class="token function">getInterceptors</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addAfter</span><span class="token punctuation">(</span><span class="token class-name">WebSiteInterceptor</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">"/*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//参数 '/*' 标识拦截系统的所有请求，可以使用通配符 *</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<p>使用 <code v-pre>AFastAfter</code> 注解 在指定 FastAction类 或 方法 中标注，如下在方法中拦截：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@AFastAfter</span><span class="token punctuation">(</span><span class="token class-name">WebSiteInterceptor</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token function">getParamToInt</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"获取成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"获取失败！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="ifastrootinterceptor接口" tabindex="-1"><a class="header-anchor" href="#ifastrootinterceptor接口"><span>IFastRootInterceptor接口</span></a></h2>
<p>是FastChar核心类之一，可用来拦截原始HttpServletRequest的请求。</p>
<h3 id="实现一个拦截器-1" tabindex="-1"><a class="header-anchor" href="#实现一个拦截器-1"><span>实现一个拦截器</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestRootInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">IFastRootInterceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInterceptor</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FastDispatcher</span> dispatcher<span class="token punctuation">)</span>
     <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
 
        dispatcher<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//允许通过</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拦截请求" tabindex="-1"><a class="header-anchor" href="#拦截请求"><span>拦截请求</span></a></h3>
<p>在<RouteLink to="/guide/system-init.html">系统全局初始化</RouteLink>时手动注册，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token doc-comment comment">/**此处省略其他代码**/</span>        
 
        engine<span class="token punctuation">.</span><span class="token function">getInterceptors</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addRootInterceptor</span><span class="token punctuation">(</span><span class="token class-name">TestRootInterceptor</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">"/*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                
        <span class="token comment">//参数 '/*' 标识拦截系统的所有请求，可以使用通配符 *</span>
 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**此处省略其他代码**/</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


