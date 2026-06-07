### 🐳 Dockerizing the Architecture

<img width="1920" height="1080" alt="Screenshot from 2026-06-07 22-29-46" src="https://github.com/user-attachments/assets/e2749bac-b786-458e-afaf-d78f56d921d4" />

Previously, running this application required manually starting MongoDB, the Express backend, the React frontend, and the Admin panel in separate terminal windows.

By introducing **Docker and Docker Compose**, we wrapped the entire application into an isolated, reproducible environment.

* **Service Isolation:** The Frontend, Backend, Admin panel, and MongoDB database are now containerized as individual microservices.
* **Internal Networking:** We placed all containers on a custom Docker bridge network (`mern_network`). This allows the backend to talk securely to the database using just the container name (`mongodb:27017`), bypassing the host machine entirely.
* **Seamless Bootstrapping:** A single command (`docker compose up --build -d`) now spins up the entire ecosystem, instantly mapping the correct ports (80, 8080, and 4000) to your host machine.

---

### 📈 Managing the Stack with Prometheus & Friends

Once the app was in Docker, we needed a way to see what was happening inside those containers. We built a non-intrusive monitoring stack alongside the application:

* **Prometheus:** Acts as the brain of the operation, reaching out every 15 seconds to scrape raw time-series data (numbers and statistics) from your system.
* **cAdvisor:** The "agent" that automatically attaches to Docker and watches the hardware usage (CPU, RAM, Network I/O) of every container.
* **MongoDB Exporter:** A specialized agent that translates MongoDB's internal health metrics into a language Prometheus understands.
* **Grafana:** The visual layer. It connects to Prometheus and turns raw numbers into readable, real-time charts.

---

### 🎯 The Problem We Solved: "Flying Blind"

Before this setup, if your backend suddenly crashed under heavy user load, or if a database query caused a memory leak, you would be guessing as to what went wrong.

By integrating Prometheus and Grafana, we solved the problem of **Infrastructure Visibility**. You now have a complete, real-time X-ray of your servers. If the application slows down, you don't have to guess if it is a CPU bottleneck, a memory limit, or a database connection issue—you can simply look at the dashboard and see exactly which container is struggling.

---

### ⚡ Simulating the Spike with `wrk`


<img width="725" height="212" alt="Screenshot from 2026-06-07 22-29-59" src="https://github.com/user-attachments/assets/9a9489b9-48df-4231-b287-b7f72ebc19e8" />


To prove the resilience of the Docker setup and verify that the monitoring tools actually work, we hit the backend with a synthetic traffic spike.

Using the HTTP load testing tool `wrk`, we ran the following scenario:

* **The Test:** `wrk -t12 -c400 -d30s http://localhost:4000/`
* **What it did:** It launched 12 execution threads and held open 400 continuous concurrent connections, relentlessly bombarding the backend API for 30 seconds straight.
* **The Result:** The Node.js backend handled the stress test beautifully, processing **128,709 requests** (averaging ~4,286 requests per second).

More importantly, while this test was running, we were able to watch the Grafana dashboard in real-time. We saw the `food_app_backend` container's CPU and Network lines shoot up on the graphs precisely when the test started, and drop back to zero the second the test finished. This confirmed that your observability stack is highly responsive and ready for production-level traffic.
