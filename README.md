# Online Store Management System
This project is a RESTful API that allows for creating, reading, updating, and deleting Product and Category data from a persistence database. The API is designed using typical RESTful API design patterns, with data saved in a MongoDB database. The API also provides proper unit tests and documentation.

## Functionality
The API provides the following functionality:
* `/create` - Creates a new product and category
* `/read/:productId` - Reads a particular record from the product table (if product has any category then category should be fetched in the response)
* `/readAll` - Reads all the records from the product table (if product has any category then category should be fetched in the response)
* `/update/:productId` - Updates one particular record of the product
* `/delete/:productId` - Deletes one particular record of the product.

## Dependencies
The project uses the following dependencies:

## Setup
To set up the project:
1. Clone the repository to your local machine
2. Install dependencies using `npm install`
3. Set up a MongoDB database and add the connection URI to the `.env` file
4. Start the server using `npm start`

## API Documentation
Full API documentation can be found at https://documenter.getpostman.com/view/26144158/2s93JnTmEJ

## Contributions
Contributions to the project are welcome. If you would like to contribute, please fork the repository and submit a pull request with your changes. Please ensure that you write clear commit messages and include appropriate documentation.
