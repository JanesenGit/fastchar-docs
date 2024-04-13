<template><div><h1 id="消息队列mq组件" tabindex="-1"><a class="header-anchor" href="#消息队列mq组件"><span>消息队列MQ组件</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastChar核心组件，FastChar默认集成了 <code v-pre>RabbitMQ</code> <code v-pre>Redisson</code> <code v-pre>RocketMQ</code> 消息队列功能，
开发可以根据自身情况选择消息队列使用的解决方案。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>开发者可以通过 <code v-pre>FastChar.getMQ()</code> 方法快速便捷的使用消息队列功能。如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>
<span class="token comment">//开启监听，通道为Test</span>
<span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getMQ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span><span class="token string">"Test"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">IFastMessageQueue<span class="token punctuation">.</span>OnReceive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> channel<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">IFastMessageQueue<span class="token punctuation">.</span>AckHandler</span> ackHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"收到消息："</span> <span class="token operator">+</span> channel <span class="token operator">+</span> <span class="token string">"//"</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//应答消息</span>
        ackHandler<span class="token punctuation">.</span><span class="token function">ack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//发送一个消息，通道为：Test</span>
 <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getMQ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Test"</span><span class="token punctuation">,</span> <span class="token string">"你在干嘛111332222222333！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用rabbitmq作为消息队列" tabindex="-1"><a class="header-anchor" href="#使用rabbitmq作为消息队列"><span>使用RabbitMQ作为消息队列</span></a></h2>
<p>如果开发者需要使用 <a href="https://www.rabbitmq.com/tutorials" target="_blank" rel="noopener noreferrer">RabbitMQ<ExternalLinkIcon/></a> 消息队列，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.rabbitmq/amqp-client --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.rabbitmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>amqp-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.18.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rabbitmq配置" tabindex="-1"><a class="header-anchor" href="#rabbitmq配置"><span>RabbitMQ配置</span></a></h3>
<p>开发者需要手动配置RabbitMQ的服务器地址和账户密码等信息。如下：</p>
<ul>
<li>配置类 <code v-pre>FastRabbitMQConfig</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//配置RabbitMQ地址相关信息</span>
        engine<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastRabbitMQConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">"javaHost"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">说明</p>
<p>完成RabbitMQ配置后，即可<RouteLink to="/component/mq-info.html#%E4%BD%BF%E7%94%A8">使用</RouteLink>消息队列功能。</p>
</div>
<h2 id="使用redisson作为消息队列" tabindex="-1"><a class="header-anchor" href="#使用redisson作为消息队列"><span>使用Redisson作为消息队列</span></a></h2>
<p>如果开发者需要使用 <a href="http://www.redisson.org/" target="_blank" rel="noopener noreferrer">Redisson<ExternalLinkIcon/></a> 消息队列，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.redisson/redisson --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.redisson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>redisson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.23.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redisson配置" tabindex="-1"><a class="header-anchor" href="#redisson配置"><span>Redisson配置</span></a></h3>
<p>由于 <code v-pre>Redisson</code> 是基于<code v-pre>Redis</code>实现消息队列，所以开发者需要手动配置Redis的服务器地址和账户密码等信息。如下：</p>
<ul>
<li>配置类 <code v-pre>FastRedisConfig</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//配置Redis地址相关信息</span>
         engine<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastRedisConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addServer</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多配置，请查看<RouteLink to="/component/cache-info.html#redis%E9%85%8D%E7%BD%AE">Redis配置</RouteLink></p>
<div class="hint-container info">
<p class="hint-container-title">说明</p>
<p>完成Redisson配置后，即可<RouteLink to="/component/mq-info.html#%E4%BD%BF%E7%94%A8">使用</RouteLink>消息队列功能。</p>
</div>
<h2 id="使用rocketmq作为消息队列" tabindex="-1"><a class="header-anchor" href="#使用rocketmq作为消息队列"><span>使用RocketMQ作为消息队列</span></a></h2>
<p>如果开发者需要使用 <a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ<ExternalLinkIcon/></a> 消息队列，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.apache.rocketmq/rocketmq-client-java --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.rocketmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>rocketmq-client-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.0.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rocketmq配置" tabindex="-1"><a class="header-anchor" href="#rocketmq配置"><span>RocketMQ配置</span></a></h3>
<p>开发者需要手动配置<code v-pre>RocketMQ</code>的服务器地址和账户密码等信息。如下：</p>
<ul>
<li>配置类 <code v-pre>FastRocketMQConfig</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastCharTestWeb</span> <span class="token keyword">implements</span> <span class="token class-name">IFastWeb</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * web启动初始化
     * <span class="token keyword">@param</span> <span class="token parameter">engine</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onInit</span><span class="token punctuation">(</span><span class="token class-name">FastEngine</span> engine<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//配置RocketMQ地址相关信息</span>
        engine<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token class-name">FastRocketMQConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setAccessKey</span><span class="token punctuation">(</span><span class="token string">"V9f*****L7n"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setAccessSecret</span><span class="token punctuation">(</span><span class="token string">"A96t62***8pw0mb"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setEndpoints</span><span class="token punctuation">(</span><span class="token string">"rmq-cn-4xl3clh840c.cn-****.rmq.aliyuncs.com:8080"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setGroup</span><span class="token punctuation">(</span><span class="token string">"TestGroup"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setTopic</span><span class="token punctuation">(</span><span class="token string">"TestTopic"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token doc-comment comment">/**此处省略其他配置代码**/</span>
    <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**此处省略其他代码**/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">说明</p>
<p>完成RabbitMQ配置后，即可<RouteLink to="/component/mq-info.html#%E4%BD%BF%E7%94%A8">使用</RouteLink>消息队列功能。</p>
</div>
<h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h2>
<p>如果RabbitMQ、Redisson和RocketMQ的相关jar包都存在项目中</p>
<p>FastChar 选择的优先级为：<code v-pre>RocketMQ &gt; RabbitMQ &gt; Redisson</code></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>RocketMQ、RabbitMQ和Redisson的相关jar包必须只能引用其中一个，避免操作cache异常！</p>
</div>
<h2 id="自定义实现消息队列" tabindex="-1"><a class="header-anchor" href="#自定义实现消息队列"><span>自定义实现消息队列</span></a></h2>
<p>开发者可以实现 <code v-pre>IFastMessageQueue</code> 接口 自定义实现消息队列处理。然后将<RouteLink to="/guide/overrider-info.html#%E4%BB%A3%E7%90%86%E7%B1%BB%E7%9A%84%E6%B3%A8%E5%86%8C">实现的类注册到代理器</RouteLink>中即可！</p>
</div></template>


