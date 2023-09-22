import http from 'http';
import request from 'supertest'; // supertest for http testing
import { app } from '../src/index'; // Imported the index.ts

describe('Server Initialization', () => {
  let server: http.Server;

  beforeAll(() => {
    server = http.createServer(app);
    server.listen(5000);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('server active', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Server running on http://localhost:5000');
  });
});
