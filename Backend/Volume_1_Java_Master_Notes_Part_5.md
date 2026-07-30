# Volume 1 --- Java Master Notes

## Part 5: File Handling, Multithreading, Java 8 Features & Memory Management

# File Handling

Java provides the `java.io` and `java.nio.file` packages for working
with files.

## Common Classes

-   File
-   FileReader / FileWriter
-   BufferedReader / BufferedWriter
-   PrintWriter
-   Files (NIO)

``` java
FileWriter fw = new FileWriter("data.txt");
fw.write("Hello Java");
fw.close();
```

### Best Practices

-   Use try-with-resources.
-   Close streams after use.
-   Prefer BufferedReader for large files.

------------------------------------------------------------------------

# Multithreading

A thread is the smallest unit of execution.

## Creating Threads

### Extending Thread

``` java
class MyThread extends Thread{
    public void run(){
        System.out.println("Running...");
    }
}
```

### Implementing Runnable (Preferred)

``` java
class Task implements Runnable{
    public void run(){ }
}
```

## Thread Lifecycle

NEW → RUNNABLE → RUNNING → WAITING/BLOCKED → TERMINATED

## Synchronization

Prevents race conditions by allowing one thread to access a critical
section at a time.

``` java
public synchronized void deposit(){}
```

### Interview Questions

-   Thread vs Process
-   sleep() vs wait()
-   Runnable vs Thread
-   What is synchronization?
-   Deadlock?

------------------------------------------------------------------------

# Java 8 Features

## Lambda Expression

``` java
(a,b) -> a+b
```

## Functional Interface

Contains exactly one abstract method.

``` java
@FunctionalInterface
interface Demo{
   void show();
}
```

## Stream API

Operations: - filter() - map() - sorted() - distinct() - collect() -
forEach()

``` java
list.stream().filter(x->x>10).forEach(System.out::println);
```

## Optional

Avoids NullPointerException.

``` java
Optional<String> name = Optional.of("Java");
```

## Method Reference

``` java
System.out::println
```

------------------------------------------------------------------------

# Memory Management

## Stack

-   Method calls
-   Local variables

## Heap

-   Objects
-   Arrays

## Garbage Collection

Automatically removes unreachable objects.

Interview: - What is GC? - finalize()? - Strong vs Weak references
(basic)?

------------------------------------------------------------------------

# Practice

1.  Copy a file.
2.  Count words in a file.
3.  Producer-consumer (basic).
4.  Print even numbers using streams.
5.  Filter employees by salary.

------------------------------------------------------------------------

# Interview Checklist

-   [ ] File Handling
-   [ ] Threads
-   [ ] Synchronization
-   [ ] Lambda
-   [ ] Stream API
-   [ ] Optional
-   [ ] Garbage Collection

> End of Volume 1 --- Part 5
