# 本地测试
FastChar 提供了 `tomcat` `jetty` `undertow` 三个嵌入式服务器工具包，开发者可以自由选择使用本地快速测试项目。
## 使用开发环境启动测试
由于FastChar只是JavaWeb项目的Web框架，所以开发者完全可以使用对应的开发环境进行部署测试。

只要按照最基本（Servlet）的JavaWeb项目部署测试即可。

支持 Eclipse 、MyEclipse 和 IntelliJ IDEA ，开发环境使用的服务器容器建议使用Tomcat 7.0以上


## 使用嵌入式Tomcat
开发者如果需要使用嵌入式tomcat启动项目，按照如下步骤：

- 步骤一：
  需要引用FastChar提供的工具包，以maven项目为例，如下：
```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-server-tomcat</artifactId>
    <version>[1.0,)</version>
</dependency>
```

- 步骤二：在main方法中启动，如下：
```java
public class FastServer {
    public static void main(String[] args) {

        FastServerTomcat.getInstance().start(new FastTomcatConfig()
                .setPort(8888)
                .setContextPath("/test_project"));
    }
}
```
然后在浏览器中访问：http://localhost:8888/test_project 即可。


## 使用嵌入式Jetty

开发者如果需要使用嵌入式tomcat启动项目，按照如下步骤：

- 步骤一：
  需要引用FastChar提供的工具包，以maven项目为例，如下：
```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-server-jetty</artifactId>
    <version>[1.0,)</version>
</dependency>
```

- 步骤二：在main方法中启动，如下：
```java
public class FastServer {
    public static void main(String[] args) {
        FastServerJetty.getInstance().start(new FastJettyConfig()
                .setPort(8888)
                .setContextPath("/test_project"));
    }
}
```
然后在浏览器中访问：http://localhost:8888/test_project 即可。



## 使用嵌入式Undertow

开发者如果需要使用嵌入式undertow启动项目，按照如下步骤：

- 步骤一：
  需要引用FastChar提供的工具包，以maven项目为例，如下：
```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-server-undertow</artifactId>
    <version>[1.0,)</version>
</dependency>
```

- 步骤二：在main方法中启动，如下：
```java
public class FastServer {
    public static void main(String[] args) {
        FastServerUndertow.getInstance().start(new FastUndertowConfig()
                .setPort(8888)
                .setContextPath("/test_project"));
    }
}
```
然后在浏览器中访问：http://localhost:8888/test_project 即可。



## 嵌入式启动项目说明【必读】
1、在使用嵌入式启动项目时，必须要设置 `contextPath` 值，在本地测试使用时，由于开发环境的编译生成目录不同，所以在设置 `contextPath` 路径时，
请自行检查本地开发环境的编译目录是否与 `contextPath` 值一致。
