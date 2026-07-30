# Volume 3 --- Spring Framework & Spring Boot

# Part 11: File Upload & Email (Complete Guide)

> Learn how to upload files, send emails, and build production-ready
> features like profile image upload, password reset, and OTP
> verification.

------------------------------------------------------------------------

# 1. Why File Upload?

Common use cases: - Profile photos - Documents - PDFs - Product images -
Resume uploads

Spring Boot provides `MultipartFile` for handling uploaded files.

------------------------------------------------------------------------

# 2. MultipartFile

``` java
@PostMapping("/upload")
public ResponseEntity<String> upload(
        @RequestParam("file") MultipartFile file) {

    return ResponseEntity.ok(file.getOriginalFilename());
}
```

Useful methods: - `getOriginalFilename()` - `getContentType()` -
`getSize()` - `isEmpty()` - `transferTo()`

------------------------------------------------------------------------

# 3. Upload Validation

Always validate: - File size - File type - Empty uploads - Duplicate
names

Example:

``` java
if(file.isEmpty()){
    throw new IllegalArgumentException("File is empty");
}
```

------------------------------------------------------------------------

# 4. Local File Storage

``` text
uploads/
 ├── profile.png
 ├── resume.pdf
 └── invoice.pdf
```

Example:

``` java
file.transferTo(new File("uploads/" + file.getOriginalFilename()));
```

------------------------------------------------------------------------

# 5. Cloud Storage Overview

Popular options: - AWS S3 - Cloudinary - Google Cloud Storage

Benefits: - Scalability - Backup - CDN support

------------------------------------------------------------------------

# 6. File Download

``` java
@GetMapping("/download/{name}")
public ResponseEntity<Resource> download(...) {
    // Return file resource
}
```

Include proper `Content-Disposition` headers.

------------------------------------------------------------------------

# 7. Spring Mail

Dependency:

``` xml
spring-boot-starter-mail
```

Configuration:

``` properties
spring.mail.host=smtp.gmail.com
spring.mail.port=587
```

------------------------------------------------------------------------

# 8. Sending Simple Email

``` java
SimpleMailMessage mail = new SimpleMailMessage();
mail.setTo("user@example.com");
mail.setSubject("Welcome");
mail.setText("Thanks for registering!");
```

------------------------------------------------------------------------

# 9. HTML Email

Use `MimeMessageHelper` to send HTML emails with formatting.

Examples: - Welcome email - Invoice - Newsletter

------------------------------------------------------------------------

# 10. Email Attachments

Attach files like:

-   PDF
-   Invoice
-   Resume
-   Reports

------------------------------------------------------------------------

# 11. Password Reset Flow

``` text
User
 │
Forgot Password
 │
Generate Token
 │
Email Reset Link
 │
Verify Token
 │
Set New Password
```

Best practices: - Short expiry - One-time use - HTTPS links

------------------------------------------------------------------------

# 12. OTP Verification Flow

``` text
User
 │
Generate OTP
 │
Send Email
 │
Verify OTP
 │
Activate Account
```

OTP should: - Expire quickly - Be random - Be stored securely

------------------------------------------------------------------------

# 13. Security Best Practices

-   Scan uploaded files if required
-   Restrict file size
-   Validate MIME type
-   Never trust file extensions
-   Store secrets outside source code

------------------------------------------------------------------------

# 14. Common Mistakes

-   Allowing unlimited upload size
-   Hardcoding email passwords
-   Not validating files
-   Returning server file paths
-   Missing exception handling

------------------------------------------------------------------------

# 15. Interview Questions

1.  What is MultipartFile?
2.  How do you upload a file?
3.  How do you validate uploaded files?
4.  Local vs cloud storage?
5.  How does Spring Mail work?
6.  SimpleMailMessage vs MimeMessage?
7.  How do password reset emails work?
8.  Why use OTP?
9.  How do you secure uploads?
10. Common file upload vulnerabilities?

------------------------------------------------------------------------

# 16. Mini Project

Features: - Profile image upload - Resume upload - Welcome email -
Forgot password - OTP verification - Download uploaded documents

------------------------------------------------------------------------

# 17. Revision Checklist

-   [ ] MultipartFile
-   [ ] Upload validation
-   [ ] Local storage
-   [ ] Cloud storage overview
-   [ ] File download
-   [ ] Spring Mail
-   [ ] HTML email
-   [ ] Attachments
-   [ ] Password reset
-   [ ] OTP verification
-   [ ] Interview Questions

> Next Chapter: JUnit 5 & Mockito
