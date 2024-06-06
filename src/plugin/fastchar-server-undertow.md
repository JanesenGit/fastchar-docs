# FastChar-Server-Undertow

## 介绍
FastChar官方提供的内嵌式服务器Undertow。

## 使用


### 引入工具包
开发者需要集成FastChar-Server-Undertow [![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar-server-undertow?label=maven-fastchar-server-undertow)](https://mvnrepository.com/artifact/com.fastchar/fastchar-server-undertow)
[Github](https://github.com/JanesenGit/FastChar-Server-Undertow) 的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-server-undertow</artifactId>
    <version>1.3.0</version>
</dependency>
```


::: warning
`fastchar-server-undertow` 版本 `1.3.0` 系列要求 `java11` 以上，使用的是 `jakarta.servlet.*`

`fastchar-server-undertow` 版本 `1.2.0` 系列要求 `java1.8` 以上，使用的是 `javax.servlet.*`
:::


### 使用插件
开发者可以直接在main方法中运行undertow启动项目，如下：

```java
public class FastServer {
    public static void main(String[] args) {
        FastServerUndertow.getInstance().start(new FastUndertowConfig()
                .setPort(8888)
                .setDeploymentName("test_project")
                .setContextPath("/test_project"));
    }
}
```