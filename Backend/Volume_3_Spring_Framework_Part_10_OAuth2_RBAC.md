# Volume 3 --- Spring Framework & Spring Boot

# Part 10: OAuth2 & Role-Based Authorization

> Learn OAuth2, social login, and secure authorization in Spring Boot.

------------------------------------------------------------------------

# 1. What is OAuth2?

OAuth2 is an authorization framework that lets users grant limited
access to their resources without sharing passwords.

Example: - Login with Google - Login with GitHub

------------------------------------------------------------------------

# 2. Authentication vs Authorization

  Authentication      Authorization
  ------------------- ------------------------
  Verifies identity   Determines permissions

OAuth2 mainly handles **authorization**. Identity is commonly provided
through **OpenID Connect (OIDC)**.

------------------------------------------------------------------------

# 3. OAuth2 Roles

-   Resource Owner (User)
-   Client (Your App)
-   Authorization Server
-   Resource Server

------------------------------------------------------------------------

# 4. OAuth2 Authorization Code Flow

``` text
User
 │
Login with Google
 │
Authorization Server
 │
Authorization Code
 │
Client Exchanges Code
 │
Access Token
 │
Protected Resource
```

------------------------------------------------------------------------

# 5. Common OAuth2 Grant

Modern Spring Boot applications typically use:

-   Authorization Code + PKCE (web/mobile)
-   Client Credentials (server-to-server)

Avoid the deprecated Password Grant.

------------------------------------------------------------------------

# 6. Spring Security OAuth2

Dependency:

``` xml
spring-boot-starter-oauth2-client
```

Configuration example:

``` properties
spring.security.oauth2.client.registration.google.client-id=YOUR_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=YOUR_CLIENT_SECRET
```

------------------------------------------------------------------------

# 7. Social Login

Supported providers: - Google - GitHub - Microsoft

Flow: 1. Redirect user 2. User approves access 3. Receive authorization
code 4. Exchange for token 5. Create authenticated session or JWT

------------------------------------------------------------------------

# 8. Access Token vs Refresh Token

  Access Token   Refresh Token
  -------------- -----------------------
  Short-lived    Long-lived
  Calls APIs     Gets new access token

------------------------------------------------------------------------

# 9. Scopes

Examples: - profile - email - openid - repo (GitHub)

Request only the permissions you actually need.

------------------------------------------------------------------------

# 10. Role-Based Access Control (RBAC)

Example roles: - USER - ADMIN - MODERATOR

``` java
.requestMatchers("/admin/**").hasRole("ADMIN")
.requestMatchers("/user/**").hasAnyRole("USER","ADMIN")
```

------------------------------------------------------------------------

# 11. Method Security

``` java
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(){}
```

Enable:

``` java
@EnableMethodSecurity
```

------------------------------------------------------------------------

# 12. Best Practices

-   Use HTTPS
-   Follow least privilege
-   Validate tokens
-   Protect secrets
-   Rotate credentials
-   Log security events

------------------------------------------------------------------------

# 13. Common Mistakes

-   Requesting unnecessary scopes
-   Hardcoding client secrets
-   Ignoring token expiration
-   Using deprecated OAuth2 flows

------------------------------------------------------------------------

# 14. Interview Questions

1.  What is OAuth2?
2.  OAuth2 vs JWT?
3.  What is OIDC?
4.  What is an Access Token?
5.  What is a Refresh Token?
6.  Explain Authorization Code Flow.
7.  What are scopes?
8.  What is RBAC?
9.  Why use @PreAuthorize?
10. Why use PKCE?

------------------------------------------------------------------------

# 15. Mini Project

Add Google Login to the Student Management API: - Google Sign-In - Role
Mapping - JWT Generation - Protected REST APIs

------------------------------------------------------------------------

# 16. Revision Checklist

-   [ ] OAuth2 Basics
-   [ ] Authorization Code Flow
-   [ ] OAuth2 Roles
-   [ ] Access & Refresh Tokens
-   [ ] Scopes
-   [ ] Social Login
-   [ ] RBAC
-   [ ] Method Security
-   [ ] Best Practices
-   [ ] Interview Questions

> Next Chapter: File Upload & Email
