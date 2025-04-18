# Bike Servicing

# Bike Servicing Project

The **Bike Servicing** project is a Node.js application built with **TypeScript**, **Prisma**, and **Express** to manage bike servicing operations. It provides an API with features to create, get, update, and delete customers; manage bikes (create, retrieve, and update); and handle service records (create, retrieve, update, and mark services as complete). The system ensures efficient management of bike servicing, customer details, and service history, leveraging **Prisma ORM** for database operations and **Zod** for validation.


## Live Backend Link

You can access the live backend at:
[Live Backend Link](https://bike-servicing-iota.vercel.app/)

## Postman Collection

For easier testing and interaction with the API, you can import the Postman collection from the link below:
[Postman Collection Link](https://documenter.getpostman.com/view/28737062/2sB2cd4xxk)

## Tech Stack

- **Node.js** (Backend)
- **Express** (Web framework)
- **Prisma** (ORM for database interactions)
- **TypeScript** (Static typing for JavaScript)
- **Zod** (Schema validation)
- **Cors** (Handling Cross-Origin Requests)
- **HTTP Status** (HTTP Status Codes handling)

## Setup Guide

### Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Install [Prisma](https://www.prisma.io/docs/getting-started) to interact with your database.

### Steps to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/Moniruzzaman2525/Bike-Servicing.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Bike-Servicing
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the Prisma generate command (this will generate Prisma client based on your schema):
    ```bash
    npm run postinstall
    ```

5. Run the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:5000` to see the application running locally.

For production, you can run:
```bash
npm run prod
