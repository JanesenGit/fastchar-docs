# FastChar-OSS插件

## 介绍
主要用于操作OSS对象存储服务器，方便开发者快速的对接OSS对象存储服务器，目前已对接的OSS服务器有：[阿里云OSS](https://www.aliyun.com/product/oss)、
[腾讯云COS](https://cloud.tencent.com/act/pro/cosagg)和[天翼云OSS](https://www.ctyun.cn/document/10026693/10026940)。

如果开发者需要其他云存储对接，可在评论区留言😁

## 使用

### 引入工具包
开发者需要集成FastChar-OSS [![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar-oss?label=maven-fastchar-oss)](https://mvnrepository.com/artifact/com.fastchar/fastchar-oss) 
 [Github](https://github.com/JanesenGit/FastChar-OSS)的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-oss</artifactId>
    <version>1.6.1</version>
</dependency>
```

::: tip
此处引用的仅仅是FastChar-OSS的工具包，由于FastChar-OSS是集成了众多厂家的工具包，所以开发者需要根据自身使用类型还需要单独引入厂家的官网OSS包。
:::

### 代码中使用
`FastChar-OSS`核心原理使用[代理器](../guide/overrider-info.md#介绍)重写了`FastChar`的官方类`FastFile`类，所以开发者无需做特别处理，只要正常使用`FastFile`的`getUrl`即可。如下：

在 FastAction自动解析附件并保存了附件，所以开发者获取上传附件的方法极其简单，如下：

```java
public void updateUser(){
    //获取参数
    FastFile<?> userHeadImg = getParamFile();
    
    //获取附件保存后的相对的url地址 ，此时FastChar-OSS自动将文件上传到OSS中，并返回可访问的oss地址
    String fileUrl=userHeadImg.getUrl();
    /**省略其他业务判断逻辑**/
    
    responseText("更新成功！");
}
```

::: tip
上述代码与介绍`FastAction`获取[附件参数](../guide/action-info.md#获取上传的附件)的代码一样，
由此可以看出在利用[代理器](../guide/overrider-info.md#介绍)的功能使用`FastChar-OSS`插件时，对于项目是**无感**操作的，
也就是说**去除**和**加入** `FastChar-OSS`插件对于项目的主要代码来说是没有任何影响的。
:::

## 接入阿里云OSS
开发者使用阿里云OSS，需要引入阿里云的官网oss包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/com.aliyun.oss/aliyun-sdk-oss -->
<dependency>
    <groupId>com.aliyun.oss</groupId>
    <artifactId>aliyun-sdk-oss</artifactId>
    <version>3.17.2</version>
</dependency>
```
### 配置阿里云OSS

- 配置类 `FastAliOSSConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //阿里云OSS配置
        engine.getConfig(FastAliOSSConfig.class)
                .setDebug(true)
                .setAccessKeyId("LTAI********2bpg")
                .setAccessKeySecret("XGEHj**********erbHC")
                .setEndPoint(FastChar.getProperties().getString("endpoint"))//上传文件的终端位置
                .setBlock("*******",//blockName
                        "https://******.oss-cn-beijing.aliyuncs.com",//block公开访问的域名
                         FastAliOSSBlock.AliSecurityEnum.Block_Public_Read);//block访问权限，注意：此处应该为公开可读权限
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}

```

::: info 说明
完成阿里云OSS配置后，即可[使用](fastchar-oss.md#使用)OSS对象存储服务器的功能。
:::



## 接入腾讯云COS
开发者使用腾讯云COS，需要引入腾讯云的官网cos包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<!-- https://mvnrepository.com/artifact/com.qcloud/cos_api -->
<dependency>
    <groupId>com.qcloud</groupId>
    <artifactId>cos_api</artifactId>
    <version>5.6.185</version>
</dependency>
```
### 配置腾讯云COS

- 配置类 `FastTencentOSSConfig`

```java

public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //腾讯云COS配置
        engine.getConfig(FastTencentOSSConfig.class)
                .setDebug(true)
                .setAppId("130****591")
                .setSecretId("AKID***************NmO")
                .setSecretKey("D3t********************2Ien")
                .setRegionName("*******")
                .setBlock("******",//blockName
                        "https://********.cos.ap-chengdu.myqcloud.com",//block公开访问的域名
                        FastTencentOSSBlock.TencentSecurityEnum.Block_Public_Read);//block访问权限，注意：此处应该为公开可读权限
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}

```

::: info 说明
完成腾讯云COS配置后，即可[使用](fastchar-oss.md#使用)OSS对象存储服务器的功能。
:::



## 接入天翼云OSS
开发者使用天翼云OSS，需要引入天翼云的官网cos包。

由于天翼云OSS未将包上传到maven中，所以需要开发者自行[下载SDK](https://oos-cn.ctyunapi.cn/sdk/oos/java/oos-java-sdk-6.5.7.zip)工具包，并引入到项目中。

以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.amazonaws</groupId>
    <artifactId>oos-sdk</artifactId>
    <scope>system</scope>
    <version>6.5.4</version>
    <systemPath>${project.basedir}/libs/oos-java-sdk-6.5.4.jar</systemPath>
</dependency>
```
### 配置天翼云OSS

- 配置类 `FastCtyunOSSConfig`

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //天翼云经典对象存储版本配置
        engine.getConfig(FastCtyunOSSConfig.class)
                .setAccessKeyId("0bce******3f")
                .setSecretAccessKey("c9a1fe***********1d15e1")
                .setEndPoint("oos-******.cn")
                .setBlock("*****", //blockName
                "https://oos-hbwh.ctyunapi.cn/*****/",//block公开访问的域名
                 FastCtyunOSSBlock.CtyunSecurityEnum.Block_Public_Read);//block访问权限，注意：此处应该为公开可读权限
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}

```
::: danger
天翼云需要手动配置JS前端跨域配置，才能在前端访问到图片或其他文件， [查看文档](https://www.ctyun.cn/document/10026693/10026940)。
:::




::: info 说明
完成天翼云OSS配置后，即可[使用](fastchar-oss.md#使用)OSS对象存储服务器的功能。
:::



## 优先级
如果阿里云OSS、腾讯COS和天翼云的OSS的相关jar包都存在项目中，并都完成了配置。

FastChar-OSS 选择的优先级是根据 ==代码配置的自上到下的顺序选择==，顺序越是靠后配置的oss，则优先级越高。





