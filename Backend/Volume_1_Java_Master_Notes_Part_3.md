# Volume 1 --- Java Master Notes

## Part 3: Classes, Objects, Constructors, static, final, Encapsulation, Inheritance, Polymorphism & Abstraction

# Class and Object

## What is a Class?

A class is a blueprint for creating objects.

``` java
class Student {
    int id;
    String name;

    void display() {
        System.out.println(id + " " + name);
    }
}
```

## What is an Object?

An object is an instance of a class.

``` java
Student s = new Student();
s.id = 1;
s.name = "Kshitij";
s.display();
```

### Interview Questions

**Q. Difference between Class and Object?**

  Class                  Object
  ---------------------- -----------------
  Blueprint              Instance
  No memory for fields   Occupies memory
  Logical entity         Physical entity

------------------------------------------------------------------------

# Constructors

A constructor initializes an object.

## Default Constructor

``` java
class Student{
    Student(){
        System.out.println("Object Created");
    }
}
```

## Parameterized Constructor

``` java
class Student{
    int id;
    Student(int id){
        this.id=id;
    }
}
```

## Constructor Overloading

Multiple constructors with different parameter lists.

### Interview Questions

1.  Constructor vs Method
2.  Can constructors be inherited?
3.  Can constructors be overloaded?

**Answers**

-   Constructors have no return type.
-   Constructors are **not inherited**.
-   Yes, constructors can be overloaded.

------------------------------------------------------------------------

# this Keyword

Uses: - Refer current object - Invoke constructor - Pass current
object - Return current object

``` java
class Student{
    int id;
    Student(int id){
        this.id=id;
    }
}
```

------------------------------------------------------------------------

# static Keyword

Belongs to the class rather than objects.

``` java
class Student{
    static String college="SCOE";
}
```

## Static Method

``` java
static void show(){
    System.out.println("Hello");
}
```

### Interview Question

Why can't a static method directly access non-static variables?

Because non-static variables belong to objects, while static methods
belong to the class.

------------------------------------------------------------------------

# final Keyword

## final Variable

Cannot be modified.

``` java
final int MAX = 100;
```

## final Method

Cannot be overridden.

## final Class

Cannot be inherited.

------------------------------------------------------------------------

# Encapsulation

Binding data and methods together while restricting direct access.

``` java
class Employee{
    private double salary;

    public void setSalary(double salary){
        this.salary=salary;
    }

    public double getSalary(){
        return salary;
    }
}
```

Benefits: - Data hiding - Security - Easy maintenance

------------------------------------------------------------------------

# Inheritance

Allows one class to inherit another.

``` java
class Animal{
    void eat(){}
}

class Dog extends Animal{
    void bark(){}
}
```

## Types

-   Single
-   Multilevel
-   Hierarchical

(Java doesn't support multiple inheritance through classes.)

------------------------------------------------------------------------

# Polymorphism

## Compile-Time

Method Overloading

## Run-Time

Method Overriding

``` java
class Animal{
    void sound(){
        System.out.println("Animal");
    }
}

class Dog extends Animal{
    @Override
    void sound(){
        System.out.println("Bark");
    }
}
```

Benefits: - Flexibility - Extensibility

------------------------------------------------------------------------

# Abstraction

Hides implementation details.

## Abstract Class

``` java
abstract class Shape{
    abstract void draw();
}
```

## Interface

``` java
interface Vehicle{
    void start();
}
```

### Abstract Class vs Interface

  Abstract Class           Interface
  ------------------------ ----------------------
  Partial implementation   Contract
  Constructor allowed      No constructor
  Instance variables       Constants by default

------------------------------------------------------------------------

# Object Class

Important methods: - toString() - equals() - hashCode() - clone()

------------------------------------------------------------------------

# instanceof Operator

Checks object type.

``` java
if(obj instanceof Student){
    System.out.println("Student");
}
```

------------------------------------------------------------------------

# Common Interview Questions

1.  What is Encapsulation?
2.  Why use getters and setters?
3.  Types of Inheritance in Java?
4.  Why doesn't Java support multiple inheritance?
5.  Overloading vs Overriding?
6.  Abstract Class vs Interface?
7.  Can we create an object of an abstract class?
8.  Why use the final keyword?
9.  Purpose of the static keyword?
10. What is the this keyword?

### Short Answers

-   Encapsulation protects data.
-   Java avoids multiple inheritance ambiguity using interfaces.
-   Abstract classes cannot be instantiated.
-   Interfaces define behavior contracts.
-   static belongs to the class.
-   final prevents modification.

------------------------------------------------------------------------

# Practice Programs

1.  Student Management Class
2.  Bank Account using Encapsulation
3.  Employee Inheritance
4.  Shape using Abstract Class
5.  Vehicle using Interface
6.  Method Overloading Calculator
7.  Runtime Polymorphism Example

------------------------------------------------------------------------

# Revision Checklist

-   [ ] Class & Object
-   [ ] Constructors
-   [ ] this Keyword
-   [ ] static
-   [ ] final
-   [ ] Encapsulation
-   [ ] Inheritance
-   [ ] Polymorphism
-   [ ] Abstraction
-   [ ] Interview Questions

> End of Volume 1 --- Part 3
