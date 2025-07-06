# 🖥️ Log Ingestion & Querying System – Backend

This is the backend service for the **Log Viewer Dashboard**, developed with **Node.js**, **Express**, and **TypeScript**. The backend provides log ingestion and querying functionality using a **single JSON file** as the data source (no external database). All filtering, sorting, and querying are performed **in-memory**.

---

## 📌 Project Summary

- Accepts new logs via `POST /api/logs`
- Allows powerful filtering of logs via `GET /api/logs`
- Stores all logs in a single JSON file (`logs.json`)
- Written in **TypeScript** with clean folder structure
- No use of external databases (MongoDB, PostgreSQL, etc.)

This mimics core functionality found in professional observability tools like:

- **Grafana Loki**
- **Datadog Log Management**
- **Splunk**

---

## 📦 Tech Stack

| Tool          | Purpose                         |
| ------------- | ------------------------------- |
| Node.js       | Backend runtime                 |
| Express.js    | Web server & routing            |
| TypeScript    | Type safety & better DX         |
| fs (built-in) | JSON file handling (no DB used) |
| nodemon       | Live reload during development  |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

---

### 2. Environment Variables

```bash
PORT=3001 | 8080
```

---

### 3. Run the app in development

```bash
npm run dev
```

---

### 3. Then open the app in your browser

```bash
http://localhost:5173
```

# 💡 Inspired By

This backend simulates log ingestion systems of major observability tools:

- [Grafana Loki](https://grafana.com/oss/loki/)
- [Datadog Logs](https://www.datadoghq.com/product/log-management/)
- [Splunk Log Observer](https://www.splunk.com/en_us/software/observability.html)

These tools inspired:

- The RESTful endpoint structure
- Filtering behavior for querying logs
- A clean, JSON-based data schema
- Developer-centric log search experience
