# Volume 6 --- AI Integration for Java Developers

# Part 5: AI Chatbot with React + Spring Boot + Gemini

> Goal: Build a production-ready AI chatbot using React, Spring Boot,
> and the official Gemini Java SDK.

------------------------------------------------------------------------

# 1. System Architecture

``` text
User
 │
React Chat UI
 │
Axios
 │
Spring Boot REST API
 │
AI Service
 │
Gemini API
 │
Response
```

------------------------------------------------------------------------

# 2. Project Structure

``` text
frontend/
  components/
  pages/
  services/

backend/
  controller/
  service/
  dto/
  config/
```

------------------------------------------------------------------------

# 3. Backend Flow

1.  Receive prompt from React.
2.  Validate input.
3.  Call Gemini service.
4.  Return JSON response.
5.  Handle exceptions.

------------------------------------------------------------------------

# 4. Frontend Flow

-   Chat input
-   Send button
-   Loading indicator
-   Display conversation
-   Auto-scroll to latest message

------------------------------------------------------------------------

# 5. REST API

``` http
POST /api/chat
Content-Type: application/json

{
  "prompt": "Explain Spring Boot."
}
```

Response:

``` json
{
  "response": "Spring Boot is..."
}
```

------------------------------------------------------------------------

# 6. Essential Features

-   Chat history
-   Markdown rendering
-   Copy response
-   Retry on failure
-   Typing indicator
-   Dark mode
-   Mobile responsive UI

------------------------------------------------------------------------

# 7. Error Handling

Handle: - Invalid API key - Rate limiting - Network failure - Empty
prompt - Timeout

Return meaningful HTTP status codes.

------------------------------------------------------------------------

# 8. Security

-   Store API keys in environment variables
-   Never expose secrets to React
-   Validate request size
-   Add rate limiting
-   Log errors, not secrets

------------------------------------------------------------------------

# 9. Production Improvements

-   Streaming responses
-   Conversation memory
-   Token usage tracking
-   Caching repeated prompts
-   Authentication (JWT)
-   Monitoring with Actuator

------------------------------------------------------------------------

# 10. Best Practices

-   Keep AI logic inside a dedicated service
-   Use DTOs instead of entities
-   Separate prompt templates
-   Write unit tests for the service layer
-   Gracefully degrade when AI is unavailable

------------------------------------------------------------------------

# 11. Interview Questions

1.  Why should AI calls be made from the backend?
2.  How do you secure API keys?
3.  What is prompt engineering?
4.  How do you implement chat history?
5.  How do you handle API failures?
6.  What is streaming?
7.  How would you reduce AI costs?
8.  Why use DTOs?

------------------------------------------------------------------------

# 12. Mini Project

Build an AI Study Assistant with: - React frontend - Spring Boot
backend - Gemini integration - JWT login - Chat history - Markdown
answers

------------------------------------------------------------------------

# 13. Revision Checklist

-   [ ] React chat UI
-   [ ] REST endpoint
-   [ ] Gemini integration
-   [ ] Error handling
-   [ ] Security
-   [ ] Production practices
-   [ ] Interview preparation

> Next Part: AI Agents & Function Calling
