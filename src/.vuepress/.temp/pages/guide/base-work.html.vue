<template><div><h1 id="控制器-fastaction" tabindex="-1"><a class="header-anchor" href="#控制器-fastaction" aria-hidden="true">#</a> 控制器-FastAction</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>FastAction类承担着MVC中的控制器的作用，是FastChar的核心类之一，与struts2的action或springboot的controller概念类似。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>FastAction是线程安全的</p>
</div>
<p>开始尝试第一个Action类，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAction</span> <span class="token keyword">extends</span> <span class="token class-name">FastAction</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动注册fastaction" tabindex="-1"><a class="header-anchor" href="#自动注册fastaction" aria-hidden="true">#</a> 自动注册FastAction</h2>
<p>当系统启动后，FastChar的扫描器会自动注册所有继承FastAction的类。</p>
<h2 id="手动注册fastaction" tabindex="-1"><a class="header-anchor" href="#手动注册fastaction" aria-hidden="true">#</a> 手动注册FastAction</h2>
<p>如果开发者需要手动注册一个FastAction类，则在全局初始化的时候注册即可，如下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何工作的" tabindex="-1"><a class="header-anchor" href="#如何工作的" aria-hidden="true">#</a> 如何工作的？</h2>
<p>当FastAction类完成注册后，FastChar核心解析器利用Java反射技术开始分析FastAction类，并识别所有公开的对象方法。</p>
<h2 id="如何确定方法的url地址" tabindex="-1"><a class="header-anchor" href="#如何确定方法的url地址" aria-hidden="true">#</a> 如何确定方法的url地址？</h2>
</div></template>


