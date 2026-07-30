# Volume 5 --- Docker + AWS

# Part 1: Introduction to Docker & Containerization

> Goal: Understand why Docker exists, how containers work, and how they
> are used to deploy modern Java Full Stack applications.

------------------------------------------------------------------------

# 1. What is Docker?

Docker is a containerization platform that packages an application and
all its dependencies into a lightweight, portable container.

Benefits: - Consistent development environment - Easy deployment - Fast
startup - Better resource utilization - Simplified scaling

------------------------------------------------------------------------

# 2. Why Do We Need Docker?

Without Docker: - "Works on my machine" problems - Different library
versions - Manual server setup - Difficult deployments

With Docker: - Same environment everywhere - Faster onboarding -
Repeatable deployments

------------------------------------------------------------------------

# 3. What is a Container?

A container is a lightweight, isolated environment that runs an
application with everything it needs.

Example: - Spring Boot App - Java Runtime - Required Libraries -
Configuration

All packaged together.

------------------------------------------------------------------------

# 4. Virtual Machine vs Container

  Virtual Machine         Docker Container
  ----------------------- -----------------------
  Full guest OS           Shares host OS kernel
  Heavy                   Lightweight
  Slower startup          Starts in seconds
  Higher resource usage   Lower resource usage

------------------------------------------------------------------------

# 5. Docker Architecture

``` text
Developer
   │
Docker CLI
   │
Docker Engine
   │
Docker Image
   │
Docker Container
```

------------------------------------------------------------------------

# 6. Docker Components

-   Docker Engine
-   Docker CLI
-   Docker Image
-   Docker Container
-   Docker Registry (Docker Hub)

------------------------------------------------------------------------

# 7. Image vs Container

  Image       Container
  ----------- ------------------------
  Blueprint   Running instance
  Read-only   Writable while running

------------------------------------------------------------------------

# 8. Installing Docker

Verify installation:

``` bash
docker --version
docker compose version
```

------------------------------------------------------------------------

# 9. First Docker Commands

``` bash
docker pull hello-world
docker images
docker ps
docker ps -a
docker run hello-world
docker stop <container-id>
docker rm <container-id>
```

------------------------------------------------------------------------

# 10. Typical Workflow

``` text
Write Code
   │
Build Application
   │
Create Docker Image
   │
Run Container
   │
Deploy
```

------------------------------------------------------------------------

# 11. Best Practices

-   Keep images small
-   Use official base images
-   Remove unused containers
-   Keep Docker updated
-   Learn commands before using GUIs

------------------------------------------------------------------------

# 12. Common Mistakes

-   Confusing images with containers
-   Deleting containers without saving data
-   Running everything as root
-   Ignoring logs

------------------------------------------------------------------------

# 13. Interview Questions

1.  What is Docker?
2.  Why Docker?
3.  What is containerization?
4.  Image vs Container?
5.  Docker vs Virtual Machine?
6.  What is Docker Hub?
7.  What is Docker Engine?
8.  Why is Docker popular in DevOps?
9.  Why use containers for Spring Boot?
10. What problems does Docker solve?

------------------------------------------------------------------------

# 14. Mini Project

Containerize a simple Spring Boot "Hello API" and verify it runs
successfully using Docker.

------------------------------------------------------------------------

# 15. Revision Checklist

-   [ ] Docker Basics
-   [ ] Containers
-   [ ] Images
-   [ ] Docker Architecture
-   [ ] Installation
-   [ ] Basic Commands
-   [ ] Workflow
-   [ ] Interview Questions

> Next Chapter: Docker Images & Dockerfile
