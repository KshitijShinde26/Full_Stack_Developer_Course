# Volume 3 --- Spring Framework & Spring Boot

# Part 6: REST API Development (Complete Guide)

> Build clean, scalable, production-ready REST APIs using Spring Boot.

------------------------------------------------------------------------

# 1. What is a REST API?

REST (Representational State Transfer) is an architectural style for
communication between clients and servers using HTTP.

Examples: - Mobile App ↔ Backend - React App ↔ Spring Boot - AI Chatbot
↔ LLM API

------------------------------------------------------------------------

# 2. REST Principles

-   Client-Server Architecture
-   Stateless Communication
-   Resource-Based URLs
-   Uniform Interface
-   Cacheable Responses
-   Layered System

Stateless means the server does **not** store client session state
between requests.

------------------------------------------------------------------------

# 3. Resource Design

Good:

``` text
/api/students
/api/students/1
/api/students/1/courses
```

Avoid:

``` text
/getStudent
/createStudent
/deleteStudent
```

------------------------------------------------------------------------

# 4. HTTP Methods

  Method   Purpose
  -------- ------------------------
  GET      Read
  POST     Create
  PUT      Update entire resource
  PATCH    Partial update
  DELETE   Delete

------------------------------------------------------------------------

# 5. HTTP Status Codes

  Code   Meaning
  ------ -----------------------
  200    OK
  201    Created
  204    No Content
  400    Bad Request
  401    Unauthorized
  403    Forbidden
  404    Not Found
  409    Conflict
  500    Internal Server Error

------------------------------------------------------------------------

# 6. REST Controller

``` java
@RestController
@RequestMapping("/api/students")
public class StudentController {}
```

------------------------------------------------------------------------

# 7. CRUD Endpoints

``` java
@GetMapping
@PostMapping
@GetMapping("/{id}")
@PutMapping("/{id}")
@PatchMapping("/{id}")
@DeleteMapping("/{id}")
```

------------------------------------------------------------------------

# 8. Request Body

``` java
@PostMapping
public StudentDTO create(
@Valid @RequestBody StudentDTO dto){
    return service.create(dto);
}
```

------------------------------------------------------------------------

# 9. DTO Pattern

Never expose entities directly.

Benefits: - Security - Validation - Loose coupling - API versioning

------------------------------------------------------------------------

# 10. ResponseEntity

``` java
return ResponseEntity.status(201).body(student);
```

Useful methods: - ok() - created() - noContent() - badRequest() -
status()

------------------------------------------------------------------------

# 11. Validation

``` java
@NotBlank
private String name;

@Email
private String email;
```

Controller:

``` java
public ResponseEntity<?> save(
@Valid @RequestBody StudentDTO dto){}
```

------------------------------------------------------------------------

# 12. Exception Handling

``` java
@RestControllerAdvice
public class GlobalExceptionHandler {}
```

Handle: - ResourceNotFoundException - Validation errors - Database
errors - Generic exceptions

------------------------------------------------------------------------

# 13. API Versioning

URI Versioning:

``` text
/api/v1/students
/api/v2/students
```

------------------------------------------------------------------------

# 14. Pagination

``` java
GET /students?page=0&size=10
```

Sorting:

``` text
GET /students?sort=name,asc
```

------------------------------------------------------------------------

# 15. Filtering

Examples:

``` text
GET /students?department=IT
GET /students?city=Pune
```

------------------------------------------------------------------------

# 16. Testing with Postman

Test: - GET - POST - PUT - PATCH - DELETE

Verify: - Status code - JSON body - Headers

------------------------------------------------------------------------

# 17. REST Best Practices

-   Use nouns in URLs
-   Use correct HTTP methods
-   Return proper status codes
-   Validate every request
-   Return consistent JSON
-   Keep APIs versioned
-   Document APIs

------------------------------------------------------------------------

# 18. Common Mistakes

-   Returning entities directly
-   Ignoring validation
-   Using GET for updates
-   Generic error messages
-   Inconsistent endpoints

------------------------------------------------------------------------

# 19. Security Considerations

-   HTTPS
-   JWT Authentication
-   Input Validation
-   SQL Injection Prevention
-   Rate Limiting
-   CORS Configuration

------------------------------------------------------------------------

# 20. Interview Questions

1.  What is REST?
2.  REST vs SOAP?
3.  What is Statelessness?
4.  GET vs POST?
5.  PUT vs PATCH?
6.  Why use ResponseEntity?
7.  Why use DTO?
8.  Explain HTTP status codes.
9.  What is API versioning?
10. How do you secure REST APIs?

------------------------------------------------------------------------

# 21. Mini Project

Student REST API

Features: - CRUD - Validation - Pagination - Sorting - Filtering -
Exception Handling - JWT Ready

------------------------------------------------------------------------

# 22. Revision Checklist

-   [ ] REST Principles
-   [ ] HTTP Methods
-   [ ] Status Codes
-   [ ] REST Controllers
-   [ ] DTO
-   [ ] ResponseEntity
-   [ ] Validation
-   [ ] Exception Handling
-   [ ] Versioning
-   [ ] Pagination
-   [ ] Security
-   [ ] Interview Questions

> Next Chapter: Validation & Global Exception Handling
