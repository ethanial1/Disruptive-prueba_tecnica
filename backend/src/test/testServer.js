import express from 'express';
import supertest from 'supertest';

export function testServer(route) {
	const app = express();
  app.use(express.json())

  app.use(route);
	return supertest(app);
}
