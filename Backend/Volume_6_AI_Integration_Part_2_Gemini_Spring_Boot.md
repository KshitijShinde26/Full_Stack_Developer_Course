# Volume 6 --- AI Integration for Java Developers

# Part 2: Integrating Gemini API with Spring Boot

> **Goal:** Build a production-ready AI service in Spring Boot using the
> official Google Gemini Java SDK.

------------------------------------------------------------------------

# 1. Overview

Gemini is Google's family of generative AI models. Instead of training
your own model, your backend securely sends prompts to Gemini and
returns the generated response.

Architecture:

``` text
React UI
   │
REST API
   │
Spring Boot
   │
Gemini Service
   │
Google Gemini API
```

------------------------------------------------------------------------

# 2. Prerequisites

-   Java 21 (recommended)
-   Spring Boot 3.x
-   Maven
-   Google AI API Key
-   Basic REST API knowledge

------------------------------------------------------------------------

# 3. Project Structure

``` text
src
├── controller
│   └── AiController.java
├── service
│   └── GeminiService.java
├── config
├── dto
└── application.properties
```

------------------------------------------------------------------------

# 4. Add Dependencies

Typical Maven dependencies:

-   Spring Boot Web
-   Jackson
-   Official Google Gemini Java SDK

Always use the latest stable SDK version from the official
documentation.

------------------------------------------------------------------------

# 5. Store API Key

Never hardcode API keys.

``` properties
gemini.api.key=${GEMINI_API_KEY}
```

Prefer environment variables or a secrets manager.

------------------------------------------------------------------------

# 6. Service Layer

Responsibilities: - Initialize Gemini client - Build prompt - Call
model - Handle errors - Return clean response

Keep AI logic out of controllers.

------------------------------------------------------------------------

# 7. REST Controller

Example endpoints:

``` text
POST /api/ai/chat
POST /api/ai/summarize
POST /api/ai/explain
```

The controller should validate input and delegate to the service.

------------------------------------------------------------------------

# 8. Prompt Engineering Basics

Good prompt:

``` text
Explain Java Streams in simple language with one example.
```

Better prompt:

``` text
Explain Java Streams for a third-year engineering student.
Include:
- Definition
- Syntax
- Real-world example
- Interview tips
```

------------------------------------------------------------------------

# 9. Error Handling

Handle: - Invalid API key - Rate limits - Network failures - Empty
responses - Timeouts

Return meaningful HTTP status codes.

------------------------------------------------------------------------

# 10. Streaming Responses

Benefits: - Faster perceived response - Better chat experience - Live
token generation

Streaming is ideal for chatbots and AI assistants.

------------------------------------------------------------------------

# 11. Security Best Practices

-   Keep API keys on the backend
-   Validate prompts
-   Limit request size
-   Add rate limiting
-   Log failures, not secrets

------------------------------------------------------------------------

# 12. Performance Tips

-   Reuse clients
-   Cache repeated requests
-   Use async processing for long tasks
-   Monitor latency and token usage

------------------------------------------------------------------------

# 13. Mini Project

Build an AI Study Assistant:

Features: - Ask questions - Summarize notes - Generate quizzes - Explain
code - Maintain chat history

Frontend: React

Backend: Spring Boot

Model: Gemini

------------------------------------------------------------------------

# 14. Interview Questions

1.  Why integrate Gemini through the backend?
2.  Why shouldn't API keys be exposed?
3.  What is prompt engineering?
4.  Explain the request flow.
5.  What is streaming?
6.  How do you handle API failures?
7.  How do you secure AI endpoints?
8.  Why use a service layer?
9.  What causes hallucinations?
10. How would you optimize AI response time?

------------------------------------------------------------------------

# 15. Revision Checklist

-   [ ] Gemini Architecture
-   [ ] SDK Setup
-   [ ] API Key Management
-   [ ] Service Layer
-   [ ] REST APIs
-   [ ] Prompt Engineering
-   [ ] Streaming
-   [ ] Security
-   [ ] Performance
-   [ ] Interview Questions

> Next Part: Building an AI Chatbot with React + Spring Boot + Gemini
