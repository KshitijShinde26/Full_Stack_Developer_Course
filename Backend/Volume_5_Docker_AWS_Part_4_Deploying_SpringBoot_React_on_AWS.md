# Volume 5 --- Docker + AWS

# Part 4: Deploying Spring Boot + React on AWS

> **Goal:** Deploy a production-ready full-stack application (Spring
> Boot + React + MySQL) on AWS using Docker.

------------------------------------------------------------------------

# 1. Deployment Architecture

``` text
Users
  │
Internet
  │
AWS EC2
  ├── Docker
  │    ├── React Frontend
  │    ├── Spring Boot Backend
  │    └── MySQL
  │
  └── Nginx (Optional Reverse Proxy)
```

------------------------------------------------------------------------

# 2. Prerequisites

-   AWS Account
-   EC2 Instance (Ubuntu)
-   Docker & Docker Compose installed
-   Spring Boot JAR
-   React production build
-   Security Group allowing ports:
    -   22 (SSH)
    -   80 (HTTP)
    -   443 (HTTPS)
    -   8080 (if testing backend directly)

------------------------------------------------------------------------

# 3. Prepare Spring Boot

Build the project:

``` bash
mvn clean package
```

Create a Docker image:

``` bash
docker build -t student-api .
```

------------------------------------------------------------------------

# 4. Prepare React

Build production files:

``` bash
npm install
npm run build
```

Serve using Nginx or another static web server.

------------------------------------------------------------------------

# 5. Docker Compose

Example:

``` yaml
services:
  backend:
    image: student-api
    ports:
      - "8080:8080"

  frontend:
    image: nginx
    ports:
      - "80:80"

  mysql:
    image: mysql:8
```

------------------------------------------------------------------------

# 6. Launch EC2

1.  Create EC2 instance
2.  Download key pair
3.  Connect:

``` bash
ssh -i key.pem ubuntu@PUBLIC_IP
```

------------------------------------------------------------------------

# 7. Install Docker

``` bash
sudo apt update
sudo apt install docker.io -y
sudo apt install docker-compose -y
```

------------------------------------------------------------------------

# 8. Deploy

Copy project files or pull from Git repository.

Run:

``` bash
docker compose up -d
```

Verify:

``` bash
docker ps
docker logs backend
```

------------------------------------------------------------------------

# 9. Domain & HTTPS

Use: - Route 53 (optional) - Nginx - Let's Encrypt SSL

Always enable HTTPS in production.

------------------------------------------------------------------------

# 10. Monitoring

Useful commands:

``` bash
docker stats
docker logs backend
docker compose ps
```

Use Spring Boot Actuator for health endpoints.

------------------------------------------------------------------------

# 11. Troubleshooting

Common issues: - Port already in use - Database connection failure -
CORS errors - Incorrect environment variables - Security group blocking
traffic

------------------------------------------------------------------------

# 12. Best Practices

-   Store secrets in environment variables
-   Use Docker volumes for MySQL
-   Enable automatic restart policies
-   Keep images updated
-   Back up the database regularly

------------------------------------------------------------------------

# 13. Interview Questions

1.  How do you deploy Spring Boot on AWS?
2.  Why use Docker on EC2?
3.  Why use Docker Compose?
4.  React build vs development server?
5.  How do you expose ports?
6.  What is a reverse proxy?
7.  Why use HTTPS?
8.  What causes CORS issues?
9.  How do you monitor containers?
10. How would you scale this deployment?

------------------------------------------------------------------------

# 14. Mini Project

Deploy: - React Frontend - Spring Boot Backend - MySQL - Docker
Compose - HTTPS - Health Check Endpoint

------------------------------------------------------------------------

# 15. Revision Checklist

-   [ ] EC2
-   [ ] Docker Images
-   [ ] Docker Compose
-   [ ] React Build
-   [ ] Spring Boot Deployment
-   [ ] HTTPS
-   [ ] Monitoring
-   [ ] Troubleshooting
-   [ ] Interview Questions

> Next Part: CI/CD with GitHub Actions
