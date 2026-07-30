# Volume 3 --- Spring Framework & Spring Boot

## Part 1: Introduction to Spring Framework, IoC & Dependency Injection

# Why Spring?

Spring is the most popular Java framework for building enterprise
applications. It reduces boilerplate code, promotes loose coupling, and
simplifies web, database, security, and cloud development.

## Problems with Traditional Java

-   Tight coupling
-   Manual object creation
-   Difficult testing
-   Complex configuration

Example:

``` java
class Car{
    Engine engine = new Engine();
}
```

The `Car` class is tightly coupled to `Engine`.

------------------------------------------------------------------------

# What is Spring Framework?

Spring is a lightweight, open-source framework that provides
infrastructure support for Java applications.

Major modules: - Spring Core - Spring Context - Spring AOP - Spring
JDBC - Spring ORM - Spring MVC - Spring Security - Spring Test

------------------------------------------------------------------------

# Spring Architecture

``` text
Application
     |
Spring Framework
 ├── Core Container
 ├── Data Access
 ├── Web
 ├── Security
 └── Testing
```

------------------------------------------------------------------------

# Inversion of Control (IoC)

## Definition

**IoC** means the framework manages object creation and lifecycle
instead of your code.

Without Spring:

``` java
Engine engine = new Engine();
Car car = new Car(engine);
```

With Spring:

``` java
Car car = context.getBean(Car.class);
```

Spring creates and manages the object.

### Benefits

-   Loose coupling
-   Easier testing
-   Better maintainability
-   Reusable components

------------------------------------------------------------------------

# Dependency Injection (DI)

Dependency Injection is a way of providing required objects
(dependencies) to a class instead of letting the class create them.

## Constructor Injection (Recommended)

``` java
@Component
class Car{

    private final Engine engine;

    public Car(Engine engine){
        this.engine = engine;
    }
}
```

## Setter Injection

``` java
@Autowired
public void setEngine(Engine engine){
    this.engine = engine;
}
```

## Field Injection

``` java
@Autowired
private Engine engine;
```

⚠ Constructor injection is generally preferred because it makes
dependencies explicit and supports immutable fields.

------------------------------------------------------------------------

# Spring Bean

A **Bean** is an object managed by the Spring IoC Container.

``` java
@Component
class Student{}
```

Retrieve bean:

``` java
Student s = context.getBean(Student.class);
```

------------------------------------------------------------------------

# IoC Container

The IoC Container: - Creates beans - Injects dependencies - Manages
lifecycle - Reads configuration

Types: - BeanFactory - ApplicationContext (most commonly used)

------------------------------------------------------------------------

# Bean Scopes

  Scope         Description
  ------------- -------------------------------
  singleton     One instance (default)
  prototype     New object every request
  request       One bean per HTTP request
  session       One bean per HTTP session
  application   Shared across the application

------------------------------------------------------------------------

# Common Spring Annotations

  Annotation        Purpose
  ----------------- ----------------------
  @Component        Generic bean
  @Service          Business logic
  @Repository       Data access
  @Controller       MVC controller
  @RestController   REST controller
  @Autowired        Dependency injection
  @Configuration    Configuration class
  @Bean             Declares a bean

------------------------------------------------------------------------

# Loose Coupling Example

``` java
interface PaymentService{
    void pay();
}

@Service
class UpiPayment implements PaymentService{
    public void pay(){}
}

@Service
class CardPayment implements PaymentService{
    public void pay(){}
}
```

The implementation can be changed without modifying client code.

------------------------------------------------------------------------

# Best Practices

-   Prefer constructor injection.
-   Depend on interfaces instead of implementations.
-   Keep services focused on one responsibility.
-   Avoid field injection in production code.
-   Use meaningful bean names only when needed.

------------------------------------------------------------------------

# Interview Questions

1.  What is Spring Framework?
2.  What problems does Spring solve?
3.  What is IoC?
4.  What is Dependency Injection?
5.  Constructor vs Setter Injection?
6.  BeanFactory vs ApplicationContext?
7.  What is a Spring Bean?
8.  What are Bean Scopes?
9.  @Component vs @Service vs @Repository?
10. Why is constructor injection preferred?

### Quick Answers

-   IoC transfers object creation to the framework.
-   DI provides dependencies from outside the class.
-   ApplicationContext extends BeanFactory with enterprise features.
-   Singleton is the default bean scope.

------------------------------------------------------------------------

# Practice

1.  Create a Student bean.
2.  Inject a Course bean using constructor injection.
3.  Compare constructor and setter injection.
4.  Create multiple services implementing one interface.

------------------------------------------------------------------------

# Revision Checklist

-   [ ] Spring Overview
-   [ ] IoC
-   [ ] Dependency Injection
-   [ ] Beans
-   [ ] IoC Container
-   [ ] Bean Scopes
-   [ ] Spring Annotations
-   [ ] Interview Questions

> End of Volume 3 --- Part 1
