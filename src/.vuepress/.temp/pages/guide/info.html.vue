<template><div><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<p>FastChar是以Java语言为基础的WEB+ORM开源免费的MVC框架，设计原理符合一般Web框架规则。学习成本低、代码少、极易上手、零配置，极大的提高开发效率，减少错误率！</p>
<h2 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的" aria-hidden="true">#</a> 它是如何工作的？</h2>
<p>FastChar在启动后开始扫描（FastScanner）项目引用的所有jar包和文件，并将解析后jar包和扫描到文件分配给扫描接收器（IFastScannerAccepter）进行.class或其他文件处理。</p>
<p>FastChar框架核心的扫描接收器有：FastActionScannerAccepter（控制器.class文件解析）、FastDatabaseXmlScannerAccepter（数据库配置.xml文件解析）、FastEntityScannerAccepter（数据库载体.class文件解析）、FastOverrideScannerAccepter（代理器注册.class文件解析）、FastWebXmlScannerAccepter（web.xml文件解析）</p>
<h2 id="和spring框架区别" tabindex="-1"><a class="header-anchor" href="#和spring框架区别" aria-hidden="true">#</a> 和Spring框架区别</h2>
<p>FastChar主张代码可阅读性高、以最通俗易读的编程方式去实现业务功能逻辑。适用于需要快速开发web应用的团队使用。</p>
<p>FastChar使用门槛极低，只要掌握了Java基本的编程思想都可以快速上手。</p>
<p>Spring的优点众多这里就不赘述了。</p>
<p>这里简单阐述一下Spring几个缺点：</p>
<p>1、使用门槛过高，入门Spring需要较长时间，对于初学者来说基本一整套下来完全是懵的状态；</p>
<p>2、对过时技术兼容，导致复杂度升高；</p>
<p>3、代码阅读难度极高，由于各种&quot;切面&quot;导致代码较分散，很难追寻源头！</p>
<p>4、集成难度高，在使用的过程中很难接触底层代码逻辑。</p>
</div></template>


