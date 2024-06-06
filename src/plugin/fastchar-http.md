# FastChar-Http

## 介绍
网络请求插件，主要集成了[okhttp](https://square.github.io/okhttp/)和[httpclient](http://hc.apache.org/httpcomponents-client-ga)工具包，开发者只要关注http请求即可，FastChar-Http将根据项目中引用的jar包自动切换使用okhttp或httpclient。

## 使用

### 引入工具包
开发者需要集成FastChar-Http [![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar-http?label=maven-fastchar-http)](https://mvnrepository.com/artifact/com.fastchar/fastchar-http)
[Github](https://github.com/JanesenGit/FastChar-Http)的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-http</artifactId>
    <version>1.1.0</version>
</dependency>
```

### 使用插件
开发者只要调用FastChar-Http提供的网络请求工具即可，如下：

::: tabs


@tab get请求

```java
public static void main(String[] args) {

    FastHttpResponse httpResponse = FastHttp
                                    .newRequest("http://www.baidu.com")
                                    .get();

    System.out.println(httpResponse.getContent());

}
```

@tab post请求

```java
public static void main(String[] args) {

    FastHttpResponse httpResponse = FastHttp
            .newRequest("http://localhost:8080/TestFastChar/user/login")
            .addParam("user","fastchar")
            .addParam("pwd","123456")
            .post();

    System.out.println(httpResponse.getContent());

}


@tab post请求携带附件

```java
public static void main(String[] args) {

    FastHttpResponse httpResponse = FastHttp
            .newRequest("http://localhost:8080/TestFastChar/user/modify")
            .addParam("userId",1)
            .addParam("userHeadImg",new File("图片的绝对路径"))
            .post();

    System.out.println(httpResponse.getContent());

}

```


@tab post请求提交json字符串

```java
public static void main(String[] args) {

    FastHttpResponse httpResponse = FastHttp
            .newRequest("http://localhost:8080/TestFastChar/user/modify")
            .addParam("userId",1)
            .addParam("userNickName","fastchar")
            .setRequestType(FastHttpRequestType.JSON_MAP)
            .post();

    System.out.println(httpResponse.getContent());

}

```



:::

## 接入OKHttp

开发者使用OKHttp作为http请求的引擎，需要引入OKHttp包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/com.squareup.okhttp3/okhttp -->
<dependency>
    <groupId>com.squareup.okhttp3</groupId>
    <artifactId>okhttp</artifactId>
    <version>4.9.1</version>
</dependency>
```

### 配置okhttp
当开发者引用了okhttp的jar包后，FastChar-Http插件已经做了默认的优化配置，所以开发者开箱即用。

开发者也可以自己配置，如下：
- 配置类 `FastHttpConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //http请求配置
        FastChar.getConfig(FastHttpConfig.class)
                .getOkHttpConfig()//获取okhttp的配置
                .clientBuilder()
                .callTimeout(Duration.ofSeconds(30));//配置请求的超时的时间
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}

```




## 接入HttpClient

开发者使用HttpClient作为http请求的引擎，需要引入HttpClient包。以maven项目为例，在pom.xml中加入如下引用：

```xml
 <!-- https://mvnrepository.com/artifact/org.apache.httpcomponents/httpmime -->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpmime</artifactId>
    <version>4.5.13</version>
</dependency>
```

### 配置HttpClient
当开发者引用了HttpClient的jar包后，FastChar-Http插件已经做了默认的优化配置，所以开发者开箱即用。

开发者也可以自己配置，如下：
- 配置类 `FastHttpConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //http请求配置
        FastChar.getConfig(FastHttpConfig.class)
                .getHttpClientConfig()//获取httpclient配置
                .clientBuilder()
                .setDefaultRequestConfig(RequestConfig.custom()
                        .setConnectTimeout(1000 * 60 * 3)//配置超时时间
                        .build());

        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}

```

## 优先级
如果okhttp和httpclient的相关jar包都存在项目中

::: tabs

@tab FastChar-Http自动选择

FastChar-Http 选择的优先级为：`okhttp > httpclient `

@tab 开发者手动指定

开发者也可以手动指定使用哪个http引擎，如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //http请求配置
        FastChar.getConfig(FastHttpConfig.class)
                .setHttpType(FastHttpToolType.HTTPCLIENT);//手动指定了使用httpclient

        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}

```

:::