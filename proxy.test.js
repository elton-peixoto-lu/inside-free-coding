const request = require('supertest');
const express = require('express');
let app;

beforeAll(() => {
  app = require('./proxy');
});

describe('Proxy API', () => {
  it('responde FAQ simulada', async () => {
    const res = await request(app)
      .post('/api/ask')
      .send({ question: 'Qual o número para suporte?' });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer || res.body.message || res.body).toBeDefined();
  });

  it('responde erro para body inválido', async () => {
    const res = await request(app)
      .post('/api/ask')
      .send('notjson');
    expect(res.statusCode).toBe(400);
  });

  it('proxy para LLM (mock)', async () => {
    // Simula pergunta que não é FAQ
    const res = await request(app)
      .post('/api/ask')
      .send({ question: 'Explique o que é cloud.' });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer || res.body.message || res.body).toBeDefined();
  });
}); 
