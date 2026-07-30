# Volume 3 --- Spring Framework & Spring Boot

# Part 14: Docker & Deployment (Complete Guide)

> Learn how to containerize Spring Boot applications and deploy them
> using Docker and cloud servers.

------------------------------------------------------------------------

# 1. What is Docker?

Docker is a containerization platform that packages an application along
with its dependencies into a portable container.

Benefits: - Consistent environments - Faster deployments - Easy
scaling - Better resource utilization

------------------------------------------------------------------------

# 2. Virtual Machine vs Container

  Virtual Machine    Docker Container
  ------------------ -----------------------
  Includes full OS   Shares host OS kernel
  Heavier            Lightweight
  Slower startup     Fast startup

------------------------------------------------------------------------

# 3. Docker Architecture

``` text
Developer
    │
Docker CLI
    │
Docker Engine
    │
Images
    │
Containers
```

------------------------------------------------------------------------

# 4. Docker Installation

Verify installation:

``` bash
docker --version
docker compose version
```

------------------------------------------------------------------------

# 5. Dockerfile

Example:

``` dockerfile
FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY target/app.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
```

------------------------------------------------------------------------

# 6. Build Image

``` bash
docker build -t student-api .
```

------------------------------------------------------------------------

# 7. Run Container

``` bash
docker run -d -p 8080:8080 --name student-api student-api
```

Useful commands:

``` bash
docker ps
docker logs student-api
docker stop student-api
docker rm student-api
```

------------------------------------------------------------------------

# 8. Docker Compose

Example:

``` yaml
services:
  app:
    build: .
    ports:
      - "8080:8080"

  mysql:
    image: mysql:8
```

Compose helps run multiple services together.

------------------------------------------------------------------------

# 9. Environment Variables

Avoid hardcoding secrets.

``` bash
SPRING_DATASOURCE_URL
SPRING_DATASOURCE_USERNAME
SPRING_DATASOURCE_PASSWORD
```

------------------------------------------------------------------------

# 10. Deployment Workflow

``` text
Write Code
    │
Build JAR
    │
Create Docker Image
    │
Push Image
    │
Deploy to Server
    │
Monitor Application
```

------------------------------------------------------------------------

# 11. Deploying to a Cloud VM

Typical steps: 1. Create VM (EC2 or similar) 2. Install Docker 3. Pull
image 4. Run container 5. Configure firewall 6. Point domain to server

------------------------------------------------------------------------

# 12. CI/CD Overview

Automate: - Build - Test - Package - Docker image creation - Deployment

Popular tools: - GitHub Actions - Jenkins - GitLab CI

------------------------------------------------------------------------

# 13. Monitoring

Monitor: - CPU - Memory - Logs - Health endpoints

Spring Boot Actuator is commonly used.

------------------------------------------------------------------------

# 14. Best Practices

-   Use small base images
-   Multi-stage builds
-   Don't run as root
-   Externalize configuration
-   Keep images updated
-   Scan images for vulnerabilities

------------------------------------------------------------------------

# 15. Common Mistakes

-   Hardcoded credentials
-   Large Docker images
-   Ignoring logs
-   Not using health checks
-   Leaving unused containers running

------------------------------------------------------------------------

# 16. Interview Questions

1.  What is Docker?
2.  Image vs Container?
3.  What is a Dockerfile?
4.  Why use Docker Compose?
5.  What is containerization?
6.  How do you expose ports?
7.  Why use environment variables?
8.  What is CI/CD?
9.  What is Spring Boot Actuator?
10. How do you deploy a Spring Boot application?

------------------------------------------------------------------------

# 17. Mini Project

Deploy the Student Management API: - Spring Boot - MySQL - Docker
Compose - Environment Variables - Health Check - Cloud VM Deployment

------------------------------------------------------------------------

# 18. Revision Checklist

-   [ ] Docker Basics
-   [ ] Dockerfile
-   [ ] Images
-   [ ] Containers
-   [ ] Docker Compose
-   [ ] Environment Variables
-   [ ] Deployment
-   [ ] CI/CD
-   [ ] Monitoring
-   [ ] Interview Questions

> Next Chapter: Spring Boot Interview Handbook
