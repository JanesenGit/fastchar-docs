# FastChar-Server-Tomcat

## 介绍
FastChar官方提供的内嵌式服务器Tomcat。

## 使用


### 引入工具包
开发者需要集成FastChar-Server-Tomcat [![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar-server-tomcat?label=maven-fastchar-server-tomcat)](https://mvnrepository.com/artifact/com.fastchar/fastchar-server-tomcat)
[Github](https://github.com/JanesenGit/FastChar-Server-Tomcat) 的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-server-tomcat</artifactId>
    <version>1.2.0</version>
</dependency>
```

### 使用插件
开发者可以直接在main方法中运行tomcat启动项目，如下：

```java
public class FastServer {
    public static void main(String[] args) {
        FastServerTomcat.getInstance().start(new FastTomcatConfig()
                .setPort(8888)
                .setDisplayName("test_project")
                .setContextPath("/test_project"));
    }
}
```