# FastChar-Server-Jetty

## 介绍
FastChar官方提供的内嵌式服务器Jetty。

## 使用


### 引入工具包
开发者需要集成FastChar-Server-Jetty [![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar-server-jetty?label=maven-fastchar-server-jetty)](https://mvnrepository.com/artifact/com.fastchar/fastchar-server-jetty)
[Github](https://github.com/JanesenGit/FastChar-Server-Jetty) 的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-server-jetty</artifactId>
    <version>1.2.0</version>
</dependency>
```

### 使用插件
开发者可以直接在main方法中运行jetty启动项目，如下：

```java
public class FastServer {
    public static void main(String[] args) {
        FastServerJetty.getInstance().start(new FastJettyConfig()
                .setPort(8888)
                .setContextPath("/test_project"));
    }
}
```