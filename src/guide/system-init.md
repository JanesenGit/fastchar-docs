# 全局初始化

## IFastWeb接口

开发者可以定义一个类实现 `IFastWeb` 接口即可。

`IFastWeb` 承担着系统初始化的工作，是FastChar核心类之一。在系统启动的时候***自动调用***，开发者可在此类中进行系统初始化的工作。

例如：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        engine.getConstant()//配置系统全局属性
                .setDebug(true)
                .setAttachDirectory("/Volumes/FastChar/attach");
        
        /**此处省略其他配置代码**/
    }
    
    /**
     * 当注册当前IFastWeb后 触发
     */
    @Override
    public void onRegister(FastEngine engine) throws Exception {

    }

    /**
     * web启动完成开始运行
     */
    @Override
    public void onRun(FastEngine engine) throws Exception {

    }

    /**
     * web销毁释放
     */
    @Override
    public void onDestroy(FastEngine engine) throws Exception {

    }
}
```

::: tip
FastChar允许开发者多个实现IFastWeb接口的类，由系统自动注册！
:::