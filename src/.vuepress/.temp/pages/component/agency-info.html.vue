<template><div><h1 id="动态代理组件" tabindex="-1"><a class="header-anchor" href="#动态代理组件"><span>动态代理组件</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastChar核心组件，FastChar默认集成了 <code v-pre>cglib</code> 实现类的动态代理功能。</p>
<h2 id="cglib动态代理" tabindex="-1"><a class="header-anchor" href="#cglib动态代理"><span>Cglib动态代理</span></a></h2>
<p>如果开发者需要使用 <a href="https://github.com/cglib/cglib/wiki" target="_blank" rel="noopener noreferrer">Cglib<ExternalLinkIcon/></a> 作为动态代理解决方案，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/cglib/cglib-nodep --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>cglib-nodep<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用cglib动态代理" tabindex="-1"><a class="header-anchor" href="#使用cglib动态代理"><span>使用Cglib动态代理</span></a></h3>
<p>开发者可以通过 <code v-pre>FastChar.getEnhancer(Class &lt;T&gt; targetClass)</code> 方法快速便捷的使用类动态代理功能。如下：</p>
<Tabs id="22" :data='[{"id":"TestEnhancer.java"},{"id":"TestUser.java"},{"id":"执行结果"}]'>
<template #title0="{ value, isActive }">TestEnhancer.java</template>
<template #title1="{ value, isActive }">TestUser.java</template>
<template #title2="{ value, isActive }">执行结果</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//使用动态代理方法实例化TestUser对象</span>
        <span class="token class-name">TestUser</span> testUser <span class="token operator">=</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getEnhancer</span><span class="token punctuation">(</span><span class="token class-name">TestUser</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addBeforeInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">IFastMethodInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> objects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Before-开始执行方法："</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token comment">//返回false 不拦截，返回true 拦截</span>
                        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addAfterInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">IFastMethodInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> objects<span class="token punctuation">)</span> <span class="token punctuation">{</span>

                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"After-执行方法结束："</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token comment">//返回false 不拦截，返回true 拦截</span>
                        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//执行user对象里的方法</span>
        testUser<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestUser</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"获取用户的信息！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</template>
<template #tab2="{ value, isActive }">
<p><img src="/images/cglib_test_result.png" alt="cglib_test_result.png" loading="lazy"></p>
</template>
</Tabs>
</div></template>


