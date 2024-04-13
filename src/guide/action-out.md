# 响应请求
FastChar 用来响应Request请求的类：FastOut

## 介绍
FastOut是FastChar核心类之一，用作响应Response输出

## 显式调用

通过FastAction提供的response系列方法，开发者可以显式调用response相关方法响应请求，如下：

```java
public class TestAction extends FastAction {
    /**省略其他代码**/
    
    public void login() {
        responseText("登录成功！");
    }
}
```

请求访问到 `login` 方法后，方法内部响应了 `content-type` 为 `text/plain` 的文本内容。
::: danger
当方法内部显式的调用了response相关方法后，程序将立即中断方法执行。如下：

```java{2}
    public void login() {
        responseText("登录成功！");
        //以下代码程序不会执行
        String name=getParam("name");
    }
```

或者内嵌调用方法，如下

```java{2}
    public void userInfo() {
        login();
        //以下代码程序不会执行
        String userId=getParam("userId");
    }
```

:::

## 方法返回内容

进入FastAction方法后，开发者可以通过方法返回值用做响应请求。如下：

```java
public class TestAction extends FastAction {
    /**省略其他代码**/
    
    @AFastResponse(FastOut.Type.TEXT)
    public String login() {
        return "登录成功！";
    }
}
```
我们可以发现方法 `login` 多了一个注解 `AFastResponse` ，此注解的作用是告诉系统方法返回的内容使用 `content-type`
为 `text/plain`
来响应内容。

也就是类型为`FastOut.Type.TEXT` 对应FastOut类为 `FastOutText`


## 方法返回类型
进入FastAction方法后，开发者可以通过方法返回响应的类型用做响应请求。如下：

```java
public class TestAction extends FastAction {
    /**省略其他代码**/
    
    public Object login() {
        return new FastOutText().setData("登录成功！");
    }
}
```



## 默认提供的响应类型
以下默认响应类型，在包 `com.fastchar.out` 中

### FastOutText
- 响应文本格式（text/plain）
- 注解类型：FastOut.Type.TEXT
- 显式调用示例： `responseText("文本");`

### FastOutHtml
- 响应网页格式（text/html）
- 注解类型：FastOut.Type.HTML
- 显式调用示例： `responseHtml("<h1>网页内容</h1>");`

### FastOutJson
- 响应Json格式（application/json）
- 注解类型：FastOut.Type.JSON
- 显式调用示例： `responseJson("json数据");`
- 需要引用json工具包，[点击查看](component-info.md#json组件)


### FastOutFile
- 响应File文件（application/octet-stream）
- 注解类型：FastOut.Type.FILE
- 显式调用示例： `responseFile(new File("文件路径"));`

### FastOutJsp
- 响应Jsp
- 注解类型：FastOut.Type.JSP
- 显式调用示例： `responseJsp("jsp路径");`

### FastOutXml
- 响应Xml格式（text/xml）
- 注解类型：FastOut.Type.XML
- 显式调用示例： `responseXml("<root>xml内容</root>");`
### FastOutFreemarker
- 响应[Freemarker](http://freemarker.foofun.cn/index.html)模板
- 注解类型：FastOut.Type.FREEMARKER
- 显式调用示例： `responseFreemarker("模板路径");`
- 由内置模板组件功能提供支持 [Freemarker模板引擎](../component/template-info.md#freemarker模板引擎)
### FastOutVelocity
- 响应[Velocity](https://velocity.apache.org/engine/devel/user-guide.html#about-this-guide)模板
- 注解类型：FastOut.Type.VELOCITY
- 显式调用示例： `responseVelocity("模板路径");`
- 由内置模板组件功能提供支持 [Velocity模板引擎](../component/template-info.md#velocity模板引擎)
### FastOutThymeleaf
- 响应[Thymeleaf](https://www.thymeleaf.org/index.html)模板
- 注解类型：FastOut.Type.THYMELEAF
- 显式调用示例： `responseThymeleaf("模板路径");`
- 由内置模板组件功能提供支持 [Thymeleaf模板引擎](../component/template-info.md#thymeleaf模板引擎)
### FastOutCaptcha
- 响应验证码图片（image/jpeg）
- 注解类型：无
- 显式调用示例： `responseCaptcha();`
### FastOutParamError
- 响应参数错误。IFastValidator验证器使用此类型响应
- 注解类型：无
- 显式调用示例： `responseParamError("参数名", "错误信息");`
### FastOutStatus
- 响应状态，例如404、500等
- 注解类型：FastOut.Type.STATUS
- 显式调用示例： `responseStatus(404);`
### FastOutForward
- 转发请求
- 注解类型：`FastOut.Type.FORWARD`
- 显式调用示例： `	forward("路径");`
### FastOutRedirect
- 重定向请求
- 注解类型：`FastOut.Type.REDIRECT`
- 显式调用示例： `redirect("路径");`


## 自定义响应类型
如果FastChar默认的响应类型无法满足业务需求，也可以自定义响应类型，如下自定义的FastOut：

```java
public class TestOut extends FastOut<TestOut> {
    /**
     * 响应数据
     * @param action
     */
    @Override
    public void response(FastAction action) throws Exception {
        // 变量 data 继承自 FastOut 
        action.getResponse().getWriter().write(String.valueOf(data));
    }
}
```
然后在FastAction使用response响应即可，如下代码：

```java
public void test() {
    response(new TestOut().setData("登录成功！"));
}
```
