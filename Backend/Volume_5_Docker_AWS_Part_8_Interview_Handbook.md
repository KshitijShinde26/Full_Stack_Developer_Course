# Volume 5 --- Docker + AWS

# Part 8: Docker & AWS Interview Handbook

> Goal: A last-minute revision guide for Docker and AWS interviews.

## 1. Quick Revision

-   Docker Image vs Container
-   Dockerfile
-   Docker Compose
-   Volumes
-   Networks
-   EC2
-   IAM
-   S3
-   Security Groups
-   Load Balancer
-   Auto Scaling
-   CloudWatch

## 2. Docker Workflow

``` text
Source Code
   │
Dockerfile
   │
docker build
   │
Docker Image
   │
docker run
   │
Running Container
```

## 3. AWS Deployment Flow

``` text
Developer
   │
GitHub
   │
CI/CD
   │
EC2
   │
Docker Compose
   │
Spring Boot + React + MySQL
```

## 4. Beginner Interview Questions

1.  What is Docker?
2.  What is a Docker image?
3.  What is a container?
4.  Why use Docker Compose?
5.  What is EC2?
6.  What is S3?
7.  What is IAM?
8.  What is a Security Group?
9.  Difference between Docker image and container?
10. What is a volume?

## 5. Intermediate Interview Questions

-   Explain containerization.
-   Bridge vs Host network.
-   Multi-stage Docker builds.
-   Reverse proxy with Nginx.
-   Why use Load Balancer?
-   How does Auto Scaling work?
-   Blue-Green deployment.
-   Rolling deployment.

## 6. Advanced Questions

-   Docker Swarm vs Kubernetes
-   ECS vs EKS
-   Stateless vs Stateful containers
-   Secrets management
-   Zero-downtime deployment
-   Monitoring with CloudWatch

## 7. Hands-on Tasks

-   Dockerize a Spring Boot app.
-   Dockerize a React app.
-   Create docker-compose.yml.
-   Deploy on EC2.
-   Configure HTTPS.
-   Debug a failed deployment.

## 8. Common Mistakes

-   Hardcoding secrets
-   Running containers as root
-   Large Docker images
-   Not exposing required ports
-   Ignoring logs
-   Missing backups

## 9. HR Questions

-   Describe your deployment project.
-   Biggest deployment challenge?
-   How did you debug production issues?
-   Why Docker over virtual machines?

## 10. Project Discussion Tips

Be ready to explain: - Architecture - Dockerfile - docker-compose.yml -
Environment variables - Deployment steps - Security - Scaling

## 11. Final Checklist

-   [ ] Docker commands
-   [ ] Docker Compose
-   [ ] EC2
-   [ ] IAM
-   [ ] S3
-   [ ] HTTPS
-   [ ] CI/CD
-   [ ] Monitoring
-   [ ] Debugging
-   [ ] Interview questions

Congratulations! You have completed Volume 5.
