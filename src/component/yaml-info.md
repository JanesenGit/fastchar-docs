# Yaml组件
## 介绍
FastChar核心组件，FastChar默认集成了 yaml 工具包，开发者可以非常快速便捷的操作 `.yaml` 文件。

## 使用

开发者需要集成yaml的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/org.yaml/snakeyaml -->
<dependency>
    <groupId>org.yaml</groupId>
    <artifactId>snakeyaml</artifactId>
    <version>2.1</version>
</dependency>
```

## 获取默认的yaml文件

在FastChar中，默认读取位于 `classes` 目录下的 `config.yml` 文件，
以maven项目为例，目录结构如下：

``` bash
FastCharTest/
└── main/
    ├── java/
    └── resources/
        └── config.yml # <- 在这里
```

读取示例如下：

::: tabs
@tab config.yml

``` yaml
# This is a YML file示例注释
name: My Application名称
description: A simple Java Web application描述
version: 1.0版本
database: #定义嵌套属性
  name: mydb
  host: localhost
  port: 3306
```

@tab java

```java
public static void main(String[] args) {
    String db_name=FastChar.getYaml().getString("database.name");
}
```

:::

## 获取指定名称的yaml文件

允许开发者读取位于 `classes` 目录下的指定文件名的 `.yaml` 文件，
以maven项目为例，目录结构如下：

``` bash
FastCharTest/
└── main/
    ├── java/
    └── resources/
        └── redis_config.yaml # <- 在这里
```

读取示例如下：
::: tabs
@tab redis_config.yaml

``` yaml
# This is a YML file示例注释
name: My Application名称
description: A simple Java Web application描述
version: 1.0版本
database: #定义嵌套属性
  name: mydb
  host: localhost
  port: 3306
```

@tab java

```java
public static void main(String[] args) {
     String db_name=FastChar.getYaml("redis_config").getString("database.name");
}
```

:::

## 获取指定地址的yml文件

读取示例如下：

```java
public static void main(String[] args) {
     String db_name=FastChar.getYaml(new File("yml文件绝对地址")).getString("database.name");
}
```

## 自动更新到内存中

FastChar默认只加载一次yaml文件存在内存中，当修改yaml本地文件时，并不会自动更新到内存中，
如果开发者需要自动加载更新，按照如下配置即可：

```java
public static void main(String[] args) {
  String db_name = FastChar
                .getYaml(new File("yml文件绝对地址"))
                .setAutoReload(true)//开启自动更新
                .getString("database.name");
}
```

## 保存到本地yaml文件

开发者可以将内存存修改的yaml值，更新保存到本地的yaml文件，如下：

```java
public static void main(String[] args) {
     FastChar
        .getProperties(new File("yml文件绝对地址"))
        .put("new_key","值")//新增一个键值对
        .save();//保存到本地源文件中
}
```
