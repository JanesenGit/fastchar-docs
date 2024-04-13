<template><div><h1 id="服务器搭建" tabindex="-1"><a class="header-anchor" href="#服务器搭建"><span>服务器搭建</span></a></h1>
<p>开发者可以根据自身情况搭建项目服务器，此处仅是建议，请开发者根据实际情况自由选择。</p>
<h2 id="linux的服务器搭建" tabindex="-1"><a class="header-anchor" href="#linux的服务器搭建"><span>Linux的服务器搭建</span></a></h2>
<p>一般服务器配置，建议开放者采用模式如下：</p>
<p><code v-pre>Nginx + Tomcat（7.0以上） + MySql（5.7或8.0以上都可）</code></p>
<p>该环境模式下，静态资源全部交由Nginx处理， Java类交由Tomcat容器处理。</p>
<p>Nginx优点，简要概述以下几点：</p>
<ul>
<li>作为Web服务器有优势</li>
<li>作为代理服务器有优势</li>
<li>作为负载均衡服务器有优势</li>
<li>性能好</li>
<li>稳定性强</li>
<li>高可用性</li>
<li>高并发连接</li>
<li>健康检查功能</li>
<li>节省宽带</li>
</ul>
<h3 id="开始部署" tabindex="-1"><a class="header-anchor" href="#开始部署"><span>开始部署</span></a></h3>
<p>建议使用第三方一键环境部署工具，此处推荐使用 <a href="https://oneinstack.com/install/" target="_blank" rel="noopener noreferrer">oneinstack<ExternalLinkIcon/></a>  一键部署服务器，永久免费方便！</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>最近免费工具都比较卷，不清楚这个工具会不会商业化收费，所以建议开发者将安装包下载到本地电脑做备份，安装包内包含了源码，开发者可以简单学习修改！</p>
</div>
</div></template>


