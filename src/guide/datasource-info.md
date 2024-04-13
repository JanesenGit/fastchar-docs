# 配置数据源

FastChar 默认集成了数据源的配置

## 单个数据源配置

在[系统全局初始化](system-init.md)的时候配置数据源，以配置 `mysql` 数据库为例，如下：


::: code-tabs

@tab 方式一
```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //配置数据源
        engine.getDatabases()
            .add(new FastDatabaseInfo()
                    .setHost("localhost")//数据库地址
                    .setUser("root")//用户名
                    .setPassword("root")//用户密码
                    .setType("mysql")//数据类型，更多类型查看 数据库支持的类型
                    .setPort("3306")//数据库端口，此处可以不做配置，系统会根据数据库类型 设置对应的默认端口
                    .setName("fc_test"));//数据库名
        /**此处省略其他配置代码**/
    }

     /**此处省略其他代码**/
}
```

@tab  方式二
```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //配置数据源
        engine.getDatabases()
            .add(new FastDatabaseInfo()
                    .setUrl("……")//数据库的链接地址
                    .setUser("root")//用户名
                    .setPassword("root"));//用户密码
        /**此处省略其他配置代码**/
    }

     /**此处省略其他代码**/
}
```
:::

## 多个数据源配置

在[系统全局初始化](system-init.md)的时候配置数据源，以配置 `mysql` 数据库为例，如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //配置数据源
        engine.getDatabases()
            .add(new FastDatabaseInfo()
                    .setCode("data_source_a")//数据源 data_souce_a
                    .setHost("localhost")//数据库地址
                    .setUser("root")//用户名
                    .setPassword("root")//用户密码
                    .setType("mysql")//数据类型
                    .setPort("3306")//数据库端口，此处可以不做配置，系统会根据数据库类型 设置对应的默认端口
                    .setName("fc_test"));//数据库名
            .add(new FastDatabaseInfo()
                    .setCode("data_source_b")//数据源 data_souce_b
                    .setUrl("……")//数据库的链接地址
                    .setUser("root")
                    .setPassword("root"));//数据库名
        /**此处省略其他配置代码**/
    }

     /**此处省略其他代码**/
}
```

::: tip
配置多个数据源时，以数据源的Code为唯一标识进行区分。
::: warning
当配置多个数据源后，如果开发者在使用时未明确使用哪个一个数据源，则以第一个数据源为默认数据源。
上述代码中的默认数据源为： data_source_a
:::




## 支持数据库类型
FastChar默认支持数据类型：`mysql`、`sql_server`、`oracle`


## 数据库连接池
FastChar默认支持 自带simple、druid、c3p0、tomcatJdbc四种连接池，FastChar自带的 `FastSimpleDataSourceProvider`
仅用于测试数据库时使用，不建议用在正式项目中。

### druid连接池
FastChar默认支持，如果需要使用druid连接池，则在项目中引用druid包即可，以maven项目为例，在pom.xml中加入引用如下：
```xml
    <!-- https://mvnrepository.com/artifact/com.alibaba/druid -->
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid</artifactId>
        <version>1.2.11</version>
    </dependency>
```

### c3p0连接池
FastChar默认支持，如果需要使用c3p0连接池，则在项目中引用c3p0包即可，以maven项目为例，在pom.xml中加入引用如下：
```xml
    <!-- https://mvnrepository.com/artifact/com.mchange/c3p0 -->
    <dependency>
        <groupId>com.mchange</groupId>
        <artifactId>c3p0</artifactId>
        <version>0.9.5.5</version>
    </dependency>
```

### tomcatJDBC连接池
FastChar默认支持，Tomcat自带数据库连接池，无需额外引用包。

### 优先级
如果连接池的包都存在项目中，FastChar 选择数据连接池优先级为：

`druid > c3p0 > tomcatJDBC > simple`


## 如何使用数据源

### FastDB指定数据源
通过FastDB对象设置数据库名称，即可自由操作数据库，如下：
```java
public void show() throws Exception {
    FastChar.getDB().setDatabase("data_source_a").update("update fc_user set userState=1");
    responseText("操作成功！");
}
```

### 代码块切换数据源

在FastChar中，通过FastDatabases对象的lock方法可以随意切换数据源，**_lock方法是线程安全_**，如下：
```java
public void show() {
    FastChar.getDatabases().lock("data_source_a");//切换到data_source_a数据源并锁定

    //此时，执行数据库查询时，查询的是 data_source_a 数据源
    FcUserEntity fcUserEntity = new FcUserEntity();
    List<FcUserEntity> selectUser = fcUserEntity.select();
    
    //此时，执行数据库查询时，查询的是 data_source_a 数据源
    FcDeptEntity fcDeptEntity = new FcDeptEntity();
    List<FcDeptEntity> selectDept = fcDeptEntity.select();
    
    FastChar.getDatabases().unlock();//解除锁定
    
    responseText(userEntity.getTableDetails());
}
```

### [数据库实体类切换数据源](entity-info.md#指定数据源)

