# Volume 1 --- Java Master Notes

## Part 2: Operators, Control Statements, Arrays, Strings and Methods

# Operators

Operators perform operations on operands.

## Types of Operators

### Arithmetic

`+  -  *  /  %`

``` java
int a = 10, b = 3;
System.out.println(a + b);
System.out.println(a % b);
```

### Relational

`== != > < >= <=`

Returns boolean values.

### Logical

`&& || !`

Used to combine conditions.

### Assignment

`= += -= *= /= %=`

### Unary

`++ -- + - !`

### Ternary

``` java
String result = age >= 18 ? "Adult" : "Minor";
```

### Bitwise

`& | ^ ~ << >>`

Used in low-level programming and optimization.

------------------------------------------------------------------------

# Control Statements

## if

``` java
if(age >= 18){
    System.out.println("Eligible");
}
```

## if-else

``` java
if(marks >= 40){
   System.out.println("Pass");
}else{
   System.out.println("Fail");
}
```

## else-if Ladder

Used when checking multiple conditions.

## switch

``` java
switch(day){
 case 1:
   System.out.println("Monday");
   break;
 default:
   System.out.println("Invalid");
}
```

### Interview Question

**When should switch be preferred over if-else?**

Use `switch` when comparing one variable against multiple constant
values because it is cleaner and often easier to maintain.

------------------------------------------------------------------------

# Loops

## for

``` java
for(int i=1;i<=5;i++){
    System.out.println(i);
}
```

## while

Used when the number of iterations is unknown.

## do-while

Executes at least once.

## break

Terminates the loop.

## continue

Skips the current iteration.

------------------------------------------------------------------------

# Arrays

An array stores elements of the same type in contiguous memory.

``` java
int[] arr = {10,20,30};
```

## Advantages

-   Fast indexing
-   Simple structure

## Disadvantages

-   Fixed size
-   Same data type only

### 2D Array

``` java
int[][] matrix = {
 {1,2},
 {3,4}
};
```

------------------------------------------------------------------------

# Strings

String is an immutable object.

``` java
String name = "Kshitij";
```

## Common Methods

-   length()
-   charAt()
-   substring()
-   equals()
-   equalsIgnoreCase()
-   contains()
-   replace()
-   split()
-   trim()
-   toUpperCase()
-   toLowerCase()

## String vs StringBuilder

  String                              StringBuilder
  ----------------------------------- ---------------
  Immutable                           Mutable
  Slower for repeated modifications   Faster

### Interview Question

**Why are Strings immutable?**

Immutability improves security, thread safety, and enables string
pooling.

------------------------------------------------------------------------

# Methods

Methods improve code reusability.

``` java
public static int add(int a,int b){
    return a+b;
}
```

## Types

-   Instance Method
-   Static Method

## Method Overloading

Same method name with different parameter lists.

``` java
add(int a,int b)
add(double a,double b)
```

## Method Overriding

A subclass provides its own implementation of a superclass method.

------------------------------------------------------------------------

# Memory Overview

``` text
Stack Memory
-------------
Methods
References
Primitive variables

Heap Memory
------------
Objects
Arrays
Strings (objects)
```

------------------------------------------------------------------------

# Best Practices

-   Prefer meaningful variable names.
-   Keep methods short and focused.
-   Avoid duplicate code.
-   Validate inputs.
-   Use constants for fixed values.

------------------------------------------------------------------------

# Common Interview Questions

1.  Difference between `==` and `.equals()`.
2.  Why are Strings immutable?
3.  Array vs ArrayList.
4.  Overloading vs Overriding.
5.  Static method vs Instance method.
6.  break vs continue.
7.  for vs while loop.
8.  Stack vs Heap memory.
9.  Can Java pass objects by reference?
10. What is method overloading?

### Answers (Short)

-   Java is pass-by-value.
-   Arrays are fixed size; ArrayLists are dynamic.
-   Stack stores method frames; Heap stores objects.
-   Overloading is compile-time polymorphism; overriding is runtime
    polymorphism.

------------------------------------------------------------------------

# Practice Exercises

1.  Reverse a String.
2.  Find the largest element in an array.
3.  Count vowels in a String.
4.  Check palindrome.
5.  Print multiplication table.
6.  Find factorial using methods.
7.  Sort an integer array.
8.  Search an element using linear search.

------------------------------------------------------------------------

# Revision Checklist

-   [ ] Operators
-   [ ] if / switch
-   [ ] Loops
-   [ ] Arrays
-   [ ] Strings
-   [ ] Methods
-   [ ] Overloading
-   [ ] Overriding
-   [ ] Interview Questions

> End of Volume 1 --- Part 2
