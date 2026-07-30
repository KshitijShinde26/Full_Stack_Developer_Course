# Volume 5 --- Docker + AWS

# Part 7: Scaling & Load Balancing

> Goal: Learn how production applications handle thousands of users
> using load balancing, auto scaling, caching, and high availability on
> AWS.

------------------------------------------------------------------------

# 1. Why Scale?

As users increase, a single server becomes a bottleneck.

Problems: - Slow response times - Server crashes - High CPU & RAM
usage - Downtime

Scaling improves performance and availability.

------------------------------------------------------------------------

# 2. Vertical vs Horizontal Scaling

## Vertical Scaling

Increase CPU/RAM of the same server.

Pros: - Easy - No code changes

Cons: - Hardware limit - Single point of failure

## Horizontal Scaling

Add more servers.

Pros: - High availability - Better fault tolerance - Unlimited growth

Cons: - Requires load balancing

------------------------------------------------------------------------

# 3. AWS Elastic Load Balancer (ELB)

Responsibilities: - Receives client requests - Distributes traffic -
Performs health checks - Removes unhealthy instances

Types: - Application Load Balancer (ALB) - Network Load Balancer (NLB) -
Gateway Load Balancer

------------------------------------------------------------------------

# 4. Auto Scaling Group (ASG)

Automatically: - Launches EC2 instances - Removes extra instances -
Replaces failed instances

Example: - Below 20% CPU → 2 servers - Above 70% CPU → 6 servers

------------------------------------------------------------------------

# 5. High Availability

Deploy instances in multiple Availability Zones.

Benefits: - Fault tolerance - Minimal downtime - Better reliability

------------------------------------------------------------------------

# 6. Caching

Popular options: - Redis - Amazon ElastiCache

Cache: - User sessions - Frequently accessed data - API responses

------------------------------------------------------------------------

# 7. Database Scaling

Options: - Read Replicas - Multi-AZ deployment - Amazon RDS - Database
indexing - Connection pooling

------------------------------------------------------------------------

# 8. CDN

Use Amazon CloudFront for: - Images - CSS - JavaScript - Videos

Benefits: - Lower latency - Faster page loads

------------------------------------------------------------------------

# 9. Monitoring

AWS CloudWatch: - CPU - Memory - Disk - Network - Alarms - Logs

------------------------------------------------------------------------

# 10. Architecture

``` text
Users
   |
CloudFront
   |
Application Load Balancer
   |
-----------------------------
|           |               |
EC2-1     EC2-2          EC2-3
(Spring Boot + Docker)
        |
      Amazon RDS
        |
    ElastiCache
```

------------------------------------------------------------------------

# 11. Best Practices

-   Use Auto Scaling
-   Configure health checks
-   Keep applications stateless
-   Store sessions in Redis
-   Use HTTPS everywhere
-   Enable monitoring

------------------------------------------------------------------------

# 12. Interview Questions

1.  Vertical vs Horizontal Scaling?
2.  What is a Load Balancer?
3.  Why use Auto Scaling?
4.  What is High Availability?
5.  ALB vs NLB?
6.  Why use Redis?
7.  What is CloudFront?
8.  How do Read Replicas help?
9.  What is Multi-AZ?
10. How do you deploy a highly available application?

------------------------------------------------------------------------

# 13. Mini Project

Design a scalable deployment for: - React Frontend - Spring Boot
Backend - MySQL (Amazon RDS) - Redis - ALB - Auto Scaling Group -
CloudFront

------------------------------------------------------------------------

# 14. Revision Checklist

-   [ ] Scaling
-   [ ] ELB
-   [ ] Auto Scaling
-   [ ] High Availability
-   [ ] CloudFront
-   [ ] Redis
-   [ ] RDS
-   [ ] CloudWatch
-   [ ] Interview Questions

> Next Part: Docker & AWS Interview Handbook
