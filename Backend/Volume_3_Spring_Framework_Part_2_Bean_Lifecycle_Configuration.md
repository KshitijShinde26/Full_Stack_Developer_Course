# Volume 3 --- Spring Framework & Spring Boot

## Part 2: Spring Bean Lifecycle & Configuration

# Bean Lifecycle

A Spring Bean goes through several phases from creation to destruction.

``` text
Container Starts
      ↓
Bean Instantiated
      ↓
Dependencies Injected
      ↓
@PostConstruct
      ↓
Bean Ready
      ↓
Application Running
      ↓
@PreDestroy
      ↓
Bean Destroyed
```

------------------------------------------------------------------------

# Bean Creation

``` java
@Component
public class Student {

    public Student() {
        System.out.println("Bean Created");
    }
}
```

Spring creates this object automatically because it is annotated with
`@Component`.

------------------------------------------------------------------------

# Dependency Injection Phase

``` java
@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }
}
```

The container injects `StudentRepository` before the bean is ready.

------------------------------------------------------------------------

# Initialization

## @PostConstruct

Runs once after dependency injection.

``` java
@PostConstruct
public void init() {
    System.out.println("Initialization Logic");
}
```

Typical uses: - Load configuration - Initialize cache - Open resources

------------------------------------------------------------------------

# Destruction

## @PreDestroy

Runs before the bean is removed.

``` java
@PreDestroy
public void destroy() {
    System.out.println("Cleanup");
}
```

Typical uses: - Close files - Release connections - Stop background
tasks

------------------------------------------------------------------------

# Bean Configuration

## Component Scanning

``` java
@SpringBootApplication
public class Application {}
```

`@SpringBootApplication` includes component scanning by default.

------------------------------------------------------------------------

## Java Configuration

``` java
@Configuration
public class AppConfig {

    @Bean
    public Course course() {
        return new Course();
    }
}
```

`@Bean` is useful for classes you cannot annotate directly.

------------------------------------------------------------------------

# XML Configuration (Legacy)

``` xml
<bean id="student"
      class="com.example.Student"/>
```

Modern Spring applications generally prefer Java configuration and
annotations.

------------------------------------------------------------------------

# @Configuration vs @Component

  @Configuration                   @Component
  -------------------------------- --------------------------------
  Defines configuration            Generic bean
  Usually contains @Bean methods   Represents application classes

------------------------------------------------------------------------

# Bean Scopes

  Scope         Description
  ------------- -----------------------------------------
  singleton     Default, one instance
  prototype     New instance every request to container
  request       One per HTTP request
  session       One per HTTP session
  application   Shared across web app

------------------------------------------------------------------------

# Bean Scope Example

``` java
@Component
@Scope("prototype")
public class Report {}
```

------------------------------------------------------------------------

# @Primary

Choose the default implementation.

``` java
@Primary
@Service
class CardPaymentService implements PaymentService {}
```

------------------------------------------------------------------------

# @Qualifier

Select a specific implementation.

``` java
@Autowired
public PaymentController(
    @Qualifier("upiPaymentService")
    PaymentService service) {
}
```

------------------------------------------------------------------------

# Bean Lifecycle Interview Questions

1.  Explain the Spring Bean Lifecycle.
2.  Difference between @Component and @Bean?
3.  What is @Configuration?
4.  Why use @PostConstruct?
5.  Why use @PreDestroy?
6.  What is Component Scanning?
7.  @Primary vs @Qualifier?
8.  Singleton vs Prototype?

### Quick Answers

-   Spring manages bean creation and destruction.
-   `@Bean` is declared inside configuration classes.
-   `@Primary` provides a default implementation.
-   `@Qualifier` selects a specific bean when multiple exist.

------------------------------------------------------------------------

# Best Practices

-   Prefer Java configuration over XML.
-   Keep initialization lightweight.
-   Use constructor injection.
-   Use singleton scope unless another scope is required.
-   Avoid heavy work inside constructors.

------------------------------------------------------------------------

# Practice

1.  Create a singleton bean.
2.  Create a prototype bean.
3.  Use @Qualifier with two services.
4.  Configure a bean using @Bean.
5.  Demonstrate @PostConstruct and @PreDestroy.

------------------------------------------------------------------------

# Revision Checklist

-   [ ] Bean Lifecycle
-   [ ] @PostConstruct
-   [ ] @PreDestroy
-   [ ] @Configuration
-   [ ] @Bean
-   [ ] Component Scanning
-   [ ] Bean Scopes
-   [ ] @Primary
-   [ ] @Qualifier
-   [ ] Interview Questions

> End of Volume 3 --- Part 2
