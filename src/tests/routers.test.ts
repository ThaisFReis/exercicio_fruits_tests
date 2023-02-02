import request from 'supertest';
import { app } from '../index';

describe('GET /fruits', () => {
  it('should return all fruits', async () => {
    const response = await request(app).get('/fruits');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe('GET /fruits/:id', () => {
  it('should return a specific fruit', async () => {
    const response = await request(app).get('/fruits/1');
    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe('object');
  });
  
  it('should return 404 if the fruit does not exist', async () => {
    const response = await request(app).get('/fruits/100');
    expect(response.statusCode).toBe(404);
  });
});

describe('GET /fruits/:id', () => {
    it('should return a specific fruit', async () => {
      const response = await request(app).get('/fruits/1');
      expect(response.statusCode).toBe(200);
      expect(typeof response.body).toBe('object');
    });
    
    it('should return 404 if the fruit does not exist', async () => {
      const response = await request(app).get('/fruits/100');
      expect(response.statusCode).toBe(404);
    });
  });
  

describe('POST /fruits', () => {
    it('should create a fruit', async () => {
      const response = await request(app)
        .post('/fruits')
        .send({ name: 'banana', price: 2.5 });
      expect(response.statusCode).toBe(201);
    });
    
    it('should return 422 if the fruit already exists', async () => {
      const response = await request(app)
        .post('/fruits')
        .send({ name: 'banana', price: 2.5 });
      expect(response.statusCode).toBe(409);
    });
    
    it('should return 422 if the request body is invalid', async () => {
      const response = await request(app)
        .post('/fruits')
        .send({ name: 'banana' });
        expect(response.statusCode).toBe(422);
    });
});