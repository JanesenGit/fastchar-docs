# 持久化Cache缓存组件

## 介绍
FastChar核心组件，FastChar默认集成了 `Redis` `EhCache2` `EhCache3` 缓存，开发可以根据自身情况选择使用不同的模板引擎。

缓存的数据将持久化的磁盘中。

## 使用
开发者可以调用静态方法 `FastChar.getCache()` 快速的进行缓存读写操作。如下：

```java
//新增或修改缓存
FastChar.getCache().set("User", "id", "1");

//获取指定tag标签的key缓存值
int id = FastChar.getCache().get("User", "id");

//删除指定tag标签的缓存
FastChar.getCache().delete("User");

//删除指定tag标签下的指定key的缓存
FastChar.getCache().delete("User","id");

//判断指定tag标签的key是否存在
boolean exists = FastChar.getCache().exists("User", "id");
```

## 使用Redis作为缓存

如果开发者需要使用Redis作为FastChar的缓存介质，只要在项目中引用相应的Redis客户端工具包并完成Redis配置即可。

FastChar默认支持 `jedis` `lettuce` `redisson` 客户端工具连接操作Redis缓存。

### Redis配置
开发者需要手动配置Redis的服务器地址和账户密码等信息。如下：

#### 配置单个Redis

- 配置类 `FastRedisConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
         FastChar.getConfig(FastRedisConfig.class)
            .addServer("localhost", 6379);//配置了本地无账户密码的redis服务器
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```
#### 配置主从模式的多个Redis
- 配置类 `FastRedisConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
         FastChar.getConfig(FastRedisConfig.class)
                .addServer("localhost", 6379)//配置了本地无账户密码的redis服务器
                .addServer("192.168.0.100", 6379)
                .addServer("192.168.0.101", 6379);
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```
::: warning 必读
配置【主从】模式的多个Redis的服务器，最终以哪台作为【主】服务器，由于各个客户端工具包的配置差异，请根据具体使用的客户端工具进行配置。
:::

#### 配置集群模式的多个Redis
- 配置类 `FastRedisConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
         FastChar.getConfig(FastRedisConfig.class)
                .setCluster(true)//开启集群模式
                .addServer("localhost", 6379)//配置了本地无账户密码的redis服务器
                .addServer("192.168.0.100", 6379)
                .addServer("192.168.0.101", 6379);
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```

::: info 说明
完成Redis配置后，即可[使用](cache-info.md#使用)数据缓存功能。
:::



### 使用Jedis
如果开发者需要使用[Jedis](https://mvnrepository.com/artifact/redis.clients/jedis)作为Redis客户端工具包，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/redis.clients/jedis -->
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>4.4.3</version>
</dependency>
```
#### 配置Jedis
- 配置类 `FastJedisConfig`

当Redis服务器模式采用【主从】模式后，需要指定【主】服务器，如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        FastChar.getConfig(FastRedisConfig.class)
                .addServer("localhost", 6379)//配置了本地无账户密码的redis服务器
                .addServer("192.168.0.100", 6379)
                .addServer("192.168.0.101", 6379)
                .jedisConfig()//获取jedis相关配置类
                .setMasterName("主redis的服务器名");//设置主服务器
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```

::: info 说明
完成Jedis配置后，即可[使用](cache-info.md#使用)数据缓存功能。
:::



### 使用Lettuce
如果开发者需要使用[Lettuce](https://lettuce.io/)作为Redis客户端工具包，只要在项目中引用相应的客户端包即可。

以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/io.lettuce/lettuce-core -->
<dependency>
    <groupId>io.lettuce</groupId>
    <artifactId>lettuce-core</artifactId>
    <version>6.2.5.RELEASE</version>
</dependency>
```

::: info 内置说明
由于lettuce采用了netty框架，所以支持缓存数据的异步操作，所以FastChar在执行缓存delete和set时使用了异步执行。
:::

#### 配置Lettuce
- 配置类 `FastLettuceConfig`

当Redis服务器模式采用【主从】模式后，需要指定【主】服务器，如下：
```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        FastChar.getConfig(FastRedisConfig.class)
                .addServer("localhost", 6379)//配置了本地无账户密码的redis服务器
                .addServer("192.168.0.100", 6379)
                .addServer("192.168.0.101", 6379)
                .lettuceConfig()//获取lettuce相关配置
                .setMasterId("主Redis的ID");
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```

::: info 说明
完成Lettuce配置后，即可[使用](cache-info.md#使用)数据缓存功能。
:::




### 使用Redisson
如果开发者需要使用[Redisson](https://redisson.org/)作为Redis客户端工具包，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/org.redisson/redisson -->
<dependency>
    <groupId>org.redisson</groupId>
    <artifactId>redisson</artifactId>
    <version>3.23.2</version>
</dependency>
```
#### 配置Redisson
- 配置类 `FastRedissonConfig`

当Redis服务器模式采用【主从】模式后，需要指定【主】服务器，如下：
```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        FastChar.getConfig(FastRedisConfig.class)
                .addServer("localhost", 6379)//配置了本地无账户密码的redis服务器
                .addServer("192.168.0.100", 6379)
                .addServer("192.168.0.101", 6379)
                .redissonConfig()//Redisson相关配置
                .setMasterServer(new FastRedisHostAndPort("localhost", 6379));//指定【主】Redis的地址和端口
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```

::: info 说明
完成Redisson配置后，即可[使用](cache-info.md#使用)数据缓存功能。
:::





### 优先级
如果jedis、lettuce和redisson的jar包都存在项目中

FastChar 选择的优先级为：`redisson > lettuce > jedis`

::: warning
jedis、lettuce和redisson必须只能引用其中一个，否则操作redis异常！
:::


## 使用EhCache2作为缓存
如果开发者需要使用[EhCache2](https://www.ehcache.org/)作为FastChar的缓存介质，只要在项目中引用相应的EhCache2工具包并完成EhCache2配置即可。

以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/net.sf.ehcache/ehcache -->
<dependency>
    <groupId>net.sf.ehcache</groupId>
    <artifactId>ehcache</artifactId>
    <version>2.10.9.2</version>
</dependency>

```

### 配置EhCache2
- 配置类 `FastEhCache2Config` 

::: code-tabs

@tab 配置示例

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //配置方式一
        FastChar.getConfig(FastEhCache2Config.class)
                //代码显示配置ehcache
                .setConfiguration(new Configuration());

        //配置方式二
        FastChar.getConfig(FastEhCache2Config.class)
                //xml配置文件配置，位于 类的根目录 下
                .setConfigurationFileName("ehcache2.xml");

        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```

@tab ehcache2.xml的内容

```xml

<?xml version="1.0" encoding="UTF-8"?>
<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../config/ehcache.xsd" name="consumerCache"
		 maxBytesLocalDisk="1G">
	<diskStore path="java.io.tmpdir"/>
    <!--
       name:缓存名称。
       maxElementsInMemory：缓存最大个数。
       eternal:对象是否永久有效，一但设置了，timeout将不起作用。
       timeToIdleSeconds：设置对象在失效前的允许闲置时间（单位：秒）。仅当eternal=false对象不是永久有效时使用，可选属性，默认值是0，也就是可闲置时间无穷大。
       timeToLiveSeconds：设置对象在失效前允许存活时间（单位：秒）。最大时间介于创建时间和失效时间之间。仅当eternal=false对象不是永久有效时使用，默认是0.，也就是对象存活时间无穷大。
       overflowToDisk：当内存中对象数量达到maxElementsInMemory时，Ehcache将会对象写到磁盘中。
       diskSpoolBufferSizeMB：这个参数设置DiskStore（磁盘缓存）的缓存区大小。默认是30MB。每个Cache都应该有自己的一个缓冲区。
       maxElementsOnDisk：硬盘最大缓存个数。
       diskPersistent：是否缓存虚拟机重启期数据 Whether the disk store persists between restarts of the Virtual Machine. The default value is false.
       diskExpiryThreadIntervalSeconds：磁盘失效线程运行时间间隔，默认是120秒。
       memoryStoreEvictionPolicy：当达到maxElementsInMemory限制时，Ehcache将会根据指定的策略去清理内存。默认策略是LRU（最近最少使用）。你可以设置为FIFO（先进先出）或是LFU（较少使用）。
       clearOnFlush：内存数量最大时是否清除。
    -->
	<defaultCache
			maxElementsInMemory="10000"
			maxElementsOnDisk="0"
			eternal="true"
			overflowToDisk="true"
			diskPersistent="false"
			timeToIdleSeconds="0"
			timeToLiveSeconds="0"
			diskSpoolBufferSizeMB="50"
			diskExpiryThreadIntervalSeconds="120"
			memoryStoreEvictionPolicy="LFU"
	/>
</ehcache>
```
:::



## 使用EhCache3作为缓存
如果开发者需要使用[EhCache3](https://www.ehcache.org/)作为FastChar的缓存介质，只要在项目中引用相应的EhCache3工具包并完成EhCache3配置即可。

以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/net.sf.ehcache/ehcache -->
<dependency>
    <groupId>net.sf.ehcache</groupId>
    <artifactId>ehcache</artifactId>
    <version>3.10.0</version>
</dependency>

```

### 配置EhCache3
- 配置类 `FastEhCache3Config`

::: code-tabs

@tab 配置示例

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //配置方式一
        FastChar.getConfig(FastEhCache3Config.class)
                //代码显示配置ehcache
                .setConfiguration(new Configuration());

        //配置方式二
        FastChar.getConfig(FastEhCache3Config.class)
                //xml配置文件配置，位于 类的根目录 下
                .setConfigurationFileName("ehcache3.xml");

        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```

@tab ehcache3.xml的内容

```xml

<?xml version="1.0" encoding="UTF-8"?>
<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../config/ehcache.xsd" name="consumerCache"
		 maxBytesLocalDisk="1G">
	<diskStore path="java.io.tmpdir"/>
    <!--
       name:缓存名称。
       maxElementsInMemory：缓存最大个数。
       eternal:对象是否永久有效，一但设置了，timeout将不起作用。
       timeToIdleSeconds：设置对象在失效前的允许闲置时间（单位：秒）。仅当eternal=false对象不是永久有效时使用，可选属性，默认值是0，也就是可闲置时间无穷大。
       timeToLiveSeconds：设置对象在失效前允许存活时间（单位：秒）。最大时间介于创建时间和失效时间之间。仅当eternal=false对象不是永久有效时使用，默认是0.，也就是对象存活时间无穷大。
       overflowToDisk：当内存中对象数量达到maxElementsInMemory时，Ehcache将会对象写到磁盘中。
       diskSpoolBufferSizeMB：这个参数设置DiskStore（磁盘缓存）的缓存区大小。默认是30MB。每个Cache都应该有自己的一个缓冲区。
       maxElementsOnDisk：硬盘最大缓存个数。
       diskPersistent：是否缓存虚拟机重启期数据 Whether the disk store persists between restarts of the Virtual Machine. The default value is false.
       diskExpiryThreadIntervalSeconds：磁盘失效线程运行时间间隔，默认是120秒。
       memoryStoreEvictionPolicy：当达到maxElementsInMemory限制时，Ehcache将会根据指定的策略去清理内存。默认策略是LRU（最近最少使用）。你可以设置为FIFO（先进先出）或是LFU（较少使用）。
       clearOnFlush：内存数量最大时是否清除。
    -->
	<defaultCache
			maxElementsInMemory="10000"
			maxElementsOnDisk="0"
			eternal="true"
			overflowToDisk="true"
			diskPersistent="false"
			timeToIdleSeconds="0"
			timeToLiveSeconds="0"
			diskSpoolBufferSizeMB="50"
			diskExpiryThreadIntervalSeconds="120"
			memoryStoreEvictionPolicy="LFU"
	/>
</ehcache>
```
:::


## 优先级
如果redis、ehcache2和ehcache3的相关jar包都存在项目中

FastChar 选择的优先级为：`redis > ehcache3 > ehcache2`

::: warning
redis、ehcache2和ehcache3的相关jar包必须只能引用其中一个，否则操作cache异常！
:::


## 自定义实现缓存
开发者可以实现 `IFastCache` 接口 自定义实现缓存数据处理。然后将[实现的类注册到代理器](../guide/overrider-info.md#代理类的注册)中即可！