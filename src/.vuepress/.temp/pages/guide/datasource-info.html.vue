<template><div><h1 id="配置数据源" tabindex="-1"><a class="header-anchor" href="#配置数据源"><span>配置数据源</span></a></h1>
<p>FastChar 默认集成了数据源的配置</p>
<h2 id="单个数据源配置" tabindex="-1"><a class="header-anchor" href="#单个数据源配置"><span>单个数据源配置</span></a></h2>
<p>在<RouteLink to="/guide/system-init.html">系统全局初始化</RouteLink>的时候配置数据源，以配置 <code v-pre>mysql</code> 数据库为例，如下：</p>
<Tabs id="12" :data='[{"id":"方式一"},{"id":"方式二"}]'>
<template #title0="{ value, isActive }">方式一</template>
<template #title1="{ value, isActive }">方式二</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//配置数据源</span>
        engine<span class="token punctuation">.</span><span class="token function">getDatabases</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FastDatabaseInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">)</span><span class="token comment">//数据库地址</span>
                    <span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token comment">//用户名</span>
                    <span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token comment">//用户密码</span>
                    <span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string">"mysql"</span><span class="token punctuation">)</span><span class="token comment">//数据类型，更多类型查看 数据库支持的类型</span>
                    <span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token string">"3306"</span><span class="token punctuation">)</span><span class="token comment">//数据库端口，此处可以不做配置，系统会根据数据库类型 设置对应的默认端口</span>
                    <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"fc_test"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//数据库名</span>
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//配置数据源</span>
        engine<span class="token punctuation">.</span><span class="token function">getDatabases</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FastDatabaseInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"……"</span><span class="token punctuation">)</span><span class="token comment">//数据库的链接地址</span>
                    <span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token comment">//用户名</span>
                    <span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//用户密码</span>
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="多个数据源配置" tabindex="-1"><a class="header-anchor" href="#多个数据源配置"><span>多个数据源配置</span></a></h2>
<p>在<RouteLink to="/guide/system-init.html">系统全局初始化</RouteLink>的时候配置数据源，以配置 <code v-pre>mysql</code> 数据库为例，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//配置数据源</span>
        engine<span class="token punctuation">.</span><span class="token function">getDatabases</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FastDatabaseInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span><span class="token string">"data_source_a"</span><span class="token punctuation">)</span><span class="token comment">//数据源 data_souce_a</span>
                    <span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">)</span><span class="token comment">//数据库地址</span>
                    <span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token comment">//用户名</span>
                    <span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token comment">//用户密码</span>
                    <span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string">"mysql"</span><span class="token punctuation">)</span><span class="token comment">//数据类型</span>
                    <span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token string">"3306"</span><span class="token punctuation">)</span><span class="token comment">//数据库端口，此处可以不做配置，系统会根据数据库类型 设置对应的默认端口</span>
                    <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"fc_test"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//数据库名</span>
            <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FastDatabaseInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span><span class="token string">"data_source_b"</span><span class="token punctuation">)</span><span class="token comment">//数据源 data_souce_b</span>
                    <span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"……"</span><span class="token punctuation">)</span><span class="token comment">//数据库的链接地址</span>
                    <span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//数据库名</span>
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>配置多个数据源时，以数据源的Code为唯一标识进行区分。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>当配置多个数据源后，如果开发者在使用时未明确使用哪个一个数据源，则以第一个数据源为默认数据源。
上述代码中的默认数据源为： data_source_a</p>
</div>
</div>
<h2 id="支持数据库类型" tabindex="-1"><a class="header-anchor" href="#支持数据库类型"><span>支持数据库类型</span></a></h2>
<p>FastChar默认支持数据类型：<code v-pre>mysql</code>、<code v-pre>sql_server</code>、<code v-pre>oracle</code></p>
<h2 id="数据库连接池" tabindex="-1"><a class="header-anchor" href="#数据库连接池"><span>数据库连接池</span></a></h2>
<p>FastChar默认支持 自带simple、druid、c3p0、tomcatJdbc四种连接池，FastChar自带的 <code v-pre>FastSimpleDataSourceProvider</code>
仅用于测试数据库时使用，不建议用在正式项目中。</p>
<h3 id="druid连接池" tabindex="-1"><a class="header-anchor" href="#druid连接池"><span>druid连接池</span></a></h3>
<p>FastChar默认支持，如果需要使用druid连接池，则在项目中引用druid包即可，以maven项目为例，在pom.xml中加入引用如下：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>    <span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.alibaba/druid --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c3p0连接池" tabindex="-1"><a class="header-anchor" href="#c3p0连接池"><span>c3p0连接池</span></a></h3>
<p>FastChar默认支持，如果需要使用c3p0连接池，则在项目中引用c3p0包即可，以maven项目为例，在pom.xml中加入引用如下：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>    <span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.mchange/c3p0 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.mchange<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>c3p0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>0.9.5.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tomcatjdbc连接池" tabindex="-1"><a class="header-anchor" href="#tomcatjdbc连接池"><span>tomcatJDBC连接池</span></a></h3>
<p>FastChar默认支持，Tomcat自带数据库连接池，无需额外引用包。</p>
<h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h3>
<p>如果连接池的包都存在项目中，FastChar 选择数据连接池优先级为：</p>
<p><code v-pre>druid &gt; c3p0 &gt; tomcatJDBC &gt; simple</code></p>
<h2 id="如何使用数据源" tabindex="-1"><a class="header-anchor" href="#如何使用数据源"><span>如何使用数据源</span></a></h2>
<h3 id="fastdb指定数据源" tabindex="-1"><a class="header-anchor" href="#fastdb指定数据源"><span>FastDB指定数据源</span></a></h3>
<p>通过FastDB对象设置数据库名称，即可自由操作数据库，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDatabase</span><span class="token punctuation">(</span><span class="token string">"data_source_a"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">"update fc_user set userState=1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">responseText</span><span class="token punctuation">(</span><span class="token string">"操作成功！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码块切换数据源" tabindex="-1"><a class="header-anchor" href="#代码块切换数据源"><span>代码块切换数据源</span></a></h3>
<p>在FastChar中，通过FastDatabases对象的lock方法可以随意切换数据源，<strong><em>lock方法是线程安全</em></strong>，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getDatabases</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token string">"data_source_a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//切换到data_source_a数据源并锁定</span>

    <span class="token comment">//此时，执行数据库查询时，查询的是 data_source_a 数据源</span>
    <span class="token class-name">FcUserEntity</span> fcUserEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FcUserEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FcUserEntity</span><span class="token punctuation">></span></span> selectUser <span class="token operator">=</span> fcUserEntity<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//此时，执行数据库查询时，查询的是 data_source_a 数据源</span>
    <span class="token class-name">FcDeptEntity</span> fcDeptEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FcDeptEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FcDeptEntity</span><span class="token punctuation">></span></span> selectDept <span class="token operator">=</span> fcDeptEntity<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getDatabases</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//解除锁定</span>
    
    <span class="token function">responseText</span><span class="token punctuation">(</span>userEntity<span class="token punctuation">.</span><span class="token function">getTableDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库实体类切换数据源" tabindex="-1"><a class="header-anchor" href="#数据库实体类切换数据源"><span><RouteLink to="/guide/entity-info.html#%E6%8C%87%E5%AE%9A%E6%95%B0%E6%8D%AE%E6%BA%90">数据库实体类切换数据源</RouteLink></span></a></h3>
</div></template>


