# 系统内存Cache缓存组件
## 介绍
FastChar核心组件，FastChar默认集成了 `Caffeine` 内存缓存功能。

系统内存缓存顾名思义就是把数据缓存到系统内存中， 并不会持久化到磁盘中。

## 使用
开发者可以调用静态方法 `FastChar.getMemoryCache()` 快速的进行系统内存缓存读写操作。如下：

```java
//新增或修改缓存
FastChar.getMemoryCache().put( "id", "1");

//获取指定key缓存值
int id = FastChar.getMemoryCache().get( "id");

//删除指定key的缓存
FastChar.getCache().remove("id");

```

## 使用框架默认内存缓存
FastChar默认实现了基本内存缓存功能，开发者无需做任何配置。

基本规则： 当内存中的缓存数据超过3分钟未使用时，将自动释放缓存的数据。

开发者可以通过 `FastMemoryCacheConfig` 配置缓存的基本规则，如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        /**此处省略其他配置代码**/
        
        //配置默认的缓存架构
        engine.getConfig(FastMemoryCacheConfig.class)
                .setCacheTimeout(1000L*60*3)//设置超时时间 单位：毫秒
                .setCacheIdle(1000L*5);//设置心跳间隔时间 单位：毫秒
    }
     /**此处省略其他代码**/
}
```



## 使用Caffeine作为内存缓存
如果开发者需要使用[Caffeine](https://github.com/ben-manes/caffeine/)作为FastChar的内存缓存介质，只要在项目中引用相应的Caffeine客户端工具包并完成Redis配置即可。

以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/com.github.ben-manes.caffeine/caffeine -->
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
    <version>2.9.2</version>
    <scope>provided</scope>
</dependency>
```

### 配置Caffeine 
默认系统做了Caffeine基本的优化配置，如果开发者需要再次配置，可以获取 `FastCaffeineConfig` 类进行全局配置。

如下修改配置：
```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        /**此处省略其他配置代码**/
        
        //配置Caffeine
        engine.getConfig(FastCaffeineConfig.class)
                .getBuilder()
                .expireAfterWrite(10, TimeUnit.MINUTES)
                .maximumSize(10_000);
    }
     /**此处省略其他代码**/
}
```

