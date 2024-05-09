# 内容加解密组件

## 介绍
FastChar核心组件，内置了内容的加解密功能，包含MD5、AES、RSA。

## 使用
开发者可以直接通过静态方法  `FastChar.getSecurity()` 选择调用加密的方法。

## MD5加密
方法 `FastChar.getSecurity().MD5_Encrypt(String value)` 如下：

```java
public void test() {
    try {
        //MD5加密
        FastChar.getSecurity().MD5_Encrypt("password");
    } catch (Exception e) {
        e.printStackTrace();
    }

}
```


## AES加解密
加密方法 `FastChar.getSecurity().AES_Encrypt(String password,String value)` 

解密方法 `FastChar.getSecurity().AES_Decrypt(String password,String value)` 

如下示例：

```java
public void test() {
    try {
        //AES加密
        FastChar.getSecurity().AES_Encrypt("123456", "内容");
    
        //AES解密
        FastChar.getSecurity().AES_Decrypt("123456", "RrtydXXqFXrC14OZ7RQLsw==");
        
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```


## RSA加解密

::: warning Java使用RSA关键参数说明
rsa加密的 `padding` 值 `RSA/NONE/PKCS1Padding`
:::


### 公钥加密-私钥解密

加密方法 `FastChar.getSecurity().RSA_Encrypt_PublicKey(String publicKey,String value)`

解密方法：`FastChar.getSecurity().RSA_Decrypt_PrivateKey(String privateKey,String value)`

如下示例：

```java
public void test() {
    try {
        
        //使用公钥 rsa_public_1024.pem 加密
        FastChar.getSecurity().RSA_Encrypt_PublicKey(FastFileUtils.readFileToString(new File("rsa_public_1024.pem")), "内容");

        //使用私钥 rsa_private_pkcs8_1024.pem 解密
        FastChar.getSecurity().RSA_Decrypt_PrivateKey(FastFileUtils.readFileToString(new File("rsa_private_pkcs8_1024.pem")), "qpcuCKJ3vEDjGI+J4ho/t177tuyEFO3sM5v5lcsw5TYGpBSrdu8W9Gwsr9alPMqBux5Bk7fVTmQo\n" +
                "F2XeaXtKwMGy/ck2GdqYFSPoXliX2LGOB+DDjLeaWNwNwPpnR4U8TUH2a3bnixgezrnVIjZ3G5hb\n" +
                "EV5aokVTR/dxVEor0C0=");
        
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```


### 私钥加密-公钥解密

加密方法 `FastChar.getSecurity().RSA_Encrypt_PrivateKey(String privateKey,String value)`

解密方法：`FastChar.getSecurity().RSA_Decrypt_PublicKey(String publicKey,String value)`

如下示例：

```java
public void test() {
    try {
        
        //使用私钥 rsa_private_pkcs8_1024.pem 加密
        FastChar.getSecurity().RSA_Encrypt_PrivateKey(FastFileUtils.readFileToString(new File("rsa_private_pkcs8_1024.pem")), "内容");

        //使用公钥 rsa_public_1024.pem 解密
        FastChar.getSecurity().RSA_Decrypt_PublicKey(FastFileUtils.readFileToString(new File("rsa_public_1024.pem")), "qpcuCKJ3vEDjGI+J4ho/t177tuyEFO3sM5v5lcsw5TYGpBSrdu8W9Gwsr9alPMqBux5Bk7fVTmQo\n" +
                "F2XeaXtKwMGy/ck2GdqYFSPoXliX2LGOB+DDjLeaWNwNwPpnR4U8TUH2a3bnixgezrnVIjZ3G5hb\n" +
                "EV5aokVTR/dxVEor0C0=");
        
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

### 上述示例中的公钥与私钥

::: tabs

@tab rsa_public_1024.pem

```text
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyGgxpYR0aNkKRw9xvNrgdFbWp
DkmP3+TXcVyipU+IjWnxjDAh8cXcR1+mNT9a8k0rJbDgDUpfr6jNMqelIadKCqxK
TDdvIwyg/BR39+KORNwb86GLNXa4GBAhB4v2HMFmaVAdQSBFy4/mIzIlNYk4DLnX
cXNJUDWwetzk4dcWTwIDAQAB
```

@tab rsa_private_pkcs8_1024.pem
```text
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALIaDGlhHRo2QpHD
3G82uB0VtakOSY/f5NdxXKKlT4iNafGMMCHxxdxHX6Y1P1ryTSslsOANSl+vqM0y
p6Uhp0oKrEpMN28jDKD8FHf34o5E3BvzoYs1drgYECEHi/YcwWZpUB1BIEXLj+Yj
MiU1iTgMuddxc0lQNbB63OTh1xZPAgMBAAECgYEApNDGO57LN76OzCXckG6q4v98
JP47xREEzPrzJvCkMVHsgMOip0b+O2MxeLY98wPXtd4jWLPz56i/JWWDDqWeELMQ
L636a18zwp0iU2/8/d3cG0Mumecfl3HCbmzLJj2J6UKty3JisFVLa4IKDKye4T6+
I8OX6rgbv2qn+bJKjcECQQDhs4ve9H9UziwrZAwSYbiex6swv2XmE359ki42URPX
N3yDaNZAFZyAo7NvKu6jJtIgcqhHORRmEdVUrvMx5O39AkEAygKxq4WfxGMfEqb2
vkvLCIp1BOSoLFRWzsIGeVLYx51nOlQ5Do6VeHXv2iEnJSlfNomypxaWgX9e/RXq
jXNBOwJAE1ETkoRodXCj1R7d7aDRdT1viF+JMBTRCZw+OkXcJdpI3NJXK+rtlxDr
pYMOI4aKC17kyhu3hDjYgkPq6oVGXQJAYop34sSXD/SONsoNePx9+ReZR57GzoEB
q3AIOmyIZK9KqLBm+Mvi69UUAGLFtqH82RzIcitZlaftTSXAuelr+wJBAKv+WRag
9JN5JjNiE5vo27RaQ/raS2qlW0/3dxCM02Sgk4H9U72dOULDCHC8/ij47prIN7Zs
zyP55j7fPQrPnZs=
```