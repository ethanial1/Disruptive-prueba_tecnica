import mongoose from "mongoose";
import { userModel } from '../models/index.js';
import { hashData } from '../utils/data.js';
import { MONGO_URI } from './app.js';

async function createSU() {
  try {
    const db = await mongoose.connect(MONGO_URI, {dbName: 'disruptive'})
    const hashPassword = await hashData('admin');
    const newUser = new userModel({
      email: 'admin@gmail.com',
      username: 'admin',
      role: 'admin',
      password: hashPassword,
      permisos: ['c', 'r', 'u', 'd'],
    })
    await newUser.save();
    await db.disconnect();

    console.log('Usuario admin creado');
  } catch (error) {
    console.log('[ERROR]:', error);
  }
}

createSU();
