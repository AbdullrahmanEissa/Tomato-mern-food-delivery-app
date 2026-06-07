# 🚚 Food Ordering Web App (MERN Stack)
<img width="1920" height="1080" alt="Screenshot from 2026-06-07 22-29-46" src="https://github.com/user-attachments/assets/108c62d0-c8e5-4860-b176-367d751ecbd6" />
<img width="1920" height="1080" alt="Screenshot from 2026-06-07 22-29-46" src="https://github.com/user-attachments/assets/43235dd8-20f1-42fb-b1f9-545e25d1108e" />

## ✨ Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Performance & Monitoring](#performance--monitoring)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Docker Setup](#docker-setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Contact](#contact)

## 📊 Introduction
This is a full-stack food ordering web application built using the MERN stack (MongoDB, Express, React, Node.js). The application consists of a customer-facing app for ordering food and an admin app for managing orders, menu items, and more. It is now fully containerized using Docker and features comprehensive infrastructure monitoring.

## 🚀 Features
- User authentication and authorization
- Browse food items
- Add items to the cart and place orders
- Stripe Payment Integration: Secure and reliable payment processing using Stripe.
- Order tracking
- Admin panel to manage menu items, orders

## 📈 Performance & Monitoring
The application architecture includes a robust monitoring stack using **Prometheus**, **Grafana**, and **cAdvisor** to track container health, resource utilization, and database performance.

Load testing with `wrk` demonstrates high backend resilience:
* **Throughput:** ~4,286 Requests/sec
* **Concurrency:** Successfully handled 12 threads and 400 continuous connections over a 30-second sustained load test.
* **Total Volume:** Processed 128,709 requests under heavy load.

## 🛠️ Technologies Used
- **Frontend:** React.js, React Context API, React Router
- **Backend:** Node.js, Express.js
- **Payment Gateway:** Stripe
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Containerization:** Docker & Docker Compose
- **Monitoring:** Prometheus, Grafana, cAdvisor, MongoDB Exporter
- **Load Testing:** wrk

## Installation
### Prerequisites
- Node.js (v20+ recommended)
- MongoDB
- Docker & Docker Compose (Required for containerized setup)

### Clone the Repository
```sh
git clone [https://github.com/DulanjaliSenarathna/mern-food-delivery-app.git](https://github.com/DulanjaliSenarathna/mern-food-delivery-app.git)
cd mern-food-delivery-app

```

---

## 🐳 Docker Setup (Recommended)

The easiest way to run the entire application, database, and monitoring stack is via Docker Compose.

1. Ensure your `.env` variables are configured in the `docker-compose.yml` (JWT_SECRET, STRIPE_SECRET_KEY).
2. Run the build command from the root directory:
```bash
docker compose up --build -d

```


3. The stack is now running.

---

## 🚀 Run Locally (Manual Setup)

### Backend Setup

Navigate to the backend directory:

```sh
cd backend

```

Install dependencies:

```sh
npm install

```

Create a `.env` file in the backend directory and add your required variables.
Start the backend server:

```sh
npm run server

```

### Frontend Setup

Navigate to the frontend directory:

```sh
cd frontend

```

Install dependencies:

```sh
npm install

```

Start the frontend server:

```sh
npm run dev

```

### Admin App Setup

Navigate to the admin directory:

```sh
cd admin

```

Install dependencies:

```sh
npm install

```

Start the admin app:

```sh
npm run dev

```

## Usage

**Application Ports (Docker Setup):**

* **Frontend App:** `http://localhost:80`
* **Admin App:** `http://localhost:8080`
* **Backend API:** `http://localhost:4000`

**Monitoring Ports:**

* **Grafana Dashboards:** `http://localhost:3000` (Login: admin / admin)
* **Prometheus Data:** `http://localhost:9090`

Register as a new user or log in with existing credentials. Browse the menu, add items to the cart, and place an order. Pay using a dummy visa card, and I'll be with you in every purchase when you get the real one from the bank. Use the admin panel to manage orders and menu items.

## 📸 Screenshots

*(Original UI screenshots omitted for brevity, but they should remain here as in your previous README)*

### 📊 Monitoring Dashboard


*Real-time resource tracking during a stress test, showing CPU, Memory, and Network spikes across the containerized stack.*

### ⚡ Load Testing Results


*Results of `wrk` load testing the backend API, achieving over 4,200 requests per second.*

## 📜 API Documentation

The API endpoints for the backend can be documented using tools like Postman or Swagger. Include endpoints for user authentication, menu items, orders, and more.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include relevant tests.

## 📫 Contact

For any questions or suggestions, feel free to contact me.

Happy coding!

```

```
