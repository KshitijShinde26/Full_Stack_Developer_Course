# Volume 2 --- Advanced Java

## Part 1: JDBC (Java Database Connectivity)

# What is JDBC?

JDBC (Java Database Connectivity) is the standard Java API used to
connect Java applications with relational databases such as MySQL,
PostgreSQL, Oracle, and SQL Server.

It allows Java programs to: - Connect to a database - Execute SQL
queries - Retrieve data - Insert, update, and delete records

------------------------------------------------------------------------

# JDBC Architecture

``` text
Java Application
       |
    JDBC API
       |
 JDBC Driver Manager
       |
 JDBC Driver
       |
    Database
```

------------------------------------------------------------------------

# JDBC Components

## 1. Driver

The JDBC driver communicates with the database.

``` java
Class.forName("com.mysql.cj.jdbc.Driver");
```

## 2. Connection

Creates a connection with the database.

``` java
Connection con = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/studentdb",
    "root",
    "password"
);
```

## 3. Statement

Used to execute SQL queries.

-   Statement
-   PreparedStatement
-   CallableStatement

### Statement

``` java
Statement st = con.createStatement();
ResultSet rs = st.executeQuery("SELECT * FROM student");
```

### PreparedStatement (Recommended)

Why use it? - Prevents SQL Injection - Faster for repeated queries -
Easier to pass parameters

``` java
PreparedStatement ps =
con.prepareStatement(
"INSERT INTO student(name,age) VALUES(?,?)");

ps.setString(1,"Kshitij");
ps.setInt(2,20);

ps.executeUpdate();
```

------------------------------------------------------------------------

# ResultSet

Stores query results.

``` java
while(rs.next()){
    System.out.println(rs.getInt("id"));
    System.out.println(rs.getString("name"));
}
```

------------------------------------------------------------------------

# CRUD Operations

## Insert

``` java
INSERT INTO student(name) VALUES(?)
```

## Read

``` sql
SELECT * FROM student;
```

## Update

``` sql
UPDATE student
SET age=21
WHERE id=1;
```

## Delete

``` sql
DELETE FROM student
WHERE id=1;
```

------------------------------------------------------------------------

# Transactions

A transaction is a group of SQL operations treated as one unit.

``` java
con.setAutoCommit(false);

// SQL statements

con.commit();
```

Rollback:

``` java
con.rollback();
```

------------------------------------------------------------------------

# Batch Processing

Improves performance for multiple inserts.

``` java
ps.addBatch();
ps.executeBatch();
```

------------------------------------------------------------------------

# JDBC Best Practices

-   Always use PreparedStatement.
-   Close Connection, Statement, and ResultSet.
-   Use try-with-resources.
-   Avoid hardcoded credentials.
-   Handle SQLExceptions properly.

------------------------------------------------------------------------

# Common Interview Questions

### 1. What is JDBC?

JDBC is the Java API used to communicate with relational databases.

### 2. Statement vs PreparedStatement?

  Statement                  | PreparedStatement
  ---------------------------|------------------------
  Slower                     | Faster
  SQL Injection possible     | Prevents SQL Injection
  Query compiled every time  |Precompiled

### 3. executeQuery() vs executeUpdate()

-   executeQuery() → SELECT
-   executeUpdate() → INSERT, UPDATE, DELETE

### 4. What is SQL Injection?

A security vulnerability where malicious SQL is injected through user
input.

### 5. Why is PreparedStatement preferred?

Because it is secure, reusable, and more efficient.

------------------------------------------------------------------------

# Practice Programs

1.  Student CRUD using JDBC
2.  Login System
3.  Employee Database
4.  Bank Account CRUD
5.  Batch Insert Example

------------------------------------------------------------------------

# Revision Checklist

-   [ ] JDBC Architecture
-   [ ] Driver
-   [ ] Connection
-   [ ] Statement
-   [ ] PreparedStatement
-   [ ] ResultSet
-   [ ] CRUD
-   [ ] Transactions
-   [ ] Batch Processing
-   [ ] Interview Questions

> End of Volume 2 --- Part 1
