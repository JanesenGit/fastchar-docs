<template><div><h1 id="fastchar更新日志" tabindex="-1"><a class="header-anchor" href="#fastchar更新日志" aria-hidden="true">#</a> FastChar更新日志</h1>
<h2 id="v2-1-1" tabindex="-1"><a class="header-anchor" href="#v2-1-1" aria-hidden="true">#</a> V2.1.1</h2>
<ol>
<li>优化内存缓存功能，新增FastMemoryCacheConfig内存全局配置类。</li>
<li>FastAction类新增getRequestUrl和getRequestFullUrl方法。</li>
<li>优化数据库配置。</li>
<li>优化RSA加密工具类。</li>
<li>优化异常日志打印，全局支持Log4j。</li>
<li><strong><mark>修改识别相关xml文件前缀，统一改为fastchar开头。</mark></strong></li>
</ol>
<h2 id="v2-1-0" tabindex="-1"><a class="header-anchor" href="#v2-1-0" aria-hidden="true">#</a> V2.1.0</h2>
<ol>
<li>整体架构升级优化。</li>
<li>优化部分功能。</li>
<li>新增FastConstant变量projectHost，解决getRequestURL()与浏览器地址不一致问题。</li>
<li>新增Yaml组件。</li>
<li>新增RabbitMQ. RocketMQ组件。</li>
<li>新增Redis链接工具Lettuce与Redisson。</li>
<li>新增分布式锁的控制。</li>
</ol>
<h2 id="v2-0-2" tabindex="-1"><a class="header-anchor" href="#v2-0-2" aria-hidden="true">#</a> V2.0.2</h2>
<ol>
<li>新增FastEntity方法select(String...checks)查询。</li>
<li>解决自动检测FastServletType类型错误【重要，适配Tomcat9以上问题】</li>
<li>新增rabbitMQ组件。FastRabbitMQ类快速读取和发送消息。</li>
</ol>
<h2 id="v2-0-1" tabindex="-1"><a class="header-anchor" href="#v2-0-1" aria-hidden="true">#</a> V2.0.1</h2>
<ol>
<li>优化FastOutCaptcha支持子类修改验证码输出字符！</li>
<li>优化数据库检测！</li>
<li>新增IFastSqlOperateListener监听。</li>
<li>优化日期格式guess速度！</li>
<li>优化缓存数据的响应！</li>
<li>优化上传附件命名问题！</li>
<li>优化WEB-INF目录的获取！</li>
<li>增加FastConstant常量webServer 用来区分是否是web服务器运行项目！</li>
<li>优化FastObjectGetHandler提高获取长度的权重。</li>
</ol>
<h2 id="v2-0-0" tabindex="-1"><a class="header-anchor" href="#v2-0-0" aria-hidden="true">#</a> V2.0.0</h2>
<ol>
<li>优化FastObjectGetHandler和FastObjectSetHandler</li>
<li>优化FastScanner类！</li>
<li>优化FastLog类，默认寻找日志打印类！</li>
<li>【重要】调整框架加载顺序！</li>
<li>新增默认的数据源FastSimpleDataSource！</li>
<li>优化FastFile类！</li>
<li>优化FastResultSet</li>
<li>优化MySql全文索引配置！</li>
<li>提高性能！</li>
<li>优化二级缓存功能！</li>
<li>删除FastBaseInfo类！</li>
<li>优化FastOut，解决WindowServer服务器使用时乱码问题，并自动注册 org.apache.catalina.servlets.DefaultServlet 解决tomcat静态资源乱码问题！</li>
<li>优化FastFile中的getUrl方法！</li>
<li>优化checks检测，新增'!' 判断即 !=</li>
<li>新增UnicodeReader，用于排除BOM字符，并优化Properties读取！</li>
<li>优化数据库检测！</li>
<li>新增IFastDatabaseXmlListener监听！</li>
</ol>
</div></template>


