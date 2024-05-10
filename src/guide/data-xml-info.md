# 数据库自动化

FastChar 框架中默认提供了核心数据库自动化功能，通过数据库的 `fastchar-database-*.xml` 配置后
FastChar 会自动识别 xml 里内容与数据库进行匹配实现如下几个自动操作：

1、数据库是否存在，不存在则创建数据库。

2、表格是否存在，不存在则创建表格。

3、字段是否存在，不存在则添加字段。

4、字段属性是否和绑定的数据库一致，不一致则修改字段。

::: danger 重要说明

FastChar同步原则是：**只增不删**。重要的事情再说三遍，**==只增不删==** 、 **==只增不删==** 、 **==只增不删==**

FastChar 绝对不会 主动删除数据库 的任何表或字段或其他配置 或与删除相关的所有操作，更不会主动删除数据库中的数据。

FastChar 数据库自动化 **==点到为止==**
:::

## 是否强制使用
FastChar **==不会强制==** 要求开发者使用数据库自动化功能，所以不用担心强制使用的问题，如果不需要使用，则不用创建任何  `fastchar-database-*.xml`
即可。

## 支持的数据库

数据库自动化FastChar默认支持：mysql、sql_server、oracle。

## 创建数据库xml文件

如果开发需要使用数据库自动化功能，在 `classess` 目录下创建一个以`fastchar-database`开头的xml文件，并配置数据库内容即可。
以maven项目为例在 `resources` 目录下新建，目录如下：

```
FastCharTest/
└── main/
    ├── java/
    └── resources/
        ├── config.properties
        ├── fastchar-database-appshare.xml # <- 我们在这里
        ├── fastchar-database-default.xml # <- 我们在这里
        └── fastchar-database-pay.xml # <- 我们在这里
```

::: tip 必读说明
如上所示，创建了三个xml数据库配置文件，最终FastChar框架会自动合并xml里的配置内容，
合并的优先级按照 `文件名称正序排序` 排序越靠后优先级越高
:::

## 配置数据库xml文件

具体的xml配置内容以及xml层次结构，如下：

::: warning
配置数据库xml 需要掌握 数据库的相关知识点。
:::


```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE database>
<database name="*">

    <table name="fc_user" comment="用户管理">
        <column name="userId" comment="编号" type="int" length="11"
                primary="true" autoincrement="true" nullable="not null"/>

        <column name="userHeadImg" comment="用户头像" type="varchar"
                nullable="null" length="500"/>

        <column name="userNickName" comment="用户昵称" type="varchar"
                nullable="null" length="500"/>

        <column name="userEmail" comment="用户邮箱" type="varchar"
                nullable="null" length="500"/>

        <column name="userPassword" comment="登录密码" type="varchar"
                nullable="null" length="500" password="true"/>

        <column name="userState" comment="用户状态" type="int" length="11"
                nullable="null"/>

        <column name="userDateTime" comment="录入时间" type="datetime"
                nullable="null" length="6"/>
    </table>

</database>
```

在`fastchar-database.xml`中，使用的标签总共只有三个标签：`database`、`table`和`column`标签，层级关系如上述的案例。

## database标签属性

### name 
- 说明：数据库名称，用于自动创建数据库时传入的数据库名
- 类型：`String`
- 必填：是

### code
- 说明：数据库唯一标识，用于匹配代码中配置的[数据源](datasource-info.md#多个数据源配置)，当`code`值一致时，检测此数据源并自动同步xml配置
- 必填：否
- 类型：`String`
- 默认：与 `name` 属性值一致
- 举例：值为 `data_source_a` 表示只同步到此数据源，其他配置的数据源不同步。

### enable
- 说明：是否启用此数据库的自定化同步，当为true时，FastChar会自动检测数据库信息，如果不存在则创建！
- 必填：否
- 类型：`boolean`
- 可选值：`true` 或 `false`
- 默认：`true`



## table标签属性

### name
- 说明：数据库名称，用于自动创建表格时传入的表格名称
- 类型：`String`
- 必填：是

### comment
- 说明：表格的备注，如果数据库支持表格备注，则在创建表格时会自动增加备注信息。
- 类型：`String`
- 必填：否

### enable
- 说明：是否启用，当为true时，FastChar会自动检测数据库表格信息，如果表格不存在则创建表格！
- 类型：`boolean`
- 必填：否
- 可选值：`true` 或 `false` 
- 默认：`true`

## column标签属性

### name
- 说明：字段名称，用于自动创建表格字段时传入的字段名称
- 类型：`String`
- 必填：是

### comment
- 说明：字段的备注，如果数据库支持表格字段备注，则在创建表格字段时会自动增加备注信息。
- 类型：`String`
- 必填：否

### primary
- 说明：主键字段。
- 必填：否
- 类型：`boolean`
- 可选值：`true` 或 `false`


### autoincrement
- 说明：自增字段。
- 必填：否
- 类型：`boolean`
- 可选值：`true` 或 `false`


### type
- 说明：字段的类型。
- 类型：`String`
- 必填：是
- 可选值：按照使用的数据库规则配置！
- 举例：mysql数据库字符类型 varchar

### length
- 说明：	字段的长度。
- 类型：`String`
- 必填：是
- 可选值：按照使用的数据库规则配置！
- 举例：mysql中double类型的长度配置 `11,2`

### nullable
- 说明：字段可空
- 必填：否
- 类型：`String`
- 可选值：`null` 或 ` not null `
- 默认：`null`

### charset
- 说明：字段字符集
- 必填：否
- 类型：`String`
- 可选值：按照使用的数据库规则配置！
- 默认：`utf8mb4`

### value
- 说明：字段默认值
- 必填：否
- 类型：`String`


### encrypt
- 说明：加密字段内容。由 [FastEntity](entity-info.md) 在操作数据库 `insert`、`update`、`select` 时预处理数据内容！加密由 [字段内容加密](data-xml-info.md#字段内容加密) 提供支持！
- 必填：否
- 类型：`boolean`
- 可选值：`true` 或 `false`

### password
- 说明：密码字段。由 [FastEntity](entity-info.md) 在操作数据库 `insert`、`update` 时预处理数据，进行 `MD5` 加密内容！加密由 [字段内容加密](data-xml-info.md#字段内容加密) 提供支持！
- 必填：否
- 类型：`boolean`
- 可选值：`true` 或 `false`

### enable
- 说明：是否启用，当为true时，FastChar会自动检测数据库表格字段信息，如果表格不存在字段则创建表格字段！
- 类型：`boolean`
- 必填：否
- 可选值：`true` 或 `false`
- 默认：`true`



## 字段内容加密
`IFastColumnSecurity` 接口。

[FastEntity](entity-info.md) 在操作数据库 `insert`、`update`、`select` 时，检测字段是否进行加密处理。

FastChar 内置了字段内容 MD5 单向加密 和 AES加解密 由 [内容加解密组件](../component/security-info.md) 提供支持。

实现 `IFastColumnSecurity` 接口代码如下：

```java

public class FastColumnSecurity implements IFastColumnSecurity {
    @Override
    public String encrypt(FastColumnInfo<?> columnInfo, String value) {
        if (FastStringUtils.isEmpty(value)) {
            return null;
        }
        if ("md5".equalsIgnoreCase(columnInfo.getEncrypt())) {
            return FastChar.getSecurity().MD5_Encrypt(value);
        } else if ("true".equalsIgnoreCase(columnInfo.getEncrypt())) {
            return FastChar.getSecurity().AES_Encrypt(FastChar.getConstant().getEncryptPassword(), value);
        }
        return value;
    }

    @Override
    public String decrypt(FastColumnInfo<?> columnInfo, String value) {
        if (FastStringUtils.isEmpty(value)) {
            return null;
        }
        if ("true".equalsIgnoreCase(columnInfo.getEncrypt())) {
            return FastChar.getSecurity().AES_Decrypt(FastChar.getConstant().getEncryptPassword(), value);
        }
        return value;
    }
}

```


## 自定义字段内容加密
如果开发者需要自定义 字段内容加密，只要实现 `IFastColumnSecurity` 接口， 并注册到 [类代理器](overrider-info.md#代理类的注册) 中即可。


