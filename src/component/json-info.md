
# Json组件

## 介绍
FastChar核心组件，FastChar默认集成了JSON工具包：gson、fastjson和fastjson2 

## 使用
开发者可以直接通过FastChar提供的静态方法 `FastChar.getJson()` 直接进行json数据转换。如下：

```java
FastChar.getJson().toJson("hello word!");
```

::: tip
FastChar会自动根据开发者导入的包选择json转换工具。
:::

## 使用Gson作为Json工具包
如果开发者需要使用[gson](https://github.com/google/gson)作为FastChar默认的json转换工具包，只要在项目中引用gson包即可，以maven项目为例，在pom.xml中加入如下引用：

```xml
    <!-- https://mvnrepository.com/artifact/com.google.code.gson/gson -->
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.9.0</version>
    </dependency>
```


## 使用Fastjson作为Json工具包
如果开发者需要使用[fastjson](https://github.com/alibaba/fastjson)作为FastChar默认的json转换工具包，只要在项目中引用gson包即可，以maven项目为例，在pom.xml中加入如下引用：
```xml
    <!-- https://mvnrepository.com/artifact/com.alibaba/fastjson -->
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>fastjson</artifactId>
        <version>2.0.10</version>
    </dependency>
```

## 使用Fastjson2作为Json工具包
如果开发者需要使用[fastjson2](https://alibaba.github.io/fastjson2/)作为FastChar默认的json转换工具包，只要在项目中引用gson包即可，以maven项目为例，在pom.xml中加入如下引用：
```xml
    <!-- https://mvnrepository.com/artifact/com.alibaba.fastjson2/fastjson2 -->
    <dependency>
        <groupId>com.alibaba.fastjson2</groupId>
        <artifactId>fastjson2</artifactId>
        <version>2.0.38</version>
    </dependency>
```


## 优先级
如果gson、fastjson和fastjson2的jar包都存在项目中

FastChar 选择的优先级为：`fastjson2 > fastjson > gson`

::: warning
gson、fastjson和fastjson2必须引用其中一个，否则转换json异常！
:::


## 自定义工具包
开发者可以实现 `IFastJson` 接口 自定义选择json工具包进行转换。然后将[实现的类注册到代理器](../guide/overrider-info.md#代理类的注册)中即可！
