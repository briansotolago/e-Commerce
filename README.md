# e-Commerce Backend

## Description

This project is a backend application for an e-commerce platform. It provides RESTful API endpoints for managing products, categories, and tags. The application is built using Node.js, Express, and Sequelize ORM for interacting with a PostgreSQL database. This application should be running in Imsomnia.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Video](#video)
- [Repo](#repo)
- [License](#license)

## Features

- **Product Management**: Add, update, delete, and view products.
- **Category Management**: Organize products into categories and manage them.
- **Tag Management**: Assign tags to products for better searchability and manage them.
- **Database Integration**: Uses Sequelize ORM for database operations with PostgreSQL.
- **RESTful API**: Provides a set of RESTful API endpoints for seamless integration with frontend applications.
- **Environment Configuration**: Easily configurable environment settings for database connections.

## Technologies Used

- **Node.js**: Backend runtime for the application.
- **Express.js**: Web framework for building the API.
- **Sequelize**: ORM for interacting with the PostgreSQL database.
- **PostgreSQL**: Database for storing application data.
- **dotenv**: For managing environment variables.
- **Inquirer.js**: For interactive command-line prompts.
- **Insomnia**: Tool for testing RESTful APIs.

## Installation

1. Clone the repository:

   ```bash
   git clone git@work.github.com:coding-boot-camp/module-13-challenge-orm.git
   ```

2. Navigate to the project directory:

   ```bash
   cd challenges/e-Commerce
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables in a `.env` file:

   ```bash
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   ```

## Usage

1. Seed the database with initial data:

   ```bash
   npm run seed
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. The server will be running on `http://localhost:3001`.

4. Open Imsomnia and run the e-commerce application.

## API Endpoints

- **Categories**
  - `GET /api/categories`: Retrieve all categories with their associated products.
  - `GET /api/categories/:id`: Retrieve a single category by its ID.
  - `POST /api/categories`: Create a new category.
  - `PUT /api/categories/:id`: Update a category by its ID.
  - `DELETE /api/categories/:id`: Delete a category by its ID.

- **Products**
  - `GET /api/products`: Retrieve all products with their associated categories and tags.
  - `GET /api/products/:id`: Retrieve a single product by its ID.
  - `POST /api/products`: Create a new product.
  - `PUT /api/products/:id`: Update a product by its ID.
  - `DELETE /api/products/:id`: Delete a product by its ID.

- **Tags**
  - `GET /api/tags`: Retrieve all tags with their associated products.
  - `GET /api/tags/:id`: Retrieve a single tag by its ID.
  - `POST /api/tags`: Create a new tag.
  - `PUT /api/tags/:id`: Update a tag by its ID.
  - `DELETE /api/tags/:id`: Delete a tag by its ID.

## Video

This video demonstrates the functionality of e-Commerce application.

[![video](https://i.sstatic.net/Vp2cE.png)](https://drive.google.com/file/d/1FB9pvFQ1OFNMH-VTKByMcInqrkHlAnfP/view)

## Repo

[GitHub Repo](https://github.com/briansotolago/e-Commerce)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
