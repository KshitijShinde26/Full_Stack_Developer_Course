# Volume 6 --- AI Integration for Java Developers

# Part 3: Prompt Engineering & AI Application Design

> **Goal:** Learn how to write effective prompts, design AI-powered
> applications, and build reliable LLM features in Spring Boot + React
> projects.

------------------------------------------------------------------------

# 1. What is Prompt Engineering?

Prompt engineering is the practice of designing clear instructions that
help an AI model produce accurate and useful responses.

A good prompt includes: - Role - Task - Context - Constraints - Output
format

------------------------------------------------------------------------

# 2. Prompt Structure

``` text
Role
Task
Context
Rules
Expected Output
```

Example:

``` text
You are a Java mentor.
Explain Dependency Injection in simple language.
Use an example.
Limit the answer to 150 words.
```

------------------------------------------------------------------------

# 3. Types of Prompts

-   Zero-shot
-   One-shot
-   Few-shot
-   Chain-of-thought (for internal reasoning support when appropriate)
-   Structured JSON prompts

------------------------------------------------------------------------

# 4. Prompt Templates

## Summarization

``` text
Summarize the following text in 5 bullet points.
```

## Code Review

``` text
Review this Spring Boot code.
Identify bugs and suggest improvements.
```

## Resume Review

``` text
Act as a technical recruiter.
Evaluate this resume.
```

------------------------------------------------------------------------

# 5. AI Application Architecture

``` text
React UI
   │
Spring Boot Controller
   │
Prompt Builder
   │
AI Service
   │
LLM API
   │
Response Formatter
```

------------------------------------------------------------------------

# 6. Guardrails

-   Validate user input
-   Limit prompt size
-   Filter harmful content
-   Never expose API keys
-   Verify AI output before saving or executing

------------------------------------------------------------------------

# 7. Reducing Hallucinations

-   Provide relevant context
-   Ask for structured output
-   Request citations when appropriate
-   Use retrieval (RAG) for external knowledge
-   Keep prompts specific

------------------------------------------------------------------------

# 8. Structured Output

Example:

``` json
{
  "title": "",
  "summary": "",
  "skills": []
}
```

Structured responses are easier to parse in Java.

------------------------------------------------------------------------

# 9. Real-World AI Features

-   AI Chatbot
-   Resume Analyzer
-   Code Explainer
-   Email Generator
-   Interview Question Generator
-   Study Assistant

------------------------------------------------------------------------

# 10. Best Practices

-   Keep prompts reusable
-   Version important prompts
-   Log failures
-   Handle API timeouts
-   Cache repeated responses when suitable

------------------------------------------------------------------------

# 11. Interview Questions

1.  What is prompt engineering?
2.  What makes a good prompt?
3.  Zero-shot vs Few-shot prompting?
4.  What is hallucination?
5.  How can hallucinations be reduced?
6.  Why prefer structured output?
7.  What are guardrails?
8.  Why should prompts be versioned?
9.  Explain an AI request pipeline.
10. Give examples of AI-powered full-stack applications.

------------------------------------------------------------------------

# 12. Mini Project

Build an AI Resume Analyzer: - React upload form - Spring Boot backend -
Prompt template - AI evaluation - Structured JSON response - Display
strengths and improvement areas

------------------------------------------------------------------------

# 13. Revision Checklist

-   [ ] Prompt Engineering
-   [ ] Prompt Templates
-   [ ] AI Architecture
-   [ ] Guardrails
-   [ ] Hallucinations
-   [ ] Structured Output
-   [ ] Best Practices
-   [ ] Interview Questions

> Next Part: Retrieval-Augmented Generation (RAG) with Spring Boot
