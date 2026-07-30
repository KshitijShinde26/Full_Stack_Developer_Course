# Volume 5 --- Docker + AWS

# Part 5: CI/CD with GitHub Actions

> **Goal:** Automatically build, test, and deploy a Spring Boot + React
> application whenever code is pushed to GitHub.

------------------------------------------------------------------------

# 1. What is CI/CD?

**CI (Continuous Integration)** automatically builds and tests code
after every commit.

**CD (Continuous Delivery/Deployment)** automatically delivers or
deploys the application after successful testing.

Benefits: - Faster releases - Fewer manual errors - Consistent
deployments - Easier collaboration

------------------------------------------------------------------------

# 2. CI/CD Pipeline

``` text
Developer
    │
Git Push
    │
GitHub Repository
    │
GitHub Actions
    ├── Checkout Code
    ├── Install Dependencies
    ├── Run Tests
    ├── Build React
    ├── Package Spring Boot
    ├── Build Docker Images
    └── Deploy to AWS EC2
```

------------------------------------------------------------------------

# 3. GitHub Actions Workflow

Create:

``` text
.github/workflows/deploy.yml
```

Basic workflow:

``` yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
      - run: mvn clean package
```

------------------------------------------------------------------------

# 4. Build React

``` yaml
- uses: actions/setup-node@v4
- run: npm install
- run: npm run build
```

------------------------------------------------------------------------

# 5. Docker Image

``` bash
docker build -t student-app .
```

Push to Docker Hub or GitHub Container Registry.

------------------------------------------------------------------------

# 6. Deploy to AWS

Typical deployment: 1. SSH into EC2 2. Pull latest Docker image 3. Stop
old container 4. Start new container 5. Verify health endpoint

------------------------------------------------------------------------

# 7. GitHub Secrets

Store sensitive values securely: - AWS_ACCESS_KEY_ID -
AWS_SECRET_ACCESS_KEY - EC2_HOST - EC2_USERNAME - SSH_PRIVATE_KEY -
DOCKER_USERNAME - DOCKER_PASSWORD

Never hard-code secrets in your repository.

------------------------------------------------------------------------

# 8. Testing Before Deployment

Recommended: - Unit Tests (JUnit) - Integration Tests - React Tests -
Lint Checks

Deployment should occur only if all checks pass.

------------------------------------------------------------------------

# 9. Monitoring

Useful commands:

``` bash
docker ps
docker logs <container>
docker stats
```

Monitor: - CPU - Memory - Response Time - Application Health

------------------------------------------------------------------------

# 10. Best Practices

-   Protect the main branch
-   Review pull requests
-   Use version tags
-   Roll back on failures
-   Keep workflows modular

------------------------------------------------------------------------

# 11. Interview Questions

1.  What is CI?
2.  What is CD?
3.  Why use GitHub Actions?
4.  What are GitHub Secrets?
5.  Why automate deployments?
6.  How do you roll back a failed deployment?
7.  What happens if tests fail?

------------------------------------------------------------------------

# 12. Mini Project

Create a complete CI/CD pipeline that: - Builds Spring Boot - Builds
React - Runs tests - Builds Docker image - Deploys to AWS EC2
automatically

------------------------------------------------------------------------

# 13. Revision Checklist

-   [ ] CI
-   [ ] CD
-   [ ] GitHub Actions
-   [ ] Workflow Files
-   [ ] Secrets
-   [ ] Docker Build
-   [ ] AWS Deployment
-   [ ] Monitoring
-   [ ] Interview Questions

> Next Part: Monitoring, Logging & Scaling
