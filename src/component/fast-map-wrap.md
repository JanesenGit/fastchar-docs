# FastMapWrap组件

## 介绍
FastChar 核心组件，用于快速获取 `Map<String,?>` 值。如下

```java
public static void main(String[] args) {
    Map<String, Object> map = new HashMap<String, Object>();
    map.put("userId", 1);
    map.put("userName", "用户名");
    map.put("isAdmin", true);
    boolean isAdmin = FastChar.getMapWrap(map).getBoolean("isAdmin");
}
```
[FastEntity数据载体](../guide/entity-info.md)的属性获取使用了此组件。

## 属性表达式获取
支持 `${attr.attr.attr}` 表达式，获取深层次的对象属性值！如下

```java
public static void main(String[] args) {
    Map<String, Object> map = new HashMap<String, Object>();
    map.put("userId", 1);
    
    Map<String, Object> dept = new HashMap<String, Object>();
    dept.put("deptId",2);
    dept.put("deptName","测试部门");
    
    map.put("dept", dept);
    String deptName = FastChar.getMapWrap(map).getString("${dept.deptName}");
}
```

::: danger 必读 
为了避免 `Map` 中存在 `key` 为 `dept.deptName`，所以在使用属性表达式取值时，必须使用 `${……}` 格式获取！
:::

## 更多方法
![fast-map-wrap.png](/images/fast-map-wrap.png)