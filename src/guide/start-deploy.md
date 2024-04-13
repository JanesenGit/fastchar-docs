# 打包部署
FastChar框架无特殊打包要求，所以开发者按照传统打包方式进行打包部署即可。

## 本地编译后部署
如果开发者使用的开发环境与需要部署的服务器环境都为tomcat，那么可以直接复制本地编译后的目录到服务器中。

这种部署方式较为直接，对于后期的维护较便利。例如，开发者可以直接复制本地编译后的某个.class文件替换到服务器中。

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

## 打包fatjar部署
开发者可以将项目打包成单个jar包（fatjar），然后运行这个jar即可启动项目。以maven项目为例，在pom.xml加入插件即可，如下：

采用的是 [maven-assembly-plugin](https://maven.apache.org/plugins/maven-assembly-plugin/plugin-info.html) 打包插件

```xml{4,11}
<project>
    <!--省略其他代码-->

    <packaging>jar</packaging>

    <build>
        <finalName>test_project</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-assembly-plugin</artifactId>
                <version>3.6.0</version>
                <configuration>
                    <archive>
                        <manifest>
                            <!--指定jar包运行的主要类，必须包含main方法-->
                            <mainClass>TestServer</mainClass>
                        </manifest>
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
        </plugins>
    </build>
</project>

```

## 开始打包maven项目
war和fatjar两种打包方式，在maven项目中，都是在maven执行到 package 命令时开始打包，以 idea 开发环境为例，按照如下步骤即可：

- 步骤一

![maven_package_1.png](/images/maven_package_1.png)


- 步骤二

![maven_package_1.png](/images/maven_package_2.png)




