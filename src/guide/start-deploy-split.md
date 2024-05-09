# 分离式项目
开发者可以使用分离式项目，既运行容器与项目分开，只单独打包项目代码即可。

## 打包war部署
开发者可以将web项目打包成war包部署到tomcat中。以maven项目为例，在pom.xml加入插件即可，如下：

采用的是 [maven-war-plugin](https://maven.apache.org/plugins/maven-war-plugin/plugin-info.html) 打包插件。

```xml{4,11}
<project>
    <!--省略其他代码-->
    
    <packaging>war</packaging>
    
    <build>
        <finalName>test_project</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.4.0</version>
                <configuration>
                    <!--没有web.xml文件时，允许继续打包-->
                    <failOnMissingWebXml>false</failOnMissingWebXml>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

## 打包成jar包
FastChar允许开发者将项目打包成独立的jar包，部署到Tomcat中，当Tomcat启动时，FastChar将自动加载
主项目jar包。

maven配置方式与[嵌入式项目](start-deploy-embedded.md)打包方式一致。

==**需要做的额外必要配置，如下：**==

::: tabs

@tab thin-jar打包方式的MANIFEST.MF配置

```xml {7-13}
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <version>3.3.0</version>
    <configuration>
        <archive>
            <!--追加额外的MANIFEST.MF配置-->
            <manifestEntries>
                <!--此参数必须配置-->
                <FastChar-Main-Project>true</FastChar-Main-Project>
                <!--此参数配置可选-->
                <deploy>true</deploy>
            </manifestEntries>
        </archive>
    </configuration>
</plugin>
```

@tab fat-jar打包方式的MANIFEST.MF配置

```xml {10-16}
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-assembly-plugin</artifactId>
    <version>3.6.0</version>
    <configuration>
        <archive>
            <manifest>
                <mainClass>TestServer</mainClass>
            </manifest>
            <!--追加额外的MANIFEST.MF配置-->
            <manifestEntries>
                <!--此参数必须配置-->
                <FastChar-Main-Project>true</FastChar-Main-Project>
                <!--此参数配置可选-->
                <deploy>true</deploy>
            </manifestEntries>
        </archive>
        <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
        </descriptorRefs>
    </configuration>
    <executions>
        <execution>
            <id>make-assembly</id>
            <phase>package</phase>
            <goals>
                <goal>single</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

:::



::: warning 说明
在jar包的 MANIFEST.MF 加入 `FastChar-Main-Project` 配置，告诉FastChar此jar包是主项目jar包，将优先加载此jar包。
:::


### 获取项目jar包的MANIFEST配置

当项目打包成jar包运行时，开发者可以在系统初始化的时候获取到jar包中的 MANIFEST.MF 配置，如下：


```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
    
         //当项目是jar包方式加载时，获取jar包内的 MANIFEST.MF 配置
         Attributes mainAttributes = engine.getProjectManifest().getMainAttributes();
        
         //可以根据参数判断项目是否是线上版本运行
         boolean deploy = FastBooleanUtils.formatToBoolean(mainAttributes.getValue("deploy"), false);
        
        /**此处省略其他配置代码**/
    }
}
```

### 部署的位置
项目打包成jar包后，需要放入到tomcat指定的 `project_name/WEB-INF/lib` 目录下才能正常运行，tomcat的webapp项目部署目录结构如下：

```
project_name/  # 项目启动后运行的名称，也就是地址栏里的名称
└── WEB-INF/
    ├── classes/ # 项目编译的class文件目录【项目打包成jar后，此目录可删除不需要】
    └── lib/ # 项目存放第三方jar包的目录【项目的jar也要存放在此目录里】
```

::: warning 说明
可以看出项目打包成jar包后，其实也是以第三方jar包方式进行引用。
:::



## 本地编译后部署
如果开发者使用的开发环境与需要部署的服务器环境都为都是分离式项目，运行容器是Tomcat，
那么开发者可以直接将本地编译后代码目录复制到服务器中。

这种部署方式较为直接，对于后期的维护较便利。例如，开发者可以直接复制本地编译后的某个.class文件替换到服务器中。



