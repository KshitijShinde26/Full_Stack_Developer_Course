# Volume 1 --- Java Master Notes

## Chapter 1: Introduction to Java

# What is Java?

Java is a high-level, object-oriented, class-based programming language
developed by Sun Microsystems (now Oracle). It is designed around the
principle of **Write Once, Run Anywhere (WORA)**, meaning Java programs
are compiled into bytecode that can run on any system with a Java
Virtual Machine (JVM).

## Features

-   Platform Independent
-   Object-Oriented
-   Robust
-   Secure
-   Multithreaded
-   Portable
-   High Performance (via JIT)
-   Distributed

## Java Architecture

``` text
Java Source (.java)
        |
     javac
        |
     Bytecode (.class)
        |
        JVM
        |
 Operating System
```

## JDK, JRE and JVM

### JDK

Java Development Kit contains: - JRE - Compiler (javac) - Debugger -
Documentation tools

### JRE

Java Runtime Environment contains: - JVM - Core Libraries - Runtime
components

### JVM

Java Virtual Machine: - Executes bytecode - Performs Garbage
Collection - Manages memory - Makes Java platform independent

## Why Java is Platform Independent

Java code is compiled into **bytecode**, not machine code. Every
operating system has its own JVM that converts bytecode into native
machine instructions.

------------------------------------------------------------------------

# Variables

A variable is a named memory location used to store data.

``` java
int age = 20;
String name = "Kshitij";
```

## Primitive Data Types

  Type      Size      Example
  --------- --------- ---------
  byte      1 byte    10
  short     2 bytes   100
  int       4 bytes   1000
  long      8 bytes   100000L
  float     4 bytes   12.5f
  double    8 bytes   12.5
  char      2 bytes   'A'
  boolean   JVM       true

## Non-Primitive Types

-   String
-   Arrays
-   Classes
-   Interfaces
-   Collections

------------------------------------------------------------------------

# Object-Oriented Programming (OOP)

## Encapsulation

Wrapping data and methods into one class.

Benefits: - Data hiding - Security - Easy maintenance

## Inheritance

Allows one class to inherit another.

``` java
class Animal {}
class Dog extends Animal {}
```

Benefits: - Code reuse - Extensibility

## Polymorphism

### Compile-time

Method Overloading

### Runtime

Method Overriding

## Abstraction

Achieved using: - Abstract classes - Interfaces

Purpose: - Hide implementation - Show only essential functionality

------------------------------------------------------------------------

# Exception Handling

Purpose: Prevent abnormal program termination.

Keywords: - try - catch - finally - throw - throws

``` java
try{
    int a=10/0;
}catch(Exception e){
    System.out.println(e.getMessage());
}
```

------------------------------------------------------------------------

# Collections Framework

Important collections:

-   ArrayList
-   LinkedList
-   HashSet
-   TreeSet
-   HashMap
-   TreeMap
-   Queue
-   PriorityQueue
-   Stack

------------------------------------------------------------------------

# Java 8 Features

-   Lambda Expressions
-   Functional Interfaces
-   Stream API
-   Optional
-   Method References

------------------------------------------------------------------------

# Best Practices

-   Follow naming conventions.
-   Prefer composition over inheritance when appropriate.
-   Use interfaces for abstraction.
-   Handle exceptions properly.
-   Write readable code.

------------------------------------------------------------------------

# Common Interview Questions

## 1. Difference between JDK, JRE and JVM?

JDK is used for development, JRE runs Java programs, JVM executes
bytecode.

## 2. Why is Java platform independent?

Because bytecode runs on JVM available for different operating systems.

## 3. Difference between == and equals()?

== compares references (or primitive values), equals() compares object
content when overridden.

## 4. Interface vs Abstract Class?

Interface defines a contract; abstract class can provide partial
implementation.

## 5. Difference between ArrayList and LinkedList?

ArrayList offers faster random access, LinkedList offers faster
insertions/deletions in the middle.

## 6. What is Garbage Collection?

Automatic memory management performed by JVM to reclaim unused objects.

------------------------------------------------------------------------

# Revision Checklist

-   [ ] JDK/JRE/JVM
-   [ ] Data Types
-   [ ] Operators
-   [ ] OOP
-   [ ] Exception Handling
-   [ ] Collections
-   [ ] Java 8 Features
-   [ ] Interview Questions

> End of Volume 1 (Part 1)
