# 消息订阅PubSub组件
## 介绍
FastChar核心组件，FastChar默认集成了 `jedis` `lettuce` `redisson` 基于 `Redis` 的消息订阅功能，
开发可以根据自身情况选择消息订阅使用的解决方案。


## 使用
开发者可以通过 `FastChar.getPubSub()` 方法快速便捷的使用消息订阅功能。如下：

```java

//开启订阅，通道为Test
FastChar.getPubSub().subscribe("Test", new IFastMessagePubSub.OnSubscribe() {
    @Override
    public void onMessage(String channel, String message) {
        System.out.println("收到消息：" + message);
    }
});


//发送一个消息，通道为：Test
FastChar.getPubSub().publish("Test", "你在干嘛111！");
```

## 选择消息订阅解决方案
由于 `jedis` `lettuce` `redisson` 都是基于 `Redis` 实现消息订阅功能，所以开发者按照需求引入相应的客户端包和完成`Redis`配置即可。
[查看Redis配置说明](cache-info.md#redis配置)
