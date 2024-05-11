# FastChar-DevTools插件

## 介绍
本地开发者工具，主要用于在使用内嵌式服务运行项目的时候可以开启web资源热加载功能。


### 引入工具包
开发者需要集成FastChar-DevTools [![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar-devtools?label=maven-fastchar-devtools)](https://mvnrepository.com/artifact/com.fastchar/fastchar-devtools)
[Github](https://github.com/JanesenGit/FastChar-DevTools)的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-devtools</artifactId>
    <version>1.0.0</version>
</dependency>
```

### 使用插件
开发者在启动内嵌式服务时，完成FastChar-DevTools配置即可，如下：

```java{8}
public static void main(String[] args) throws IOException {
        boolean debug = args.length == 0 || args[0].equalsIgnoreCase("debug");

        if (debug) {
            String projectPath = System.getProperty("user.dir");

            //使用FastChar-DevTools工具，开启web资源热加载功能
            FastChar.getConfig(FastDevToolsConfig.class)
                    .setEnable(true)
                    .setLazyWatch(true)
                    .addWebResourcesWatcher(
                            new File(projectPath, "TestProject/src/main/resources"),
                            new File(projectPath, "TestProject/target/classes")
                    );
        }

        FastServerUndertow.getInstance()
                .start(new FastUndertowConfig()
                        .setDeploymentName("TestProject")
                        .setPort(8080)
                        .setContextPath("/TestProject"));

    }

```

