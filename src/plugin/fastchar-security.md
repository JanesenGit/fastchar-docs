# FastChar-Security插件

## 介绍
接口安全验证的工具包，使用FastChar-Security工具包，开发者可以快速的将接口加入安全验证，无效改动项目代码。

## 使用

### 引入工具包
开发者需要集成FastChar-Security [![Maven Central](https://img.shields.io/maven-central/v/com.fastchar/fastchar-security?label=maven-fastchar-security)](https://mvnrepository.com/artifact/com.fastchar/fastchar-security) 的工具包。以maven项目为例，在pom.xml中加入如下引用：

```xml
<dependency>
    <groupId>com.fastchar</groupId>
    <artifactId>fastchar-security</artifactId>
    <version>1.6.1</version>
</dependency>
```

### 构建安全验证信息

::: tabs

@tab 生成安全验证

FastChar-Security工具包中提供了一键生成安全验证的相关信息，所以开发者只要在main方法中一键生成即可，如下：

```java

public static void main(String[] args) throws Exception {
    
    //配置生成文件保存的地址，一般会项目目录下
    FastSecurityAuto.ProjectPath =Paths.get(System.getProperty("user.dir"), "TestSecurity").normalize().toAbsolutePath().toString();

    //构建验证方式为RSA秘钥长度为1024的文件
    FastSecurityAuto.buildRsa();

    //构建验证方式为RSA秘钥长度为2048的文件
    //FastSecurityAuto.buildRsa(2048);

    //构建验证方式为MD5签名的文件【不推荐，安全性较低】
    //FastSecurityAuto.buildMd5();
}
```

运行main方法后会在指定的目录下生成 `security` 文件夹，里面包含了所有相关信息的文件。目录结构如下：

```text
security/
└── rsa/
    ├── build-info.txt  #构建生成的信息
    ├── android_code.txt  #android端接入安全验证的代码
    ├── fast-security.js  #web前端接入安全验证的代码
    ├── ios/ 
    │   ├── RSA.h
    │   ├── RSA.m
    │   └── ios_code.txt  #ios端接入安全验证的代码
    ├── rsa_private_1024.pem  #rsa私钥
    ├── rsa_private_pkcs8_1024.pem  #rsa私钥 java中使用
    └── rsa_public_1024.pem  #rsa公钥
```

Android端、IOS端和Web前端使用方法，可查看构建生成的信息。


@tab 构建生成的信息

``` text
====================================================================================
后台使用说明：
* 1.请设置 FastSecurityConfig.securityModule 模式为 FastSecurityConfig.RSA_HEADER_TOKEN 
* 2.请将（1、RSA加密的密钥）配置到 FastSecurityConfig.rsaPassword 中！
* 3.请将（3、RSA 私钥pkcs8文件）配置到 FastSecurityConfig.rsaPrivateKeyPkcs8 中！
====================================================================================
Android和IOS前端使用说明：
* 1.请将生成的代码复制到对应的项目工程中。
* 2.请将代码生成的token值配置到http请求头中，键：token 值：（代码生成的token值）。
* 3.注意：token单次有效，所以每次http请求时都要生成新的token值。
====================================================================================
JS前端使用说明（支持微信小程序、VUE项目）：
* 1.请将生成的fast-security.js代码文件复制到对应的项目工程中，并完成引用。
* 2.执行JS代码 FastSecurity.token() 生成token配置到http请求头中，键：token 值：（代码生成的token值）。
* 注意：token单次有效，所以每次http请求时都要生成新的token值。
* 如果需要进一步保证安全，建议将fast-security.js中的代码进行高级混淆。介绍如下：
* JavaScript的密钥直接存在代码中，建议在进行JavaScript文件加密混淆！
* 在线混淆：https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
====================================================================================
接口安全验证相关文件-构建成功！
```

::: 



### 配置安全验证

```java
public class FastCharTestWeb implements IFastWeb {
    /**
     * web启动初始化
     * @param engine
     */
    @Override
    public void onInit(FastEngine engine) throws Exception {
        
        //接口安全配置
        engine.getConfig(FastSecurityConfig.class)
                .setDebug(engine.getConstant().isDebug())
                .setRsaPassword("58bc1c088fa1fe4ea1d0b3edff7eb350")//rsa验证key
                .setRsaPrivateKeyPkcs8("rsa_private_pkcs8_1024.pem")//rsa私钥
                .excludeRemote("localhost", "192.168.*")//排除远程ip的安全验证，一般用于本地调试
                .setSecurityModule(FastSecurityConfig.RSA_HEADER_TOKEN);//安全验证方式
        
        /**此处省略其他配置代码**/
    }
     /**此处省略其他代码**/
}

```


### 开启接口的安全验证
开发者使用FastChar-Security提供的注解 `AFastSecurity` 即可开始的开启接口的安全验证，如下：

::: tabs

@tab 标注在类上

```java

@AFastSecurity //注解标注在类上，那么类下的所有方法都将开启安全验证
public class TestAction extends FastAction {
    @Override
    protected String getRoute() {
        return null;
    }


    public void login() {

        responseJson(0, "登录成功！");
    }
}

```

@tab 标注在方法上

```java
public class TestAction extends FastAction {
    @Override
    protected String getRoute() {
        return null;
    }

    @AFastSecurity 
    public void login() {

        responseJson(0, "登录成功！");
    }
}

```

::: 

