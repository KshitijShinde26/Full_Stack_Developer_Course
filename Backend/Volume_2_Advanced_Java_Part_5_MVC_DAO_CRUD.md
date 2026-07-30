# Volume 2 --- Advanced Java

## Part 5: MVC Architecture, JavaBeans, DAO Pattern & CRUD Application

# MVC Architecture

MVC stands for **Model-View-Controller**.

``` text
Browser
   |
Controller (Servlet)
   |
Service (Business Logic)
   |
DAO
   |
Database
   |
View (JSP)
```

## Components

### Model

Represents application data.

``` java
public class Student{
    private int id;
    private String name;

    public int getId(){ return id; }
    public void setId(int id){ this.id=id; }

    public String getName(){ return name; }
    public void setName(String name){ this.name=name; }
}
```

### View

JSP pages display data to users.

### Controller

Servlet receives requests, validates input, calls the service/DAO, and
forwards results to JSP.

------------------------------------------------------------------------

# JavaBeans

A JavaBean is a reusable Java class that: - Has a public no-argument
constructor - Uses private fields - Uses getters and setters -
Implements Serializable (recommended)

------------------------------------------------------------------------

# DAO Pattern

DAO (Data Access Object) separates database code from business logic.

``` text
Controller
    |
Service
    |
DAO
    |
Database
```

Benefits: - Loose coupling - Easier testing - Better maintainability

Example:

``` java
public interface StudentDAO{
    void save(Student s);
    Student findById(int id);
    List<Student> findAll();
    void update(Student s);
    void delete(int id);
}
```

------------------------------------------------------------------------

# Layered Architecture

``` text
Presentation Layer
        |
Controller Layer
        |
Service Layer
        |
DAO Layer
        |
Database
```

Responsibilities: - Presentation: UI - Controller: Request handling -
Service: Business rules - DAO: Database operations

------------------------------------------------------------------------

# CRUD Flow

## Create

JSP Form → Servlet → DAO → Database

## Read

Servlet → DAO → Database → JSP

## Update

User edits record → Servlet → DAO → Database

## Delete

Servlet → DAO → Database

------------------------------------------------------------------------

# Form Validation

Server-side validation is mandatory.

``` java
if(name == null || name.isBlank()){
    request.setAttribute("error","Name is required");
}
```

------------------------------------------------------------------------

# Project Structure

``` text
StudentManagement/
 ├── src/
 │   ├── controller/
 │   ├── service/
 │   ├── dao/
 │   ├── model/
 │   └── util/
 ├── webapp/
 │   ├── index.jsp
 │   ├── login.jsp
 │   └── students.jsp
 └── pom.xml
```

------------------------------------------------------------------------

# Common Interview Questions

1.  What is MVC?
2.  Why use DAO?
3.  JavaBean rules?
4.  Why separate layers?
5.  Advantages of layered architecture?
6.  Explain CRUD flow.
7.  Why validate on the server?

------------------------------------------------------------------------

# Mini Project

**Student Management System**

Features: - Login - Add Student - View Students - Update Student -
Delete Student - Search Student

Technology: - Java - JDBC - Servlet - JSP - MySQL - Apache Tomcat

------------------------------------------------------------------------

# Best Practices

-   Follow MVC.
-   Keep SQL only in DAO.
-   Avoid Java code in JSP.
-   Use PreparedStatement.
-   Validate all inputs.
-   Handle exceptions gracefully.

------------------------------------------------------------------------

# Revision Checklist

-   [ ] MVC
-   [ ] JavaBeans
-   [ ] DAO Pattern
-   [ ] Layered Architecture
-   [ ] CRUD
-   [ ] Validation
-   [ ] Project Structure
-   [ ] Interview Questions

> End of Volume 2 --- Part 5
