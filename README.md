# Node.js CI/CD Lab

This project demonstrates a complete CI/CD pipeline using GitHub Actions for a Node.js application with Docker containerization.

## 🚀 Project Overview

A simple Express.js application that showcases:
- Automated testing with Jest
- Code quality checks with ESLint
- Docker containerization
- Automated deployment via GitHub Actions
- GitHub Container Registry integration

## 📋 Prerequisites

- Node.js 18 or higher
- npm
- Docker Desktop (for local testing)
- Git
- GitHub account

## 🏗️ Project Structure

```
nodejs-ci-lab/
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions workflow
├── test/
│   └── app.test.js          # Unit tests
├── .eslintrc.json           # ESLint configuration
├── Dockerfile               # Docker configuration
├── index.js                 # Main application
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🔧 Local Development

### Install Dependencies
```bash
npm install
```

### Run the Application
```bash
npm start
```
The app will be available at http://localhost:3000

### Run Tests
```bash
npm test
```

### Run Linting
```bash
npm run lint
```

### Build Docker Image (Local)
```bash
docker build -t nodejs-ci-lab .
```

### Run Docker Container
```bash
docker run -p 3000:3000 nodejs-ci-lab
```

## 🎯 Available Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint with timestamp

## 🔄 CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) automatically runs on every push to the main branch:

### Pipeline Steps:

1. **Checkout Repository** - Retrieves the latest code
2. **Setup Node.js** - Installs Node.js 18 with npm caching
3. **Install Dependencies** - Runs `npm ci` for consistent builds
4. **Run Tests** - Executes Jest unit tests
5. **Code Quality Check** - Runs ESLint for code linting
6. **Docker Build & Push** - Builds and pushes container to GitHub Container Registry

### Pipeline Features:
- ✅ Automated testing on every commit
- ✅ Code quality enforcement
- ✅ Docker image creation
- ✅ Automatic deployment to container registry
- ✅ Proper permissions for GitHub Container Registry

## 🐳 Docker Configuration

The Dockerfile:
- Uses Node.js 18 Alpine (lightweight)
- Optimizes for production with `npm ci --only=production`
- Exposes port 3000
- Follows Docker best practices

## 📊 Testing Strategy

- **Unit Tests**: Jest with Supertest for API endpoint testing
- **Code Coverage**: Configured to collect coverage from source files
- **Test Environment**: Node.js environment for server-side testing

## 🔒 Security & Best Practices

- Uses `npm ci` for reproducible builds
- Alpine Linux base image for smaller attack surface
- ESLint for code quality and consistency
- Proper GitHub token permissions
- Container registry authentication

## 🚀 Deployment

Images are automatically built and pushed to GitHub Container Registry at:
```
ghcr.io/pateldharmik268/nodejs-ci-lab:latest
```

### Pull and Run the Published Image:
```bash
docker pull ghcr.io/pateldharmik268/nodejs-ci-lab:latest
docker run -p 3000:3000 ghcr.io/pateldharmik268/nodejs-ci-lab:latest
```

## 📈 Monitoring

The `/health` endpoint provides:
- Application status
- Current timestamp
- Health message

Perfect for container orchestration health checks.

## 🛠️ Local Development Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start the application |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code quality |

## 🔗 GitHub Actions Workflow Triggers

- **Push to main branch**: Triggers full CI/CD pipeline
- **Pull requests**: Can be configured to run CI checks
- **Manual dispatch**: Can be triggered manually from GitHub UI

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure tests pass locally
5. Push and create a pull request

The CI pipeline will automatically validate your changes!

## 🎉 What This Lab Demonstrates

- ✅ Continuous Integration with automated testing
- ✅ Continuous Deployment with Docker
- ✅ Infrastructure as Code with GitHub Actions
- ✅ Container Registry integration
- ✅ Code quality automation
- ✅ Proper DevOps practices

---

**Happy Learning! 🚀**