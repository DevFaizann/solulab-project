# Online Store Management System
This project is a RESTful API that allows for creating, reading, updating, and deleting Product and Category data from a persistence database. The API is designed using typical RESTful API design patterns, with data saved in a MongoDB database. The API also provides proper unit tests and documentation.

## Functionality
The API provides the following functionality:
* `/create` - Creates a new product and category
* `/read/:productId` - Reads a particular record from the product table.
* `/readAll` - Reads all the records from the product table.
* `/update/:productId` - Updates one particular record of the product
* `/delete/:productId` - Deletes one particular record of the product.

## Dependencies
The project uses the following dependencies:

                {
                    "dependencies": {
                        "config": "^3.3.9",
                        "dotenv": "^16.0.3",
                        "express": "^4.18.2",
                        "mongodb": "^5.1.0",
                        "mongoose": "^7.0.0",
                        "winston": "^3.8.2"
                    },
                    "devDependencies": {
                        "jest": "^29.4.3",
                        "nodemon": "^2.0.20",
                        "supertest": "^6.3.3"
                    },
                    "scripts": {
                        "start": "nodemon src/app.js",
                        "test": "jest"
                    }
                }



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
