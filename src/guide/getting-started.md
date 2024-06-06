# 快速上手

## 依赖环境
FastChar 支持Java1.8以上版本（Java8、Java9、Java11、Java20或以上），已灵活兼容Servlet2.0（javax.servlet.\*）、Servlet3.0（jakarta.servlet.\*）

## 运行容器
[tomcat](http://tomcat.apache.org/)、[jetty](https://eclipse.dev/jetty/)、[undertow](https://undertow.io/)

## Maven搭建项目
Maven搭建项目，按照以下三步即可极速搭建FastChar项目，推荐使用Maven搭建项目！省心省事省力！

::: warning
以下的代码演示所使用的FastChar版本必须在2.0.0以上。
:::
- **步骤 1**: 在pom.xml中加入fastchar的[![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar?label=maven-fastchar)](https://mvnrepository.com/artifact/com.fastchar/fastchar) [Github](https://github.com/JanesenGit/FastChar) 引用，如下代码：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar</artifactId>
    <version>2.0.2</version>
</dependency>
```

- **步骤 2**: 在任意的`package`中创建TestAction类并继承FastAction类，如下代码：
```java
public class TestAction extends FastAction {
    /**
     * 获得路由地址
     * Get routing address
     * @return
     */
    @Override
    protected String getRoute() {
        return "/test";
    }
 
    public void index() {
        responseText("搭建成功！");
    }
}
```

- **步骤 3**: 使用Tomcat服务运行项目，访问项目地址即可，例如上述案例中的项目名为`FastCharTest`，那么访问的地址：http://localhost:8080/FastCharTest/test/
## 手动搭建项目

::: warning
以下的代码演示所使用的FastChar版本必须在2.0.0以上。
:::

- **步骤 1**: 下载FastChar的[![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar?label=maven-fastchar)](https://mvnrepository.com/artifact/com.fastchar/fastchar) ，并引用到Web项目中。

- **步骤 2**: 在任意的`package`中创建TestAction类并继承FastAction类，如下代码：
```java
public class TestAction extends FastAction {
    /**
     * 获得路由地址
     * Get routing address
     * @return
     */
    @Override
    protected String getRoute() {
        return "/test";
    }
 
    public void index() {
        responseText("搭建成功！");
    }
}
```

- **步骤 3**: 使用Tomcat服务运行项目，访问项目地址即可，例如上述案例中的项目名为`FastCharTest`，那么访问的地址：http://localhost:8080/FastCharTest/test/