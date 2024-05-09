# Properties组件
## 介绍
FastChar核心组件，FastChar默认集成了 properties 工具包，开发者可以非常快速便捷的操作 `.properties` 文件。

## 获取默认的properties文件
在FastChar中，默认读取位于 `classes` 目录下的 `config.properties` 文件，
以maven项目为例，目录结构如下：

``` bash
FastCharTest/
└── main/
    ├── java/
    └── resources/
        └── config.properties # <- 在这里
```

读取示例如下：

::: tabs
@tab config.properties

``` properties
db_host = localhost

```

@tab java

```java
public static void main(String[] args) {
    String db_host=FastChar.getProperties().getString("db_host");
}
```

:::

## 获取指定名称的properties文件
允许开发者读取位于 `classes` 目录下的指定文件名的 `.properties` 文件，
以maven项目为例，目录结构如下：

``` bash
FastCharTest/
└── main/
    ├── java/
    └── resources/
        └── redis_config.properties # <- 在这里
```

读取示例如下：
::: tabs
@tab redis_config.properties

``` properties
db_host = localhost
```

@tab java

```java
public static void main(String[] args) {
     //读取指定 redis_config.properties 文件
     String db_host=FastChar.getProperties("redis_config").getString("db_host");
}
```

:::



## 获取指定地址的properties文件

读取示例如下：
```java
public static void main(String[] args) {
     //读取指定 redis_config.properties 文件
     String db_host=FastChar.getProperties(new File("properties文件绝对地址")).getString("db_host");
}
```

## 自动更新到内存中
FastChar默认只加载一次properties文件存在内存中，当修改properties本地文件时，并不会自动更新到内存中，
如果开发者需要自动加载更新，按照如下配置即可：
```java
public static void main(String[] args) {
        String db_host=FastChar
                    .getProperties(new File("properties文件绝对地址"))
                    .setAutoReload(true)//开启自动更新
                    .getString("db_host");
}
```

## 保存到本地properties文件
开发者可以将内存存修改的properties值，更新保存到本地的properties文件，如下：

```java
public static void main(String[] args) {
        FastChar.getProperties(new File("properties文件绝对地址"))
            .put("new_key","值")//新增一个键值对
            .save();//保存到本地源文件中
}
```
