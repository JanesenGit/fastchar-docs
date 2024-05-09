# 控制器
FastChar 控制器的核心基类： `FastAction`

## 介绍
FastAction类承担着MVC中的控制器的作用，是FastChar的核心类之一，与struts2的action或springboot的controller概念类似。

::: tip
FastAction是线程安全的
:::

开始尝试第一个Action类，如下：
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
访问url地址 `/test` 默认进入FastAction类里的 `index` 方法

## 注册
::: tip
无论是自动注册还是手动注册，FastChar都做了去重处理！所以不用担心会出现重复注册的问题。
:::

### 自动注册
当系统启动后，FastChar的扫描器会自动注册项目中所有【包含引用的Jar包】继承FastAction的类。

### 手动注册
如果开发者需要手动注册一个FastAction类，则在全局初始化的时候注册即可，如下代码：
```java
public class FastCharWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //获取action集装器，并注册自定的TestAction类
        engine.getActions()
                .addAction(TestAction.class);
                
        /**此处省略其他配置代码**/
    }
    /**此处省略其他方法代码**/
}
```
当FastAction类完成注册后，FastChar核心解析器利用Java反射技术开始分析FastAction类，并识别所有公开的对象方法。

### 禁用FastAction
如果需要禁止访问FastAction，通过 `AFastAction` 注解配置即可，如下
```java

@AFastAction(enable = false)
public class TestAction extends FastAction {
    //省略其他代码
}

```
## 确定方法的url地址

在FastAction类里定义的方法名即为url地址，如下

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
 
    public void login() {
        responseText("登录成功！");
    }
}
```
相对url地址组成规则是： `getRoute` 方法的返回值通过 `/` 符号拼接 `方法名`

所以最终的url地址为 `http://***/test/login`  即可访问到 TestAction里的 login 方法

### 不同url地址访问同一个方法
如果需要不同的url地址访问同一个方法，则可以通过 `AFastRoute` 注解配置更多的url地址，如下：

```java
 @AFastRoute(value = {"/login1", "/login2","/login3"})
 public void login() {
    responseText("登录成功！");
 }
```
访问login方法的url地址有： `/test/login` `/test/login1` `/test/login2` `/test/login3`  

::: warning
如果 url 地址未匹配到 `FastAction` 里的方法，则默认执行 `FastAction` 类里的 `index` 方法 
:::

## 无法通过url访问的方法
在FastAction中允许开发者禁用某些方法不允许通过url地址访问，具体如下：
* `private` 修饰的方法，例如：
```java
private void test(){
    /**方法体**/
}
```
* `static` 修饰的方法，例如
```java
public static void test(){
    /**方法体**/
}
```
* `abstract` 修饰的方法，例如：
```java
public abstract void test();
```
* `transient` 修饰的方法，例如：
```java
public transient void test(){
    /**方法体**/
};
```

## 请求参数获取
FastAction默认解析处理了请求携带的所有参数，包括附件，所以开发者按照规则调用即可。

### 显式获取参数
FastAction提供了getParam相关方法，可以快速的获取请求携带的参数，如下：
```java
public void login(){
    //获取参数
    
    String username = getParam("username");
    String password = getParam("password");
    
    //自动转换为int类型
    int code=getParamToInt("code")
    
    /**省略其他业务判断逻辑**/
    
    responseText("登录成功！");
}
```

### 方法形参获取参数
通过方法形参定义参数，FastChar会触发[参数转换器](param-converter-info.md)进行数据转换，如下：
```java

//形参注入
public void login(String username,String password,int code){

    /**省略其他业务判断逻辑**/
    
    responseText("登录成功！");
}
```

### 获取上传的附件
FastAction自动解析附件并保存了附件，所以开发者获取上传附件的方法极其简单，如下：

```java
public void updateUser(){
    //获取参数
    FastFile<?> userHeadImg = getParamFile();
    
    //获取附件保存后的相对的url地址 ，例如：attachments/images/test.jpg
    String fileUrl=userHeadImg.getUrl();
    /**省略其他业务判断逻辑**/
    
    responseText("更新成功！");
}
```

#### 修改附件默认保存的目录

FastChar 附件默认保存的目录是相对项目的 `attachments` 文件夹，开发者可以在[全局初始化](system-init.md)时自行修改，如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //设置系统附件默认保存的路径
        engine.getPath()
                .setAttachmentPath("保存附件的绝对路径");
        
        /**此处省略其他配置代码**/
    }
}
```

### 获取 `URL` 参数
FastAction允许获取url地址中 `/` 分割的多余地址，如下：

::: tabs

@tab html

```html
<form action="http://****/test/login/param1/param2" method="post" >
    <input type="text" name="userNickName"/>
    <input type="submit" title="提交"/>
</form>
```
@tab java

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
 
    public void login() {
        String urlParam0 = getUrlParam(0);//值：param1
        String urlParam1 = getUrlParam(1);//值：param2
        responseText("登录成功！");
    }
}

```
:::

::: tip 解说
由于 `TestAction` 类里未匹配到 方法 `param2`  和 方法 `param1` ，匹配到 `login` 方法，
而未匹配到的将以url参数形式传递给方法 `login` 中
:::


### 获取 `Map` 参数

FastAction 支持按照 `{prefix}.{attr}` 格式提交参数，并在后台转为 `Map` 对象，如下：

::: tabs

@tab html

```html
<form action="http://****/test/updateUser" method="post" >
    <input type="text" name="user.userId" value="1"/>
    <input type="text" name="user.userNickName" value="用户昵称"/>
    <input type="text" name="dept.deptId" value="2"/>
    <input type="text" name="dept.deptName" value="部门名称"/>
    <input type="submit" title="提交"/>
</form>
```

@tab java

```java{15,20}
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
 
    public void updateUser(){

        //获取前端用户相关参数，并自动合并转为map对象
        Map<String, Object> userInfo = getParamToMap("user");//传入参数的前缀 user 即可
        Object userNickName=userInfo.get("userNickName");
        Object userId=userInfo.get("userId")
            
        //获取前端部门相关参数，并自动合并转为map对象
        Map<String, Object> deptInfo = getParamToMap("dept");//传入参数的前缀 dept 即可
        Object deptId=deptInfo.get("deptId");
        Object deptName=deptInfo.get("deptName")
        
        /**省略其他业务判断逻辑**/
        
        responseText("更新成功！");
    }
}
```
::: 

::: tip 解说
参数格式 `{prefix}.{attr}` 在 `FastAction` 调用 `getParamToMap` 方法，并传入 
参数前缀 `{prefix}` 即可将相同前缀的参数合并为 `Map` 对象，
Map的 key 为 `{attr}` ，value 为 参数值
:::


### 获取 `List<Map>` 参数
FastAction 支持按照 `{prefix}[i].{attr}` 格式提交参数，并在后台转为 `List<Map>` 对象，如下：

::: tabs

@tab html

```html
<form action="http://****/test/updateUser" method="post" >
    <input type="text" name="user[0].userId" value="1"/>
    <input type="text" name="user[0].userNickName" value="用户昵称1"/>
    
    <input type="text" name="user[1].userId" value="2"/>
    <input type="text" name="user[1].userNickName" value="用户昵称2"/>
    
    <input type="text" name="user[2].userId" value="3"/>
    <input type="text" name="user[2].userNickName" value="用户昵称3"/>
    
    <input type="submit" title="提交"/>
</form>
```

@tab java

```java{15}
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
 
    public void updateUser(){

        //获取参数前缀为user，并且包含下标[i]的参数，转为List<Map>格式
        List<Map<String, Object>> users = getParamToMapList("user");
        for (Map<String, Object> user : users) {
            Object userId = user.get("userId");
            Object userNickName = user.get("userNickName");
        }
        
        /**省略其他业务判断逻辑**/
        
        responseText("更新成功！");
    }
}
```
:::


::: tip 解说
参数格式 `{prefix}[i].{attr}` 在 `FastAction` 调用 `getParamToMapList` 方法，并传入
参数前缀 `{prefix}` 即可将相同前缀的参数合并为 `List<Map>` 对象。

每项 `Map` 的 key 为 `{attr}` ，value 为 参数值

::: danger 注意
其中 i 是可变的数字，仅用来 正序排序 参数，不代表 `List` 中的子项 下标
:::




### 获取 `List<?>` 参数
FastAction 支持按照 `{prefix}[i]` 格式提交参数，并在后台转为 `List<?>` 对象，如下：

::: tabs

@tab html

```html
<form action="http://****/test/updateUser" method="post" >
    <input type="text" name="userId[0]" value="1"/>
    
    <input type="text" name="userId[1]" value="2"/>
    
    <input type="text" name="userId[2]" value="3"/>
    
    <input type="submit" title="提交"/>
</form>
```

@tab java

```java{15}
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
 
    public void updateUser(){

        //获取参数前缀为userId并且包含下标[i]的参数，转为List<String>格式
        List<String> userId = getParamToList("userId");
        
        /**省略其他业务判断逻辑**/
        
        responseText("更新成功！");
    }
}
```
:::


::: tip 解说
参数格式 `{prefix}[i]` 在 `FastAction` 调用 `getParamToList` 方法，并传入
参数前缀 `{prefix}` 即可将相同前缀的参数合并为 `List<?>` 对象。

::: danger 注意
其中 i 是可变的数字，仅用来 正序排序 参数，不代表 `List` 中的子项 下标
:::





### 获取 `FastEntity` [数据库实体](entity-info.md) 参数

FastAction 支持按照 `{prefix}.{attr}` 格式提交参数，并在后台转为 `FastEntity` 对象，如下：

::: tabs

@tab html

```html
<form action="http://****/test/updateUser" method="post" >
    <input type="text" name="user.userId" value="1"/>
    <input type="text" name="user.userNickName" value="用户昵称"/>
    <input type="text" name="dept.deptId" value="2"/>
    <input type="text" name="dept.deptName" value="部门名称"/>
    <input type="submit" title="提交"/>
</form>
```

@tab java

```java{15,18}
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
 
    public void updateUser(){

        //获取前端用户相关参数，并自动合并转为map对象
        FcUserEntity user = getParamToEntity("user", FcUserEntity.class);//传入参数的前缀 user 即可
            
        //获取前端部门相关参数，并自动合并转为map对象
        FcDeptEntity user = getParamToEntity("user", FcDeptEntity.class);//传入参数的前缀 dept 即可
        
        /**省略其他业务判断逻辑**/
        
        responseText("更新成功！");
    }
}
```
:::

::: tip 解说
参数格式 `{prefix}.{attr}` 在 `FastAction` 调用 `getParamToMap` 方法。

第一个方法参值为： 参数前缀 `{prefix}` 

第二个方法参值为：`FastEntity` 的 `.class` 类 

即可将相同前缀的参数合并为 `FastEntity` 对象，

`FastEntity` 的 key 为 `{attr}` ，value 为 参数值
:::


### 获取 `List<FastEntity>` [数据库实体](entity-info.md) 参数
FastAction 支持按照 `{prefix}[i].{attr}` 格式提交参数，并在后台转为 `List<FastEntity>` 对象，如下：

::: tabs

@tab html

```html
<form action="http://****/test/updateUser" method="post" >
    <input type="text" name="user[0].userId" value="1"/>
    <input type="text" name="user[0].userNickName" value="用户昵称1"/>
    
    <input type="text" name="user[1].userId" value="2"/>
    <input type="text" name="user[1].userNickName" value="用户昵称2"/>
    
    <input type="text" name="user[2].userId" value="3"/>
    <input type="text" name="user[2].userNickName" value="用户昵称3"/>
    
    <input type="submit" title="提交"/>
</form>
```

@tab java

```java{15}
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
 
    public void updateUser(){

        //获取参数前缀为user，并且包含下标[i]的参数，转为List<Map>格式
        List<FcUserEntity> users = getParamToEntityList("user", FcUserEntity.class);
        for (FcUserEntity user : users) {
        }
        
        /**省略其他业务判断逻辑**/
        
        responseText("更新成功！");
    }
}
```
:::


::: tip 解说
参数格式 `{prefix}[i].{attr}` 在 `FastAction` 调用 `getParamToMapList` 方法。

第一个方法参值为： 参数前缀 `{prefix}`

第二个方法参值为：`FastEntity` 的 `.class` 类

即可将相同前缀的参数合并为 `List<FastEntity>` 对象。

每项 `FastEntity` 的 key 为 `{attr}` ，value 为 参数值

::: danger 注意
其中 i 是可变的数字，仅用来 正序排序 参数，不代表 `List` 中的子项 下标
:::








## 获取Session
开发者按照如下方式即可获取到Session对象，如下：

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
 
    public void updateUser(){

         FastHttpSession session = getSession();
         
        /**省略其他业务判断逻辑**/
        
        responseText("更新成功！");
    }
}
```