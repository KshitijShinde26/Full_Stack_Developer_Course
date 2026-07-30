# Volume 5 --- Docker + AWS

# Part 6: Monitoring, Logging & Troubleshooting

> Goal: Learn how to monitor, debug, and maintain Spring Boot + React
> applications running in Docker on AWS.

------------------------------------------------------------------------

# 1. Why Monitoring Matters

Monitoring helps you: - Detect downtime - Track CPU, RAM, and disk
usage - Identify slow APIs - Find application errors - Improve
reliability

------------------------------------------------------------------------

# 2. Monitoring Architecture

``` text
Users
   │
AWS EC2
   │
Docker Containers
   ├── Spring Boot
   ├── React
   └── MySQL
        │
 Logs & Metrics
        │
CloudWatch / Prometheus / Grafana
```

------------------------------------------------------------------------

# 3. Docker Monitoring Commands

``` bash
docker ps
docker stats
docker top <container>
docker inspect <container>
docker logs <container>
```

Useful options:

``` bash
docker logs -f backend
docker logs --tail=100 backend
```

------------------------------------------------------------------------

# 4. Spring Boot Monitoring

Add Spring Boot Actuator:

``` xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Common endpoints:

-   /actuator/health
-   /actuator/info
-   /actuator/metrics
-   /actuator/env
-   /actuator/loggers

------------------------------------------------------------------------

# 5. AWS CloudWatch

CloudWatch can monitor: - EC2 CPU - Memory - Disk - Network traffic -
Logs - Alarms

Create alerts for: - High CPU - Low storage - Instance stopped - High
error rate

------------------------------------------------------------------------

# 6. Grafana & Prometheus

Prometheus: - Collects metrics

Grafana: - Visualizes dashboards

Popular metrics: - Request count - API latency - JVM memory - Garbage
collection - Database connections

------------------------------------------------------------------------

# 7. Logging Best Practices

Use log levels:

-   ERROR
-   WARN
-   INFO
-   DEBUG
-   TRACE

Example:

``` java
logger.info("User logged in");
logger.error("Database connection failed");
```

Never log: - Passwords - JWT secrets - API keys - Personal data

------------------------------------------------------------------------

# 8. Troubleshooting Checklist

If application doesn't work:

1.  Check EC2 status
2.  Check Docker containers
3.  Check application logs
4.  Verify environment variables
5.  Verify database connectivity
6.  Check security groups
7.  Test API using Postman
8.  Check browser console

------------------------------------------------------------------------

# 9. Performance Optimization

-   Enable caching
-   Optimize SQL queries
-   Use connection pooling
-   Compress responses
-   Minify React assets
-   Use CDN for static files

------------------------------------------------------------------------

# 10. Disaster Recovery

-   Database backups
-   Docker image backups
-   Infrastructure as Code
-   Version control
-   Recovery documentation

------------------------------------------------------------------------

# 11. Best Practices

-   Centralize logs
-   Monitor continuously
-   Rotate logs
-   Set alarms
-   Test backups regularly
-   Update dependencies

------------------------------------------------------------------------

# 12. Interview Questions

1.  What is AWS CloudWatch?
2.  What is Spring Boot Actuator?
3.  Difference between Prometheus and Grafana?
4.  How do you monitor Docker containers?
5.  How do you debug a failed deployment?
6.  Why is logging important?
7.  What log levels are commonly used?
8.  What metrics should you monitor?
9.  What is disaster recovery?
10. How do you improve application performance?

------------------------------------------------------------------------

# 13. Mini Project

Create a production-ready deployment with: - Docker - AWS EC2 - Spring
Boot Actuator - CloudWatch monitoring - Docker logs - Health checks

------------------------------------------------------------------------

# 14. Revision Checklist

-   [ ] Docker monitoring
-   [ ] Spring Boot Actuator
-   [ ] CloudWatch
-   [ ] Prometheus
-   [ ] Grafana
-   [ ] Logging
-   [ ] Troubleshooting
-   [ ] Performance optimization
-   [ ] Disaster recovery
-   [ ] Interview questions

> Next Part: Scaling, Load Balancing & High Availability
