# 全局扫描器
FastChar 的核心组件：FastScanner

## 介绍
FastScanner是FastChar的核心组件。项目初始化时，自动启动并全局扫描项目文件，包含项目的本地文件、项目引用的
jar包文件【[前提jar包允许被扫描](plugin-info.md#实现)】，借助扫描器即可实现自动化注册、自动化加载相关类或文件。FastChar允许开发者自主
实现接收器接收扫描器扫描到的相关文件。

## 实现一个接收器
开发者实现接口 `IFastScannerAcceptor` 并[注册到代理器](overrider-info.md#代理类的注册)中即可。如下代码：

::: tabs

@tab 接受扫描到的class类

```java
/**
 * FastAction类扫码接收器，自动注册FastAction类
 */
public class FastActionScannerAcceptor implements IFastScannerAcceptor {
    @Override
    public void onScannerClass(FastEngine engine, Class<?> scannedClass) throws Exception {
        if (FastAction.class.isAssignableFrom(scannedClass)) {
            engine.getActions().add((Class<? extends FastAction>) scannedClass);
        }
    }
}
```

@tab 接受扫描到的其他资源文件

```java
/**
 * fastchar-database-*.xml文件扫码接收器
 */
public class FastDatabaseXmlScannerAcceptor implements IFastScannerAcceptor {
    @Override
    public void onScannerResource(FastEngine engine, FastResource file) throws Exception {
        boolean xml = file.getName().toLowerCase().endsWith(".xml");
        String[] fast_data_base_file_prefix_array = FastStringUtils.splitByWholeSeparator(FastConstant.FAST_DATA_BASE_FILE_PREFIX, ",");
        for (String prefix : fast_data_base_file_prefix_array) {
            if (xml && file.getName().toLowerCase().startsWith(prefix)) {
                if (file.getName().toLowerCase().startsWith(prefix + "-")) {
                    engine.getDatabaseXml().parseDatabaseXml(file);
                } else {
                    FastChar.getLogger().warn(this.getClass(), "skip this file because there is no suffix ！[ " + file.getFile().getAbsolutePath() + " ]");
                }
                return;
            }
        }

        String[] fast_data_file_prefix_array = FastStringUtils.splitByWholeSeparator(FastConstant.FAST_DATA_FILE_PREFIX, ",");
        for (String prefix : fast_data_file_prefix_array) {
            if (xml && file.getName().toLowerCase().startsWith(prefix)) {
                if (file.getName().toLowerCase().startsWith(prefix + "-")) {
                    engine.getDatabaseXml().parseDataXml(file);
                } else {
                    FastChar.getLogger().warn(this.getClass(), "skip this file because there is no suffix ！[ " + file.getFile().getAbsolutePath() + " ]");
                }
                return;
            }
        }

    }
}

```

:::



::: warning 注意
实现的扫描器必须[注册到代理器](overrider-info.md#代理类的注册)中才会生效。
:::