# 拦截器
FastChar 允许开发者通过配置拦截器拦截FastAction或原始HttpServletRequest的请求。

## IFastInterceptor接口
是FastChar核心类之一，可用来拦截FastAction的请求。

### 实现一个拦截器

```java
public class WebSiteInterceptor implements IFastInterceptor {
    @Override
    public void onInterceptor(FastAction fastAction) throws Exception {
        
        //可以向模板引擎中追加参数
        FastChar.getTemplates().put("http", fastAction.getProjectHost());
        
        //也可以追加额外的http请求的参数
        fastAction.addParam("other", "追加额外的参数！");
        
        //继续执行下一步操作
        fastAction.invoke();
    }
}

```

### 拦截before
可以在执行FastAction的方法 前（before） 进行拦截，配置方式有如下两种：

::: tabs

@tab 方式一

在[系统全局初始化](system-init.md)时手动注册，如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //注册拦截器
        engine.getInterceptors()
            .addBefore(WebSiteInterceptor.class, "/*");
            //参数 '/*' 标识拦截系统的所有请求，可以使用通配符 *
        
        /**此处省略其他配置代码**/
    }
}
```



@tab 方式二

使用 `AFastBefore` 注解 在指定 FastAction类 或 方法 中标注，如下在方法中拦截：


```java
@AFastBefore(WebSiteInterceptor.class)
public void show() {
    int id = getParamToInt("id");
    if (id == 1) {
        responseText("获取成功！");
    }
    responseText("获取失败！");
}
```

:::



### 拦截After

可以在执行FastAction的方法 后（after） 进行拦截，配置方式有如下两种：

::: tabs


@tab 方式一
在[系统全局初始化](system-init.md)时手动注册，如下：
```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //注册拦截器
        engine.getInterceptors()
            .addAfter(WebSiteInterceptor.class, "/*");
            //参数 '/*' 标识拦截系统的所有请求，可以使用通配符 *
        
        /**此处省略其他配置代码**/
    }
}
```

@tab 方式二

使用 `AFastAfter` 注解 在指定 FastAction类 或 方法 中标注，如下在方法中拦截：

```java
@AFastAfter(WebSiteInterceptor.class)
public void show() {
    int id = getParamToInt("id");
    if (id == 1) {
        responseText("获取成功！");
    }
    responseText("获取失败！");
}
```

:::

## IFastRootInterceptor接口
是FastChar核心类之一，可用来拦截原始HttpServletRequest的请求。

### 实现一个拦截器

```java

public class TestRootInterceptor implements IFastRootInterceptor {
    @Override
    public void onInterceptor(HttpServletRequest request, HttpServletResponse response, FastDispatcher dispatcher)
     throws Exception {
 
        dispatcher.invoke();//允许通过
    }
}

```

### 拦截请求
在[系统全局初始化](system-init.md)时手动注册，如下：

```java
public class FastCharWeb implements IFastWeb {
    
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        /**此处省略其他代码**/        
 
        engine.getInterceptors()
                .addRootInterceptor(TestRootInterceptor.class, "/*");
                
        //参数 '/*' 标识拦截系统的所有请求，可以使用通配符 *
 
    }
 
    /**此处省略其他代码**/
 
}
```