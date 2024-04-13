# 类代理器
FastChar 类代理器的核心组件：FastOverrides

## 介绍
FastOverrides是FastChar核心组件，贯穿整个框架，是FastChar的类代理器，为功能的插件化或模块化开发提供了强大的支持！类代理器的原理和对象工厂类似。
与Spring里的bean容器概念类似，与之区别就是更简单、更直观。

## 实例化对象
**==如果一个类允许被代理==**，那么实例化的时候，需要使用FastOverrides提供的方法进行实例化，如下：

```java
 public void show() {
    //实例化 FcUserEntity 类对象
    FcUserEntity userEntity = FastChar.getOverrides().newInstance(FcUserEntity.class);

    //或者实例化一个单例，线程安全的
    FcUserEntity userEntity2 = FastChar.getOverrides().singleInstance(FcUserEntity.class);
    
    String tableDetails=userEntity.getTableDetails();  
    //返回的值为 ：用户表  
}
```

此时如果需要代理 `FcUserEntity` 类，声明一个类并继承 `FcUserEntity` 然后[注册到代理器中](overrider-info.md#代理类的注册)，如下：

```java
public class TestFcUserEntity extends FcUserEntity {
 
    @Override
    public String getTableDetails() {
        return "重写表格描述介绍";
    }
}
```

此时执行如下代码：

```java
 public void show() {
    //实例化 FcUserEntity 类对象
    FcUserEntity userEntity = FastChar.getOverrides().newInstance(FcUserEntity.class);

    //此时 userEntity 的实际类型为：TestFcUserEntity
    String tableDetails=userEntity.getTableDetails();  
    //返回的值为 ：重写表格描述介绍  
}
```

## 代理类的注册

当一个类 代理了 另一个类 时，此类需要注册到代理器中，才能被代理器使用，注册方式有如下两种：


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
        
        //将代理类 TestUserEntity 注册到代理器中
       engine.getOverrides()
            .add(TestFcUserEntity.class);
        
        /**此处省略其他配置代码**/
    }
}
```

::: tip
推荐:thumbsup:使用此方式注册，这样便于后期开发者统一查找代理类

@tab 方式二

通过 `AFastOverride` 注解注册，如下：

```java
@AFastOverride
public class TestFcUserEntity extends FcUserEntity {
    @Override
    public String getTableDetails() {
        return "重写表格描述介绍";
    }
}
```
:::


## 多个代理类

一个类是允许被多个代理类实现并注册到代理器中，当存在多个代理类时，在[实例化被代理类的对象](overrider-info.md#实例化对象)时，
 `FastOverrides` 代理器选择的原则是：**_==后进先出==_**。如下示例：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //将代理类 TestUserEntity和Test2FcUserEntity 都注册到代理器中
       engine.getOverrides()
            .add(TestFcUserEntity.class)
            .add(Test2FcUserEntity.class);
        
        /**此处省略其他配置代码**/
    }
}
```
上述代码中， `TestFcUserEntity` 和 `Test2FcUserEntity` 都代理了 `FcUserEntity`，
根据 **_后进先出_** 的原则，在[实例化 `FcUserEntity` 对象](overrider-info.md#实例化对象)时，最终返回的对象是 `Test2FcUserEntity` 对象。


## 代理监听 isOverride
代理类如果需要监听是否允许被使用，
则需要声明一个静态 `isOverride` 方法且方法返回类型必须为 `boolean` 类型，
代理器筛选到此类时，会调用 `isOverride` 静态方法 ，如下：

```java
public class TestFcUserEntity extends FcUserEntity {

    public static boolean isOverride() {
        Class<?> aClass = FastClassUtils.getClass("com.google.gson.Gson", false);
        if (aClass != null) {
            return true;
        }
        return false;
    }
    
    @Override
    public String getTableDetails() {
        return "重写表格描述介绍";
    }
}
```
上述代码中， `TestFcUserEntity` 在 `isOverride` 方法返回 `true` 时允许代理 `FcUserEntity` ，否则不代理 `FcUserEntity` ，
代理器会继续向下寻找其他代理类，
所以在 `isOverride` 的方法里做一些业务判断，从而影响代理器的选择，是非常灵活方便的自由切换代理类。

### isOverride静态方法传参
在声明 `isOverride` 静态方法时也可以声明形参,如下代码：

```java{4,15-17}
public class TestFcUserEntity extends FcUserEntity {
    
    //声明了一个形参 isJson
    public static boolean isOverride(boolean isJson) {
        if (isJson) {
            Class<?> aClass = FastClassUtils.getClass("com.google.gson.Gson", false);
            if (aClass != null) {
                return true;
            }
            return false;
        }
        return true;
    }
    
    //如果需要使用传入的参数，声明一个构造函数，保存即可
    //构造函数参数
    public TestFcUserEntity(boolean isJson) {
        
    }
 
    @Override
    public String getTableDetails() {
        return "重写表格描述介绍";
    }
}

```

在[实例化 `FcUserEntity` 对象](overrider-info.md#实例化对象)时，传入形参参数即可，如下：

```java
public void show() {
    
    FcUserEntity userEntity = FastChar.getOverrides().newInstance(FcUserEntity.class, true);
}

```

