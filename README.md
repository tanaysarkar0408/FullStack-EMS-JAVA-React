# Employee Management System

## Overview

The **Employee Management System** is a web application designed to manage employee records efficiently. It provides functionalities such as adding, updating, deleting, and viewing employee details. The project uses **Spring Boot** for the backend and **ReactJS** (with Vite and Bootstrap) for the frontend.

## Features

- Employee CRUD operations (Create, Read, Update, Delete)
- Responsive UI with Bootstrap
- RESTful API with Spring Boot
- Vite for fast frontend development
- Database integration with Spring Data JPA

## Tech Stack

### Frontend:

- ReactJS (Vite)
- Bootstrap
- Axios (for API calls)

### Backend:

- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL (or any preferred database)

## Installation & Setup

### Prerequisites:

- Node.js & npm
- Java 17+
- MySQL (or any supported database)

### Backend Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/tanaysarkar0408/Full-Stack-Employee-Management-System
   cd employee-management/ems-backend
   ```
2. Configure database settings in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```
3. Run the backend:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup:

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| GET    | /employees      | Get all employees       |
| GET    | /employees/{id} | Get employee by ID      |
| POST   | /employees      | Add a new employee      |
| PUT    | /employees/{id} | Update employee details |
| DELETE | /employees/{id} | Delete employee         |


## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.



## Contact

For any inquiries, contact [[tanay35sarkar44@gmail.com](mailto\:tanay35sarkar44@gmail.com)].

