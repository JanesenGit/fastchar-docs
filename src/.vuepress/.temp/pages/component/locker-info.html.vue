<template><div><h1 id="分布式锁组件" tabindex="-1"><a class="header-anchor" href="#分布式锁组件"><span>分布式锁组件</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastChar核心组件，FastChar默认集成了 <code v-pre>redisson</code> 基于 <code v-pre>Redis</code> 的分布式锁功能，
开发可以根据自身情况选择消息订阅使用的解决方案。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>开发者可以通过 <code v-pre>FastChar.getLocker()</code> 方法快速便捷的使用消息订阅功能。如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">//获取一个名为UserAdd的锁对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">Lock</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> lock</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">FastChar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">getLocker</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">getLock</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"UserAdd"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">/**此处省略lock的相关执行代码**/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">//移除一个名为UserAdd的锁对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">FastChar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">getLocker</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">removeLock</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"UserAdd"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择消息订阅解决方案" tabindex="-1"><a class="header-anchor" href="#选择消息订阅解决方案"><span>选择消息订阅解决方案</span></a></h2>
<p>由于 <code v-pre>jedis</code> <code v-pre>lettuce</code> <code v-pre>redisson</code> 都是基于 <code v-pre>Redis</code> 实现消息订阅功能，
所以开发者按照需求引入相应的客户端包和完成<code v-pre>Redis</code>配置即可。
<RouteLink to="/component/cache-info.html#redis%E9%85%8D%E7%BD%AE">Redis配置说明</RouteLink>和
<RouteLink to="/component/cache-info.html#%E4%BD%BF%E7%94%A8redisson">Redisson配置说明</RouteLink></p>
</div></template>


