# User API with TypeScript

A basic REST API with GET and POST endpoints for user management, built with Node.js, Express, and TypeScript.

## Features

- GET `/users` - Fetch all users
- POST `/users` - Create a new user
- Request validation
- JSON data storage
- TypeScript support

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/khalidCD/TS-Task
   cd Typescript_task
   ```
2. Install dependencies:
   ```
   yarn install
   ```
## Usage
   Development mode:
   ```
   yarn dev
   ```

## API Endpoints:
#### GET ```/users```
Response:
```
[
  {
    "id": 1,
    "name": "khalid",
    "email": "khalid@example.com"
  }
]
```
#### POST  ```/users```
Request Body:
```
{
  "name": "krish",
  "email": "krish@example.com"
}
```
#### Successful Response (201):
```
{
  "id": 2,
  "name": "krish",
  "email": "krish@example.com"
}
```
#### Validation Errors (400):
-    Missing name or email

-   Empty name or email

-   Invalid data types