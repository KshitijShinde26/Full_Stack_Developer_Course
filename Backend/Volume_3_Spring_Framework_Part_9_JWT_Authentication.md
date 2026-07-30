# Volume 3 --- Spring Framework & Spring Boot

# Part 9: JWT Authentication (Complete Guide)

> **Goal:** Build secure, stateless authentication using JSON Web Tokens
> (JWT) in Spring Boot.

------------------------------------------------------------------------

# 1. What is JWT?

JWT (JSON Web Token) is an open standard (RFC 7519) used to securely
transfer information between a client and a server.

A JWT is: - Compact - URL-safe - Digitally signed - Stateless

------------------------------------------------------------------------

# 2. Why JWT?

Traditional session authentication stores user sessions on the server.

JWT stores authentication information inside a signed token.

Benefits: - Stateless - Scalable - Fast - Suitable for REST APIs - Ideal
for microservices

------------------------------------------------------------------------

# 3. JWT Authentication Flow

``` text
User Login
    │
POST /login
    │
Spring Security
    │
AuthenticationManager
    │
UserDetailsService
    │
Database
    │
JWT Generated
    │
Client Stores Token
    │
Authorization: Bearer <JWT>
    │
JWT Filter
    │
Controller
```

------------------------------------------------------------------------

# 4. JWT Structure

``` text
xxxxx.yyyyy.zzzzz
```

Three parts:

1.  Header
2.  Payload
3.  Signature

------------------------------------------------------------------------

# 5. Header

Example:

``` json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

-   `alg` = Signing algorithm
-   `typ` = Token type

------------------------------------------------------------------------

# 6. Payload (Claims)

Example:

``` json
{
  "sub":"kshitij",
  "role":"USER",
  "iat":1710000000,
  "exp":1710003600
}
```

Common claims: - sub (subject) - iss (issuer) - aud (audience) - iat
(issued at) - exp (expiry)

Never store passwords or sensitive data inside the payload.

------------------------------------------------------------------------

# 7. Signature

``` text
HMACSHA256(
 Base64Url(Header) + "." + Base64Url(Payload),
 SecretKey
)
```

The signature prevents token tampering.

------------------------------------------------------------------------

# 8. JWT Generation

Typical steps:

1.  Verify username/password
2.  Load user details
3.  Create claims
4.  Sign token
5.  Return token

------------------------------------------------------------------------

# 9. JWT Validation

For every request:

-   Read Authorization header
-   Extract token
-   Verify signature
-   Check expiry
-   Load user
-   Set authentication in Security Context

------------------------------------------------------------------------

# 10. Bearer Token

HTTP Request:

``` http
GET /api/students
Authorization: Bearer eyJhbGciOi...
```

------------------------------------------------------------------------

# 11. JWT Filter

A custom filter executes before controllers.

Responsibilities: - Read token - Validate token - Authenticate user -
Continue request

------------------------------------------------------------------------

# 12. Refresh Token

Access Token: - Short lifetime (15--60 minutes)

Refresh Token: - Longer lifetime - Used to obtain a new access token

Benefits: - Better security - Improved user experience

------------------------------------------------------------------------

# 13. Logout with JWT

Since JWT is stateless:

Options: - Blacklist tokens - Rotate refresh tokens - Short expiry

------------------------------------------------------------------------

# 14. Common JWT Errors

## Expired Token

Cause: - Token lifetime exceeded

## Invalid Signature

Cause: - Wrong secret key

## Missing Bearer Prefix

Cause: - Incorrect Authorization header

## Invalid Token

Cause: - Token modified or malformed

------------------------------------------------------------------------

# 15. Security Best Practices

-   Use HTTPS
-   Keep access tokens short-lived
-   Store secrets securely
-   Never expose signing keys
-   Validate every request
-   Use refresh tokens
-   Never store passwords in JWT

------------------------------------------------------------------------

# 16. Interview Questions

1.  What is JWT?
2.  Session vs JWT?
3.  Explain JWT structure.
4.  What are Claims?
5.  Why is JWT stateless?
6.  What is the Authorization header?
7.  What is a Bearer Token?
8.  Why use Refresh Tokens?
9.  How do you validate JWT?
10. Why shouldn't sensitive data be stored in JWT?

------------------------------------------------------------------------

# 17. Mini Project

Secure Student Management API

Features: - Register - Login - BCrypt Password - JWT Generation - JWT
Validation - Protected Endpoints - Role-Based Access

------------------------------------------------------------------------

# 18. Revision Checklist

-   [ ] JWT Basics
-   [ ] JWT Structure
-   [ ] Claims
-   [ ] Signature
-   [ ] Generation
-   [ ] Validation
-   [ ] JWT Filter
-   [ ] Refresh Token
-   [ ] Security Best Practices
-   [ ] Interview Questions

> Next Chapter: OAuth2 & Role-Based Authorization
