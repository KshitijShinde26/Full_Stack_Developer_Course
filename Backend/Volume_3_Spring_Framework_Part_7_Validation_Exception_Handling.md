# Volume 3 --- Spring Framework & Spring Boot

# Part 7: Validation & Global Exception Handling (Complete Guide)

> **Goal:** Learn how to validate incoming requests, create custom
> validations, handle exceptions globally, and return clean API error
> responses.

------------------------------------------------------------------------

# 1. Why Validation?

Validation ensures that only valid data enters your application.

Without validation: - Invalid emails - Empty names - Negative ages -
Security risks - Database inconsistencies

Example:

``` json
{
  "name": "",
  "email": "abc",
  "age": -5
}
```

Validation prevents such invalid requests.

------------------------------------------------------------------------

# 2. Bean Validation

Spring Boot uses **Jakarta Bean Validation**.

Dependency:

``` xml
spring-boot-starter-validation
```

------------------------------------------------------------------------

# 3. Common Validation Annotations

  Annotation   Purpose
  ------------ -----------------------------------
  @NotNull     Value cannot be null
  @NotBlank    String cannot be blank
  @NotEmpty    Collection/String cannot be empty
  @Size        Length validation
  @Min         Minimum value
  @Max         Maximum value
  @Positive    Positive number
  @Email       Valid email
  @Pattern     Regular expression

------------------------------------------------------------------------

# 4. DTO Validation

``` java
public class StudentDTO {

    @NotBlank(message="Name is required")
    private String name;

    @Email(message="Invalid email")
    private String email;

    @Min(value=18)
    private int age;
}
```

------------------------------------------------------------------------

# 5. Trigger Validation

``` java
@PostMapping
public ResponseEntity<?> save(
        @Valid @RequestBody StudentDTO dto){
    return ResponseEntity.ok(dto);
}
```

`@Valid` triggers validation before the controller logic executes.

------------------------------------------------------------------------

# 6. Validation Flow

``` text
Client
   │
Request
   │
@Valid
   │
Validation
   │
Valid? ── Yes ──► Controller
   │
   No
   │
Exception
   │
Global Exception Handler
   │
JSON Error Response
```

------------------------------------------------------------------------

# 7. Custom Validation

Create a custom annotation:

``` java
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidPhone {}
```

Implement a validator:

``` java
public class PhoneValidator
implements ConstraintValidator<ValidPhone,String>{

    public boolean isValid(String value,
                           ConstraintValidatorContext context){
        return value != null && value.matches("[0-9]{10}");
    }
}
```

------------------------------------------------------------------------

# 8. Exception Handling

Instead of writing try-catch blocks in every controller, use a global
handler.

``` java
@RestControllerAdvice
public class GlobalExceptionHandler{
}
```

------------------------------------------------------------------------

# 9. Handle Validation Errors

``` java
@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<?> handleValidation(
MethodArgumentNotValidException ex){

    return ResponseEntity.badRequest().body("Validation Failed");
}
```

------------------------------------------------------------------------

# 10. Custom Exception

``` java
public class ResourceNotFoundException
extends RuntimeException{

    public ResourceNotFoundException(String message){
        super(message);
    }
}
```

Throw it:

``` java
throw new ResourceNotFoundException(
"Student Not Found");
```

------------------------------------------------------------------------

# 11. Handle Custom Exception

``` java
@ExceptionHandler(ResourceNotFoundException.class)
public ResponseEntity<?> handle(
ResourceNotFoundException ex){

    return ResponseEntity.status(404)
            .body(ex.getMessage());
}
```

------------------------------------------------------------------------

# 12. Standard Error Response

Example:

``` json
{
  "timestamp":"2026-07-29T10:30:00",
  "status":404,
  "error":"Not Found",
  "message":"Student Not Found",
  "path":"/api/students/1"
}
```

Benefits: - Consistent API - Easier debugging - Better frontend
integration

------------------------------------------------------------------------

# 13. Common Exceptions

-   MethodArgumentNotValidException
-   ResourceNotFoundException
-   IllegalArgumentException
-   DataIntegrityViolationException
-   HttpMessageNotReadableException
-   AccessDeniedException

------------------------------------------------------------------------

# 14. Validation Best Practices

-   Always validate DTOs.
-   Never validate entities directly.
-   Use custom messages.
-   Return meaningful error responses.
-   Keep validation in the API layer.

------------------------------------------------------------------------

# 15. Exception Handling Best Practices

-   Centralize error handling.
-   Never expose stack traces.
-   Use proper HTTP status codes.
-   Log server-side errors.
-   Return consistent JSON.

------------------------------------------------------------------------

# 16. Common Mistakes

❌ No validation

❌ Returning stack traces

❌ Generic 500 responses

❌ Validating entities instead of DTOs

❌ Inconsistent error formats

------------------------------------------------------------------------

# 17. Interview Questions

1.  Why is validation important?
2.  What is Bean Validation?
3.  @NotNull vs @NotBlank?
4.  What does @Valid do?
5.  Why use DTO validation?
6.  What is @RestControllerAdvice?
7.  What is @ExceptionHandler?
8.  How do you create custom validation?
9.  Why use custom exceptions?
10. What should an API error response contain?

------------------------------------------------------------------------

# 18. Mini Project

Extend Student Management API:

-   Validate email
-   Validate age
-   Validate phone
-   Handle invalid requests
-   Return custom JSON errors
-   Handle "Student Not Found"

------------------------------------------------------------------------

# 19. Revision Checklist

-   [ ] Bean Validation
-   [ ] Validation Annotations
-   [ ] DTO Validation
-   [ ] @Valid
-   [ ] Custom Validation
-   [ ] @RestControllerAdvice
-   [ ] @ExceptionHandler
-   [ ] Custom Exceptions
-   [ ] Error Response Design
-   [ ] Interview Questions

> Next Chapter: Spring Security
