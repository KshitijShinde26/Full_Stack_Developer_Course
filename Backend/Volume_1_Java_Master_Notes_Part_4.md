# Volume 1 --- Java Master Notes

## Part 4: Exception Handling, Packages, Access Modifiers, Wrapper Classes, Enums, Generics & Collections Framework

# Exception Handling

## What is an Exception?

An exception is an event that interrupts the normal execution of a
program.

Example:

``` java
int a = 10;
int b = 0;
System.out.println(a / b);
```

Output:

    ArithmeticException

------------------------------------------------------------------------

## Why Exception Handling?

-   Prevent program crashes
-   Maintain normal program flow
-   Handle runtime errors gracefully

------------------------------------------------------------------------

## Exception Hierarchy

``` text
Object
   |
Throwable
   |
-------------------------
|                       |
Error               Exception
                        |
           -------------------------
           |                       |
Checked Exception     Unchecked Exception
```

### Checked Exceptions

Checked at compile time.

Examples: - IOException - SQLException - ClassNotFoundException

### Unchecked Exceptions

Occur at runtime.

Examples: - ArithmeticException - NullPointerException -
ArrayIndexOutOfBoundsException - NumberFormatException

------------------------------------------------------------------------

## try-catch

``` java
try{
    int result = 10 / 0;
}catch(ArithmeticException e){
    System.out.println(e.getMessage());
}
```

------------------------------------------------------------------------

## finally

Always executes whether an exception occurs or not.

``` java
try{
   System.out.println("Try");
}
finally{
   System.out.println("Finally");
}
```

------------------------------------------------------------------------

## throw

Used to throw an exception manually.

``` java
throw new IllegalArgumentException("Invalid age");
```

------------------------------------------------------------------------

## throws

Declares exceptions.

``` java
public void readFile() throws IOException{

}
```

------------------------------------------------------------------------

## Custom Exception

``` java
class InvalidAgeException extends Exception{

    InvalidAgeException(String msg){
        super(msg);
    }

}
```

------------------------------------------------------------------------

# Access Modifiers

  Modifier    Same Class   Package   Subclass   Other Package
  ----------- ------------ --------- ---------- ---------------
  private     ✔            ✖         ✖          ✖
  default     ✔            ✔         ✖          ✖
  protected   ✔            ✔         ✔          ✖\*
  public      ✔            ✔         ✔          ✔

------------------------------------------------------------------------

# Packages

Packages organize related classes.

``` java
package com.example.student;
```

Benefits: - Avoid naming conflicts - Better organization - Access
control

------------------------------------------------------------------------

# Wrapper Classes

Primitive → Object

  Primitive   Wrapper
  ----------- -----------
  int         Integer
  char        Character
  double      Double
  boolean     Boolean

## Autoboxing

``` java
Integer num = 10;
```

## Unboxing

``` java
int value = num;
```

------------------------------------------------------------------------

# Enum

Represents fixed constants.

``` java
enum Day{
    MONDAY,TUESDAY,WEDNESDAY
}
```

Advantages: - Type safety - Readability

------------------------------------------------------------------------

# Generics

Provide type safety.

Without Generics

``` java
ArrayList list = new ArrayList();
```

With Generics

``` java
ArrayList<String> list = new ArrayList<>();
```

Benefits: - Compile-time checking - Reusable code

------------------------------------------------------------------------

# Collections Framework

## Overview

Collections provide dynamic data structures.

``` text
Collection
 |
 |-- List
 |     |-- ArrayList
 |     |-- LinkedList
 |
 |-- Set
 |     |-- HashSet
 |     |-- TreeSet
 |
 |-- Queue
 |
Map
 |
 |-- HashMap
 |-- TreeMap
```

------------------------------------------------------------------------

# List

Allows duplicates and preserves insertion order.

## ArrayList

Advantages: - Fast random access

Disadvantages: - Slow insertion in middle

## LinkedList

Advantages: - Fast insertion/deletion

Disadvantages: - Slow random access

------------------------------------------------------------------------

# Set

Stores unique values.

## HashSet

-   No duplicates
-   Unordered

## TreeSet

-   Sorted
-   No duplicates

------------------------------------------------------------------------

# Queue

FIFO structure.

Common implementations: - LinkedList - PriorityQueue

------------------------------------------------------------------------

# Stack

LIFO structure.

Methods: - push() - pop() - peek()

------------------------------------------------------------------------

# Map

Stores key-value pairs.

## HashMap

-   Fast lookup
-   Allows one null key

## TreeMap

-   Sorted keys

------------------------------------------------------------------------

# Comparable vs Comparator

## Comparable

Natural ordering.

``` java
class Student implements Comparable<Student>{
    public int compareTo(Student s){
        return this.id-s.id;
    }
}
```

## Comparator

Custom ordering.

``` java
Collections.sort(list,new StudentComparator());
```

------------------------------------------------------------------------

# Common Interview Questions

### Exception Handling

1.  Checked vs Unchecked Exception?
2.  throw vs throws?
3.  Can finally block be skipped?
4.  Difference between Error and Exception?

### Packages

1.  Why use packages?
2.  Can two packages have same class name?

### Collections

1.  ArrayList vs LinkedList?
2.  HashMap vs TreeMap?
3.  HashSet vs TreeSet?
4.  Comparable vs Comparator?
5.  Difference between List and Set?
6.  Why Generics?

### Wrapper Classes

1.  What is Autoboxing?
2.  What is Unboxing?

------------------------------------------------------------------------

# Best Practices

-   Catch specific exceptions.
-   Never use empty catch blocks.
-   Prefer ArrayList unless frequent insertions are needed.
-   Use HashMap for fast lookup.
-   Use TreeMap when sorting is required.
-   Always use Generics.
-   Organize classes using packages.

------------------------------------------------------------------------

# Practice Programs

1.  ATM using Exception Handling
2.  Student Package Example
3.  Employee using Generics
4.  ArrayList CRUD
5.  HashMap Student Record
6.  TreeSet Sorting
7.  Custom Exception

------------------------------------------------------------------------

# Revision Checklist

-   [ ] Exception Handling
-   [ ] try-catch-finally
-   [ ] throw & throws
-   [ ] Custom Exception
-   [ ] Packages
-   [ ] Access Modifiers
-   [ ] Wrapper Classes
-   [ ] Enum
-   [ ] Generics
-   [ ] ArrayList
-   [ ] LinkedList
-   [ ] HashSet
-   [ ] TreeSet
-   [ ] HashMap
-   [ ] TreeMap
-   [ ] Comparable
-   [ ] Comparator

> End of Volume 1 --- Part 4
