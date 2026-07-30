# Volume 5 --- Docker & AWS

# Part 2: Docker Images, Containers & Dockerfile

> Goal: Learn the core building blocks of Docker and create your first
> production-ready Docker image.

------------------------------------------------------------------------

# 1. Docker Image

A Docker Image is a **read-only blueprint** used to create containers.

Examples: - `mysql:8` - `nginx:latest` - `eclipse-temurin:21-jdk`

------------------------------------------------------------------------

# 2. Docker Container

A Container is a **running instance** of a Docker Image.

``` text
Docker Image
      │
 docker run
      │
Docker Container
```

------------------------------------------------------------------------

# 3. Image vs Container

  Image                        Container
  ---------------------------- ----------------------
  Blueprint                    Running application
  Read-only                    Writable
  Can create many containers   Exists while running

------------------------------------------------------------------------

# 4. Dockerfile

A Dockerfile contains instructions to build an image.

``` dockerfile
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
```

------------------------------------------------------------------------

# 5. Common Dockerfile Instructions

  Instruction   Purpose
  ------------- ------------------------------
  FROM          Base image
  WORKDIR       Working directory
  COPY          Copy files
  RUN           Execute command during build
  EXPOSE        Document application port
  ENTRYPOINT    Default executable
  CMD           Default arguments

------------------------------------------------------------------------

# 6. Build an Image

``` bash
docker build -t student-api:1.0 .
```

List images:

``` bash
docker images
```

------------------------------------------------------------------------

# 7. Run a Container

``` bash
docker run -d -p 8080:8080 --name student-api student-api:1.0
```

Useful commands:

``` bash
docker ps
docker stop student-api
docker start student-api
docker rm student-api
```

------------------------------------------------------------------------

# 8. Inspect Logs

``` bash
docker logs student-api
```

Execute commands inside a container:

``` bash
docker exec -it student-api bash
```

------------------------------------------------------------------------

# 9. Best Practices

-   Use official base images
-   Keep images small
-   Pin image versions
-   Use `.dockerignore`
-   Don't hardcode secrets

------------------------------------------------------------------------

# 10. Common Mistakes

-   Using `latest` everywhere
-   Copying unnecessary files
-   Large image sizes
-   Running as root

------------------------------------------------------------------------

# 11. Interview Questions

1.  What is Docker?
2.  Image vs Container?
3.  What is a Dockerfile?
4.  What does `FROM` do?
5.  Difference between `CMD` and `ENTRYPOINT`?
6.  How do you build an image?
7.  How do you inspect logs?
8.  Why use `.dockerignore`?

------------------------------------------------------------------------

# 12. Mini Project

Containerize a Spring Boot application and expose it on port 8080.

------------------------------------------------------------------------

# 13. Revision Checklist

-   [ ] Images
-   [ ] Containers
-   [ ] Dockerfile
-   [ ] Build
-   [ ] Run
-   [ ] Logs
-   [ ] Best Practices
-   [ ] Interview Questions

> Next Chapter: Docker Networking & Volumes
