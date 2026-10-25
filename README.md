# CS 465 Full Stack Development — Travlr Getaways

## Project Overview

Travlr Getaways is a full stack travel application developed using the MEAN stack: MongoDB, Express, Angular, and Node.js. The project includes a customer-facing website for displaying travel packages and an administrator single-page application (SPA) for managing trip information.

Throughout this project, I developed experience with frontend and backend development, database integration, RESTful APIs, application security, and software testing.

## Architecture

### Frontend Development

Throughout the project, I used different approaches to frontend development, including HTML, JavaScript, Express, Handlebars templates, and Angular.

The customer-facing website uses Express and Handlebars to generate web pages. Express handles routing and server-side processing, while Handlebars allows HTML templates to display dynamic travel information. This approach works well for presenting information to customers.

The administrator interface uses Angular to create a single-page application. Unlike traditional web applications, which may reload entire pages when navigating or updating information, Angular dynamically updates the interface. This creates a more interactive experience for administrators managing travel packages.

JavaScript plays an important role in both approaches by supporting application logic and user interactions. Using these technologies together helped me understand the differences between server-rendered applications and client-side applications.

### Why MongoDB Was Used

The backend uses MongoDB because it is a NoSQL database that stores information in flexible, document-based structures.

Travel packages contain different types of information, including destinations, prices, dates, descriptions, and accommodations. MongoDB makes it possible to organize this information in documents without requiring a traditional relational database structure.

Mongoose provides schemas and models that help the Express application communicate with MongoDB. Using MongoDB with Node.js and Express also supports a consistent JavaScript-based development environment.

## Functionality

### JSON and JavaScript

JSON, or JavaScript Object Notation, is a lightweight format used to exchange structured information between applications. Although its syntax resembles JavaScript objects, JSON is a data format rather than a programming language.

JavaScript is used to write application logic, while JSON represents information that can be transferred between systems.

In Travlr Getaways, JSON connects the frontend and backend through RESTful API requests. When the Angular application requests trip information, the Express API retrieves records from MongoDB and returns the results as JSON. Angular then uses that information to display travel packages.

This process allows the frontend and backend to communicate without directly accessing each other's internal implementation.

### Code Refactoring and Reusable Components

Throughout the development process, I refactored the application to improve its organization, functionality, and maintainability.

One important improvement involved converting the original static HTML website into an Express application using the Model-View-Controller (MVC) architecture. Separating routes, controllers, models, and views made the code easier to understand and maintain.

Another improvement involved replacing repeated HTML content with Handlebars templates. This reduced duplication and allowed travel information to be generated dynamically.

I also developed reusable Angular components and services for the administrator application. Components organize the user interface, while services handle communication with the backend API.

Reusable UI components reduce repeated code, improve consistency, simplify troubleshooting, and make future changes easier to implement.

## Testing

### API Methods and Endpoints

Testing was an important part of developing the Travlr Getaways application.

RESTful APIs use HTTP methods to perform different operations. GET retrieves information, POST creates information, PUT updates existing information, and DELETE removes information.

An endpoint is a specific URL through which the frontend communicates with the backend. For example, the `/api/trips` endpoint provides access to trip information stored in MongoDB.

I used Postman to test API requests and verify that the backend returned the expected responses. Testing helped confirm that the API communicated correctly with MongoDB and that the administrator application could retrieve and update trip records.

### Security Testing

Adding authentication introduced another important layer of testing.

The administrator application uses a login form and JSON Web Tokens (JWT) to authenticate users. After a successful login, the application can include the authentication token when making requests to protected API endpoints.

I tested protected requests using Postman. Requests containing a valid authentication token were accepted, while requests without the required token returned an HTTP 401 Unauthorized response.

This testing demonstrated the importance of protecting administrative functions and validating access on the server rather than relying only on frontend restrictions.

## Reflection

Completing CS 465 Full Stack Development helped me strengthen my software engineering skills and understand how different technologies work together to create a functional application.

Before this project, I had experience developing programs and working with individual technologies, but building Travlr Getaways gave me a better understanding of how frontend applications, backend services, databases, and security features connect.

One of the most valuable lessons was learning to organize a project using MVC architecture. I also gained practical experience with Angular components, Express routing, MongoDB, Mongoose, RESTful APIs, JSON, and JWT authentication.

Troubleshooting problems throughout development improved my ability to investigate errors, test solutions, and understand how changes in one part of an application can affect other components.

My professional goal is to become a software engineer. This project has helped me develop practical skills that employers look for, including full stack development, API integration, database management, application security, version control, and debugging.

The completed Travlr Getaways application is an important addition to my GitHub portfolio because it demonstrates my ability to develop and integrate multiple technologies into one software project.

## Technologies Used

* MongoDB and Mongoose
* Express.js
* Angular
* Node.js
* JavaScript
* HTML and CSS
* Handlebars
* RESTful APIs
* JSON Web Tokens
* Postman
* Git and GitHub

## Repository

GitHub: Uricega/travlr

This repository contains the Travlr Getaways full stack application developed for CS 465 at Southern New Hampshire University.
