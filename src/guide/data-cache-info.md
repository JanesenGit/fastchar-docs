# 数据缓存

## 一级缓存 
在FastChar中，默认支持数据库一级缓存功能，缓存数据处理使用 [Cache数据缓存组件](../component/cache-info.md) 提供的缓存框架。

### 数据库全局开启一级缓存
开发者可以配置，全局开启某个数据源的一级缓存功能，如下：

```java{14}
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化中
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        engine.getDatabases()
                .add(new FastDatabaseInfo()
                        .setHost(engine.getProperties().getString("dbHost"))
                        .setUser(engine.getProperties().getString("dbUser"))
                        .setPassword(engine.getProperties().getString("dbPassword"))
                        .setType("mysql")
                        .setCache(true)//开启一级缓存
                        .setName(engine.getProperties().getString("dbName")));
       /**此处省略其他代码**/
    }
    /**此处省略其他代码**/
}
```
### 执行SQL语句时使用一级缓存
如果全局数据库一级缓存没有开启， 开发者可以在执行某段sql语句的时候，开启一级缓存，如下：
```java
public FcUserEntity getUserById(int userId) {
    try {
        String sqlStr = "select * from fc_user where userId = ? ";
        
        FastEntity<?> fastEntity = FastChar.getDB()
                                    .setCache(true)//启用一级缓存
                                    .selectFirst(sqlStr,userId);
        return fastEntity;
    } catch (Exception e) {
        e.printStackTrace();
    }
    return null;
}

```

::: tip 解说
第一次执行 `getUserById` 方法时，检测没有缓存，会从数据库中获取结果： `{userId:1,userNickName:"好帅"}`

第二次执行 `getUserById` 方法时，检测【相同 `userId` 值】【同一个sql语句】是否有缓存，有缓存直接使用缓存结果：`{userId:1,userNickName:"好帅"}` 
否则继续从数据库中拉取。
:::


### 清除一级缓存的数据

#### 框架自动更新缓存
数据库表格的一级缓存数据，在执行 `select` 查询语句时，并不会自动更新缓存数据，
当执行表格的 `insert` 、 `update` 和 `delete` 语句时，
会自动清除相关表格的所有缓存数据，所以在下次 `select` 查询语句时会重新从数据库中拉取数据。


#### 手动更新缓存
FastChar框架也允许开发者手动清除缓存数据，如下：

```java

//传入需要清除缓存的表格名称即可
FastChar.getDB().clearCache("fc_user","fc_dept");

```


## 二级缓存

在FastChar中，默认支持数据二级缓存功能，缓存数据处理使用 [Cache数据缓存组件](../component/cache-info.md) 提供的缓存工具。

二级缓存是业务数据缓存，在 `FastEntity` 中可手动使用，二次调用时如果检测到有缓存则直接使用缓存的数据，如下代码：

```java

public class FcUserEntity extends FastEntity<FcUserEntity> {
    public static FcUserEntity getInstance() {
        return FastChar.getOverrides().singleInstance(FcUserEntity.class);
    }
 
    /**省略其他的代码**/
    
    public FcUserEntity getUserById(int userId) {
        return buildCache(new Cache.Run() {//构建缓存对象
            @Override
            public Object invoke() {//没有缓存时会执行下面代码
                String sqlStr = "select * from fc_user where userId=?";
                FcUserEntity result = selectFirst(sqlStr, userId);
                return result;
            }
        })
        .setTag("FcUser")//设置缓存的标签
        .setKey(String.valueOf(userId))//设置缓存的 key
        .run();
    }
    
}

```

### 清除二级缓存数据
 `FastEntity` 中的二级缓存，框架默认没有自动更新，所以需要开发者手动调用清除缓存的方法进行清除，如下：

```java

    FcUserEntity.dao().deleteCache("FcUser");//清除所有标签值为 FcUser 的缓存数据
    
    FcUserEntity.dao().deleteCache("FcUser", "1");//清除标签值为 FcUser 并且缓存的key为 1 的缓存数据

```


## 三级缓存
在FastChar中，默认支持请求数据三级缓存功能，缓存数据处理使用 [Cache数据缓存组件](../component/cache-info.md) 提供的缓存工具。

三级缓存是[控制器](action-info.md) 在 [响应数据](action-out.md) 后进行数据缓存，
在 `FastAction` 中 在对应的路由方法 使用 `AFastCache` 注解 启用缓存，如下代码：

```java
public class TestAction extends FastAction {
    /**省略其他代码**/
    
    @AFastCache//启用三级缓存
    public void showUserInfo() throws Exception {
        int userId = getParamToInt("userId");
        responseJson(0,"获取成功",FcUserEntity.dao().getUserById(userId));   
    }
    
}

```
::: tip
使用三级缓存默认缓存的 `tag` 是的当前 `Action` 的类名也就是 `TestAction.class.getName()`
缓存的 `key` 是当前方法名和路径生成唯一标识。

开发者也可以手动配置 `tag` 和 `key` 如下：

```java
public class TestAction extends FastAction {
    /**省略其他代码**/
    
    @AFastCache(key = "showUser",tag = "TestAction")//启用三级缓存
    public void showUserInfo() throws Exception {
        int userId = getParamToInt("userId");
        responseJson(0,"获取成功",FcUserEntity.dao().getUserById(userId));   
    }
}
```
:::

### 清除三级缓存数据
`FastAction` 中的三级缓存，框架默认没有自动更新，所以需要开发者手动调用清除缓存的方法进行清除，如下：


::: tabs


@tab 静态方法清除
开发者可以调用 `FastChar.getActions()` 静态方法在适当的时机清除缓存，如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**此处省略其他配置代码**/

    /**
     * web启动完成开始运行时，清除 FastAction 相关的缓存
     */
    @Override
    public void onRun(FastEngine engine) throws Exception {
    
       //清除所有标签值为 TestAction 的缓存数据
       FastChar.getActions().deleteCache("TestAction");
       
       //清除标签值为 TestAction 并且缓存的key为 showUser 的缓存数据
       FastChar.getActions().deleteCache("TestAction", "showUser");
    }
}

```

@tab FastAction中清除
```java
public class TestAction extends FastAction {
    /**省略其他代码**/
    
    public TestAction(){
        //清除所有标签值为 TestAction 的缓存数据
        deleteCache("TestAction");
        
        //清除标签值为 TestAction 并且缓存的key为 showUser 的缓存数据
        deleteCache("TestAction", "showUser");
    }
}
```

:::



## 分布式系统
如果开发的系统采用了分布式，在需要更新数据缓存时建议采用 [MQ消息中间件](../component/mq-info.md) 进行通知更新。


