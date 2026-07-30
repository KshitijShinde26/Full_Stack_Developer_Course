# Volume 3 --- Spring Framework & Spring Boot

# Part 3: Spring Boot & Spring Initializr

> **Goal:** Understand why Spring Boot exists, how it works internally,
> and how to create your first production-ready Spring Boot application.

------------------------------------------------------------------------

# 1. What is Spring Boot?

Spring Boot is an extension of the Spring Framework that simplifies the
development of Java applications by providing:

-   Auto Configuration
-   Embedded Web Server (Tomcat)
-   Starter Dependencies
-   Production-ready features
-   Minimal configuration

Instead of spending hours configuring XML files and dependencies, Spring
Boot lets you start building applications immediately.

------------------------------------------------------------------------

# 2. Spring vs Spring Boot

  Spring Framework           Spring Boot
  -------------------------- ----------------------
  Manual configuration       Auto Configuration
  External Tomcat required   Embedded Tomcat
  More setup                 Rapid development
  Individual dependencies    Starter dependencies

------------------------------------------------------------------------

# 3. Spring Boot Architecture

``` text
Client
   │
DispatcherServlet
   │
Controller
   │
Service
   │
Repository
   │
Database
```

------------------------------------------------------------------------

# 4. Features

-   Auto Configuration
-   Starter Dependencies
-   Embedded Tomcat
-   Spring Initializr
-   Actuator
-   DevTools
-   Production Ready

------------------------------------------------------------------------

# 5. Spring Initializr

Visit: https://start.spring.io

Choose: - Project: Maven - Language: Java - Spring Boot: Latest Stable -
Packaging: Jar - Java: 21 (or your project version)

Recommended Dependencies: - Spring Web - Spring Data JPA - MySQL
Driver - Validation - Spring Security - Lombok - DevTools

------------------------------------------------------------------------

# 6. Standard Project Structure

``` text
src/
 ├── main/
 │    ├── java/
 │    │      ├── controller/
 │    │      ├── service/
 │    │      ├── repository/
 │    │      ├── entity/
 │    │      ├── dto/
 │    │      ├── config/
 │    │      └── Application.java
 │    └── resources/
 │           ├── application.properties
 │           └── static/
 └── test/
```

------------------------------------------------------------------------

# 7. @SpringBootApplication

``` java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

It combines: - @Configuration - @EnableAutoConfiguration -
@ComponentScan

------------------------------------------------------------------------

# 8. Auto Configuration

Spring Boot automatically configures beans based on: - Dependencies in
pom.xml - application.properties - Classpath

Example: If `spring-boot-starter-web` is present, Spring Boot
automatically configures: - DispatcherServlet - Embedded Tomcat - JSON
support - MVC configuration

------------------------------------------------------------------------

# 9. Starter Dependencies

Examples: - spring-boot-starter-web - spring-boot-starter-data-jpa -
spring-boot-starter-security - spring-boot-starter-validation -
spring-boot-starter-test

Advantages: - No dependency version conflicts - Faster setup - Easy
maintenance

------------------------------------------------------------------------

# 10. application.properties

``` properties
spring.application.name=StudentApp

server.port=8080

spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=password
```

------------------------------------------------------------------------

# 11. application.yml

``` yaml
server:
  port: 8080

spring:
  application:
    name: StudentApp
```

Properties vs YAML: - properties: simple key=value - YAML: cleaner for
nested configuration

------------------------------------------------------------------------

# 12. Embedded Tomcat

No separate Tomcat installation is required.

Run:

``` bash
mvn spring-boot:run
```

or run the `main()` method.

------------------------------------------------------------------------

# 13. Spring Boot DevTools

Benefits: - Automatic restart - Live reload - Faster development

Dependency:

``` xml
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-devtools</artifactId>
</dependency>
```

------------------------------------------------------------------------

# 14. Spring Profiles

Different configurations for: - dev - test - prod

Example:

``` properties
spring.profiles.active=dev
```

------------------------------------------------------------------------

# 15. Build & Run

``` bash
mvn clean install
mvn spring-boot:run
```

Create executable JAR:

``` bash
mvn package
java -jar target/app.jar
```

------------------------------------------------------------------------

# 16. Common Errors

## Port Already in Use

Change:

``` properties
server.port=8081
```

## Database Connection Failed

-   Check URL
-   Username
-   Password
-   Database running

## Bean Not Found

-   Missing @Component/@Service
-   Wrong package scanning

------------------------------------------------------------------------

# 17. Best Practices

-   Follow layered architecture.
-   Keep controllers thin.
-   Put business logic in services.
-   Use DTOs.
-   Externalize configuration.
-   Never hardcode secrets.

------------------------------------------------------------------------

# 18. Interview Questions

1.  What is Spring Boot?
2.  Why use Spring Boot?
3.  Explain Auto Configuration.
4.  What is @SpringBootApplication?
5.  What are Starter Dependencies?
6.  Embedded Tomcat vs External Tomcat?
7.  application.properties vs application.yml?
8.  What are Spring Profiles?
9.  How do you run a Spring Boot application?
10. Explain the project structure.

------------------------------------------------------------------------

# 19. Practice

1.  Create a Spring Boot project.
2.  Add Spring Web dependency.
3.  Change server port.
4.  Create a Hello World REST endpoint.
5.  Enable DevTools.

------------------------------------------------------------------------

# 20. Revision Checklist

-   [ ] Spring Boot Basics
-   [ ] Spring Initializr
-   [ ] Auto Configuration
-   [ ] Starter Dependencies
-   [ ] Project Structure
-   [ ] application.properties
-   [ ] YAML
-   [ ] DevTools
-   [ ] Profiles
-   [ ] Interview Questions

> Next Chapter: Spring MVC
