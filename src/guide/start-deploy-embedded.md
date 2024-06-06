# 嵌入式项目
开发者使用嵌入式的[Tomcat](start-server.md#使用嵌入式tomcat)、[Jetty](start-server.md#使用嵌入式jetty)或[Undertow](start-server.md#使用嵌入式undertow)运行项目，可以将项目打包成独立的Jar包运行。

## 打包fat-jar部署
开发者可以将项目打包成单个jar包（fat-jar），然后运行这个jar即可启动项目。以maven项目为例，在pom.xml加入插件即可，如下：

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

### 打包结果
最终会打包成一个独立的`project.jar`包。



## 打包thin-jar部署
顾名思义 打包“廋”jar包，将项目第三方引用包和项目运行包分离打包，这样可以做到下次更新项目运行包的时候不用重复打包第三方jar包，
减少打包时间。

以maven项目为例，在pom.xml加入插件即可，如下：

```xml

<profiles>
    <profile>
        <id>thin-jar</id>
        <properties>
            <pom.package>jar</pom.package>
        </properties>
        <build>
            <finalName>${project.name}</finalName>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-jar-plugin</artifactId>
                    <version>3.3.0</version>
                    <configuration>
                        <archive>
                            <manifest>
                                <!-- 指定入口函数 -->
                                <mainClass>TestServer</mainClass>
                                <!-- 是否要把第三方jar放到manifest的classpath中 注意：这个配置不是说把依赖打进配置中，只是说把这个工程需要哪些依赖说明下-->
                                <addClasspath>true</addClasspath>
                                <!-- 去该目标下去找依赖的jar包 -->
                                <classpathPrefix>lib</classpathPrefix>
                            </manifest>
                        </archive>
                    </configuration>
                </plugin>
            </plugins>
        </build>
    </profile>

    <profile>
        <!--单独打包项目引用的第三方jar包lib文件夹内-->
        <id>thin-jar-dependencies-lib</id>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-dependency-plugin</artifactId>
                    <version>3.6.1</version>
                    <executions>
                        <execution>
                            <id>copy-dependencies</id>
                            <phase>package</phase>
                            <goals>
                                <goal>copy-dependencies</goal>
                            </goals>
                            <configuration>
                                <type>jar</type>
                                <includeTypes>jar</includeTypes>
                                <outputDirectory>${project.build.directory}/lib</outputDirectory>
                            </configuration>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>


```

::: warning 注意
此处配置使用了maven的 profiles 配置，所以在使用maven打包时，请勾选中相应的 Profiles 
:::

### 打包结果
最终打包会生成 `lib` 文件夹和 `project.jar` 包。

::: info 说明
lib 是存放项目引用的所有第三方jar包，所以lib文件夹与project.jar文件必须处于同一级别目录下。
:::



## 演示
### fat-jar打包maven项目
war和fatjar两种打包方式，在maven项目中，都是在maven执行到 package 命令时开始打包，以 idea 开发环境为例，按照如下步骤即可：

- 步骤一

![maven_package_1.png](/images/maven_package_1.png)


- 步骤二

![maven_package_1.png](/images/maven_package_2.png)



### thin-jar打包maven项目
由于介绍中使用了profiles配置，所以需要勾选对应操作如下：

![maven_package_profiles.png](/images/maven_package_profiles.png)

然后在重复 [fat-jar打包的操作](start-deploy-embedded.md#fat-jar打包maven项目)


## linux运行jar包的脚本构建

### 第一步
在服务器任意位置新建 `server.sh` 文件。


### 第二步
将以下代码做部分修改后复制到 `server.sh` 文件中。

```shell{4,6}

#!/bin/bash

SERVICE_NAME="test_project" #替换成自己任意命名的服务名称

JAR_PATH="/data/test.jar" #替换成自己的jar包的绝对路径


# 以下代码切勿修改
PID_PATH="$(dirname $0)/server.pid"
OUT_PATH="$(dirname $0)/server.out"


case "$1" in
    start)
        echo "Starting $SERVICE_NAME ..."
        if [ -f $PID_PATH ]; then
            PID=$(cat $PID_PATH);
            echo "$SERVICE_NAME stopping ..."
            kill $PID;
            echo "$SERVICE_NAME stopped ..."
            rm $PID_PATH
        fi
        nohup java -jar $JAR_PATH  $2 >> $OUT_PATH 2>&1&
        echo $! > $PID_PATH
        echo "$SERVICE_NAME started ..."
    ;;
    stop)
        if [ -f $PID_PATH ]; then
            PID=$(cat $PID_PATH);
            echo "$SERVICE_NAME stopping ..."
            kill $PID;
            echo "$SERVICE_NAME stopped ..."
            rm $PID_PATH
        else
            echo "$SERVICE_NAME stopped ..."
        fi
    ;;
esac

```

### 使用说明

命令行中，进入 `server.sh` 所在目录后执行如下命令：

* 启动或重启JAR包命令： `server.sh start`;

* 启动或重启JAR包并携带参数命令： `server.sh start deploy`;

* 停止JAR包命令： `server.sh stop`;





