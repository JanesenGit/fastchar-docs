# 分布式锁组件

## 介绍
FastChar核心组件，FastChar默认集成了 `redisson` 基于 `Redis` 的分布式锁功能，
开发可以根据自身情况选择消息订阅使用的解决方案。


## 使用
开发者可以通过 `FastChar.getLocker()` 方法快速便捷的使用消息订阅功能。如下：

```java

//获取一个名为UserAdd的锁对象
Lock lock=FastChar.getLocker().getLock("UserAdd");
/**此处省略lock的相关执行代码**/


//移除一个名为UserAdd的锁对象
FastChar.getLocker().removeLock("UserAdd");
```

## 选择消息订阅解决方案
由于 `jedis` `lettuce` `redisson` 都是基于 `Redis` 实现消息订阅功能，
所以开发者按照需求引入相应的客户端包和完成`Redis`配置即可。
[Redis配置说明](cache-info.md#redis配置)和
[Redisson配置说明](cache-info.md#使用redisson)
