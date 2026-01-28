# 💻 CodeX: Multi-Language Code Execution Engine

CodeX is a full-stack web application designed to compile and execute code snippets across various programming languages in real-time. By leveraging Docker containerization, it provides a secure and isolated environment for remote code execution.

## 🚀 Features

- **Multi-Language Support**: Native execution for **C++**, **Java**, and **Python**.
- **Containerized Isolation**: Every code execution happens inside a dedicated Docker container to prevent system interference.
- **Full-Stack Architecture**: 
  - **Frontend**: Responsive UI built with **React** and **Vite**.
  - **Backend**: Scalable API built with **Node.js** and **Express**.
- **Real-time Feedback**: Instant compilation and execution results returned to the user.

## 📁 Project Structure

```text
CodeX/
├── frontend/          # React + Vite web interface
├── backend/           # Node.js API server
├── docker/            # Environment definitions
│   ├── cpp/           # C++ execution image
│   ├── java/          # Java execution image
│   └── python/        # Python execution image
└── LICENSE            # Project license
