# boilerplate-microservice

A scalable and modular boilerplate for building microservices using **TypeScript** and **Node.js**. This project provides a solid foundation for creating high-quality, maintainable, and production-ready microservices.  

---

## Documentation and Architecture Details

For those who want a deeper understanding of the platform, including its architecture or CI/CD workflows, comprehensive documentation is available in the `/docs` folder. This documentation provides detailed insights and examples for implementation and scalability, inspired by the principles used in [Scalable E-Commerce](https://github.com/Scalable-E-Commerce/Scalable-E-Commerce).


## Project Structure (Recommendation)  

A well-organized folder structure is essential for maintainability and scalability. This boilerplate adopts a clean and modular architecture:  

```
src/  
├── Infra/        # Handles infrastructure concerns like database implementations and communication with external systems.  
├── Application/  # Contains the business logic and use cases of the microservice.  
├── Domain/       # Represents the core entities and business rules. This layer is independent of external services.
├── Main/         # Interface exposed to the external world (API)
├── Shared/       # Includes utility functions, shared classes, and helpers used across multiple layers.  
```  

---

## Installation  

### 1. Clone the Repository  

Download the boilerplate to your local machine:  

```bash  
git clone https://github.com/username/boilerplate-microservice.git  
cd boilerplate-microservice  
```  

### 2. Setup Husky  

This boilerplate comes with **Husky** pre-configured to enforce Git hooks, ensuring consistent code quality before commits:  

```bash  
npm run prepare  
```  

### 3. Install Dependencies  

Install the required Node.js packages:  

```bash  
npm install  
```  

### 4. Set Up the Database  

This boilerplate uses **Docker Compose** to manage databases and messaging queues. Spin up the necessary services with:  

```bash  
docker-compose up --build  
```  

The default `docker-compose.yml` includes configurations for:  

- **PostgreSQL**: A relational database for structured data.  
- **MongoDB**: A NoSQL database for flexible, unstructured data.  
- **RabbitMQ**: A message broker for asynchronous communication between services.  

Feel free to adjust the configurations as per your project needs.  

---

## Run the Service  

Start the microservice in development mode:  

```bash  
npm run start:dev  
```  

The service will run locally on `http://localhost:3000`.  

---

## Docker Commands  

### Stop and Remove Containers  

To stop all running containers and remove their instances:  

```bash  
docker-compose down  
```  

### Modify Services  

The `docker-compose.yml` file includes pre-configured services for PostgreSQL, MongoDB, and RabbitMQ. Uncomment or adjust configurations based on your requirements.  

---

## Additional Notes  

This boilerplate is **CI/CD-ready** for deployment on AWS EC2 instances.  

- The codebase is structured to integrate seamlessly with **GitHub Actions** for automated build, test, and deployment pipelines.  
- AWS configurations are designed to simplify scalable deployments and production readiness.  

You can remove this section if you are not using AWS or prefer a different CI/CD setup.  

---

## Required Libraries  

The following scripts and dependencies are essential for this project:  

### **Scripts**  

| Script              | Description                                   |  
|---------------------|-----------------------------------------------|  
| `start:dev`         | Starts the service in development mode.       |  
| `start:local-build` | Runs the built version locally.               |  
| `start:prod`        | Starts the service in production mode using PM2. |  
| `build`             | Compiles TypeScript and resolves path aliases. |  
| `test`              | Runs the tests.                              |  
| `lint`              | Checks the code style using ESLint.          |  
| `prepare`           | Configures Husky for pre-commit hooks.       |  

### **Dependencies**  

- **Development Dependencies**:  
  - TypeScript: `"typescript": "5.7.2"`  
  - ESLint: `"eslint": "^8.57.1"`  
  - Jest: `"jest": "^29.7.0"`  
  - Commitizen and Commitlint for conventional commits.  

- **Production Dependencies**:  
  - Environment management: `"dotenv": "^16.4.7"`  
  - JWT for authentication: `"jsonwebtoken": "^9.0.2"`  
  - Metadata reflection: `"reflect-metadata": "^0.1.13"`  
  - AWS Secrets Manager: `"@aws-sdk/client-secrets-manager": "^3.716.0"`  

For a complete list of dependencies and scripts, refer to the `package.json` file.  

---

## License  

This project is licensed under the [MIT License](LICENSE).  
