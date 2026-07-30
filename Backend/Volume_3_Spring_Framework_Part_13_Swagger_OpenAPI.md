# Volume 3 --- Spring Framework & Spring Boot

# Part 13: Swagger / OpenAPI (Complete Guide)

> Learn how to document, test, and share your REST APIs professionally
> using Swagger UI and the OpenAPI Specification.

------------------------------------------------------------------------

# 1. What is Swagger?

Swagger is a set of tools for designing, documenting, and testing REST
APIs.

Today, the industry standard is the **OpenAPI Specification (OAS)**, and
Swagger UI is the most popular tool for visualizing it.

Benefits: - Interactive API documentation - Test APIs directly from the
browser - Eases frontend-backend collaboration - Generates client SDKs

------------------------------------------------------------------------

# 2. Why Use Swagger?

Without Swagger: - Developers rely on external documents. - API changes
are harder to track.

With Swagger: - Live documentation - Automatic endpoint discovery -
Better developer experience

------------------------------------------------------------------------

# 3. Spring Boot Dependency

Example (springdoc-openapi):

``` xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>latest</version>
</dependency>
```

------------------------------------------------------------------------

# 4. Accessing Swagger UI

After running the application:

``` text
http://localhost:8080/swagger-ui.html
```

or

``` text
http://localhost:8080/swagger-ui/index.html
```

------------------------------------------------------------------------

# 5. OpenAPI Endpoint

The generated API specification is usually available at:

``` text
/v3/api-docs
```

------------------------------------------------------------------------

# 6. Basic Annotations

``` java
@Tag(name = "Student API")
@RestController
public class StudentController {
}
```

``` java
@Operation(summary = "Get Student By ID")
@GetMapping("/{id}")
```

------------------------------------------------------------------------

# 7. Documenting Parameters

``` java
@Parameter(description = "Student ID")
@PathVariable Long id
```

------------------------------------------------------------------------

# 8. Documenting Request Bodies

``` java
@RequestBody
StudentDTO dto
```

Use schema descriptions to explain each field.

------------------------------------------------------------------------

# 9. Response Documentation

``` java
@ApiResponse(
 responseCode="200",
 description="Student Found"
)
```

Common responses: - 200 OK - 201 Created - 400 Bad Request - 401
Unauthorized - 404 Not Found - 500 Internal Server Error

------------------------------------------------------------------------

# 10. JWT Support in Swagger

Configure a Bearer Authentication scheme.

``` text
Authorize
↓
Paste JWT
↓
Test Protected APIs
```

This allows authenticated API testing directly in Swagger UI.

------------------------------------------------------------------------

# 11. Organizing APIs

Use tags such as: - Authentication - Students - Expenses - Users - Admin

This keeps documentation clean.

------------------------------------------------------------------------

# 12. Best Practices

-   Document every endpoint.
-   Include request and response examples.
-   Keep descriptions concise.
-   Group related endpoints.
-   Update documentation with API changes.

------------------------------------------------------------------------

# 13. Common Mistakes

-   Missing endpoint descriptions
-   No error responses
-   Outdated documentation
-   Ignoring authentication setup

------------------------------------------------------------------------

# 14. Interview Questions

1.  What is Swagger?
2.  What is OpenAPI?
3.  Why use Swagger UI?
4.  How do you integrate Swagger with Spring Boot?
5.  What is `/v3/api-docs`?
6.  How do you secure Swagger?
7.  How do you test JWT-protected APIs?
8.  What are `@Operation` and `@Tag`?
9.  Why document REST APIs?
10. What are the benefits of OpenAPI?

------------------------------------------------------------------------

# 15. Mini Project

Document the Student Management REST API: - Authentication APIs -
Student CRUD APIs - JWT Authorization - Error Responses - Example
Requests & Responses

------------------------------------------------------------------------

# 16. Revision Checklist

-   [ ] Swagger Basics
-   [ ] OpenAPI
-   [ ] springdoc-openapi
-   [ ] Swagger UI
-   [ ] API Documentation
-   [ ] JWT Integration
-   [ ] Tags
-   [ ] Responses
-   [ ] Best Practices
-   [ ] Interview Questions

> Next Chapter: Docker & Deployment
