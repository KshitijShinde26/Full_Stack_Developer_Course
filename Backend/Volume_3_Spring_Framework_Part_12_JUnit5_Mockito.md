# Volume 3 --- Spring Framework & Spring Boot

# Part 12: Testing with JUnit 5 & Mockito

> Learn how to write reliable unit tests and mock dependencies in Spring
> Boot.

------------------------------------------------------------------------

# 1. Why Testing?

Testing helps you: - Catch bugs early - Refactor safely - Improve code
quality - Build confidence before deployment

Types: - Unit Testing - Integration Testing - End-to-End Testing

------------------------------------------------------------------------

# 2. JUnit 5

JUnit 5 is the standard testing framework for Java.

Common annotations:

  Annotation      Purpose
  --------------- ---------------------------
  `@Test`         Test method
  `@BeforeEach`   Run before every test
  `@AfterEach`    Cleanup after each test
  `@BeforeAll`    Run once before all tests
  `@AfterAll`     Run once after all tests

Example:

``` java
@Test
void shouldAddNumbers() {
    assertEquals(5, 2 + 3);
}
```

------------------------------------------------------------------------

# 3. Assertions

Common assertions:

``` java
assertEquals()
assertNotEquals()
assertTrue()
assertFalse()
assertNull()
assertNotNull()
assertThrows()
```

------------------------------------------------------------------------

# 4. Mockito

Mockito creates mock objects for dependencies.

Example:

``` java
@Mock
private StudentRepository repository;

@InjectMocks
private StudentService service;
```

------------------------------------------------------------------------

# 5. Mocking Behavior

``` java
when(repository.findById(1L))
    .thenReturn(Optional.of(student));
```

Verify interactions:

``` java
verify(repository).save(student);
```

------------------------------------------------------------------------

# 6. Testing Service Layer

Test: - Business logic - Validations - Exception handling

Mock: - Repository - External APIs - Email services

------------------------------------------------------------------------

# 7. Testing Controllers

Use:

``` java
@WebMvcTest
```

Test: - Endpoints - Status codes - JSON responses - Validation errors

------------------------------------------------------------------------

# 8. SpringBootTest

``` java
@SpringBootTest
```

Loads the full application context for integration testing.

Use when multiple components work together.

------------------------------------------------------------------------

# 9. MockMvc

Example:

``` java
mockMvc.perform(get("/api/students"))
       .andExpect(status().isOk());
```

Useful for testing REST APIs without starting a real server.

------------------------------------------------------------------------

# 10. Exception Testing

``` java
assertThrows(
    ResourceNotFoundException.class,
    () -> service.getStudent(99L)
);
```

------------------------------------------------------------------------

# 11. Best Practices

-   Test one behavior per test
-   Use descriptive test names
-   Mock external systems
-   Keep tests independent
-   Follow Arrange-Act-Assert (AAA)

------------------------------------------------------------------------

# 12. Common Mistakes

-   Testing implementation instead of behavior
-   Overusing mocks
-   Shared test data
-   Ignoring edge cases

------------------------------------------------------------------------

# 13. Interview Questions

1.  What is JUnit 5?
2.  Why use Mockito?
3.  What is a mock?
4.  `@Mock` vs `@InjectMocks`?
5.  Unit test vs Integration test?
6.  What is MockMvc?
7.  When should you use `@SpringBootTest`?
8.  What does `verify()` do?
9.  What is `assertThrows()`?
10. Why is testing important?

------------------------------------------------------------------------

# 14. Mini Project

Write tests for: - StudentService - StudentController - Login API -
Registration API - Exception handling - Validation

Aim for high code coverage while keeping tests meaningful.

------------------------------------------------------------------------

# 15. Revision Checklist

-   [ ] JUnit 5
-   [ ] Assertions
-   [ ] Mockito
-   [ ] Mock Objects
-   [ ] MockMvc
-   [ ] SpringBootTest
-   [ ] Service Testing
-   [ ] Controller Testing
-   [ ] Exception Testing
-   [ ] Interview Questions

> Next Chapter: Swagger / OpenAPI
