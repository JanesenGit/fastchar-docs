# FastJsonWrap组件

## 介绍
FastChar核心组件，主要用于快速读写JSON字符的内容，无需进行类型转换操作，类似 `javascript` 操作JSON对象一样方便快捷。

## 使用
开发者调用FastChar提供的静态方法 `FastChar.getJsonWrap()` 获得 `FastJsonWrap` 对象后，即可操作json字符串内容。

::: warning
json字符的内容操作涉及到json的转换，所以必须使用 [Json组件](json-info.md)
:::

## 获取json的一级属性值
```java
public static void main(String[] args) {
    String jsonStr = "{'code':'123456','user':{'userId':1,'dept':{'deptId':1}}}";
    String code = FastChar.getJsonWrap(jsonStr).getString("code");
    System.out.println(code);
}
```


## 获取json的多级属性值
支持 `${attr.attr.attr}` 表达式，获取深层次的对象属性值！也可省略 `${}` 格式！

```java
public static void main(String[] args) {
    String jsonStr = "{'code':'123456','user':{'userId':1,'dept':{'deptId':1}}}";
    
    int userId = FastChar.getJsonWrap(jsonStr).getInt("${user.userId}");
    System.out.println(userId);
    
    int deptId = FastChar.getJsonWrap(jsonStr).getInt("user.dept.deptId");
    System.out.println(deptId);
}
```

## 获取json的数组内容
```java
public static void main(String[] args) {
    String jsonStr = "{'code':'123456','user':{'userId':1,'dept':{'deptId':1}},'values':[1,2,3,4]}";
    int anInt = FastChar.getJsonWrap(jsonStr).getInt("values[0]");//取values数组中的第一个内容
    System.out.println(anInt);
}
```



## 遍历json的数组内容
```java
public static void main(String[] args) {
    String jsonStr = "{'code':'123456','user':{'userId':1,'dept':{'deptId':1}},'values':[1,2,3,4]}";
    
    //获取数组的长度，语法与 javascript 类似
    int length = FastChar.getJsonWrap(jsonStr).getInt("values.length");
    for (int i = 0; i < length; i++) {
        
        //遍历下标取值
        int anInt = FastChar.getJsonWrap(jsonStr).getInt("values[" + i + "]");
        System.out.println(anInt);
    }
}
```

## 修改json属性内容
```java
public static void main(String[] args) {
    String jsonStr = "{'code':'123456','user':{'userId':1,'dept':{'deptId':1}},'values':[1,2,3,4]}";

    FastJsonWrap jsonWrap = FastChar.getJsonWrap(jsonStr);

    jsonWrap.getEditor("code")//修改一级属性值
            .setValue("111111");
    
    jsonWrap.getEditor("user.userId")//修改多级属性值
            .setValue("2");

    jsonWrap.getEditor("user.dept.deptId")//修改多级属性值
            .setValue("3");
            
    //获取修改后的json字符串
    System.out.println(jsonWrap.toJson());
}
```

## 增加json属性

```java
public static void main(String[] args) {
    String jsonStr = "{'code':'123456','user':{'userId':1,'dept':{'deptId':1}},'values':[1,2,3,4]}";

    Map<String, Object> moreAttr = new HashMap<String, Object>();
    moreAttr.put("name", "用户");
    moreAttr.put("role", 0);

    FastJsonWrap jsonWrap = FastChar.getJsonWrap(jsonStr);

    jsonWrap.getEditor("values")
            .addValue(moreAttr);

    jsonWrap.getEditor("user.dept")
        .addValue("deptName", "部门名称");
                
    //获取修改后的json字符串
    System.out.println(jsonWrap.toJson());
}
```
