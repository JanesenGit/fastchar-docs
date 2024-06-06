# FastChar-SLF4j

## 介绍
快速接入Log4j2的插件。

## 使用

### 引入工具包
开发者需要集成FastChar-SLF4j 
[![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar-slf4j?label=maven-fastchar-slf4j)](https://mvnrepository.com/artifact/com.fastchar/fastchar-slf4j) 
[Github](https://github.com/JanesenGit/FastChar-SLF4j)
的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-slf4j</artifactId>
    <version>1.2.0</version>
</dependency>
```

### 配置log4j
FastChar-SLF4j在配置log4j2时做了较大的改动，不再使用配置文件进行配置，而是在代码中进行配置，如下：

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //启用log4j2
        engine.getConfig(FastLog4j2Config.class)
                .setEnable(true)
                //log生成保存的目录
                .setLogDirectory(new File(engine.getPath().getWebRootPath(), "logs").getAbsolutePath())
                //添加官方默认的logger
                .addLoggerByFastChar(true)
                //开启所有级别日志，并在控制台中打印
                .addLogger(true, FastLog4jLevelEnum.Info,FastLog4jLevelEnum.Debug,FastLog4jLevelEnum.Error)
                 //开启过滤指定的logger
                .addLogger(new FastLog4jLogger()
                        .setName("com.test.TestAction")//需要分割的名匹配，一般是类的完整名
                        .addRollingFile(new FastLog4jRollingFile()
                                .setLevel(FastLog4jLevelEnum.Info)//只过滤info级别
                                .setConsole(true)//在控制台中打印
                                .setFileName("TestAction")//生成的.log日志文件名，注意不要包含后缀名
                        ));
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}

```


### 代码使用
开发者只要正常使用FastChar官方的Logger工具包即可，无效改动项目代码。如下：


```java{10}

public class TestAction extends FastAction {
    @Override
    protected String getRoute() {
        return null;
    }

    public void login() {
        
        FastChar.getLogger().info("登录接口！");
        
        responseJson(0, "登录成功！");
    }
}

```

