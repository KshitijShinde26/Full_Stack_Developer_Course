# Volume 2 --- Advanced Java

## Part 3: JSP (JavaServer Pages)

# What is JSP?

JavaServer Pages (JSP) is a server-side technology used to create
dynamic web pages by combining HTML with Java code. JSP is typically
used as the **View** in the MVC architecture.

## Why JSP?

-   Generate dynamic HTML
-   Reduce Java code in Servlets
-   Easy integration with JavaBeans
-   Works seamlessly with Servlets

------------------------------------------------------------------------

# JSP Architecture

``` text
Browser
   |
HTTP Request
   |
Tomcat
   |
JSP Engine
   |
Servlet (Generated Automatically)
   |
Response
```

When a JSP is requested for the first time, the server converts it into
a Servlet, compiles it, and executes it.

------------------------------------------------------------------------

# JSP Life Cycle

1.  Translation (JSP → Servlet)
2.  Compilation
3.  Class Loading
4.  Instantiation
5.  `jspInit()`
6.  `_jspService()`
7.  `jspDestroy()`

------------------------------------------------------------------------

# Basic JSP Example

``` jsp
<html>
<body>
<h2>Welcome</h2>
<%= "Hello Kshitij" %>
</body>
</html>
```

------------------------------------------------------------------------

# JSP Elements

## Scriptlet

``` jsp
<%
int a = 10;
int b = 20;
out.println(a+b);
%>
```

## Expression

``` jsp
<%= new java.util.Date() %>
```

## Declaration

``` jsp
<%! int count = 0; %>
```

------------------------------------------------------------------------

# JSP Directives

## page

``` jsp
<%@ page language="java" contentType="text/html" %>
```

## include

``` jsp
<%@ include file="header.jsp" %>
```

## taglib

``` jsp
<%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>
```

------------------------------------------------------------------------

# Implicit Objects

  Object        Purpose
  ------------- -------------------
  request       Client request
  response      Send response
  session       Session data
  application   Application scope
  out           Output stream
  config        Servlet config
  pageContext   JSP context
  page          Current page
  exception     Error handling

------------------------------------------------------------------------

# Expression Language (EL)

EL accesses Java objects without Java code.

``` jsp
${student.name}
${student.age}
```

Benefits: - Cleaner pages - Easier to read - Less Java code

------------------------------------------------------------------------

# JSTL (JavaServer Pages Standard Tag Library)

## Core Tags

``` jsp
<c:if test="${age >= 18}">
Adult
</c:if>
```

``` jsp
<c:forEach items="${students}" var="s">
${s.name}
</c:forEach>
```

Common JSTL Tags: - c:if - c:choose - c:when - c:otherwise - c:forEach -
c:set - c:out

------------------------------------------------------------------------

# JavaBeans in JSP

``` jsp
<jsp:useBean id="student"
class="com.example.Student"/>
```

Set Property:

``` jsp
<jsp:setProperty name="student"
property="name"
value="Kshitij"/>
```

Get Property:

``` jsp
<jsp:getProperty name="student"
property="name"/>
```

------------------------------------------------------------------------

# Error Pages

Main Page

``` jsp
<%@ page errorPage="error.jsp" %>
```

Error Page

``` jsp
<%@ page isErrorPage="true" %>
```

------------------------------------------------------------------------

# MVC with Servlet + JSP

``` text
Browser
   |
Servlet (Controller)
   |
Business Logic
   |
JSP (View)
```

Servlet prepares data and forwards it:

``` java
request.setAttribute("students", list);
request.getRequestDispatcher("home.jsp")
       .forward(request, response);
```

JSP displays the data.

------------------------------------------------------------------------

# Best Practices

-   Avoid Java code inside JSP.
-   Prefer EL + JSTL over Scriptlets.
-   Keep business logic in Servlets/Services.
-   Reuse common layouts with include directives.

------------------------------------------------------------------------

# Common Interview Questions

1.  What is JSP?
2.  JSP vs Servlet?
3.  JSP Lifecycle?
4.  Scriptlet vs Expression?
5.  What are JSP Directives?
6.  What are Implicit Objects?
7.  What is EL?
8.  What is JSTL?
9.  Why avoid Scriptlets?
10. Explain MVC using JSP and Servlets.

### Short Answers

-   JSP is mainly used for the View layer.
-   Servlets handle requests; JSP renders responses.
-   EL simplifies data access.
-   JSTL reduces Java code in JSP pages.

------------------------------------------------------------------------

# Practice Programs

1.  Student Registration Form
2.  Login Page
3.  Display Employee List
4.  Shopping Cart View
5.  JSP + Servlet + JDBC CRUD

------------------------------------------------------------------------

# Revision Checklist

-   [ ] JSP Lifecycle
-   [ ] Scriptlet
-   [ ] Expression
-   [ ] Declaration
-   [ ] Directives
-   [ ] Implicit Objects
-   [ ] EL
-   [ ] JSTL
-   [ ] JavaBeans
-   [ ] MVC
-   [ ] Interview Questions

> End of Volume 2 --- Part 3
