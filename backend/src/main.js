import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import router from './controller/index.js';
import { validateUser } from './services/token.js';
import './utils/prototype.js';

const server = express();
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(passport.initialize());

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'accessToken'
  },
  validateUser,
));

server.use('/v1', router);

export function stopServer() {
  console.log('Ocurrio un error (db)');
  process.exit()
}

export default server;
