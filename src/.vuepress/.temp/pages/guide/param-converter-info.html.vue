<template><div><h1 id="参数转换器" tabindex="-1"><a class="header-anchor" href="#参数转换器"><span>参数转换器</span></a></h1>
<p><code v-pre>IFastParamConverter</code> 接口是FastChar 核心组件之一，用于 <code v-pre>FastAction</code> 方法中 将 请求的参数值 转换成对应的类型。</p>
<h2 id="实现一个参数转换器" tabindex="-1"><a class="header-anchor" href="#实现一个参数转换器"><span>实现一个参数转换器</span></a></h2>
<p>开发者可以自定义实现 <code v-pre>IFastParamConverter</code> 类，进行参数类型的转换，如下：</p>
<Tabs id="12" :data='[{"id":"TestParamConverter"},{"id":"UserBean"}]'>
<template #title0="{ value, isActive }">TestParamConverter</template>
<template #title1="{ value, isActive }">UserBean</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token comment">//参数转换器，实现 UserBean 类型的转换</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestParamConverter</span> <span class="token keyword">implements</span> <span class="token class-name">IFastParamConverter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">convertValue</span><span class="token punctuation">(</span><span class="token class-name">FastAction</span> action<span class="token punctuation">,</span> <span class="token class-name">FastParameter</span> parameter<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> marker<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parameter<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"selfUser"</span><span class="token punctuation">)</span><span class="token comment">//判断形参的命名</span>
                <span class="token operator">&amp;&amp;</span> parameter<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">UserBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//判断形参的类型 </span>
                <span class="token punctuation">{</span>
            
            <span class="token class-name">UserBean</span> user<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">UserBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span><span class="token function">getParamToInt</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setUserNickName</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span><span class="token function">getParam</span><span class="token punctuation">(</span><span class="token string">"userNickName"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            marker<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//标记此参数类型已处理</span>
            <span class="token keyword">return</span> user<span class="token punctuation">;</span><span class="token comment">//返回已转换的对象值</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//返回null，则继续寻找下一个参数转换器</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
</template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserBean</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> userId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userNickName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userId<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">UserBean</span> <span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userId <span class="token operator">=</span> userId<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserNickName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userNickName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">UserBean</span> <span class="token function">setUserNickName</span><span class="token punctuation">(</span><span class="token class-name">String</span> userNickName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userNickName <span class="token operator">=</span> userNickName<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="注册转换器" tabindex="-1"><a class="header-anchor" href="#注册转换器"><span>注册转换器</span></a></h2>
<p>开发者实现一个参数转换器后，需要将该实现类注册到系统中才能被系统发现并使用，注册方式如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
       <span class="token comment">//代理器    </span>
       engine<span class="token punctuation">.</span><span class="token function">getOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">TestParamConverter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//注册自定义的参数转换器类</span>
                
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用转换器" tabindex="-1"><a class="header-anchor" href="#使用转换器"><span>使用转换器</span></a></h2>
<p>开发者无需显式调用参数转换器，FastChar会根据 <code v-pre>FastAction</code> 中方法的形参类型自动触发参数转换器，如下：</p>
<Tabs id="36" :data='[{"id":"html"},{"id":"TestAction"}]'>
<template #title0="{ value, isActive }">html</template>
<template #title1="{ value, isActive }">TestAction</template>
<template #tab0="{ value, isActive }">
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://****/test/updateUser<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userId<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
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
 
    <span class="token comment">//形参方式获取参数</span>
    <span class="token comment">//UserBean 类型的参数</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">UserBean</span> selfUser<span class="token punctuation">)</span><span class="token punctuation">{</span>

         <span class="token keyword">int</span> userId<span class="token operator">=</span>selfUser<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         
         <span class="token class-name">String</span> userNickName<span class="token operator">=</span>selfUser<span class="token punctuation">.</span><span class="token function">getUserNickName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>也可以通过 <code v-pre>getParamToClass</code> 方法获取参数 类型为 <code v-pre>UserBean</code> 的参数 <code v-pre>selfUser</code>，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token class-name">UserBean</span> userBean <span class="token operator">=</span> <span class="token function">getParamToClass</span><span class="token punctuation">(</span><span class="token string">"selfUser"</span><span class="token punctuation">,</span> <span class="token class-name">UserBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">int</span> userId<span class="token operator">=</span>userBean<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">String</span> userNickName<span class="token operator">=</span>userBean<span class="token punctuation">.</span><span class="token function">getUserNickName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</template>
</Tabs>
<h2 id="内置转换器" tabindex="-1"><a class="header-anchor" href="#内置转换器"><span>内置转换器</span></a></h2>
<p>FastChar默认内置了常规类型的参数转换器，如下：</p>
<h3 id="faststringparamconverter" tabindex="-1"><a class="header-anchor" href="#faststringparamconverter"><span>FastStringParamConverter</span></a></h3>
<p><code v-pre>String</code> 类型的形参转换，例如：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">String</span> stringValue<span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> stringList<span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> stringArray<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fastnumberparamconverter" tabindex="-1"><a class="header-anchor" href="#fastnumberparamconverter"><span>FastNumberParamConverter</span></a></h3>
<p><code v-pre>int</code> <code v-pre>double</code> <code v-pre>float</code> <code v-pre>long</code> <code v-pre>short</code> 数字类型的形参转换，例如：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token keyword">int</span> intValue<span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> intList<span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> intArray<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fastbooleanparamconverter" tabindex="-1"><a class="header-anchor" href="#fastbooleanparamconverter"><span>FastBooleanParamConverter</span></a></h3>
<p><code v-pre>boolean</code> 类型的形参转换，例如：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> booleanValue<span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">></span></span> booleanList<span class="token punctuation">,</span><span class="token class-name">Boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> booleanArray<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fastdateparamconverter" tabindex="-1"><a class="header-anchor" href="#fastdateparamconverter"><span>FastDateParamConverter</span></a></h3>
<p><code v-pre>Date</code> 类型的形参转换，例如：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">Date</span> dateValue<span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Date</span><span class="token punctuation">></span></span> dateList<span class="token punctuation">,</span><span class="token class-name">Date</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dateArray<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fastentityparamconverter" tabindex="-1"><a class="header-anchor" href="#fastentityparamconverter"><span>FastEntityParamConverter</span></a></h3>
<p><code v-pre>FastEntity</code> 类型的形参转换，例如：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">FcUserEntity</span> entityValue<span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">></span></span> entityList<span class="token punctuation">,</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">[</span><span class="token punctuation">]</span> entityArray<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fastenumparamconverter" tabindex="-1"><a class="header-anchor" href="#fastenumparamconverter"><span>FastEnumParamConverter</span></a></h3>
<p><code v-pre>Enum</code> 枚举类型的形参转换，例如：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">UserSexEnum</span> enumValue<span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserSexEnum</span><span class="token punctuation">></span></span> enumList<span class="token punctuation">,</span><span class="token class-name">UserSexEnum</span><span class="token punctuation">[</span><span class="token punctuation">]</span> enumArray<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fastfileparamconverter" tabindex="-1"><a class="header-anchor" href="#fastfileparamconverter"><span>FastFileParamConverter</span></a></h3>
<p><code v-pre>FastFile</code>  类型的形参转换，例如：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">FastFile</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> fileValue<span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FastFile</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span><span class="token punctuation">></span></span> fileList<span class="token punctuation">,</span><span class="token class-name">FastFile</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> fileArray<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**省略其他业务判断逻辑**/</span>
        <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"更新成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数类型说明" tabindex="-1"><a class="header-anchor" href="#参数类型说明"><span>参数类型说明</span></a></h3>
<p>包含了 <code v-pre>List&lt;?&gt;</code> 类型的参数，具体前端如何传参，请查看 <RouteLink to="/guide/action-info.html#%E8%8E%B7%E5%8F%96-list-%E5%8F%82%E6%95%B0">获取List参数</RouteLink> 说明。</p>
</div></template>


