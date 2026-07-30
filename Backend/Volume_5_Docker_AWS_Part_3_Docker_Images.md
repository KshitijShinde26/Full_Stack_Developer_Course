# Volume 5 --- Docker + AWS

# Part 3: Docker Images

> Goal: Understand Docker images, how they are built, managed,
> optimized, and used in real-world deployments.

------------------------------------------------------------------------

# 1. What is a Docker Image?

A Docker Image is a **read-only template** used to create Docker
containers.

Think of it as: - Image = Blueprint - Container = Running application

------------------------------------------------------------------------

# 2. Image vs Container

  Docker Image         Docker Container
  -------------------- ------------------------
  Read-only template   Running instance
  Immutable            Can be started/stopped
  Built once           Created from an image

------------------------------------------------------------------------

# 3. Image Layers

Each instruction in a Dockerfile creates a new layer.

``` text
Base Image
   │
Install Java
   │
Copy JAR
   │
Configuration
   │
Final Image
```

Layers are cached to speed up builds.

------------------------------------------------------------------------

# 4. Pulling Images

``` bash
docker pull eclipse-temurin:21-jdk
docker pull mysql:8
docker pull nginx
```

------------------------------------------------------------------------

# 5. Listing Images

``` bash
docker images
```

Useful columns: - Repository - Tag - Image ID - Size

------------------------------------------------------------------------

# 6. Building Images

``` bash
docker build -t student-api:v1 .
```

-   `-t` assigns a name and tag.
-   `.` uses the current directory as the build context.

------------------------------------------------------------------------

# 7. Tagging Images

``` bash
docker tag student-api:v1 student-api:latest
```

Tags help manage versions.

------------------------------------------------------------------------

# 8. Removing Images

``` bash
docker rmi student-api:v1
```

Remove unused images to free disk space.

------------------------------------------------------------------------

# 9. Docker Hub

Docker Hub is the default public image registry.

Push workflow:

``` bash
docker login
docker tag student-api username/student-api:v1
docker push username/student-api:v1
```

------------------------------------------------------------------------

# 10. Best Practices

-   Use official base images.
-   Keep images small.
-   Pin image versions.
-   Use multi-stage builds.
-   Remove unnecessary files.

------------------------------------------------------------------------

# 11. Common Mistakes

-   Using `latest` everywhere
-   Large image sizes
-   Storing secrets inside images
-   Ignoring image updates

------------------------------------------------------------------------

# 12. Interview Questions

1.  What is a Docker image?
2.  Image vs Container?
3.  What is an image layer?
4.  Why are layers cached?
5.  What is Docker Hub?
6.  Why tag images?
7.  How do you build an image?
8.  Why avoid `latest` in production?
9.  What is a base image?
10. How do you reduce image size?

------------------------------------------------------------------------

# 13. Mini Project

Create an optimized image for a Spring Boot application: - Build the
JAR - Create Docker image - Tag versions - Push to Docker Hub

------------------------------------------------------------------------

# 14. Revision Checklist

-   [ ] Docker Images
-   [ ] Layers
-   [ ] Build
-   [ ] Pull
-   [ ] Push
-   [ ] Tags
-   [ ] Docker Hub
-   [ ] Best Practices
-   [ ] Interview Questions

> Next Chapter: Docker Containers
