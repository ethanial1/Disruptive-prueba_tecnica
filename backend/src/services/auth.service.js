import jwt from 'jsonwebtoken';
import { userModel, userTokenModel } from '../models/index.js'
import { compareHash, hashData } from '../utils/data.js';

const permisosMap = {
  lector: ['r'],
  creador: ['c', 'r', 'u'],
  admin: ['c', 'r', 'u', 'd'],
}

export async function registerUser(data) {
  try {
    const { username, email, password, type } = data;
    const result = await userModel.find({
      $or: [{username}, {email}]
    })
    if (result.length) {
      return { success: false, message: 'El usuario / correo ya está registrado.' }
    }

    const hashPassword = await hashData(password);
    const newUser = new userModel({
      email,
      username,
      role: type,
      password: hashPassword,
      permisos: permisosMap[type],
    })

    await newUser.save();

    return { success: true };
  } catch (error) {
    return {success: false, message: error.toString()};
  }
}

export async function login(data) {
  try {
    const { email, password } = data;
    const userFounded = await userModel.findOne({ email });
    if (!userFounded) return {success: false, message: 'correo/contraseña incorrectos'};

    const isPassValid = await compareHash(password, userFounded.password);
    if (!isPassValid) {
      return { success: false, message: 'correo/contraseña incorrectos'};
    }

    const dataTokens = await createTokens(userFounded);
    if (!dataTokens) return { success: false, message: 'Ocurrio un error' };

    return { success: true, payload: dataTokens }
  } catch (error) {
    return {success: false}
  }
}

async function createTokens(user) {
  try {
    const payload = { id: user._id, roles: user.roles };
    const accessToken = jwt.sign(
      payload,
      'accessToken',
      { expiresIn: "14m" }
    );

    const refreshToken = jwt.sign(
      payload,
      'refreshToken',
      { expiresIn: "1d" }
    );

    await userTokenModel.findOneAndDelete({ userId: user._id});

    await new userTokenModel({ userId: user._id, refreshToken }).save();
    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    return null;
  }
}
