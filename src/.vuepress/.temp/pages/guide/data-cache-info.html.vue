<template><div><h1 id="数据缓存" tabindex="-1"><a class="header-anchor" href="#数据缓存"><span>数据缓存</span></a></h1>
<h2 id="一级缓存" tabindex="-1"><a class="header-anchor" href="#一级缓存"><span>一级缓存</span></a></h2>
<p>在FastChar中，默认支持数据库一级缓存功能，缓存数据处理使用 <RouteLink to="/component/cache-info.html">Cache数据缓存组件</RouteLink> 提供的缓存框架。</p>
<h3 id="数据库全局开启一级缓存" tabindex="-1"><a class="header-anchor" href="#数据库全局开启一级缓存"><span>数据库全局开启一级缓存</span></a></h3>
<p>开发者可以配置，全局开启某个数据源的一级缓存功能，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化中
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        engine<span class="token punctuation">.</span><span class="token function">getDatabases</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FastDatabaseInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span>engine<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"dbHost"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span>engine<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"dbUser"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>engine<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"dbPassword"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string">"mysql"</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">setCache</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment">//开启一级缓存</span>
                        <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>engine<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"dbName"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/**此处省略其他代码**/</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行sql语句时使用一级缓存" tabindex="-1"><a class="header-anchor" href="#执行sql语句时使用一级缓存"><span>执行SQL语句时使用一级缓存</span></a></h3>
<p>如果全局数据库一级缓存没有开启， 开发者可以在执行某段sql语句的时候，开启一级缓存，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">FcUserEntity</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> sqlStr <span class="token operator">=</span> <span class="token string">"select * from fc_user where userId = ? "</span><span class="token punctuation">;</span>
        
        <span class="token class-name">FastEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> fastEntity <span class="token operator">=</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                    <span class="token punctuation">.</span><span class="token function">setCache</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment">//启用一级缓存</span>
                                    <span class="token punctuation">.</span><span class="token function">selectFirst</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> fastEntity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解说</p>
<p>第一次执行 <code v-pre>getUserById</code> 方法时，检测没有缓存，会从数据库中获取结果： <code v-pre>{userId:1,userNickName:&quot;好帅&quot;}</code></p>
<p>第二次执行 <code v-pre>getUserById</code> 方法时，检测【相同 <code v-pre>userId</code> 值】【同一个sql语句】是否有缓存，有缓存直接使用缓存结果：<code v-pre>{userId:1,userNickName:&quot;好帅&quot;}</code>
否则继续从数据库中拉取。</p>
</div>
<h3 id="清除一级缓存的数据" tabindex="-1"><a class="header-anchor" href="#清除一级缓存的数据"><span>清除一级缓存的数据</span></a></h3>
<h4 id="框架自动更新缓存" tabindex="-1"><a class="header-anchor" href="#框架自动更新缓存"><span>框架自动更新缓存</span></a></h4>
<p>数据库表格的一级缓存数据，在执行 <code v-pre>select</code> 查询语句时，并不会自动更新缓存数据，
当执行表格的 <code v-pre>insert</code> 、 <code v-pre>update</code> 和 <code v-pre>delete</code> 语句时，
会自动清除相关表格的所有缓存数据，所以在下次 <code v-pre>select</code> 查询语句时会重新从数据库中拉取数据。</p>
<h4 id="手动更新缓存" tabindex="-1"><a class="header-anchor" href="#手动更新缓存"><span>手动更新缓存</span></a></h4>
<p>FastChar框架也允许开发者手动清除缓存数据，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token comment">//传入需要清除缓存的表格名称即可</span>
<span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token string">"fc_user"</span><span class="token punctuation">,</span><span class="token string">"fc_dept"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二级缓存" tabindex="-1"><a class="header-anchor" href="#二级缓存"><span>二级缓存</span></a></h2>
<p>在FastChar中，默认支持数据二级缓存功能，缓存数据处理使用 <RouteLink to="/component/cache-info.html">Cache数据缓存组件</RouteLink> 提供的缓存工具。</p>
<p>二级缓存是业务数据缓存，在 <code v-pre>FastEntity</code> 中可手动使用，二次调用时如果检测到有缓存则直接使用缓存的数据，如下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FcUserEntity</span> <span class="token keyword">extends</span> <span class="token class-name">FastEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">FcUserEntity</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getOverrides</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">singleInstance</span><span class="token punctuation">(</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**省略其他的代码**/</span>
    
    <span class="token keyword">public</span> <span class="token class-name">FcUserEntity</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">buildCache</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cache<span class="token punctuation">.</span>Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//构建缓存对象</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//没有缓存时会执行下面代码</span>
                <span class="token class-name">String</span> sqlStr <span class="token operator">=</span> <span class="token string">"select * from fc_user where userId=?"</span><span class="token punctuation">;</span>
                <span class="token class-name">FcUserEntity</span> result <span class="token operator">=</span> <span class="token function">selectFirst</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> result<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setTag</span><span class="token punctuation">(</span><span class="token string">"FcUser"</span><span class="token punctuation">)</span><span class="token comment">//设置缓存的标签</span>
        <span class="token punctuation">.</span><span class="token function">setKey</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//设置缓存的 key</span>
        <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清除二级缓存数据" tabindex="-1"><a class="header-anchor" href="#清除二级缓存数据"><span>清除二级缓存数据</span></a></h3>
<p><code v-pre>FastEntity</code> 中的二级缓存，框架默认没有自动更新，所以需要开发者手动调用清除缓存的方法进行清除，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
    <span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token function">dao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deleteCache</span><span class="token punctuation">(</span><span class="token string">"FcUser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//清除所有标签值为 FcUser 的缓存数据</span>
    
    <span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token function">dao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deleteCache</span><span class="token punctuation">(</span><span class="token string">"FcUser"</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//清除标签值为 FcUser 并且缓存的key为 1 的缓存数据</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三级缓存" tabindex="-1"><a class="header-anchor" href="#三级缓存"><span>三级缓存</span></a></h2>
<p>在FastChar中，默认支持请求数据三级缓存功能，缓存数据处理使用 <RouteLink to="/component/cache-info.html">Cache数据缓存组件</RouteLink> 提供的缓存工具。</p>
<p>三级缓存是<RouteLink to="/guide/action-info.html">控制器</RouteLink> 在 <RouteLink to="/guide/action-out.html">响应数据</RouteLink> 后进行数据缓存，
在 <code v-pre>FastAction</code> 中 在对应的路由方法 使用 <code v-pre>AFastCache</code> 注解 启用缓存，如下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAction</span> <span class="token keyword">extends</span> <span class="token class-name">FastAction</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**省略其他代码**/</span>
    
    <span class="token annotation punctuation">@AFastCache</span><span class="token comment">//启用三级缓存</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> userId <span class="token operator">=</span> <span class="token function">getParamToInt</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">responseJson</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">"获取成功"</span><span class="token punctuation">,</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token function">dao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用三级缓存默认缓存的 <code v-pre>tag</code> 是的当前 <code v-pre>Action</code> 的类名也就是 <code v-pre>TestAction.class.getName()</code>
缓存的 <code v-pre>key</code> 是当前方法名和路径生成唯一标识。</p>
<p>开发者也可以手动配置 <code v-pre>tag</code> 和 <code v-pre>key</code> 如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAction</span> <span class="token keyword">extends</span> <span class="token class-name">FastAction</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**省略其他代码**/</span>
    
    <span class="token annotation punctuation">@AFastCache</span><span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">"showUser"</span><span class="token punctuation">,</span>tag <span class="token operator">=</span> <span class="token string">"TestAction"</span><span class="token punctuation">)</span><span class="token comment">//启用三级缓存</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> userId <span class="token operator">=</span> <span class="token function">getParamToInt</span><span class="token punctuation">(</span><span class="token string">"userId"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">responseJson</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">"获取成功"</span><span class="token punctuation">,</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">.</span><span class="token function">dao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="清除三级缓存数据" tabindex="-1"><a class="header-anchor" href="#清除三级缓存数据"><span>清除三级缓存数据</span></a></h3>
<p><code v-pre>FastAction</code> 中的三级缓存，框架默认没有自动更新，所以需要开发者手动调用清除缓存的方法进行清除，如下：</p>
<Tabs id="89" :data='[{"id":"静态方法清除"},{"id":"FastAction中清除"}]'>
<template #title0="{ value, isActive }">静态方法清除</template>
<template #title1="{ value, isActive }">FastAction中清除</template>
<template #tab0="{ value, isActive }">
<p>开发者可以调用 <code v-pre>FastChar.getActions()</code> 静态方法在适当的时机清除缓存，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>

    <span class="token doc-comment comment">/**
     * web启动完成开始运行时，清除 FastAction 相关的缓存
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onRun</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    
       <span class="token comment">//清除所有标签值为 TestAction 的缓存数据</span>
       <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deleteCache</span><span class="token punctuation">(</span><span class="token string">"TestAction"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       
       <span class="token comment">//清除标签值为 TestAction 并且缓存的key为 showUser 的缓存数据</span>
       <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deleteCache</span><span class="token punctuation">(</span><span class="token string">"TestAction"</span><span class="token punctuation">,</span> <span class="token string">"showUser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAction</span> <span class="token keyword">extends</span> <span class="token class-name">FastAction</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**省略其他代码**/</span>
    
    <span class="token keyword">public</span> <span class="token class-name">TestAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//清除所有标签值为 TestAction 的缓存数据</span>
        <span class="token function">deleteCache</span><span class="token punctuation">(</span><span class="token string">"TestAction"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//清除标签值为 TestAction 并且缓存的key为 showUser 的缓存数据</span>
        <span class="token function">deleteCache</span><span class="token punctuation">(</span><span class="token string">"TestAction"</span><span class="token punctuation">,</span> <span class="token string">"showUser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="分布式系统" tabindex="-1"><a class="header-anchor" href="#分布式系统"><span>分布式系统</span></a></h2>
<p>如果开发的系统采用了分布式，在需要更新数据缓存时建议采用 <RouteLink to="/component/mq-info.html">MQ消息中间件</RouteLink> 进行通知更新。</p>
</div></template>


