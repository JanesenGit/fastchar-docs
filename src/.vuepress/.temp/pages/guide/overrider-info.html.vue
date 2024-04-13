<template><div><h1 id="类代理器" tabindex="-1"><a class="header-anchor" href="#类代理器"><span>类代理器</span></a></h1>
<p>FastChar 类代理器的核心组件：FastOverrides</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastOverrides是FastChar核心组件，贯穿整个框架，是FastChar的类代理器，为功能的插件化或模块化开发提供了强大的支持！类代理器的原理和对象工厂类似。
与Spring里的bean容器概念类似，与之区别就是更简单、更直观。</p>
<h2 id="实例化对象" tabindex="-1"><a class="header-anchor" href="#实例化对象"><span>实例化对象</span></a></h2>
<p><strong><mark>如果一个类允许被代理</mark></strong>，那么实例化的时候，需要使用FastOverrides提供的方法进行实例化，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//实例化 FcUserEntity 类对象</span>
    <span class="token class-name">FcUserEntity</span> userEntity <span class="token operator">=</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//或者实例化一个单例，线程安全的</span>
    <span class="token class-name">FcUserEntity</span> userEntity2 <span class="token operator">=</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">singleInstance</span><span class="token punctuation">(</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token class-name">String</span> tableDetails<span class="token operator">=</span>userEntity<span class="token punctuation">.</span><span class="token function">getTableDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">//返回的值为 ：用户表  </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时如果需要代理 <code v-pre>FcUserEntity</code> 类，声明一个类并继承 <code v-pre>FcUserEntity</code> 然后<RouteLink to="/guide/overrider-info.html#%E4%BB%A3%E7%90%86%E7%B1%BB%E7%9A%84%E6%B3%A8%E5%86%8C">注册到代理器中</RouteLink>，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFcUserEntity</span> <span class="token keyword">extends</span> <span class="token class-name">FcUserEntity</span> <span class="token punctuation">{</span>
 
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTableDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"重写表格描述介绍"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时执行如下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//实例化 FcUserEntity 类对象</span>
    <span class="token class-name">FcUserEntity</span> userEntity <span class="token operator">=</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//此时 userEntity 的实际类型为：TestFcUserEntity</span>
    <span class="token class-name">String</span> tableDetails<span class="token operator">=</span>userEntity<span class="token punctuation">.</span><span class="token function">getTableDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">//返回的值为 ：重写表格描述介绍  </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理类的注册" tabindex="-1"><a class="header-anchor" href="#代理类的注册"><span>代理类的注册</span></a></h2>
<p>当一个类 代理了 另一个类 时，此类需要注册到代理器中，才能被代理器使用，注册方式有如下两种：</p>
<Tabs id="33" :data='[{"id":"方式一"},{"id":"方式二"}]'>
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
        
        <span class="token comment">//将代理类 TestUserEntity 注册到代理器中</span>
       engine<span class="token punctuation">.</span><span class="token function">getOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">TestFcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>推荐👍使用此方式注册，这样便于后期开发者统一查找代理类</p>
</div>
</template>
<template #tab1="{ value, isActive }">
<p>通过 <code v-pre>AFastOverride</code> 注解注册，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@AFastOverride</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFcUserEntity</span> <span class="token keyword">extends</span> <span class="token class-name">FcUserEntity</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTableDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"重写表格描述介绍"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="多个代理类" tabindex="-1"><a class="header-anchor" href="#多个代理类"><span>多个代理类</span></a></h2>
<p>一个类是允许被多个代理类实现并注册到代理器中，当存在多个代理类时，在<RouteLink to="/guide/overrider-info.html#%E5%AE%9E%E4%BE%8B%E5%8C%96%E5%AF%B9%E8%B1%A1">实例化被代理类的对象</RouteLink>时，
<code v-pre>FastOverrides</code> 代理器选择的原则是：<strong><em><mark>后进先出</mark></em></strong>。如下示例：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//将代理类 TestUserEntity和Test2FcUserEntity 都注册到代理器中</span>
       engine<span class="token punctuation">.</span><span class="token function">getOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">TestFcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Test2FcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中， <code v-pre>TestFcUserEntity</code> 和 <code v-pre>Test2FcUserEntity</code> 都代理了 <code v-pre>FcUserEntity</code>，
根据 <strong><em>后进先出</em></strong> 的原则，在<RouteLink to="/guide/overrider-info.html#%E5%AE%9E%E4%BE%8B%E5%8C%96%E5%AF%B9%E8%B1%A1">实例化 <code v-pre>FcUserEntity</code> 对象</RouteLink>时，最终返回的对象是 <code v-pre>Test2FcUserEntity</code> 对象。</p>
<h2 id="代理监听-isoverride" tabindex="-1"><a class="header-anchor" href="#代理监听-isoverride"><span>代理监听 isOverride</span></a></h2>
<p>代理类如果需要监听是否允许被使用，
则需要声明一个静态 <code v-pre>isOverride</code> 方法且方法返回类型必须为 <code v-pre>boolean</code> 类型，
代理器筛选到此类时，会调用 <code v-pre>isOverride</code> 静态方法 ，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFcUserEntity</span> <span class="token keyword">extends</span> <span class="token class-name">FcUserEntity</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isOverride</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> aClass <span class="token operator">=</span> <span class="token class-name">FastClassUtils</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token string">"com.google.gson.Gson"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>aClass <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTableDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"重写表格描述介绍"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中， <code v-pre>TestFcUserEntity</code> 在 <code v-pre>isOverride</code> 方法返回 <code v-pre>true</code> 时允许代理 <code v-pre>FcUserEntity</code> ，否则不代理 <code v-pre>FcUserEntity</code> ，
代理器会继续向下寻找其他代理类，
所以在 <code v-pre>isOverride</code> 的方法里做一些业务判断，从而影响代理器的选择，是非常灵活方便的自由切换代理类。</p>
<h3 id="isoverride静态方法传参" tabindex="-1"><a class="header-anchor" href="#isoverride静态方法传参"><span>isOverride静态方法传参</span></a></h3>
<p>在声明 <code v-pre>isOverride</code> 静态方法时也可以声明形参,如下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestFcUserEntity</span> <span class="token keyword">extends</span> <span class="token class-name">FcUserEntity</span> <span class="token punctuation">{</span>
    
    <span class="token comment">//声明了一个形参 isJson</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isOverride</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> isJson<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isJson<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> aClass <span class="token operator">=</span> <span class="token class-name">FastClassUtils</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token string">"com.google.gson.Gson"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>aClass <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//如果需要使用传入的参数，声明一个构造函数，保存即可</span>
    <span class="token comment">//构造函数参数</span>
    <span class="token keyword">public</span> <span class="token class-name">TestFcUserEntity</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> isJson<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
 
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTableDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"重写表格描述介绍"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<RouteLink to="/guide/overrider-info.html#%E5%AE%9E%E4%BE%8B%E5%8C%96%E5%AF%B9%E8%B1%A1">实例化 <code v-pre>FcUserEntity</code> 对象</RouteLink>时，传入形参参数即可，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token class-name">FcUserEntity</span> userEntity <span class="token operator">=</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


