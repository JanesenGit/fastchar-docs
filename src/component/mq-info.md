# 消息队列MQ组件
## 介绍
FastChar核心组件，FastChar默认集成了 `RabbitMQ` `Redisson` `RocketMQ` 消息队列功能，
开发可以根据自身情况选择消息队列使用的解决方案。


## 使用
开发者可以通过 `FastChar.getMQ()` 方法快速便捷的使用消息队列功能。如下：

```java

//开启监听，通道为Test
FastChar.getMQ().receive("Test", new IFastMessageQueue.OnReceive() {
    @Override
    public void onMessage(String channel, String message, IFastMessageQueue.AckHandler ackHandler) {
        System.out.println("收到消息：" + channel + "//" + message);
        
        //应答消息
        ackHandler.ack();
    }
});

//发送一个消息，通道为：Test
 FastChar.getMQ().send("Test", "你在干嘛111332222222333！");

```

## 使用RabbitMQ作为消息队列

如果开发者需要使用 [RabbitMQ](https://www.rabbitmq.com/tutorials) 消息队列，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：
```xml
<!-- https://mvnrepository.com/artifact/com.rabbitmq/amqp-client -->
<dependency>
    <groupId>com.rabbitmq</groupId>
    <artifactId>amqp-client</artifactId>
    <version>5.18.0</version>
</dependency>
```


### RabbitMQ配置
开发者需要手动配置RabbitMQ的服务器地址和账户密码等信息。如下：

- 配置类 `FastRabbitMQConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //配置RabbitMQ地址相关信息
        engine.getConfig(FastRabbitMQConfig.class)
                .setHost("localhost")
                .setUsername("test")
                .setPassword("test")
                .setVirtualHost("javaHost");
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```
::: info 说明
完成RabbitMQ配置后，即可[使用](mq-info.md#使用)消息队列功能。
:::




## 使用Redisson作为消息队列

如果开发者需要使用 [Redisson](http://www.redisson.org/) 消息队列，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：
```xml
<!-- https://mvnrepository.com/artifact/org.redisson/redisson -->
<dependency>
    <groupId>org.redisson</groupId>
    <artifactId>redisson</artifactId>
    <version>3.23.2</version>
</dependency>
```


### Redisson配置
由于 `Redisson` 是基于`Redis`实现消息队列，所以开发者需要手动配置Redis的服务器地址和账户密码等信息。如下：

- 配置类 `FastRedisConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //配置Redis地址相关信息
         engine.getConfig(FastRedisConfig.class)
                .addServer("localhost", 6379);
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```

更多配置，请查看[Redis配置](cache-info.md#redis配置)


::: info 说明
完成Redisson配置后，即可[使用](mq-info.md#使用)消息队列功能。
:::




## 使用RocketMQ作为消息队列

如果开发者需要使用 [RocketMQ](https://rocketmq.apache.org/) 消息队列，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：
```xml
<!-- https://mvnrepository.com/artifact/org.apache.rocketmq/rocketmq-client-java -->
<dependency>
    <groupId>org.apache.rocketmq</groupId>
    <artifactId>rocketmq-client-java</artifactId>
    <version>5.0.5</version>
</dependency>

```


### RocketMQ配置
开发者需要手动配置`RocketMQ`的服务器地址和账户密码等信息。如下：

- 配置类 `FastRocketMQConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //配置RocketMQ地址相关信息
        engine.getConfig(FastRocketMQConfig.class)
                .setAccessKey("V9f*****L7n")
                .setAccessSecret("A96t62***8pw0mb")
                .setEndpoints("rmq-cn-4xl3clh840c.cn-****.rmq.aliyuncs.com:8080")
                .setGroup("TestGroup")
                .setTopic("TestTopic");
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}
```
::: info 说明
完成RabbitMQ配置后，即可[使用](mq-info.md#使用)消息队列功能。
:::


## 优先级
如果RabbitMQ、Redisson和RocketMQ的相关jar包都存在项目中

FastChar 选择的优先级为：`RocketMQ > RabbitMQ > Redisson`

::: warning
RocketMQ、RabbitMQ和Redisson的相关jar包必须只能引用其中一个，避免操作cache异常！
:::


## 自定义实现消息队列
开发者可以实现 `IFastMessageQueue` 接口 自定义实现消息队列处理。然后将[实现的类注册到代理器](../guide/overrider-info.md#代理类的注册)中即可！








