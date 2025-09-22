const request = require('supertest');
const express = require('express');

// Import the app
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js App! CI/CD Pipeline is working! 🚀');
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Application is healthy and running!'
  });
});

describe('Node.js CI Lab App', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello from Node.js App! CI/CD Pipeline is working!');
  });

  test('GET /health should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.message).toBe('Application is healthy and running!');
    expect(response.body.timestamp).toBeDefined();
  });

  test('GET /nonexistent should return 404', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});