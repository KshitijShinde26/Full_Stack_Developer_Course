# Volume 2 --- Advanced Java

## Part 2: Servlets

# What is a Servlet?

A **Servlet** is a Java class that runs on a web server (such as Apache
Tomcat) and handles HTTP requests and responses. It acts as the
controller in many Java web applications.

## Why Servlets?

-   Build dynamic web applications
-   Process form data
-   Connect with databases
-   Generate dynamic HTML
-   Manage sessions

------------------------------------------------------------------------

# Servlet Architecture

``` text
Browser
   |
HTTP Request
   |
Web Server (Tomcat)
   |
Servlet Container
   |
Servlet
   |
Business Logic / JDBC
   |
HTTP Response
   |
Browser
```

------------------------------------------------------------------------

# Servlet Life Cycle

The Servlet Container manages the lifecycle.

1.  **Loading & Instantiation**
2.  **init()** -- called once when the servlet is created.
3.  **service()** -- called for every client request.
4.  **destroy()** -- called once before the servlet is removed.

``` java
public class DemoServlet extends HttpServlet {

    public void init(){
        System.out.println("Initialized");
    }

    protected void doGet(HttpServletRequest req,
                         HttpServletResponse res){
        // Handle GET request
    }

    public void destroy(){
        System.out.println("Destroyed");
    }
}
```

------------------------------------------------------------------------

# HTTP Methods

## GET

-   Retrieves data
-   Parameters visible in URL
-   Should not modify server data

``` java
protected void doGet(HttpServletRequest req,
                     HttpServletResponse res){}
```

## POST

-   Sends data securely in request body
-   Used for forms and inserts

``` java
protected void doPost(HttpServletRequest req,
                      HttpServletResponse res){}
```

### GET vs POST

  GET              POST
  ---------------- ----------------------
  Read data        Create/Update data
  URL parameters   Request body
  Limited length   Larger payload
  Cacheable        Generally not cached

------------------------------------------------------------------------

# HttpServletRequest

Used to read request data.

``` java
String name = request.getParameter("name");
```

Useful methods: - getParameter() - getParameterValues() -
getAttribute() - getSession() - getCookies()

------------------------------------------------------------------------

# HttpServletResponse

Used to send data back to the client.

``` java
response.setContentType("text/html");

PrintWriter out = response.getWriter();
out.println("<h1>Hello</h1>");
```

------------------------------------------------------------------------

# ServletConfig

Stores servlet-specific configuration.

``` java
String value = getServletConfig()
                  .getInitParameter("username");
```

------------------------------------------------------------------------

# ServletContext

Shared by the entire application.

``` java
ServletContext ctx = getServletContext();
```

Uses: - Share objects - Read global parameters - Access application
resources

------------------------------------------------------------------------

# RequestDispatcher

Transfers control between resources.

``` java
RequestDispatcher rd =
request.getRequestDispatcher("home.jsp");

rd.forward(request,response);
```

### forward() vs sendRedirect()

  forward()      sendRedirect()
  -------------- -----------------
  Server-side    Client-side
  Same request   New request
  Faster         Slightly slower

------------------------------------------------------------------------

# Filters

Filters intercept requests before they reach a servlet.

Common Uses: - Authentication - Logging - Validation - Compression

``` java
@WebFilter("/*")
public class LogFilter implements Filter{
}
```

------------------------------------------------------------------------

# Listeners

Respond to application events.

Examples: - Context initialization - Session creation - Session
destruction

------------------------------------------------------------------------

# Servlet Annotations

``` java
@WebServlet("/login")
@WebFilter("/*")
@WebListener
```

------------------------------------------------------------------------

# Best Practices

-   Keep business logic outside servlets.
-   Use MVC architecture.
-   Validate all user input.
-   Use PreparedStatement for database access.
-   Never hardcode credentials.
-   Close resources properly.

------------------------------------------------------------------------

# Common Interview Questions

### 1. What is a Servlet?

A Java class that processes client requests and generates dynamic
responses.

### 2. Servlet vs JSP?

  Servlet      JSP
  ------------ --------------
  Java code    HTML-centric
  Controller   View

### 3. Servlet Life Cycle?

init() → service() → destroy()

### 4. GET vs POST?

GET retrieves data, POST sends data for processing.

### 5. ServletConfig vs ServletContext?

ServletConfig is specific to one servlet, ServletContext is shared by
the whole application.

### 6. forward() vs sendRedirect()?

forward() stays on the server; sendRedirect() instructs the browser to
make a new request.

### 7. What are Filters?

Components that preprocess or postprocess requests/responses.

------------------------------------------------------------------------

# Practice Programs

1.  Student Registration Servlet
2.  Login Form using POST
3.  Calculator Servlet
4.  Employee CRUD Servlet
5.  Servlet + JDBC Example
6.  Authentication Filter

------------------------------------------------------------------------

# Revision Checklist

-   [ ] Servlet Architecture
-   [ ] Lifecycle
-   [ ] GET & POST
-   [ ] Request & Response
-   [ ] ServletConfig
-   [ ] ServletContext
-   [ ] RequestDispatcher
-   [ ] Filters
-   [ ] Listeners
-   [ ] Interview Questions

> End of Volume 2 --- Part 2
