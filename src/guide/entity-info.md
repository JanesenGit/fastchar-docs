# 数据库实体类

FastChar 数据库实体类的：FastEntity

## 介绍

FastEntity是FastChar核心类之一，在Java与数据库操作的桥梁，也就是ORM的核心类。

FastEntity与我们传统概念中的Dao类似，但是与传统的Dao不同的是FastEntity灵活性更高，使用起来方便快捷！

## 实现数据库实体类

声明一个类并继承FastEntity即可，如下：

```java
public class FcUserEntity extends FastEntity<FcUserEntity> {
    public static FcUserEntity getInstance() {
        return FastChar.getOverrides().singleInstance(FcUserEntity.class);
    }
 
    //绑定的表格
    @Override
    public String getTableName() {
        return "fc_user";
    }
 
    @Override
    public String getTableDetails() {
        return "用户管理";
    }
 
    @Override
    public void setDefaultValue() {
        set("userState", 0);
        set("userDateTime", new Date());
    }
}
```

以上代码中，方法getTableName是FastEntity的抽象方法，必须实现。用于绑定Entity与数据库中的表格。绑定后即可对表格进行增删查改等一系列数据库操作！

### 添加数据

```java
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.set("userNickName", "用户昵称");//对应表格里的字段 userNickName
fcUserEntity.set("userCity", "合肥");//对应表格里的字段 userCity
fcUserEntity.save();
```

### 查询数据

```java
FcUserEntity fcUserEntity = new FcUserEntity();
//系统会自动将查询的数据所有字段装载到FcUserEntity中
List<FcUserEntity> select = fcUserEntity.select();

//获取第一条数据里的userNickName字段值，并自动转换成String类型
String userNickName=select.get(0).getString("userNickName");

```

### 删除数据

```java
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.set("userId", 1);//根据表格的主键 userId 删除userId 为 1 的数据
fcUserEntity.delete();
```

### 修改数据

```java
//使用entity的set方法设置需要修改的属性值
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.set("userId", 1);//根据表格的主键 userId 修改userId 为 1 的数据
fcUserEntity.set("userNickName", "新的昵称");
fcUserEntity.update();
```

### 填充数据
- 原理：当数据不存在时添加数据，当数据存在时则修改数据。

::: tabs

@tab 方式一
```java
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.set("userPhone", "186****9665");//对应表格里的字段 userPhone
fcUserEntity.set("userNickName", "用户昵称");//对应表格里的字段 userNickName
fcUserEntity.set("userCity", "合肥");//对应表格里的字段 userCity
fcUserEntity.push("userPhone");//将根据userPhone属性值进行判断数据是否存在
```

@tab 方式二
```java
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.set("userPhone", "186****9665");//对应表格里的字段 userPhone
fcUserEntity.set("userNickName", "用户昵称");//对应表格里的字段 userNickName
fcUserEntity.set("userCity", "合肥");//对应表格里的字段 userCity
FastHanlder hanlder=new FastHanlder();
fcUserEntity.push(hanlder,"userPhone");//将根据userPhone属性值进行判断数据是否存在

int resultType=hanlder.getCode();
//操作句柄，根据code判断数据最终是添加还是更新 【0：添加 1：更新】

```
:::

::: tip
虽然 `fcUserEntity` 对象也设置了其他属性值，但是在调用 `push` 方法时，指定使用 `userPhone` 属性进行条件判断，所以其他属性不会影响方法结果。
:::



### 统计数据
- 原理：根据指定属性值进行数据统计

```java
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.set("userPhone", "186****9665");//对应表格里的字段 userPhone
fcUserEntity.set("userNickName", "用户昵称");//对应表格里的字段 userNickName
fcUserEntity.set("userCity", "合肥");//对应表格里的字段 userCity
int count=fcUserEntity.count("userPhone");//将根据userPhone属性值进行条件判断统计数据，
```

::: tip
虽然 `fcUserEntity` 对象也设置了其他属性值，但是在调用 `count` 方法时，指定使用 `userPhone` 属性进行条件判断，所以其他属性不会影响方法结果。
:::



### 属性值为NULL
如果需要清空数据库表格中某个属性值，可以设置属性值为字符串 `"<null>"` 或者 `null` , 如下：

::: tabs

@tab 方式一

```java
//使用entity的set方法设置需要修改的属性值
FcUserEntity fcUserEntity = new FcUserEntity();
//使用字符串 <null> 值，则数据库会置空属性 userNickName
fcUserEntity.set("userNickName", "<null>");
fcUserEntity.update();
```

@tab 方式二

```java
//使用entity的set方法设置需要修改的属性值
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.set("userNickName",null);
fcUserEntity.update();
```
:::


::: warning
以上演示代码中未显式指定数据源，则以系统配置的默认数据源为准。
:::



### 切换数据源
开发者可以手动指定使用哪个数据源，如下：

```java
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.setDatabase("data_source_a");//指定了数据源 data_source_a 
fcUserEntity.set("userNickName", "用户昵称");//对应表格里的字段 userNickName
fcUserEntity.set("userCity", "合肥");//对应表格里的字段 userCity
fcUserEntity.save();
```




## 数据库实体的方法

### setDefaultValue

设置属性默认值，在调用save和update方法时会触发，如下：

```java{18-24}
public class FcUserEntity extends FastEntity<FcUserEntity> {
    public static FcUserEntity getInstance() {
        return FastChar.getOverrides().singleInstance(FcUserEntity.class);
    }
 
    //绑定的表格
    @Override
    public String getTableName() {
        return "fc_user";
    }
 
    @Override
    public String getTableDetails() {
        return "用户管理";
    }
 
    @Override
    public void setDefaultValue() {
        //设置了默认值，当 userState 为空时使用默认值 
        set("userNickName", "默认名");
    }
}
```

当执行 `FcUserEntity` 的 `save` 或 `update` 方法时，会触发对象的 `setDefaultValue`

::: warning
`update` 方法与 `save` 方法触发 `setDefaultValue` 不同的是，只有 `set` 属性 `userNickName` 时 才会触发默认值的判断逻辑，如下:

```java
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.set("userCity", "合肥");
fcUserEntity.update();
//此时调用触发 setDefaultValue 
//并不会设置 默认值 userNickName 因为未修改 userNickName 属性
```

```java
FcUserEntity fcUserEntity = new FcUserEntity();
fcUserEntity.set("userNickName", null);
fcUserEntity.update();
//此时调用触发 setDefaultValue
//会设置 默认值 userNickName 因为修改了 userNickName 属性
//并且设置的值 为空 
```
:::


### convertValue
转换属性值，当查询实体数据时，会调用此方法，如下：
```java{18-24}
public class FcUserEntity extends FastEntity<FcUserEntity> {
    public static FcUserEntity getInstance() {
        return FastChar.getOverrides().singleInstance(FcUserEntity.class);
    }
    //绑定的表格
    @Override
    public String getTableName() {
        return "fc_user";
    }
 
    @Override
    public String getTableDetails() {
        return "用户管理";
    }
 
    @Override
    public void convertValue() {
        //追加了属性 userPhone2 
        set("userPhone2", getString("userPhone")+"测试" );
        
        //全部统一了用户昵称
        set("userNickName","统一名称");
    }
}
```
当使用 `FcUserEntity` 对象查询 `fc_user` 表格数据时，返回的所有 `FcUserEntity` 对象 会调用 `convertValue` 方法

