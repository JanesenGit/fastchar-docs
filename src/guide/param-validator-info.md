# 参数验证器
IFastValidator 是FastChar核心类之一，用来验证 `FastAction` 中的参数，即参数验证器。

## 实现一个参数验证器

开发者可以自定义类实现 `IFastValidator` 接口 ，完成参数的验证。如下：

```java
public class TestValidator implements IFastValidator {

    
    /**
     * 验证参数是否正确
     * @param validator 验证器的名称
     * @param key 参数名
     * @param value  参数值
     * @return 验证错误信息 为：null 验证通过，否则代表参数验证失败，需要将返回值作为错误信息响应给前端。
     */
    @Override
    public String valid(String validator, String paramName, Object paramValue) {
        if (validator.equals("@user_exist") && paramName.equals("userId")) {
            FcUserEntity userEntity = FcUserEntity.getInstance().selectById(paramValue);
            if (userEntity != null) {
                return "用户已存在！";
            }
        }
        return null;
    }
}
```

::: warning 
当参数验证器返回失败时，将使用 `FastOutParamError` 进行响应并终止后续代码的执行！
:::

## 注册验证器
开发者实现一个参数验证器后，需要将该实现类注册到系统中才能被系统发现并使用，注册方式如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
       //代理器    
       engine.getOverrides()
                .add(TestValidator.class);//注册自定义的参数验证器类
                
        /**此处省略其他配置代码**/
    }
}
```




## 使用参数验证器
调用参数验证器，开发者需要显式调用。

### check方法调用
方法 `check` 属于 `FastAction` 对象方法，开发者在获取参数前调用 参数验证器 验证，如下：

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
       
        int id = check("@user_exist") //传入参数验证器名为：@user_exist  
                    .check("@user_role")//传入参数验证器名为：@user_role  
                    .getParamToInt("userId");
        
        /**省略其他业务判断逻辑**/
        
        responseText("更新成功！");
    }
}
```


### AFastCheck注解调用
开发者可以使用 `AFastCheck` 注解标注到方法的形参中调用 参数验证器 验证，如下：

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
    public void updateUser(@AFastCheck({"@user_exist","@user_role"}) int userId){
        
        /**省略其他业务判断逻辑**/
        
        responseText("更新成功！");
    }
}
```


## 内置参数验证器
FastChar默认内置常用的参数验证器。

### FastNullValidator
null或空 值验证器，验证器的名称传入规则为：`@null:{message}`，如下代码：
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
    public void updateUser() int userId){
         int id = check("@null:参数UserId不可为空！").getParamToInt("userId");
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }
}
```

`FastAction` 已将空值验证器 集成到了 `getParam` 系列方法中，开发者可以直接传入 `boolean` 值开启验证，如下：

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
    public void updateUser() int userId){
         int id = getParamToInt("userId",true);
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }
}
```

::: tip
此时如果参数 userId 为空时，响应内容为：参数userId不可为空！

响应的内容模板为： `参数{0}不可为空！`
:::











