# Volume 3 --- Spring Framework & Spring Boot

# Part 8: Spring Security (Complete Guide)

> Goal: Understand how Spring Security protects applications using
> authentication and authorization.

# 1. What is Spring Security?

Spring Security is the official security framework for Spring
applications.

It provides: - Authentication - Authorization - Password Encryption -
Session Management - CSRF Protection - CORS Support

------------------------------------------------------------------------

# 2. Authentication vs Authorization

  Authentication   Authorization
  ---------------- -----------------------------
  Who are you?     What are you allowed to do?
  Login            Access Control

------------------------------------------------------------------------

# 3. Spring Security Architecture

``` text
Client
   │
Security Filter Chain
   │
Authentication Filter
   │
Authentication Manager
   │
UserDetailsService
   │
Database
```

------------------------------------------------------------------------

# 4. Security Filter Chain

``` java
@Bean
SecurityFilterChain security(HttpSecurity http) throws Exception{
    return http.build();
}
```

The Security Filter Chain checks every incoming request before it
reaches your controller.

------------------------------------------------------------------------

# 5. UserDetails

Represents the authenticated user.

``` java
public class CustomUser implements UserDetails{
}
```

------------------------------------------------------------------------

# 6. UserDetailsService

``` java
@Service
public class CustomUserDetailsService
implements UserDetailsService{

    public UserDetails loadUserByUsername(String username){
        return ...
    }
}
```

------------------------------------------------------------------------

# 7. Password Encoding

Never store plain text passwords.

``` java
@Bean
PasswordEncoder passwordEncoder(){
    return new BCryptPasswordEncoder();
}
```

BCrypt automatically salts and hashes passwords.

------------------------------------------------------------------------

# 8. AuthenticationManager

Responsible for verifying login credentials.

``` java
Authentication authentication =
authenticationManager.authenticate(token);
```

------------------------------------------------------------------------

# 9. Authorization

``` java
.requestMatchers("/admin/**").hasRole("ADMIN")
.requestMatchers("/user/**").hasAnyRole("USER","ADMIN")
.anyRequest().authenticated()
```

------------------------------------------------------------------------

# 10. Method-Level Security

``` java
@PreAuthorize("hasRole('ADMIN')")
public void deleteStudent(){}
```

Enable:

``` java
@EnableMethodSecurity
```

------------------------------------------------------------------------

# 11. CSRF

Protects against Cross-Site Request Forgery.

For stateless REST APIs using JWT:

``` java
http.csrf(csrf -> csrf.disable());
```

------------------------------------------------------------------------

# 12. CORS

Allows frontend and backend on different origins.

``` java
http.cors(Customizer.withDefaults());
```

------------------------------------------------------------------------

# 13. Common Security Attacks

-   SQL Injection
-   XSS
-   CSRF
-   Brute Force
-   Credential Stuffing

Mitigation: - Prepared Statements - Validation - BCrypt - HTTPS - JWT

------------------------------------------------------------------------

# 14. Best Practices

-   Use BCrypt
-   Principle of Least Privilege
-   Secure sensitive endpoints
-   Validate input
-   Never expose passwords
-   Always use HTTPS in production

------------------------------------------------------------------------

# 15. Interview Questions

1.  What is Spring Security?
2.  Authentication vs Authorization?
3.  What is SecurityFilterChain?
4.  What is UserDetailsService?
5.  Why BCrypt?
6.  What is CSRF?
7.  What is CORS?
8.  Why use Method Security?
9.  What is AuthenticationManager?
10. Why shouldn't passwords be stored in plain text?

------------------------------------------------------------------------

# 16. Mini Project

Secure Student Management API: - Login - Register - BCrypt Passwords -
USER and ADMIN roles - Protected endpoints

------------------------------------------------------------------------

# 17. Revision Checklist

-   [ ] Authentication
-   [ ] Authorization
-   [ ] SecurityFilterChain
-   [ ] UserDetails
-   [ ] UserDetailsService
-   [ ] BCrypt
-   [ ] AuthenticationManager
-   [ ] CSRF
-   [ ] CORS
-   [ ] Interview Questions

> Next Chapter: JWT Authentication
