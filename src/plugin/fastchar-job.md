# FastChar-Job

## 介绍
快速对接[quartz](https://www.quartz-scheduler.org/)插件。

## 使用


### 引入工具包
开发者需要集成FastChar-OSS [![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar-job?label=maven-fastchar-job)](https://mvnrepository.com/artifact/com.fastchar/fastchar-job)
[Github](https://github.com/JanesenGit/FastChar-Job)的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-job</artifactId>
    <version>1.6.1</version>
</dependency>
```

### 配置quartz
FastChar-Job在配置quartz时做了较大的改动，不再使用配置文件进行配置，而是在代码中进行配置，如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //初始化Quartz任务调度插件
        engine.getConfig(FastQuartzConfig.class)
                .setDebug(false)
                .setCreateTable(true)//是否在数据库中创建表格
                .setDropTableShutdown(true)//当项目停止后，是否清空表格，一般本地调试使用
                .setUseDatabase(true);
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}

```


### 实现定时器
在quartz执行任务的基础上，让开发者直观舒服的开启定时任务，开发者不用再去熟悉quartz复杂的配置规则。

FastChar-Job原则是以最简单直观的方式去启动强大的任务系统。


::: tabs

@tab 每日定时循环任务


```java

/**
 * 每日凌晨1点执行，可做一些定时更新的任务
 */
public class AlwaysJob extends FastJobBase<AlwaysJob> {

    private static final long serialVersionUID = 3693212231098999966L;

    public static void startJob() {
        Calendar instance = Calendar.getInstance();
        instance.add(Calendar.DAY_OF_MONTH, 1);
        instance.set(Calendar.HOUR_OF_DAY, 1);
        instance.set(Calendar.MINUTE, 0);
        instance.set(Calendar.SECOND, 0);
        instance.set(Calendar.MILLISECOND, 0);

        new AlwaysJob()
                .setCode("AlwaysJob")//定时任务的唯一标识符
                .setDateTime(instance.getTime())
                .start();
    }

    @Override
    public void run() {
        /**执行定时任务的操作**/
    }

    @Override
    public void stop() {
        super.stop();
        //停止后，手动启动一次，以实现循环功能
        startJob();
    }
}

```


@tab 单次定时任务

```java
public class InitAllJob extends FastJobBase<InitAllJob> {

    public static void startJob() {
        //调用启动方法后，等待30秒执行
        Calendar instance = Calendar.getInstance();
        instance.add(Calendar.SECOND, 30);

        new InitAllJob()
                .setCode("InitAllJob")//定时任务的唯一标识符
                .setDateTime(instance.getTime())
                .start();
    }


    @Override
    public void run() {
        /**执行定时任务的操作**/
    }
}


```



@tab 循环定时任务

```java
public class InitAllJob extends FastJobBase<InitAllJob> {

    public static void startJob() {
        //调用启动方法后，等待30秒执行
        Calendar instance = Calendar.getInstance();
        instance.add(Calendar.SECOND, 30);

        new InitAllJob()
                .setCode("InitAllJob")//定时任务的唯一标识符
                .setDateTime(instance.getTime())
                .start();
    }


    @Override
    public void run() {
        /**执行定时任务的操作**/
    }
    
    @Override
    public void stop() {
        super.stop();
        //停止后，手动启动一次，以实现循环功能
        startJob();
    }
}


```


:::


