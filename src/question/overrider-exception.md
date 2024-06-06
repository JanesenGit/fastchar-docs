# Could not initialize class ……

## 类似错误

```java
Exception in thread "main" com.fastchar.exception.FastOverrideException: Could not initialize class ITestInterface()
	at com.fastchar.core.FastOverrides.newInstance(FastOverrides.java:551)
	at com.fastchar.core.FastOverrides.newInstance(FastOverrides.java:536)
	at com.fastchar.core.FastOverrides.newInstance(FastOverrides.java:522)
```

## 原因
发生这个错误的原因是在使用代理器实例化某个对象时，在FastChar的代理器中未发现实现此接口或抽象类的子类，所以会抛出这个异常信息。

## 解决
开发者只要实现对象的接口或抽象类，然后[注册到代理器](../guide/overrider-info.md#代理类的注册)中即可。