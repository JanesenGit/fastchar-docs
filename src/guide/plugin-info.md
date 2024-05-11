# 自定义插件

开发者可以借助[扫描器](scanner-info.md)组件，进行开发一系列插件提供主项目使用。

## 原理

开发者将开发结束的项目进行独立jar打包，提供给主项目使用即可。

而这个独立项目其实也是一个FasChar框架下的项目，只不过实现了部分功能。

::: warning 注意
独立项目的jar包，不建议打包成 fat-jar 项目，如果需要引用第三方插件，在主项目配置引用即可。
:::

## 原则
FastChar建议开发者在开发插件的原则是：代码中完成`直观可追溯`的配置，然后`直接使用`。

```flow
st=>start: 引用插件
e=>end: 使用插件
op1=>operation: 配置插件

st(right)->op1(right)->e
```


## 实现

==**在项目打包成jar时，必须在 `META-INF/MANIFEST.MF` 中配置属性 `FastChar-Scanner:true`**==

表示允许 [扫描器](scanner-info.md)扫描此jar包。

完成配置后即可实现一个插件项目了。

## MANIFEST.MF 配置属性介绍

* FastChar-Scanner
  * 表示允许 [扫描器](scanner-info.md)扫描此jar包。
  * 可选值：true、false


* FastChar-Extract
  * 表示是否解压jar包内除去.class文件的其他资源文件到本地项目的相对路径中
  * 可选值：true、false


* FastChar-Exclude
  * 表示在解压时需要排除的文件或路径，支持通配符 ‘*’ 配置。
  * 例如：/resources/*.bin


* FastChar-Plugin-Version
  * 表示当前插件的版本号，此版本与解压jar包内资源是否重复覆盖有关，当版本号不一致时，将解压覆盖，否则跳过解压。