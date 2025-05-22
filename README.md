# JWT-Authentication-FullStack-Project

This project implements a robust and secure full-stack authentication system, featuring an Angular frontend and a Spring Boot backend. It leverages JSON Web Tokens (JWT) for secure API communication and incorporates various security best practices, including role-based access control, This project provides a comprehensive set of features for a secure user authentication and authorization system.

## Usage

- Signup: Register a new user account. You will receive notification.
- Login: Log in with your registered credentials.
- Explore Features:Access different sections of the application, observing how role-based access control limits functionality.
- Perform CRUD operations (if available in the UI) to interact with the backend data.

## Security Measures
- This project emphasizes security through:
- JWT-based Authentication: Secure, stateless authentication.
- Password Hashing: Passwords are never stored in plain text.
- Role-Based Access Control (RBAC): Fine-grained authorization.
- CORS and CSRF Protection: Mitigates common web vulnerabilities.
- Method-Level Security: Ensures only authorized users can invoke specific backend methods.

## Backend (Spring Boot)
- The Spring Boot backend is the core of the authentication system, handling user management, security, and data operations.
- Authentication Filters: Custom filters to intercept and process incoming requests for authentication.
- JWT Authentication Managers: Manages the authentication process using JWTs, including token generation and validation.
- Password Encoders: Securely hashes and verifies user passwords using industry-standard algorithms.
- Authentication: Handles user login and verification against stored credentials.
- Authorization: Determines user permissions and access rights to different resources.
- Access Limited According to User Role: Implements role-based access control (RBAC) to restrict access to specific functionalities based on the user's assigned role (e.g., ADMIN, USER).
- API Security (CORS, CSRF)
- Method Level Security: Granular control over API access by securing individual methods based on user roles or permissions.
- JWT Utility (JwtUtil): A utility class for common JWT operations like token creation, validation, and extraction of claims.
- JWT Entry Point (JwtEntryPoint): Handles unauthorized access attempts and sends appropriate responses.

## Frontend (Angular)
- The Angular frontend provides a user-friendly interface for interacting with the secure backend.
- Auth Guard: Protects routes and components, ensuring only authenticated and authorized users can access specific parts of the application.
- Auth Interceptors: Intercepts HTTP requests and responses to add JWT tokens to outgoing requests and handle token refresh or error responses.
- Angular Services: Centralized logic for interacting with the backend API, managing application state, and business logic.
- HTTP Client: Utilizes Angular's HttpClient module for making secure HTTP requests to the Spring Boot backend.

## Technologies Used
### Frontend
- Angular
- TypeScript
- HTML
- CSS 
- Bootstrap

### Backend
- Spring Boot
- Java 
- Spring Security
- JWT (JSON Web Tokens)
- Maven
- MySQL

### Development Tools
- IntelliJ IDEA


