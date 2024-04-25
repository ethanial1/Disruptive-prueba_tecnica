import { testServer } from './testServer.js';
import routes from '../controller/index.js';

const request = testServer(routes);

describe('POST /auth/login', () => {
  test('Debe retornar un estatus 200', async () => {
    const expected = 200;
    const res = await request.post('/auth/login').send({
      email: "admin@gmail.com",
      password: "admin"
  });
    console.log(res);
    expect(res.statusCode).toEqual(expected);
  })
})
