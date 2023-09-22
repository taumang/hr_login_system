import http from 'http';
import request from 'supertest'; // Install supertest for HTTP testing
import { app } from '../src/index'; // Import your Express app

describe('Server Initialization', () => {
  let server: http.Server;

  beforeAll(() => {
    server = http.createServer(app);
    server.listen(5000);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should respond with "Server running" message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Server running on http://localhost:5000');
  });
});
