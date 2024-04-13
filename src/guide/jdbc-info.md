# 数据库读写操作JDBC
FastChar 默认提供了数据库的读写操作工具了 `FastDB` ，开发者可以通过 `FastChar.getDB()` 获取工具类对象。

## select查询
方法 `select(String sqlStr, Object... params)` 执行sql查询语句，如下：
```java
public void test(){
        List<FastEntity<?>> select = FastChar
                                .getDB()
                                .select("select * from fc_user where userRole = ? ", 1);
}
```

## select分页查询
方法 `select(int page, int pageSize, String sqlStr, Object... params) ` 执行sql分页查询语句，如下：
```java
public void test() {
    FastPage<FastEntity<?>> result = FastChar
            .getDB().
            select(1, 20, "select * from fc_user where userRole = ? ", 1);
    int page = result.getPage();//获取当前页数
    int pageSize = result.getPageSize();//获取每页大小
    int totalRow = result.getTotalRow();//获取总行数
    List<FastEntity<?>> list = result.getList();//获取列表数据
}
```

## selectFirst 查询第一条数据
方法 `selectFirst(String sqlStr, Object... params)` 执行sql查询语句，并返回第一条数据，如下：

```java
public void test() {
    FastEntity<?> result = FastChar
            .getDB().
            selectFirst("select * from fc_user where userId = ? ", 1);
}
```

::: danger
此方法 `selectFirst` 作用是获取 sql语句 查询列表的第一条数据，
所以 sql 语句一定要做好条件筛选，避免出现 查询了 几千条 而只返回第一条照成效率问题。
:::


## selectLast 查询最后一条数据
方法 `selectLast(String sqlStr, Object... params)` 执行sql查询语句，并返回最后一条数据，如下：

```java
public void test() {
    FastEntity<?> result = FastChar
            .getDB().
            selectLast("select * from fc_user where userRole = ? ", 1);
}
```

::: danger
此方法 `selectLast` 作用是获取 sql语句 查询列表的最后一条数据，
所以 sql 语句一定要做好条件筛选，避免出现 查询了 几千条 而只返回最后一条照成效率问题。
:::


## update更新数据
方法 `update(String sqlStr, Object... params)` 执行更新sql语句，如下：
```java
public void test(){
    int result = FastChar
                    .getDB().
                    update("update fc_user set userNickName = ? where userRole = ? ", "新的昵称",1);
                    
    //result 代表受影响的行数
}
```

## insert插入数据
方法 `insert(String sqlStr, Object... params)` 执行更新sql语句，如下：
```java
public void test(){
    int result = FastChar
            .getDB()
            .insert("insert into fc_user values ( ? , ? , ? )  ", "用户昵称","手机号码",1);
    //result 返回数据的主键值
}
```


## batch批量执行多个sql
方法 `batch(String[] sqlArray, int batchSize)` 执行更新sql语句，如下：
```java
public void test(){
    int[] result = FastChar
            .getDB()
            .batch(new String[]{"sql1","sql2",……}, 10000);
    //result 执行批量 索引对应的sql 执行受影响行数
}
```

## batch批量执行单个sql
方法 `batch(String sqlStr, List<Object[]> params, int batchSize)` 执行更新sql语句，如下：
```java
public void test(){
    List<Object[]> params = new ArrayList<>();
    //批量插入fc_user表的数据参数
    
    int[] result = FastChar
            .getDB()
            .batch("insert into fc_user values ( ? , ? , ? )",params, 10000);
    //result 执行批量 索引对应的sql 执行受影响行数
}
```

## 单个事务执行

方法 `beginTransaction` 开启事务，

方法 `endTransaction` 结束事务，

方法 `rollbackTransaction` 回滚事务。

如下：

```java
public void test() {
    FastDB fastDB = FastChar.getDB();
    try {
        fastDB.beginTransaction();//开启一个事务
        
        fastDB.setLog(false)
                .batch(realSqlStr, 100000);//批量执行sql
                
        fastDB.endTransaction();//结束并提交事务
    } catch (Exception e) {
        e.printStackTrace();
        fastDB.rollbackTransaction();//回滚事务
    }
}
```


## 线程事务执行
FastChar允许开发者开启线程事务，线程事务开启后，在同一个线程下，通过 `FastDB` 执行的sql语句统一交由事务处理。如下：

```java

public void test() {
    //开启一个线程事务
    FastChar.beginDatabaseThreadTransaction();
    try {
        FastChar.getDB().setLog(false)
                .batch(realSqlStr, 100000);//批量执行sql
        
        FcUserEntity.dao().addUser();//执行其他方法
        
        FcDeptEntity.dao().addDept();//执行其他方法
                
        FastChar.endDatabaseThreadTransaction();//结束并统一提交事务
    } catch (Exception e) {
        e.printStackTrace();
        FastChar.rollbackDatabaseThreadTransaction();//回滚事务
    }
}

```


