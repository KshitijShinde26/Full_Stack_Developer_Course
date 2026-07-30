# Volume 3 --- Spring Framework & Spring Boot

# Part 4: Spring MVC (Complete Guide)

> Learn how Spring MVC processes HTTP requests from the browser to the
> database and back.

------------------------------------------------------------------------

# 1. What is Spring MVC?

Spring MVC (Model-View-Controller) is the web framework of Spring used
to build web applications and REST APIs.

Benefits: - Clean separation of concerns - Easy request handling -
Validation support - REST support - Integration with Spring Boot

------------------------------------------------------------------------

# 2. MVC Architecture

``` text
Browser
   │
HTTP Request
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
   │
Response
```

------------------------------------------------------------------------

# 3. MVC Components

## Model

Represents application data.

``` java
public class Student {
    private Long id;
    private String name;
}
```

## View

JSP, Thymeleaf or JSON (REST).

## Controller

Handles incoming requests.

``` java
@RestController
@RequestMapping("/students")
public class StudentController {
}
```

------------------------------------------------------------------------

# 4. DispatcherServlet

The heart of Spring MVC.

Responsibilities: - Receives every request - Finds matching controller -
Calls business logic - Returns response

Request Flow:

``` text
Client
 ↓
DispatcherServlet
 ↓
Handler Mapping
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

------------------------------------------------------------------------

# 5. Controller Annotations

## @Controller

Returns a view.

``` java
@Controller
public class HomeController {
}
```

## @RestController

Returns JSON.

``` java
@RestController
@RequestMapping("/api")
public class StudentController {
}
```

------------------------------------------------------------------------

# 6. Request Mapping

``` java
@GetMapping("/students")
@PostMapping("/students")
@PutMapping("/students/{id}")
@DeleteMapping("/students/{id}")
```

------------------------------------------------------------------------

# 7. Path Variables

``` java
@GetMapping("/{id}")
public Student getStudent(@PathVariable Long id){
    return service.getStudent(id);
}
```

------------------------------------------------------------------------

# 8. Request Parameters

``` java
@GetMapping("/search")
public List<Student> search(
@RequestParam String name){
    return service.search(name);
}
```

------------------------------------------------------------------------

# 9. Request Body

``` java
@PostMapping
public Student save(
@RequestBody Student student){
    return service.save(student);
}
```

------------------------------------------------------------------------

# 10. ResponseEntity

``` java
@GetMapping("/{id}")
public ResponseEntity<Student> find(
@PathVariable Long id){
    return ResponseEntity.ok(service.find(id));
}
```

Useful status codes: - 200 OK - 201 Created - 204 No Content - 400 Bad
Request - 401 Unauthorized - 404 Not Found - 500 Internal Server Error

------------------------------------------------------------------------

# 11. CRUD REST API

  Method   URL              Purpose
  -------- ---------------- ---------
  GET      /students        Get all
  GET      /students/{id}   Get one
  POST     /students        Create
  PUT      /students/{id}   Update
  DELETE   /students/{id}   Delete

------------------------------------------------------------------------

# 12. DTO Pattern

Never expose entities directly.

``` java
public class StudentDTO{
    private String name;
    private String email;
}
```

Benefits: - Better security - API flexibility - Validation

------------------------------------------------------------------------

# 13. Validation

``` java
public class StudentDTO{

@NotBlank
private String name;

@Email
private String email;
}
```

``` java
@PostMapping
public ResponseEntity<?> save(
@Valid @RequestBody StudentDTO dto){
}
```

------------------------------------------------------------------------

# 14. Common Errors

### 404

Wrong URL or mapping.

### 405

Wrong HTTP method.

### 400

Validation failed.

### 500

Server-side exception.

------------------------------------------------------------------------

# 15. Best Practices

-   Keep controllers thin.
-   Move business logic to services.
-   Return DTOs.
-   Use ResponseEntity.
-   Validate input.
-   Use meaningful status codes.

------------------------------------------------------------------------

# 16. Interview Questions

1.  What is Spring MVC?
2.  Explain MVC architecture.
3.  What is DispatcherServlet?
4.  @Controller vs @RestController?
5.  @PathVariable vs @RequestParam?
6.  Why use @RequestBody?
7.  What is ResponseEntity?
8.  Why use DTO?
9.  Explain request lifecycle.
10. What are HTTP methods?

------------------------------------------------------------------------

# 17. Mini Project

Student Management REST API

Features: - Add Student - View Student - Update Student - Delete
Student - Search Student - Validation - Proper HTTP Status Codes

------------------------------------------------------------------------

# 18. Practice

-   Build CRUD API.
-   Add validation.
-   Test using Postman.
-   Return custom responses.

------------------------------------------------------------------------

# 19. Revision Checklist

-   [ ] MVC
-   [ ] DispatcherServlet
-   [ ] Controllers
-   [ ] Request Mapping
-   [ ] Path Variables
-   [ ] Request Parameters
-   [ ] RequestBody
-   [ ] ResponseEntity
-   [ ] DTO
-   [ ] Validation
-   [ ] Interview Questions

> Next: Spring Data JPA & Hibernate
