<template><div><h1 id="消息订阅pubsub组件" tabindex="-1"><a class="header-anchor" href="#消息订阅pubsub组件"><span>消息订阅PubSub组件</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastChar核心组件，FastChar默认集成了 <code v-pre>jedis</code> <code v-pre>lettuce</code> <code v-pre>redisson</code> 基于 <code v-pre>Redis</code> 的消息订阅功能，
开发可以根据自身情况选择消息订阅使用的解决方案。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>开发者可以通过 <code v-pre>FastChar.getPubSub()</code> 方法快速便捷的使用消息订阅功能。如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token comment">//开启订阅，通道为Test</span>
<span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getPubSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">"Test"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">IFastMessagePubSub<span class="token punctuation">.</span>OnSubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> channel<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"收到消息："</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//发送一个消息，通道为：Test</span>
<span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getPubSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">"Test"</span><span class="token punctuation">,</span> <span class="token string">"你在干嘛111！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择消息订阅解决方案" tabindex="-1"><a class="header-anchor" href="#选择消息订阅解决方案"><span>选择消息订阅解决方案</span></a></h2>
<p>由于 <code v-pre>jedis</code> <code v-pre>lettuce</code> <code v-pre>redisson</code> 都是基于 <code v-pre>Redis</code> 实现消息订阅功能，所以开发者按照需求引入相应的客户端包和完成<code v-pre>Redis</code>配置即可。
<RouteLink to="/component/cache-info.html#redis%E9%85%8D%E7%BD%AE">查看Redis配置说明</RouteLink></p>
</div></template>


