<template><div><h1 id="参数验证器" tabindex="-1"><a class="header-anchor" href="#参数验证器"><span>参数验证器</span></a></h1>
<p>IFastValidator 是FastChar核心类之一，用来验证 <code v-pre>FastAction</code> 中的参数，即参数验证器。</p>
<h2 id="实现一个参数验证器" tabindex="-1"><a class="header-anchor" href="#实现一个参数验证器"><span>实现一个参数验证器</span></a></h2>
<p>开发者可以自定义类实现 <code v-pre>IFastValidator</code> 接口 ，完成参数的验证。如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestValidator</span> <span class="token keyword">implements</span> <span class="token class-name">IFastValidator</span> <span class="token punctuation">{</span>
    
     <span class="token doc-comment comment">/**
     * 验证参数是否正确
     *
     * <span class="token keyword">@param</span> <span class="token parameter">validator</span>  验证器名称
     * <span class="token keyword">@param</span> <span class="token parameter">arguments</span> 传入的验证器参数
     * <span class="token keyword">@param</span> <span class="token parameter">paramName</span>  参数名
     * <span class="token keyword">@param</span> <span class="token parameter">paramValue</span> 参数值
     * <span class="token keyword">@return</span> 验证错误信息 为：null 验证通过，否则代表参数验证失败，直接将返回值作为错误信息响应给前端。
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">valid</span><span class="token punctuation">(</span><span class="token class-name">String</span> validator<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arguments<span class="token punctuation">,</span> <span class="token class-name">String</span> paramName<span class="token punctuation">,</span> <span class="token class-name">Object</span> paramValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>validator<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"@user_exist"</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> paramName<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">FcUserEntity</span> userEntity <span class="token operator">=</span> <span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span>paramValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>userEntity <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">"用户已存在！"</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>当参数验证器返回失败时，将使用 <code v-pre>FastOutParamError</code> 进行响应并终止后续代码的执行！</p>
</div>
<h2 id="注册验证器" tabindex="-1"><a class="header-anchor" href="#注册验证器"><span>注册验证器</span></a></h2>
<p>开发者实现一个参数验证器后，需要将该实现类注册到系统中才能被系统发现并使用，注册方式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
       <span class="token comment">//代理器    </span>
       engine<span class="token punctuation">.</span><span class="token function">getOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">TestValidator</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//注册自定义的参数验证器类</span>
                
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用参数验证器" tabindex="-1"><a class="header-anchor" href="#使用参数验证器"><span>使用参数验证器</span></a></h2>
<p>调用参数验证器，开发者需要显式调用。</p>
<h3 id="check方法调用" tabindex="-1"><a class="header-anchor" href="#check方法调用"><span>check方法调用</span></a></h3>
<p>方法 <code v-pre>check</code> 属于 <code v-pre>FastAction</code> 对象方法，开发者在获取参数前调用 参数验证器 验证，如下：</p>
<p>以新建的 <RouteLink to="/guide/param-validator-info.html#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E9%AA%8C%E8%AF%81%E5%99%A8">TestValidator</RouteLink> 验证器为例：</p>
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
       
        <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token string">"@user_exist"</span><span class="token punctuation">,</span><span class="token string">"woment"</span><span class="token punctuation">)</span> <span class="token comment">//传入参数验证器名为：@user_exist  并携带传入验证器参数：woment</span>
                    <span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token string">"@user_role"</span><span class="token punctuation">)</span><span class="token comment">//传入参数验证器名为：@user_role  </span>
                    <span class="token punctuation">.</span><span class="token function">getParamToInt</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="afastcheck注解调用" tabindex="-1"><a class="header-anchor" href="#afastcheck注解调用"><span>AFastCheck注解调用</span></a></h3>
<p>开发者可以使用 <code v-pre>AFastCheck</code> 注解标注到方法的形参中调用 参数验证器 验证，如下：</p>
<p>以新建的 <RouteLink to="/guide/param-validator-info.html#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E9%AA%8C%E8%AF%81%E5%99%A8">TestValidator</RouteLink> 验证器为例：</p>
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
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@AFastCheck</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"@user_exist"</span><span class="token punctuation">,</span>arguments<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"women"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
                           <span class="token annotation punctuation">@AFastCheck</span><span class="token punctuation">(</span><span class="token string">"@user_role"</span><span class="token punctuation">)</span>
                           <span class="token keyword">int</span> userId<span class="token punctuation">)</span><span class="token punctuation">{</span>
        
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置参数验证器" tabindex="-1"><a class="header-anchor" href="#内置参数验证器"><span>内置参数验证器</span></a></h2>
<p>FastChar默认内置常用的参数验证器。</p>
<h3 id="fastnullvalidator" tabindex="-1"><a class="header-anchor" href="#fastnullvalidator"><span>FastNullValidator</span></a></h3>
<p>null或空 值验证器，验证器的名称为：<code v-pre>@null</code> 验证器第一个参数为返回的失败消息。如下代码：</p>
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
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">int</span> userId<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token string">"@null"</span><span class="token punctuation">,</span><span class="token string">"参数UserId不可为空！"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getParamToInt</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>FastAction</code> 已将空值验证器 集成到了 <code v-pre>getParam</code> 系列方法中，开发者可以直接传入 <code v-pre>boolean</code> 值开启验证，如下：</p>
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
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">int</span> userId<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">int</span> id <span class="token operator">=</span> <span class="token function">getParamToInt</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此时如果参数 userId 为空时，响应内容为：参数userId不可为空！</p>
<p>响应的内容模板为： <code v-pre>参数{0}不可为空！</code></p>
</div>
</div></template>


