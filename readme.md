# Property Listings API

This project is a Node application that utilizes the Express.js framework, and is designed to create and maintain property listings. It features functionality to create a new listing, update specific aspects of a listing, and obtain listing information. This is a back-end application with an accompanying Postman collection to utilizie all available functionality of the app.

## Structure

The project is built with the MVC framework, and consists of the following components:
* *server.js:* Defines and configures the HTTP server
* *app.js:* Configures the Expressd application, including applicable middleware and defining routes
* *listings.js* A file containing dummy data, exported for the Model to use
* *propeties.model.js:* Defines functions for managing and maintaining listing data
* *properties.controller.js:* Handles HTTP requests, request validation, and interacts with the Model
* *properties.router.js:* Defines API routes for related operations

## API Endpoints
Requests can be sent to all available endpoints with the accompanying Postman collect. Please ensure to set appropriate headers:
* 'User-Type' header can be either 'customer' or 'employee'
* 'Account-Id' header is used to set a specific account ID to a customer entity in related listing data.

All available endpoints are as follows:
* `GET /properties/:id` Retrieves data for a specific listing. Available only to employees or the verified account owner of the listings being requested.
* `GET /properties` Retrieves ALL listings. Available only to employees.
* `POST /properties` Adds a new listing to the existing collection. Available only to customers
* `PUT /properties/:id/amenities` Adds/removes amenities to an existing listing. Available only to the verified account owner of the listing.
* `PUT /properties/:id/rooms` Add/remove rooms to an existing listing. Available only to the verified account owner of the listing.
* `PUT /properties/:id/description` Updates the customer's written description of the listing. Available only to the verified account owner of the listing.