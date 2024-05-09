# 参数转换器
`IFastParamConverter` 接口是FastChar 核心组件之一，用于 `FastAction` 方法中 将 请求的参数值 转换成对应的类型。

## 实现一个参数转换器
开发者可以自定义实现 `IFastParamConverter` 类，进行参数类型的转换，如下：

::: tabs

@tab TestParamConverter

```java

//参数转换器，实现 UserBean 类型的转换
public class TestParamConverter implements IFastParamConverter {
    @Override
    public Object convertValue(FastAction action, FastParameter parameter, int[] marker) throws Exception {
        if (parameter.getName().equals("selfUser")//判断形参的命名
                && parameter.getType() == UserBean.class)//判断形参的类型 
                {
            
            UserBean user=new UserBean();
            user.setUserId(action.getParamToInt("userId"));
            user.setUserNickName(action.getParam("userNickName"));
            
            marker[0] = 1;//标记此参数类型已处理
            return user;//返回已转换的对象值
        }
        //返回null，则继续寻找下一个参数转换器
        return null;
    }
}
```



@tab UserBean

```java

public class UserBean {

    private int userId;
    private String userNickName;

    public int getUserId() {
        return userId;
    }

    public UserBean setUserId(int userId) {
        this.userId = userId;
        return this;
    }

    public String getUserNickName() {
        return userNickName;
    }

    public UserBean setUserNickName(String userNickName) {
        this.userNickName = userNickName;
        return this;
    }
}
```

:::


## 注册转换器
开发者实现一个参数转换器后，需要将该实现类注册到系统中才能被系统发现并使用，注册方式如下：

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
                .add(TestParamConverter.class);//注册自定义的参数转换器类
                
        /**此处省略其他配置代码**/
    }
}
```

## 使用转换器
开发者无需显式调用参数转换器，FastChar会根据 `FastAction` 中方法的形参类型自动触发参数转换器，如下：

::: tabs
@tab html

```html
<form action="http://****/test/updateUser" method="post" >
    <input type="text" name="userId" value="1"/>
    <input type="text" name="userNickName" value="用户昵称"/>
    <input type="submit" title="提交"/>
</form>
```

@tab TestAction

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
 
    //形参方式获取参数
    //UserBean 类型的参数
    public void updateUser(UserBean selfUser){

         int userId=selfUser.getUserId();
         
         String userNickName=selfUser.getUserNickName();
        
        /**省略其他业务判断逻辑**/
        
        responseText("更新成功！");
    }
}
```
::: tip

也可以通过 `getParamToClass` 方法获取参数 类型为 `UserBean` 的参数 `selfUser`，如下：

```java
    public void updateUser(){
         UserBean userBean = getParamToClass("selfUser", FcDepartEntity.class);
         int userId=userBean.getUserId();
         String userNickName=userBean.getUserNickName();
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }

```
:::



## 内置转换器
FastChar默认内置了常规类型的参数转换器，如下：


### FastStringParamConverter
`String` 类型的形参转换，例如：

```java
    public void updateUser(String stringValue,List<String> stringList,String[] stringArray){
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }
```


### FastNumberParamConverter
`int` `double` `float` `long` `short` 数字类型的形参转换，例如：

```java
    public void updateUser(int intValue,List<Integer> intList,Integer[] intArray){
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }
```


### FastBooleanParamConverter
`boolean` 类型的形参转换，例如：

```java
    public void updateUser(boolean booleanValue,List<Boolean> booleanList,Boolean[] booleanArray){
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }
```

### FastDateParamConverter
`Date` 类型的形参转换，例如：

```java
    public void updateUser(Date dateValue,List<Date> dateList,Date[] dateArray){
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }
```

### FastEntityParamConverter
`FastEntity` 类型的形参转换，例如：

```java
    public void updateUser(FcUserEntity entityValue,List<FcUserEntity> entityList,FcUserEntity[] entityArray){
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }
```


### FastEnumParamConverter
`Enum` 枚举类型的形参转换，例如：

```java
    public void updateUser(UserSexEnum enumValue,List<UserSexEnum> enumList,UserSexEnum[] enumArray){
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }
```


### FastFileParamConverter
`FastFile`  类型的形参转换，例如：

```java
    public void updateUser(FastFile<?> fileValue,List<FastFile<?>> fileList,FastFile<?>[] fileArray){
        /**省略其他业务判断逻辑**/
        responseText("更新成功！");
    }
```


### 参数类型说明

包含了 `List<?>` 类型的参数，具体前端如何传参，请查看 [获取List参数](action-info.md#获取-list-参数) 说明。










