import express from 'express';
import bodyParser from 'body-parser';
import router from './controller/index.js';

const server = express();
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));

server.use('/v1', router);

export function stopServer() {
  console.log('Ocurrio un error (db)');
  process.exit()
}

export default server;
