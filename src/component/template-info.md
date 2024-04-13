# 模板引擎组件

## 介绍
FastChar核心组件，FastChar默认集成了 `Freemarker` `Thymeleaf` `Velocity` 模板引擎功能。

开发者可以通过 `FastChar.getTemplates()` 方法获取对象的模板引擎来实现渲染功能。

## Freemarker模板引擎
如果开发者需要使用 [Freemarker](https://freemarker.apache.org/docs/dgui.html) 模板引擎，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：
```xml
<!-- https://mvnrepository.com/artifact/org.freemarker/freemarker -->
<dependency>
    <groupId>org.freemarker</groupId>
    <artifactId>freemarker</artifactId>
    <version>2.3.31</version>
</dependency>
```

### 使用Freemarker 
开发者可以在任意代码处执行模板引擎渲染，以 `main` 方法为例，如下：
::: code-tabs

@tab Test.java
```java {16}
public static void main(String[] args) throws IOException {

    Map<String, Object> params = new HashMap<>();
    params.put("user", "FastChar");

    Map<String, Object> product = new HashMap<>();
    product.put("name", "测试项目");
    product.put("url", "https://www.fastchar.com");

    params.put("product", product);

    //读取模板的内容，此处以网页为例子
    String templateContent = FastFileUtils.readFileToString(new File("test.html"));

    String resultContent = FastChar.getTemplates()
            .getFreemarker()
            .run(params, templateContent);

    System.out.println(resultContent);
}
```

@tab test.html

```html
<html lang="zh">
<head>
  <title>测试模板!</title>
</head>
<body>
  <h1>欢迎 ${user}!</h1>
  <p>我们的项目地址:
  <a href="${product.url}">${product.name}</a>!
</body>
</html>
```


@tab 输出内容

```html
<html lang="zh">
<head>
  <title>测试模板!</title>
</head>
<body>
  <h1>欢迎 FastChar!</h1>
  <p>我们的项目地址:
  <a href="https://www.baidu.com">测试项目</a>!
</body>
</html>
```
:::

### 在FastAction中使用Freemarker模板引擎 
支持在FastAction直接响应模板引擎 [FastOutFreemarker](../guide/action-out.md#fastoutfreemarker)

## Thymeleaf模板引擎
如果开发者需要使用 [Thymeleaf](https://www.thymeleaf.org/) 模板引擎，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/org.thymeleaf/thymeleaf -->
<dependency>
    <groupId>org.thymeleaf</groupId>
    <artifactId>thymeleaf</artifactId>
    <version>3.0.15.RELEASE</version>
</dependency>
```

### 使用Thymeleaf
开发者可以在任意代码处执行模板引擎渲染，以 `main` 方法为例，如下：

::: code-tabs

@tab Test.java
```java {16}
public static void main(String[] args) throws IOException {

    Map<String, Object> params = new HashMap<>();
    params.put("user", "FastChar");

    Map<String, Object> product = new HashMap<>();
    product.put("name", "测试项目");
    product.put("url", "https://www.fastchar.com");

    params.put("product", product);

    //读取模板的内容，此处以网页为例子
    String templateContent = FastFileUtils.readFileToString(new File("test.html"));

    String resultContent = FastChar.getTemplates()
            .getThymeleaf()
            .run(params, templateContent);

    System.out.println(resultContent);
}
```

@tab test.html

```html
<html lang="zh" xmlns:th="http://www.thymeleaf.org">
<head>
    <title>测试模板!</title>
</head>
<body>
<h1>欢迎 <span th:text="${user}"></span>!</h1>
<p>我们的项目地址:
    <a th:href="${product.url}" th:text="${product.name}"></a>
</body>
</html>
```


@tab 输出内容

```html
<html lang="zh" xmlns:th="http://www.thymeleaf.org">
<head>
    <title>测试模板!</title>
</head>
<body>
<h1>欢迎 <span>FastChar</span>!</h1>
<p>我们的项目地址:
    <a href="https://www.fastchar.com">测试项目</a>
</body>
</html>
```
:::

### 在FastAction中使用Thymeleaf模板引擎
支持在FastAction直接响应模板引擎 [FastOutThymeleaf](../guide/action-out.md#fastoutthymeleaf)

## Velocity模板引擎
如果开发者需要使用 [Velocity](https://velocity.apache.org/engine/devel/user-guide.html) 模板引擎，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/org.apache.velocity/velocity-engine-core -->
<dependency>
    <groupId>org.apache.velocity</groupId>
    <artifactId>velocity-engine-core</artifactId>
    <version>2.3</version>
</dependency>
```

### 使用Velocity
开发者可以在任意代码处执行模板引擎渲染，以 `main` 方法为例，如下：

::: code-tabs

@tab Test.java
```java {16}
public static void main(String[] args) throws IOException {

    Map<String, Object> params = new HashMap<>();
    params.put("user", "FastChar");

    Map<String, Object> product = new HashMap<>();
    product.put("name", "测试项目");
    product.put("url", "https://www.fastchar.com");

    params.put("product", product);

    //读取模板的内容，此处以网页为例子
    String templateContent = FastFileUtils.readFileToString(new File("test.html"));

    String resultContent = FastChar.getTemplates()
            .getVelocity()
            .run(params, templateContent);

    System.out.println(resultContent);
}
```

@tab test.html

```html
<html lang="zh">
<head>
    <title>测试模板!</title>
</head>
<body>
<h1>欢迎 $!{user}</h1>
<p>我们的项目地址:
    <a href="$!{product.url}">$!{product.name}</a>
</body>
</html>
```

@tab 输出内容

```html
<html lang="zh">
<head>
    <title>测试模板!</title>
</head>
<body>
<h1>欢迎 FastChar</h1>
<p>我们的项目地址:
    <a href="https://www.fastchar.com">测试项目</a>
</body>
</html>
```
:::

### 在FastAction中使用Velocity模板引擎
支持在FastAction直接响应模板引擎 [FastOutVelocity](../guide/action-out.md#fastoutvelocity)


## 全局变量配置
支持开发者配置全局变量提供模板引擎使用，如下：

::: tip
全局变量的配置对于所有模板引擎通用。
:::

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //配置全局模板引擎的变量
        engine.getTemplates()
                .put("system", "测试全局")
                .put("date", new Date());
                
        /**此处省略其他配置代码**/
    }
    
     /**此处省略其他配置代码**/
}

```