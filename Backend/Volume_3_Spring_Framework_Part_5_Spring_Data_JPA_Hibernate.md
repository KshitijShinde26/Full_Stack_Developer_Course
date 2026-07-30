# Volume 3 --- Spring Framework & Spring Boot

# Part 5: Spring Data JPA & Hibernate (Complete Guide)

> **Goal:** Learn how Spring Boot communicates with databases using JPA
> and Hibernate, perform CRUD operations, map relationships, and
> optimize database access.

------------------------------------------------------------------------

# 1. What is ORM?

**ORM (Object Relational Mapping)** maps Java objects to database
tables.

Instead of writing SQL for every operation, ORM converts Java objects
into SQL queries automatically.

Example:

``` java
Student student = new Student();
student.setName("Kshitij");

studentRepository.save(student);
```

Generated SQL (internally):

``` sql
INSERT INTO student(name) VALUES ('Kshitij');
```

## Advantages

-   Less SQL code
-   Faster development
-   Database independence
-   Easier maintenance

------------------------------------------------------------------------

# 2. What is JPA?

**JPA (Java Persistence API)** is a specification that defines how Java
objects should be persisted in relational databases.

JPA is **not** a framework.

It provides: - Interfaces - Annotations - Rules

Popular implementations: - Hibernate ✅ - EclipseLink - OpenJPA

------------------------------------------------------------------------

# 3. What is Hibernate?

Hibernate is the most widely used implementation of JPA.

Responsibilities: - Generate SQL - Manage database connections - Cache
objects - Handle relationships - Execute transactions

------------------------------------------------------------------------

# 4. JPA vs Hibernate

  JPA                  Hibernate
  -------------------- -----------------------------
  Specification        Framework
  Defines rules        Implements rules
  Vendor-independent   Hibernate-specific features

------------------------------------------------------------------------

# 5. Hibernate Architecture

``` text
Application
      │
Spring Data JPA
      │
Hibernate
      │
JDBC
      │
MySQL / PostgreSQL
```

------------------------------------------------------------------------

# 6. Entity

An Entity represents a database table.

``` java
@Entity
@Table(name="students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;
}
```

------------------------------------------------------------------------

# 7. Primary Key Generation

``` java
@GeneratedValue(strategy = GenerationType.IDENTITY)
```

Strategies: - IDENTITY - AUTO - SEQUENCE - TABLE

------------------------------------------------------------------------

# 8. Repository

``` java
@Repository
public interface StudentRepository
extends JpaRepository<Student,Long>{
}
```

JpaRepository already provides:

-   save()
-   findAll()
-   findById()
-   deleteById()
-   count()
-   existsById()

------------------------------------------------------------------------

# 9. CRUD Operations

## Save

``` java
repository.save(student);
```

## Read

``` java
repository.findAll();
```

## Find By Id

``` java
repository.findById(id);
```

## Delete

``` java
repository.deleteById(id);
```

------------------------------------------------------------------------

# 10. Custom Finder Methods

``` java
List<Student> findByName(String name);

Student findByEmail(String email);

List<Student> findByAgeGreaterThan(int age);
```

Spring automatically generates SQL.

------------------------------------------------------------------------

# 11. Relationships

## One-to-One

``` java
@OneToOne
private Address address;
```

Example: - Student ↔ ID Card

------------------------------------------------------------------------

## One-to-Many

``` java
@OneToMany(mappedBy="student")
private List<Course> courses;
```

Example: - Student → Courses

------------------------------------------------------------------------

## Many-to-One

``` java
@ManyToOne
private Department department;
```

Example: - Many students belong to one department.

------------------------------------------------------------------------

## Many-to-Many

``` java
@ManyToMany
private List<Role> roles;
```

Example: - Users ↔ Roles

------------------------------------------------------------------------

# 12. Fetch Types

## EAGER

Loads related objects immediately.

## LAZY

Loads related objects only when needed.

Generally prefer **LAZY** for better performance.

------------------------------------------------------------------------

# 13. Cascade Types

Common options:

-   ALL
-   PERSIST
-   MERGE
-   REMOVE
-   REFRESH

Example:

``` java
@OneToMany(cascade=CascadeType.ALL)
```

------------------------------------------------------------------------

# 14. JPQL

JPQL works with entities instead of tables.

``` java
@Query("SELECT s FROM Student s WHERE s.age > :age")
List<Student> findStudents(int age);
```

------------------------------------------------------------------------

# 15. Native Query

``` java
@Query(
value="SELECT * FROM students",
nativeQuery=true)
List<Student> getStudents();
```

Use only when JPQL cannot solve the problem.

------------------------------------------------------------------------

# 16. Pagination

``` java
Page<Student> students =
repository.findAll(PageRequest.of(0,10));
```

------------------------------------------------------------------------

# 17. Sorting

``` java
repository.findAll(
Sort.by("name"));
```

Descending:

``` java
Sort.by("name").descending();
```

------------------------------------------------------------------------

# 18. Transactions

``` java
@Transactional
public void updateStudent(){
}
```

A transaction ensures **all operations succeed or all fail together**.

------------------------------------------------------------------------

# 19. Common Hibernate Errors

### LazyInitializationException

Cause: - Accessing a lazy object outside a transaction.

Fix: - Fetch inside the transaction. - Use DTO projection when
appropriate.

------------------------------------------------------------------------

### Entity Not Found

Incorrect ID.

------------------------------------------------------------------------

### Duplicate Key

Primary key already exists.

------------------------------------------------------------------------

### Table Not Found

Entity name doesn't match database table.

------------------------------------------------------------------------

# 20. Performance Tips

-   Use pagination.
-   Prefer LAZY loading.
-   Avoid N+1 query problems.
-   Select only required columns.
-   Index frequently searched columns.
-   Use DTO projections for APIs.

------------------------------------------------------------------------

# 21. Best Practices

-   One Entity per table.
-   Use Repository layer.
-   Avoid business logic in entities.
-   Keep transactions small.
-   Validate data before saving.

------------------------------------------------------------------------

# 22. Interview Questions

1.  What is ORM?
2.  What is JPA?
3.  What is Hibernate?
4.  JPA vs Hibernate?
5.  What is an Entity?
6.  What is JpaRepository?
7.  Explain @Entity and @Table.
8.  Lazy vs Eager Fetch?
9.  What are Cascade Types?
10. What is JPQL?
11. Native Query vs JPQL?
12. Why use @Transactional?
13. What causes LazyInitializationException?
14. What is Pagination?
15. What is Sorting?

------------------------------------------------------------------------

# 23. Mini Project

Build a **Student Management System**

Features: - Add Student - Update Student - Delete Student - Search
Student - Pagination - Sorting - Department Relationship - Validation

------------------------------------------------------------------------

# 24. Revision Checklist

-   [ ] ORM
-   [ ] JPA
-   [ ] Hibernate
-   [ ] Entity
-   [ ] Repository
-   [ ] CRUD
-   [ ] Relationships
-   [ ] Fetch Types
-   [ ] Cascade Types
-   [ ] JPQL
-   [ ] Native Queries
-   [ ] Pagination
-   [ ] Transactions
-   [ ] Interview Questions

> Next Chapter: REST API Development
