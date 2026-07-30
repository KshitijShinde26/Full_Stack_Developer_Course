# Volume 2 --- Advanced Java

## Part 4: Sessions, Cookies & Authentication

# Why Session Tracking?

HTTP is a **stateless protocol**, meaning each request is independent.
Session tracking allows the server to remember a user across multiple
requests.

------------------------------------------------------------------------

# Cookies

A cookie is a small piece of data stored in the client's browser.

## Creating a Cookie

``` java
Cookie cookie = new Cookie("username","Kshitij");
cookie.setMaxAge(60*60);
response.addCookie(cookie);
```

## Reading Cookies

``` java
Cookie[] cookies = request.getCookies();
for(Cookie c : cookies){
    System.out.println(c.getName()+" = "+c.getValue());
}
```

### Advantages

-   Lightweight
-   Persists between visits

### Disadvantages

-   Limited storage (\~4 KB)
-   User can disable cookies
-   Not suitable for sensitive data

------------------------------------------------------------------------

# HttpSession

`HttpSession` stores user data on the server.

## Creating a Session

``` java
HttpSession session = request.getSession();
session.setAttribute("username","Kshitij");
```

## Reading Session Data

``` java
String user=(String)session.getAttribute("username");
```

## Invalidating Session

``` java
session.invalidate();
```

------------------------------------------------------------------------

# Session Timeout

``` xml
<session-config>
    <session-timeout>30</session-timeout>
</session-config>
```

or

``` java
session.setMaxInactiveInterval(1800);
```

------------------------------------------------------------------------

# URL Rewriting

Used when cookies are disabled.

``` java
response.encodeURL("home.jsp");
```

------------------------------------------------------------------------

# Hidden Form Fields

``` html
<input type="hidden" name="userId" value="101">
```

Useful for passing values between requests.

------------------------------------------------------------------------

# Authentication vs Authorization

  Authentication   Authorization
  ---------------- -----------------------------
  Who are you?     What are you allowed to do?
  Login            Access Control

------------------------------------------------------------------------

# Login Flow

``` text
Login Form
    |
Servlet
    |
Validate User (Database)
    |
Session Created
    |
Dashboard
```

Example:

``` java
if(validUser){
    HttpSession session=request.getSession();
    session.setAttribute("user",username);
    response.sendRedirect("home.jsp");
}else{
    response.sendRedirect("login.jsp");
}
```

------------------------------------------------------------------------

# Logout

``` java
HttpSession session=request.getSession(false);
if(session!=null){
    session.invalidate();
}
response.sendRedirect("login.jsp");
```

------------------------------------------------------------------------

# Security Best Practices

-   Store passwords as hashes (e.g. BCrypt), never plain text.
-   Invalidate sessions on logout.
-   Regenerate session IDs after login.
-   Use HTTPS.
-   Set Secure and HttpOnly cookie flags.
-   Validate all user input.
-   Never trust client-side data.

------------------------------------------------------------------------

# Cookies vs Session

  -----------------------------------------------------------------------
  Cookies                             Session
  ----------------------------------- -----------------------------------
  Client-side                         Server-side

  Small storage                       Larger storage

  Less secure                         More secure

  Can persist after browser restart   Usually expires with timeout/logout
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Common Interview Questions

1.  Why is HTTP stateless?
2.  Cookie vs Session?
3.  What is HttpSession?
4.  How does logout work?
5.  Authentication vs Authorization?
6.  Session timeout?
7.  URL Rewriting?
8.  Hidden Form Fields?
9.  Can sessions work without cookies?
10. How do you secure user sessions?

### Short Answers

-   HTTP doesn't remember previous requests.
-   Sessions are generally more secure because data stays on the server.
-   Cookies mainly store identifiers, not sensitive information.

------------------------------------------------------------------------

# Practice Programs

1.  Login using Servlet + JSP + Session
2.  Remember Me using Cookies
3.  Logout Functionality
4.  Session Timeout Demo
5.  User Dashboard with Session Validation

------------------------------------------------------------------------

# Revision Checklist

-   [ ] Cookies
-   [ ] HttpSession
-   [ ] URL Rewriting
-   [ ] Hidden Fields
-   [ ] Login
-   [ ] Logout
-   [ ] Authentication
-   [ ] Authorization
-   [ ] Session Timeout
-   [ ] Interview Questions

> End of Volume 2 --- Part 4
