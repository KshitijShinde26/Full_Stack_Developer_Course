# Volume 2 --- Advanced Java

## Part 6: Maven, Tomcat, WAR Deployment, Debugging & Placement Interview Guide

# Apache Maven

## What is Maven?

Maven is a build automation and dependency management tool for Java
projects.

### Advantages

-   Dependency management
-   Standard project structure
-   Automated builds
-   Plugin support

## Standard Project Structure

``` text
project/
├── src/
│   ├── main/
│   │   ├── java/
│   │   ├── resources/
│   │   └── webapp/
│   └── test/
├── pom.xml
└── target/
```

## pom.xml

The Project Object Model (POM) stores: - Project information -
Dependencies - Plugins - Java version - Packaging type

Example:

``` xml
<packaging>war</packaging>
```

------------------------------------------------------------------------

# Maven Build Lifecycle

``` text
validate
   ↓
compile
   ↓
test
   ↓
package
   ↓
verify
   ↓
install
   ↓
deploy
```

Useful commands:

``` bash
mvn clean
mvn compile
mvn test
mvn package
mvn install
```

------------------------------------------------------------------------

# Apache Tomcat

Tomcat is a Java Servlet container that runs Servlets and JSP
applications.

Deployment flow:

``` text
Java Project
     ↓
WAR File
     ↓
Tomcat
     ↓
Browser
```

------------------------------------------------------------------------

# WAR Packaging

WAR = Web Application Archive

``` bash
mvn clean package
```

Output:

``` text
target/
   StudentManagement.war
```

Deploy the WAR file to Tomcat's `webapps` folder.

------------------------------------------------------------------------

# web.xml

Deployment descriptor used for servlet configuration.

``` xml
<web-app>
    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
</web-app>
```

Modern projects usually prefer annotations like `@WebServlet`.

------------------------------------------------------------------------

# Logging

Instead of `System.out.println()`, use logging frameworks.

Benefits: - Better debugging - Configurable log levels -
Production-friendly

Common levels: - INFO - DEBUG - WARN - ERROR

------------------------------------------------------------------------

# Debugging Tips

-   Read stack traces from top to bottom.
-   Check NullPointerException causes.
-   Validate database connections.
-   Verify SQL queries.
-   Use breakpoints in IDEs.
-   Log important variables.

------------------------------------------------------------------------

# End-to-End Request Flow

``` text
Browser
   ↓
Servlet
   ↓
Service
   ↓
DAO
   ↓
Database
   ↓
DAO
   ↓
Service
   ↓
Servlet
   ↓
JSP
   ↓
Browser
```

------------------------------------------------------------------------

# Frequently Asked Interview Questions

1.  What is Maven?
2.  Why use Maven instead of manually adding JARs?
3.  Explain the Maven lifecycle.
4.  What is Tomcat?
5.  Difference between JAR and WAR?
6.  What is `pom.xml`?
7.  What is `web.xml`?
8.  Annotations vs XML configuration?
9.  What is the MVC architecture?
10. Explain the complete request flow in a Java web application.
11. How do you deploy a web application?
12. How do you debug JDBC connection issues?
13. What causes HTTP 404 and HTTP 500 errors?
14. How do you prevent SQL Injection?
15. Why is `PreparedStatement` preferred?

### Viva Questions

-   Why is JSP converted into a Servlet?
-   What is the role of a Servlet Container?
-   Explain `HttpSession`.
-   Difference between Cookie and Session.
-   Why is DAO used?
-   Explain layered architecture.

------------------------------------------------------------------------

# Placement Checklist

## Core Skills

-   JDBC
-   Servlets
-   JSP
-   Sessions
-   Cookies
-   MVC
-   DAO
-   CRUD
-   Maven
-   Tomcat

## Projects

-   Student Management System
-   Employee Management
-   Library Management

## Ready for Spring Boot?

If you understand the topics above, you have the foundation needed to
learn Spring Framework and Spring Boot effectively.

> End of Volume 2 --- Advanced Java Complete
