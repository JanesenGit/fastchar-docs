# FastChar更新日志

## V2.2.0
1. 优化内存缓存功能，新增FastMemoryCacheConfig内存全局配置类。
2. FastAction类新增getRequestUrl和getRequestFullUrl方法。
3. 优化数据库配置。
4. 优化RSA加密工具类。
5. 优化异常日志打印，全局支持Log4j。
6. **==修改识别相关xml文件前缀，统一改为fastchar开头。==**



## V2.1.0
1. 整体架构升级优化。
2. 优化部分功能。
3. 新增FastConstant变量projectHost，解决getRequestURL()与浏览器地址不一致问题。
4. 新增Yaml组件。
5. 新增RabbitMQ. RocketMQ组件。
6. 新增Redis链接工具Lettuce与Redisson。
7. 新增分布式锁的控制。


## V2.0.2
1. 新增FastEntity方法select(String...checks)查询。
2. 解决自动检测FastServletType类型错误【重要，适配Tomcat9以上问题】
3. 新增rabbitMQ组件。FastRabbitMQ类快速读取和发送消息。


## V2.0.1
1. 优化FastOutCaptcha支持子类修改验证码输出字符！
2. 优化数据库检测！
3. 新增IFastSqlOperateListener监听。
4. 优化日期格式guess速度！
5. 优化缓存数据的响应！
6. 优化上传附件命名问题！
7. 优化WEB-INF目录的获取！
8. 增加FastConstant常量webServer 用来区分是否是web服务器运行项目！
9. 优化FastObjectGetHandler提高获取长度的权重。


## V2.0.0
1. 优化FastObjectGetHandler和FastObjectSetHandler
2. 优化FastScanner类！
3. 优化FastLog类，默认寻找日志打印类！
4. 【重要】调整框架加载顺序！
5. 新增默认的数据源FastSimpleDataSource！
6. 优化FastFile类！
7. 优化FastResultSet
8. 优化MySql全文索引配置！
9. 提高性能！
10. 优化二级缓存功能！
11. 删除FastBaseInfo类！
12. 优化FastOut，解决WindowServer服务器使用时乱码问题，并自动注册 org.apache.catalina.servlets.DefaultServlet 解决tomcat静态资源乱码问题！
13. 优化FastFile中的getUrl方法！
14. 优化checks检测，新增'!' 判断即 !=
15. 新增UnicodeReader，用于排除BOM字符，并优化Properties读取！
16. 优化数据库检测！
17. 新增IFastDatabaseXmlListener监听！