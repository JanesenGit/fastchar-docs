# 动态代理组件

## 介绍
FastChar核心组件，FastChar默认集成了 `cglib` 实现类的动态代理功能。

## Cglib动态代理

如果开发者需要使用 [Cglib](https://github.com/cglib/cglib/wiki) 作为动态代理解决方案，只要在项目中引用相应的客户端包即可。以maven项目为例，在pom.xml中加入如下引用：
```xml
<!-- https://mvnrepository.com/artifact/cglib/cglib-nodep -->
<dependency>
    <groupId>cglib</groupId>
    <artifactId>cglib-nodep</artifactId>
    <version>3.3.0</version>
</dependency>
```


### 使用Cglib动态代理
开发者可以通过 `FastChar.getEnhancer(Class <T> targetClass)` 方法快速便捷的使用类动态代理功能。如下：

::: tabs

@tab TestEnhancer.java

```java
    public static void main(String[] args) {

        //使用动态代理方法实例化TestUser对象
        TestUser testUser = FastChar.getEnhancer(TestUser.class)
                .addBeforeInterceptor(new IFastMethodInterceptor() {
                    @Override
                    public boolean intercept(Object o, Method method, Object[] objects) {
                        System.out.println("Before-开始执行方法：" + method.getName());

                        //返回false 不拦截，返回true 拦截
                        return false;
                    }
                })
                .addAfterInterceptor(new IFastMethodInterceptor() {
                    @Override
                    public boolean intercept(Object o, Method method, Object[] objects) {

                        System.out.println("After-执行方法结束：" + method.getName());

                        //返回false 不拦截，返回true 拦截
                        return false;
                    }
                })
                .create();

        //执行user对象里的方法
        testUser.info();

    }
```

@tab TestUser.java

```java
public class TestUser {

    public void info() {
        System.out.println("获取用户的信息！");
    }

}
```


@tab 执行结果

![cglib_test_result.png](/images/cglib_test_result.png)

:::





