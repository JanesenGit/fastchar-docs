<template><div><h1 id="数据库自动化" tabindex="-1"><a class="header-anchor" href="#数据库自动化"><span>数据库自动化</span></a></h1>
<p>FastChar 框架中默认提供了核心数据库自动化功能，通过数据库的 <code v-pre>fastchar-database-*.xml</code> 配置后
FastChar 会自动识别 xml 里内容与数据库进行匹配实现如下几个自动操作：</p>
<p>1、数据库是否存在，不存在则创建数据库。</p>
<p>2、表格是否存在，不存在则创建表格。</p>
<p>3、字段是否存在，不存在则添加字段。</p>
<p>4、字段属性是否和绑定的数据库一致，不一致则修改字段。</p>
<div class="hint-container caution">
<p class="hint-container-title">重要说明</p>
<p>FastChar同步原则是：<strong>只增不删</strong>。重要的事情再说三遍，<strong><mark>只增不删</mark></strong> 、 <strong><mark>只增不删</mark></strong> 、 <strong><mark>只增不删</mark></strong></p>
<p>FastChar 绝对不会 主动删除数据库 的任何表或字段或其他配置 或与删除相关的所有操作，更不会主动删除数据库中的数据。</p>
<p>FastChar 数据库自动化 <strong><mark>点到为止</mark></strong></p>
</div>
<h2 id="是否强制使用" tabindex="-1"><a class="header-anchor" href="#是否强制使用"><span>是否强制使用</span></a></h2>
<p>FastChar <strong><mark>不会强制</mark></strong> 要求开发者使用数据库自动化功能，所以不用担心强制使用的问题，如果不需要使用，则不用创建任何  <code v-pre>fastchar-database-*.xml</code>
即可。</p>
<h2 id="支持的数据库" tabindex="-1"><a class="header-anchor" href="#支持的数据库"><span>支持的数据库</span></a></h2>
<p>数据库自动化FastChar默认支持：mysql、sql_server、oracle。</p>
<h2 id="创建数据库xml文件" tabindex="-1"><a class="header-anchor" href="#创建数据库xml文件"><span>创建数据库xml文件</span></a></h2>
<p>如果开发需要使用数据库自动化功能，在 <code v-pre>classess</code> 目录下创建一个以<code v-pre>fastchar-database</code>开头的xml文件，并配置数据库内容即可。
以maven项目为例在 <code v-pre>resources</code> 目录下新建，目录如下：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>FastCharTest/
└── main/
    ├── java/
    └── resources/
        ├── config.properties
        ├── fastchar-database-appshare.xml # &lt;- 我们在这里
        ├── fastchar-database-default.xml # &lt;- 我们在这里
        └── fastchar-database-pay.xml # &lt;- 我们在这里
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">必读说明</p>
<p>如上所示，创建了三个xml数据库配置文件，最终FastChar框架会自动合并xml里的配置内容，
合并的优先级按照 <code v-pre>文件名称正序排序</code> 排序越靠后优先级越高</p>
</div>
<h2 id="配置数据库xml文件" tabindex="-1"><a class="header-anchor" href="#配置数据库xml文件"><span>配置数据库xml文件</span></a></h2>
<p>具体的xml配置内容以及xml层次结构，如下：</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>配置数据库xml 需要掌握 数据库的相关知识点。</p>
</div>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">database</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>database</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fc_user<span class="token punctuation">"</span></span> <span class="token attr-name">comment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户管理<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>column</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userId<span class="token punctuation">"</span></span> <span class="token attr-name">comment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>编号<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>int<span class="token punctuation">"</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>11<span class="token punctuation">"</span></span>
                <span class="token attr-name">primary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">autoincrement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">nullable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not null<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>column</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userHeadImg<span class="token punctuation">"</span></span> <span class="token attr-name">comment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户头像<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>varchar<span class="token punctuation">"</span></span>
                <span class="token attr-name">nullable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>null<span class="token punctuation">"</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>column</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userNickName<span class="token punctuation">"</span></span> <span class="token attr-name">comment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户昵称<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>varchar<span class="token punctuation">"</span></span>
                <span class="token attr-name">nullable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>null<span class="token punctuation">"</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>column</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userEmail<span class="token punctuation">"</span></span> <span class="token attr-name">comment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户邮箱<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>varchar<span class="token punctuation">"</span></span>
                <span class="token attr-name">nullable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>null<span class="token punctuation">"</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>column</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userPassword<span class="token punctuation">"</span></span> <span class="token attr-name">comment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>登录密码<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>varchar<span class="token punctuation">"</span></span>
                <span class="token attr-name">nullable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>null<span class="token punctuation">"</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>column</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userState<span class="token punctuation">"</span></span> <span class="token attr-name">comment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户状态<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>int<span class="token punctuation">"</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>11<span class="token punctuation">"</span></span>
                <span class="token attr-name">nullable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>null<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>column</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userDateTime<span class="token punctuation">"</span></span> <span class="token attr-name">comment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>录入时间<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datetime<span class="token punctuation">"</span></span>
                <span class="token attr-name">nullable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>null<span class="token punctuation">"</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>database</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>fastchar-database.xml</code>中，使用的标签总共只有三个标签：<code v-pre>database</code>、<code v-pre>table</code>和<code v-pre>column</code>标签，层级关系如上述的案例。</p>
<h2 id="database标签属性" tabindex="-1"><a class="header-anchor" href="#database标签属性"><span>database标签属性</span></a></h2>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3>
<ul>
<li>说明：数据库名称，用于自动创建数据库时传入的数据库名</li>
<li>类型：<code v-pre>String</code></li>
<li>必填：是</li>
</ul>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>code</span></a></h3>
<ul>
<li>说明：数据库唯一标识，用于匹配代码中配置的<RouteLink to="/guide/datasource-info.html#%E5%A4%9A%E4%B8%AA%E6%95%B0%E6%8D%AE%E6%BA%90%E9%85%8D%E7%BD%AE">数据源</RouteLink>，当<code v-pre>code</code>值一致时，检测此数据源并自动同步xml配置</li>
<li>必填：否</li>
<li>类型：<code v-pre>String</code></li>
<li>默认：与 <code v-pre>name</code> 属性值一致</li>
<li>举例：值为 <code v-pre>data_source_a</code> 表示只同步到此数据源，其他配置的数据源不同步。</li>
</ul>
<h3 id="enable" tabindex="-1"><a class="header-anchor" href="#enable"><span>enable</span></a></h3>
<ul>
<li>说明：是否启用此数据库的自定化同步，当为true时，FastChar会自动检测数据库信息，如果不存在则创建！</li>
<li>必填：否</li>
<li>类型：<code v-pre>boolean</code></li>
<li>可选值：<code v-pre>true</code> 或 <code v-pre>false</code></li>
<li>默认：<code v-pre>true</code></li>
</ul>
<h2 id="table标签属性" tabindex="-1"><a class="header-anchor" href="#table标签属性"><span>table标签属性</span></a></h2>
<h3 id="name-1" tabindex="-1"><a class="header-anchor" href="#name-1"><span>name</span></a></h3>
<ul>
<li>说明：数据库名称，用于自动创建表格时传入的表格名称</li>
<li>类型：<code v-pre>String</code></li>
<li>必填：是</li>
</ul>
<h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>comment</span></a></h3>
<ul>
<li>说明：表格的备注，如果数据库支持表格备注，则在创建表格时会自动增加备注信息。</li>
<li>类型：<code v-pre>String</code></li>
<li>必填：否</li>
</ul>
<h3 id="enable-1" tabindex="-1"><a class="header-anchor" href="#enable-1"><span>enable</span></a></h3>
<ul>
<li>说明：是否启用，当为true时，FastChar会自动检测数据库表格信息，如果表格不存在则创建表格！</li>
<li>类型：<code v-pre>boolean</code></li>
<li>必填：否</li>
<li>可选值：<code v-pre>true</code> 或 <code v-pre>false</code></li>
<li>默认：<code v-pre>true</code></li>
</ul>
<h2 id="column标签属性" tabindex="-1"><a class="header-anchor" href="#column标签属性"><span>column标签属性</span></a></h2>
<h3 id="name-2" tabindex="-1"><a class="header-anchor" href="#name-2"><span>name</span></a></h3>
<ul>
<li>说明：字段名称，用于自动创建表格字段时传入的字段名称</li>
<li>类型：<code v-pre>String</code></li>
<li>必填：是</li>
</ul>
<h3 id="comment-1" tabindex="-1"><a class="header-anchor" href="#comment-1"><span>comment</span></a></h3>
<ul>
<li>说明：字段的备注，如果数据库支持表格字段备注，则在创建表格字段时会自动增加备注信息。</li>
<li>类型：<code v-pre>String</code></li>
<li>必填：否</li>
</ul>
<h3 id="primary" tabindex="-1"><a class="header-anchor" href="#primary"><span>primary</span></a></h3>
<ul>
<li>说明：主键字段。</li>
<li>必填：否</li>
<li>类型：<code v-pre>boolean</code></li>
<li>可选值：<code v-pre>true</code> 或 <code v-pre>false</code></li>
</ul>
<h3 id="autoincrement" tabindex="-1"><a class="header-anchor" href="#autoincrement"><span>autoincrement</span></a></h3>
<ul>
<li>说明：自增字段。</li>
<li>必填：否</li>
<li>类型：<code v-pre>boolean</code></li>
<li>可选值：<code v-pre>true</code> 或 <code v-pre>false</code></li>
</ul>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3>
<ul>
<li>说明：字段的类型。</li>
<li>类型：<code v-pre>String</code></li>
<li>必填：是</li>
<li>可选值：按照使用的数据库规则配置！</li>
<li>举例：mysql数据库字符类型 varchar</li>
</ul>
<h3 id="length" tabindex="-1"><a class="header-anchor" href="#length"><span>length</span></a></h3>
<ul>
<li>说明：	字段的长度。</li>
<li>类型：<code v-pre>String</code></li>
<li>必填：是</li>
<li>可选值：按照使用的数据库规则配置！</li>
<li>举例：mysql中double类型的长度配置 <code v-pre>11,2</code></li>
</ul>
<h3 id="nullable" tabindex="-1"><a class="header-anchor" href="#nullable"><span>nullable</span></a></h3>
<ul>
<li>说明：字段可空</li>
<li>必填：否</li>
<li>类型：<code v-pre>String</code></li>
<li>可选值：<code v-pre>null</code> 或 <code v-pre>not null</code></li>
<li>默认：<code v-pre>null</code></li>
</ul>
<h3 id="charset" tabindex="-1"><a class="header-anchor" href="#charset"><span>charset</span></a></h3>
<ul>
<li>说明：字段字符集</li>
<li>必填：否</li>
<li>类型：<code v-pre>String</code></li>
<li>可选值：按照使用的数据库规则配置！</li>
<li>默认：<code v-pre>utf8mb4</code></li>
</ul>
<h3 id="value" tabindex="-1"><a class="header-anchor" href="#value"><span>value</span></a></h3>
<ul>
<li>说明：字段默认值</li>
<li>必填：否</li>
<li>类型：<code v-pre>String</code></li>
</ul>
<h3 id="encrypt" tabindex="-1"><a class="header-anchor" href="#encrypt"><span>encrypt</span></a></h3>
<ul>
<li>说明：加密字段内容。由 <RouteLink to="/guide/entity-info.html">FastEntity</RouteLink> 在操作数据库 <code v-pre>insert</code>、<code v-pre>update</code>、<code v-pre>select</code> 时预处理数据内容！加密由 <RouteLink to="/guide/data-xml-info.html#%E5%AD%97%E6%AE%B5%E5%86%85%E5%AE%B9%E5%8A%A0%E5%AF%86">字段内容加密</RouteLink> 提供支持！</li>
<li>必填：否</li>
<li>类型：<code v-pre>boolean</code></li>
<li>可选值：<code v-pre>true</code> 或 <code v-pre>false</code></li>
</ul>
<h3 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span>password</span></a></h3>
<ul>
<li>说明：密码字段。由 <RouteLink to="/guide/entity-info.html">FastEntity</RouteLink> 在操作数据库 <code v-pre>insert</code>、<code v-pre>update</code> 时预处理数据，进行 <code v-pre>MD5</code> 加密内容！加密由 <RouteLink to="/guide/data-xml-info.html#%E5%AD%97%E6%AE%B5%E5%86%85%E5%AE%B9%E5%8A%A0%E5%AF%86">字段内容加密</RouteLink> 提供支持！</li>
<li>必填：否</li>
<li>类型：<code v-pre>boolean</code></li>
<li>可选值：<code v-pre>true</code> 或 <code v-pre>false</code></li>
</ul>
<h3 id="enable-2" tabindex="-1"><a class="header-anchor" href="#enable-2"><span>enable</span></a></h3>
<ul>
<li>说明：是否启用，当为true时，FastChar会自动检测数据库表格字段信息，如果表格不存在字段则创建表格字段！</li>
<li>类型：<code v-pre>boolean</code></li>
<li>必填：否</li>
<li>可选值：<code v-pre>true</code> 或 <code v-pre>false</code></li>
<li>默认：<code v-pre>true</code></li>
</ul>
<h2 id="字段内容加密" tabindex="-1"><a class="header-anchor" href="#字段内容加密"><span>字段内容加密</span></a></h2>
<p><code v-pre>IFastColumnSecurity</code> 接口。</p>
<p><RouteLink to="/guide/entity-info.html">FastEntity</RouteLink> 在操作数据库 <code v-pre>insert</code>、<code v-pre>update</code>、<code v-pre>select</code> 时，检测字段是否进行加密处理。</p>
<p>FastChar 内置了字段内容 MD5 单向加密 和 AES加解密 由 <RouteLink to="/component/security-info.html">内容加解密组件</RouteLink> 提供支持。</p>
<p>实现 <code v-pre>IFastColumnSecurity</code> 接口代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastColumnSecurity</span> <span class="token keyword">implements</span> <span class="token class-name">IFastColumnSecurity</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token class-name">FastColumnInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> columnInfo<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">FastStringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"md5"</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>columnInfo<span class="token punctuation">.</span><span class="token function">getEncrypt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MD5_Encrypt</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"true"</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>columnInfo<span class="token punctuation">.</span><span class="token function">getEncrypt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AES_Encrypt</span><span class="token punctuation">(</span><span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEncryptPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token class-name">FastColumnInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> columnInfo<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">FastStringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"true"</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>columnInfo<span class="token punctuation">.</span><span class="token function">getEncrypt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AES_Decrypt</span><span class="token punctuation">(</span><span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getConstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEncryptPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义字段内容加密" tabindex="-1"><a class="header-anchor" href="#自定义字段内容加密"><span>自定义字段内容加密</span></a></h2>
<p>如果开发者需要自定义 字段内容加密，只要实现 <code v-pre>IFastColumnSecurity</code> 接口， 并注册到 <RouteLink to="/guide/overrider-info.html#%E4%BB%A3%E7%90%86%E7%B1%BB%E7%9A%84%E6%B3%A8%E5%86%8C">类代理器</RouteLink> 中即可。</p>
</div></template>


